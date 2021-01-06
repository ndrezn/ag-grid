// Type definitions for @ag-grid-community/core v25.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare const _: {
    utf8_encode(s: string): string;
    camelCaseToHyphen(str: string): string;
    hyphenToCamelCase(str: string): string;
    capitalise(str: string): string;
    escapeString(toEscape: string): string;
    camelCaseToHumanText(camelCase: string): string;
    startsWith(str: string, matchStart: string): boolean;
    convertToSet<T>(list: T[]): Set<T>;
    sortRowNodesByOrder(rowNodes: import("../main").RowNode[], rowNodeOrder: {
        [id: string]: number;
    }): void;
    traverseNodesWithKey(nodes: import("../main").RowNode[], callback: (node: import("../main").RowNode, key: string) => void): void;
    iterateObject<T_1>(object: {
        [p: string]: T_1;
    } | T_1[], callback: (key: string, value: T_1) => void): void;
    cloneObject<T_2>(object: T_2): T_2;
    deepCloneObject<T_3>(object: T_3): T_3;
    deepCloneDefinition<T_4>(object: T_4, keysToSkip?: string[]): T_4;
    getProperty<T_5, K extends keyof T_5>(object: T_5, key: K): any;
    setProperty<T_6, K_1 extends keyof T_6>(object: T_6, key: K_1, value: any): void;
    copyPropertiesIfPresent<S, T_7 extends S, K_2 extends keyof S>(source: S, target: T_7, ...properties: K_2[]): void;
    copyPropertyIfPresent<S_1, T_8 extends S_1, K_3 extends keyof S_1>(source: S_1, target: T_8, property: K_3, transform?: (value: S_1[K_3]) => any): void;
    getAllKeysInObjects(objects: any[]): string[];
    getAllValuesInObject<T_9 extends Object>(obj: T_9): any[];
    mergeDeep(dest: any, source: any, copyUndefined?: boolean, makeCopyOfSimpleObjects?: boolean): void;
    assign<T_10, U>(target: T_10, source: U): T_10 & U;
    assign<T_11, U_1, V>(target: T_11, source1: U_1, source2: V): T_11 & U_1 & V;
    assign<T_12, U_2, V_1, W>(target: T_12, source1: U_2, source2: V_1, source3: W): T_12 & U_2 & V_1 & W;
    missingOrEmptyObject(value: any): boolean;
    get(source: any, expression: string, defaultValue: any): any;
    set(target: any, expression: string, value: any): void;
    deepFreeze(object: any): any;
    getValueUsingField(data: any, field: string, fieldContainsDots: boolean): any;
    removeAllReferences(obj: any, objectName: string): void;
    isNonNullObject(value: any): boolean;
    padStart(value: number, totalStringSize: number): string;
    createArrayOfNumbers(first: number, last: number): number[];
    isNumeric(value: any): boolean;
    getMaxSafeInteger(): number;
    cleanNumber(value: any): number;
    decToHex(number: number, bytes: number): string;
    formatNumberTwoDecimalPlacesAndCommas(value: number): string;
    formatNumberCommas(value: number): string;
    sum(values: number[]): number;
    normalizeWheel(event: any): any;
    isLeftClick(mouseEvent: MouseEvent): boolean;
    areEventsNear(e1: Touch | MouseEvent, e2: Touch | MouseEvent, pixelCount: number): boolean;
    keys<T_13>(map: Map<T_13, any>): T_13[];
    isKeyPressed(event: KeyboardEvent, keyToCheck: number): boolean;
    isEventFromPrintableCharacter(event: KeyboardEvent): boolean;
    isUserSuppressingKeyboardEvent(gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, keyboardEvent: KeyboardEvent, rowNode: import("../main").RowNode, column: import("../main").Column, editing: boolean): boolean;
    isUserSuppressingHeaderKeyboardEvent(gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, keyboardEvent: KeyboardEvent, headerRowIndex: number, column: import("../main").Column | import("../main").ColumnGroup): boolean;
    createIcon(iconName: string, gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, column: import("../main").Column): HTMLElement;
    createIconNoSpan(iconName: string, gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, column?: import("../main").Column, forceCreate?: boolean): HTMLElement;
    iconNameClassMap: {
        [key: string]: string;
    };
    makeNull<T_14 extends unknown>(value?: T_14): T_14;
    exists(value: string, allowEmptyString?: boolean): value is string;
    exists<T_15>(value: T_15): value is NonNullable<T_15>;
    missing<T_16>(value: T_16): value is Exclude<null, T_16>;
    missingOrEmpty<T_17>(value?: string | T_17[]): boolean;
    toStringOrNull(value: any): string;
    attrToNumber(value?: string | number): number;
    attrToBoolean(value?: string | boolean): boolean;
    attrToString(value?: string): string;
    referenceCompare<T_18>(left: T_18, right: T_18): boolean;
    jsonEquals<T1, T2>(val1: T1, val2: T2): boolean;
    defaultComparator(valueA: any, valueB: any, accentedCompare?: boolean): number;
    find<T_19>(collection: {
        [id: string]: T_19;
    } | T_19[], predicate: string | boolean | ((item: T_19) => boolean), value?: any): T_19;
    values<T_20>(object: {
        [key: string]: T_20;
    } | Set<T_20> | Map<any, T_20>): T_20[];
    fuzzyCheckStrings(inputValues: string[], validValues: string[], allSuggestions: string[]): {
        [p: string]: string[];
    };
    fuzzySuggestions(inputValue: string, allSuggestions: string[], hideIrrelevant?: boolean, weighted?: true): string[];
    get_bigrams(from: string): any[];
    string_distances(str1: string, str2: string): number;
    string_weighted_distances(str1: string, str2: string): number;
    doOnce(func: () => void, key: string): void;
    getFunctionName(funcConstructor: any): any;
    getFunctionParameters(func: any): any;
    isFunction(val: any): boolean;
    executeInAWhile(funcs: Function[]): void;
    executeNextVMTurn(funcs: Function[]): void;
    executeAfter(funcs: Function[], milliseconds?: number): void;
    debounce(func: (...args: any[]) => void, wait: number, immediate?: boolean): (...args: any[]) => void;
    compose(...fns: Function[]): (arg: any) => any;
    callIfPresent(func: Function): void;
    stopPropagationForAgGrid(event: Event): void;
    isStopPropagationForAgGrid(event: Event): boolean;
    getCellCompForEvent(gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, event: Event): import("../main").CellComp;
    addChangeListener(element: HTMLElement, listener: EventListener): void;
    getTarget(event: Event): Element;
    isElementInEventPath(element: HTMLElement, event: Event): boolean;
    createEventPath(event: Event): EventTarget[];
    addAgGridEventPath(event: Event): void;
    getEventPath(event: Event): EventTarget[];
    addSafePassiveEventListener(frameworkOverrides: import("../main").IFrameworkOverrides, eElement: HTMLElement, event: string, listener: (event?: any) => void): void;
    isEventSupported: (eventName: any) => boolean;
    addCssClass(element: HTMLElement, className: string): HTMLElement;
    removeCssClass(element: HTMLElement, className: string): void;
    addOrRemoveCssClass(element: HTMLElement, className: string, addOrRemove: boolean): void;
    radioCssClass(element: HTMLElement, elementClass: string, otherElementClass?: string): void;
    containsClass(element: HTMLElement, className: string): boolean;
    isFocusableFormField(element: HTMLElement): boolean;
    setDisplayed(element: HTMLElement, displayed: boolean): void;
    setVisible(element: HTMLElement, visible: boolean): void;
    setDisabled(element: HTMLElement, disabled: boolean): void;
    isElementChildOfClass(element: HTMLElement, cls: string, maxNest?: number): boolean;
    getElementSize(el: HTMLElement): {
        height: number;
        width: number;
        paddingTop: number;
        paddingRight: number;
        paddingBottom: number;
        paddingLeft: number;
        marginTop: number;
        marginRight: number;
        marginBottom: number;
        marginLeft: number;
        boxSizing: string;
    };
    getInnerHeight(el: HTMLElement): number;
    getInnerWidth(el: HTMLElement): number;
    getAbsoluteHeight(el: HTMLElement): number;
    getAbsoluteWidth(el: HTMLElement): number;
    isRtlNegativeScroll(): boolean;
    getScrollLeft(element: HTMLElement, rtl: boolean): number;
    setScrollLeft(element: HTMLElement, value: number, rtl: boolean): void;
    clearElement(el: HTMLElement): void;
    removeElement(parent: HTMLElement, cssSelector: string): void;
    removeFromParent(node: Element): void;
    isVisible(element: HTMLElement): boolean;
    loadTemplate(template: string): HTMLElement;
    appendHtml(eContainer: HTMLElement, htmlTemplate: string): void;
    getElementAttribute(element: any, attributeName: string): string;
    offsetHeight(element: HTMLElement): number;
    offsetWidth(element: HTMLElement): number;
    ensureDomOrder(eContainer: HTMLElement, eChild: HTMLElement, eChildBefore: HTMLElement): void;
    setDomChildOrder(eContainer: HTMLElement, orderedChildren: HTMLElement[]): void;
    insertTemplateWithDomOrder(eContainer: HTMLElement, htmlTemplate: string, eChildBefore: HTMLElement): HTMLElement;
    prependDC(parent: HTMLElement, documentFragment: DocumentFragment): void;
    addStylesToElement(eElement: any, styles: any): void;
    isHorizontalScrollShowing(element: HTMLElement): boolean;
    isVerticalScrollShowing(element: HTMLElement): boolean;
    setElementWidth(element: HTMLElement, width: string | number): void;
    setFixedWidth(element: HTMLElement, width: string | number): void;
    setElementHeight(element: HTMLElement, height: string | number): void;
    setFixedHeight(element: HTMLElement, height: string | number): void;
    formatSize(size: string | number): string;
    isNode(o: any): boolean;
    isElement(o: any): boolean;
    isNodeOrElement(o: any): boolean;
    copyNodeList(nodeList: NodeList): Node[];
    iterateNamedNodeMap(map: NamedNodeMap, callback: (key: string, value: string) => void): void;
    setCheckboxState(eCheckbox: HTMLInputElement, state: any): void;
    addOrRemoveAttribute(element: HTMLElement, name: string, value: any): void;
    nodeListForEach<T_21 extends Node>(nodeList: NodeListOf<T_21>, action: (value: T_21) => void): void;
    serialiseDate(date: Date, includeTime?: boolean, separator?: string): string;
    parseDateTimeFromString(value: string): Date;
    stringToArray(strData: string, delimiter?: string): string[][];
    isBrowserIE(): boolean;
    isBrowserEdge(): boolean;
    isBrowserSafari(): boolean;
    isBrowserChrome(): boolean;
    isBrowserFirefox(): boolean;
    isIOSUserAgent(): boolean;
    getTabIndex(el: HTMLElement): string;
    getMaxDivHeight(): number;
    getScrollbarWidth(): number;
    hasOverflowScrolling(): boolean;
    getBodyWidth(): number;
    getBodyHeight(): number;
    firstExistingValue<A>(...values: A[]): A;
    anyExists(values: any[]): boolean;
    existsAndNotEmpty<T_22>(value?: T_22[]): boolean;
    last<T_23>(arr: T_23[]): T_23;
    last<T_24 extends Node>(arr: NodeListOf<T_24>): T_24;
    areEqual<T_25>(a?: T_25[], b?: T_25[], comparator?: (a: T_25, b: T_25) => boolean): boolean;
    compareArrays(array1?: any[], array2?: any[]): boolean;
    shallowCompare(arr1: any[], arr2: any[]): boolean;
    sortNumerically(array: number[]): number[];
    removeRepeatsFromArray<T_26>(array: T_26[], object: T_26): void;
    removeFromArray<T_27>(array: T_27[], object: T_27): void;
    removeAllFromArray<T_28>(array: T_28[], toRemove: T_28[]): void;
    insertIntoArray<T_29>(array: T_29[], object: T_29, toIndex: number): void;
    insertArrayIntoArray<T_30>(dest: T_30[], src: T_30[], toIndex: number): void;
    moveInArray<T_31>(array: T_31[], objectsToMove: T_31[], toIndex: number): void;
    includes<T_32>(array: T_32[], value: T_32): boolean;
    flatten(arrayOfArrays: any[]): any[];
    pushAll<T_33>(target: T_33[], source: T_33[]): void;
    toStrings<T_34>(array: T_34[]): string[];
    findIndex<T_35>(collection: T_35[], predicate: (item: T_35, idx: number, collection: T_35[]) => boolean): number;
    every<T_36>(list: T_36[], predicate: (value: T_36, index: number) => boolean): boolean;
    some<T_37>(list: T_37[], predicate: (value: T_37, index: number) => boolean): boolean;
    forEach<T_38>(list: T_38[], action: (value: T_38, index: number) => void): void;
    forEachReverse<T_39>(list: T_39[], action: (value: T_39, index: number) => void): void;
    map<T_40, V_2>(list: T_40[], process: (value: T_40, index: number) => V_2): V_2[];
    filter<T_41>(list: T_41[], predicate: (value: T_41, index: number) => boolean): T_41[];
    reduce<T_42, V_3>(list: T_42[], step: (acc: V_3, value: T_42, index: number) => V_3, initial: V_3): V_3;
    forEachSnapshotFirst<T_43>(list: T_43[], callback: (item: T_43) => void): void;
    getAriaSortState(column: import("../main").Column): "none" | "ascending" | "descending";
    getAriaLevel(element: HTMLElement): number;
    getAriaPosInSet(element: HTMLElement): number;
    setAriaLabel(element: HTMLElement, label: string): void;
    setAriaLabelledBy(element: HTMLElement, labelledBy: string): void;
    setAriaDescribedBy(element: HTMLElement, describedby: string): void;
    setAriaLevel(element: HTMLElement, level: number): void;
    setAriaDisabled(element: HTMLElement, disabled: boolean): void;
    setAriaExpanded(element: HTMLElement, expanded: boolean): void;
    removeAriaExpanded(element: HTMLElement): void;
    setAriaSetSize(element: HTMLElement, setsize: number): void;
    setAriaPosInSet(element: HTMLElement, position: number): void;
    setAriaMultiSelectable(element: HTMLElement, multiSelectable: boolean): void;
    setAriaRowCount(element: HTMLElement, rowCount: number): void;
    setAriaRowIndex(element: HTMLElement, rowIndex: number): void;
    setAriaColCount(element: HTMLElement, colCount: number): void;
    setAriaColIndex(element: HTMLElement, colIndex: number): void;
    setAriaColSpan(element: HTMLElement, colSpan: number): void;
    setAriaSort(element: HTMLElement, sort: "none" | "ascending" | "descending"): void;
    removeAriaSort(element: HTMLElement): void;
    setAriaSelected(element: HTMLElement, selected: boolean): void;
    setAriaChecked(element: HTMLElement, checked?: boolean): void;
    getNameOfClass(theClass: any): string;
    findLineByLeastSquares(values: number[]): number[];
    cssStyleObjectToMarkup(stylesToUse: any): string;
    message(msg: string): void;
    bindCellRendererToHtmlElement(cellRendererPromise: import("./promise").AgPromise<import("../main").ICellRendererComp>, eTarget: HTMLElement): void;
};
