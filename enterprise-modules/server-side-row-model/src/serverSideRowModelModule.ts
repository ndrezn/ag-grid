import type { ServerSideRowModelGridApi } from '@ag-grid-community/core';
import {
    ModuleNames,
    RowModelHelperService,
    _CsrmSsrmSharedApiModule,
    _RowNodeBlockModule,
    _SsrmInfiniteSharedApiModule,
    _defineModule,
} from '@ag-grid-community/core';
import { EnterpriseCoreModule } from '@ag-grid-enterprise/core';

import { BlockUtils } from './serverSideRowModel/blocks/blockUtils';
import { ExpandListener } from './serverSideRowModel/listeners/expandListener';
import { FilterListener } from './serverSideRowModel/listeners/filterListener';
import { ListenerUtils } from './serverSideRowModel/listeners/listenerUtils';
import { SortListener } from './serverSideRowModel/listeners/sortListener';
import { NodeManager } from './serverSideRowModel/nodeManager';
import { ServerSideRowModel } from './serverSideRowModel/serverSideRowModel';
import {
    applyServerSideRowData,
    applyServerSideTransaction,
    applyServerSideTransactionAsync,
    flushServerSideAsyncTransactions,
    getServerSideGroupLevelState,
    getServerSideSelectionState,
    refreshServerSide,
    retryServerSideLoads,
    setServerSideSelectionState,
} from './serverSideRowModel/serverSideRowModelApi';
import { ServerSideExpansionService } from './serverSideRowModel/services/serverSideExpansionService';
import { ServerSideSelectionService } from './serverSideRowModel/services/serverSideSelectionService';
import { LazyBlockLoadingService } from './serverSideRowModel/stores/lazy/lazyBlockLoadingService';
import { StoreFactory } from './serverSideRowModel/stores/storeFactory';
import { StoreUtils } from './serverSideRowModel/stores/storeUtils';
import { TransactionManager } from './serverSideRowModel/transactionManager';
import { VERSION } from './version';

export const ServerSideRowModelCoreModule = _defineModule({
    version: VERSION,
    moduleName: `${ModuleNames.ServerSideRowModelModule}-core`,
    rowModel: 'serverSide',
    beans: [
        ServerSideRowModel,
        ExpandListener,
        SortListener,
        StoreUtils,
        BlockUtils,
        NodeManager,
        TransactionManager,
        FilterListener,
        StoreFactory,
        ListenerUtils,
        ServerSideSelectionService,
        ServerSideExpansionService,
        LazyBlockLoadingService,
    ],
    dependantModules: [EnterpriseCoreModule, _RowNodeBlockModule],
});

export const ServerSideRowModelApiModule = _defineModule<ServerSideRowModelGridApi>({
    version: VERSION,
    moduleName: `${ModuleNames.ServerSideRowModelModule}-api`,
    beans: [RowModelHelperService],
    apiFunctions: {
        getServerSideSelectionState,
        setServerSideSelectionState,
        applyServerSideTransaction,
        applyServerSideTransactionAsync,
        applyServerSideRowData,
        retryServerSideLoads,
        flushServerSideAsyncTransactions,
        refreshServerSide,
        getServerSideGroupLevelState,
    },
    dependantModules: [ServerSideRowModelCoreModule, _CsrmSsrmSharedApiModule, _SsrmInfiniteSharedApiModule],
});

export const ServerSideRowModelModule = _defineModule({
    version: VERSION,
    moduleName: ModuleNames.ServerSideRowModelModule,
    dependantModules: [ServerSideRowModelCoreModule, ServerSideRowModelApiModule],
});
