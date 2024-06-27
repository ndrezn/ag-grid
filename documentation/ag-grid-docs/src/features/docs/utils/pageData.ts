import type { ImportType, InternalFramework } from '@ag-grid-types';
import { FRAMEWORKS, IMPORT_TYPES, QUICK_BUILD_PAGES, SHOW_DEBUG_LOGS } from '@constants';
import { type DocsPage, getContentRootFileUrl } from '@utils/pages';
import { pathJoin } from '@utils/pathJoin';

import { getIsDev } from '../../../utils/env';
import { getGeneratedContentsFileList } from '../../example-generator';
import { getInternalFrameworkExamples, getPagesList } from './filesData';

interface Example {
    internalFramework: InternalFramework;
    pageName: string;
    exampleName: string;
    importType: ImportType;
}

const isQuickBuild = QUICK_BUILD_PAGES && !getIsDev();

export function getDocsPages(pages: DocsPage[]) {
    const frameworkPages = FRAMEWORKS.flatMap((framework) => {
        return getPagesList(pages).map((page) => {
            return {
                framework,
                pageName: page.slug,
                page,
            };
        });
    });

    const filteredPages = isQuickBuild
        ? frameworkPages.filter(({ pageName }) => {
              return QUICK_BUILD_PAGES.includes(pageName);
          })
        : frameworkPages;

    return filteredPages
        .map(({ framework, pageName, page }) => {
            const { frameworks } = page.data;
            if (frameworks && !frameworks.includes(framework)) {
                return;
            }

            return {
                params: {
                    framework,
                    pageName,
                },
                props: {
                    page,
                },
            };
        })
        .filter(Boolean);
}

export function getDocsFrameworkPages() {
    return FRAMEWORKS.map((framework) => {
        return {
            params: {
                framework,
            },
        };
    });
}

async function getDocsExampleNameParts({ pages }: { pages: DocsPage[] }): Promise<Example[]> {
    const internalFrameworkExamples = await getInternalFrameworkExamples({ pages });
    const filteredInternalFrameworkExamples = isQuickBuild
        ? internalFrameworkExamples.filter(({ pageName }) => {
              return QUICK_BUILD_PAGES.includes(pageName);
          })
        : internalFrameworkExamples;

    return (
        filteredInternalFrameworkExamples
            .flatMap((example) => {
                const frameworkSupported =
                    example.supportedFrameworks === undefined ||
                    example.supportedFrameworks.has(example.internalFramework);

                return IMPORT_TYPES.map((importType) => {
                    const isVanillaModules = importType === 'modules' && example.internalFramework === 'vanilla';
                    const isSupported = frameworkSupported && !isVanillaModules;
                    if (!isSupported) {
                        return undefined;
                    }
                    return {
                        ...example,
                        importType,
                    };
                }) as Example[];
            })
            .filter((e) => e !== undefined)
            // JavaScript modules are not a valid combination, so filter it out
            .filter(({ importType, internalFramework }: Example) => {
                return !(importType === 'modules' && internalFramework === 'vanilla');
            })
    );
}

export async function getDocsExamplePages({ pages }: { pages: DocsPage[] }) {
    const examples = await getDocsExampleNameParts({ pages });

    return examples.map(({ internalFramework, pageName, exampleName, importType }) => {
        return {
            params: {
                internalFramework,
                pageName,
                exampleName,
                importType,
            },
        };
    });
}

export async function getDocExampleFiles({ pages }: { pages: DocsPage[] }) {
    const examples = await getDocsExampleNameParts({ pages });
    const exampleFilesPromises = examples.flatMap(async ({ internalFramework, pageName, exampleName, importType }) => {
        try {
            const filesList = await getGeneratedContentsFileList({
                type: 'docs',
                framework: internalFramework,
                pageName,
                exampleName,
                importType,
            });
            return filesList.map((fileName) => {
                return {
                    internalFramework,
                    pageName,
                    exampleName,
                    importType,
                    fileName,
                };
            });
        } catch (error) {
            if (SHOW_DEBUG_LOGS) {
                console.error('File not generated - ', (error as Error).message);
            }
            return [];
        }
    });

    const exampleFiles = (await Promise.all(exampleFilesPromises)).flat(2);

    return exampleFiles.map(({ internalFramework, pageName, exampleName, importType, fileName }) => {
        return {
            params: {
                internalFramework,
                pageName,
                exampleName,
                importType,
                fileName,
            },
        };
    });
}

export const getGifStillImageFiles = ({ allDocsGifs }: { allDocsGifs: string[] }) => {
    const contentRoot = getContentRootFileUrl();
    const docsPath = 'docs';

    return allDocsGifs.map((docsImagePath) => {
        const pathParts = docsImagePath.split('/');
        const pageName = pathParts[0];
        const imagePath = pathParts.slice(1).join('/');
        const imagePathExclExt = imagePath.replace('.gif', '');
        const stillImagePath = imagePath.replace('.gif', '-still.png');
        const fullFilePath = pathJoin(contentRoot.pathname, docsPath, pageName, imagePath);

        return {
            params: {
                pageName,
                imagePathExclExt,
            },
            props: {
                stillImagePath,
                fullFilePath,
            },
        };
    });
};
