import VueFileAgentMixin from './components/vue-file-agent-mixin';
import VueFilePreviewMixin from './components/vue-file-preview-mixin';
import utils from './lib/utils';
import plugins from './lib/plugins';
import FileData from './lib/file-data';
import _Vue from 'vue';
export declare class VueFileAgentPlugin implements Vue.PluginObject<any> {
    VueFileIcon: import("vue/types/vue").ExtendedVue<_Vue, unknown, unknown, {
        viewBoxComputed: string;
        icon: import("./lib/icons").SvgIcon;
    }, Record<"ext" | "name" | "viewBox", any>>;
    VueFilePreview: import("vue/types/vue").ExtendedVue<_Vue, unknown, unknown, unknown, Record<never, any>>;
    VueFileAgent: import("vue/types/vue").ExtendedVue<_Vue, unknown, unknown, unknown, Record<never, any>>;
    component: import("vue/types/vue").ExtendedVue<_Vue, unknown, unknown, unknown, Record<never, any>>;
    mixin: import("vue/types/vue").ExtendedVue<_Vue, {
        filesData: FileData[];
        filesDataRaw: import("./lib/file-data").RawFileData[];
        isDragging: boolean;
        isSorting: boolean;
        isSortingActive: boolean;
        transitionDuration: number;
        overallProgress: number;
        uniqueId: string;
        sortTimeout: number;
    }, {
        createThumbnail(fileData: FileData, video: HTMLVideoElement): Promise<void>;
        initVideo(fileData: FileData): void;
        getFileDataOrRawInstance(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData, raw: boolean): FileData | import("./lib/file-data").RawFileData;
        getFileDataRawInstance(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData): import("./lib/file-data").RawFileData;
        getFileDataInstance(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData): FileData;
        prepareConfigureFn(configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): import("./lib/ajax-request").ConfigureFn | undefined;
        upload(url: string, headers: object, filesDataOrRaw: FileData[] | import("./lib/file-data").RawFileData[], createFormData?: ((fileData: FileData) => FormData) | undefined, configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): Promise<any>;
        deleteUpload(url: string, headers: object, fileData: FileData | import("./lib/file-data").RawFileData, uploadData?: any, configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): Promise<any>;
        updateUpload(url: string, headers: object, fileData: FileData | import("./lib/file-data").RawFileData, uploadData?: any, configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): Promise<any>;
        autoUpload(filesData: FileData[] | import("./lib/file-data").RawFileData[]): Promise<any>;
        autoDeleteUpload(fileData: FileData | import("./lib/file-data").RawFileData): Promise<any>;
        autoUpdateUpload(fileData: FileData): Promise<any>;
        equalFiles(file1: File, file2: File): boolean;
        isFileAddedAlready(file: File): boolean;
        handleFiles(files: File[] | FileList): void;
        filesChanged(event: InputEvent): void;
        drop(event: DragEvent): void;
        dragEnter(event: DragEvent): void;
        dragOver(event: DragEvent): void;
        dragLeave(event: DragEvent): void;
        removeFileData(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData): void;
        filenameChanged(fileData: FileData): void;
        checkValue(): void;
        sortStart(): void;
        sortEnd(sortData: {
            event: Event;
            newIndex: number;
            oldIndex: number;
            collection: any;
        }): void;
    }, {
        canAddMore: boolean;
        helpTextComputed: string;
        isDeletable: boolean;
        isSortable: boolean;
        hasMultiple: boolean;
        shouldRead: boolean;
    }, Record<"value" | "deletable" | "editable" | "linkable" | "errorText" | "disabled" | "thumbnailSize" | "accept" | "auto" | "compact" | "helpText" | "maxFiles" | "maxSize" | "meta" | "multiple" | "progress" | "read" | "readonly" | "resumable" | "sortable" | "theme" | "uploadConfig" | "uploadHeaders" | "uploadUrl" | "uploadWithCredentials", any>>;
    plugins: {
        tus: any;
    };
    VueFileAgentMixin: import("vue/types/vue").ExtendedVue<_Vue, {
        filesData: FileData[];
        filesDataRaw: import("./lib/file-data").RawFileData[];
        isDragging: boolean;
        isSorting: boolean;
        isSortingActive: boolean;
        transitionDuration: number;
        overallProgress: number;
        uniqueId: string;
        sortTimeout: number;
    }, {
        createThumbnail(fileData: FileData, video: HTMLVideoElement): Promise<void>;
        initVideo(fileData: FileData): void;
        getFileDataOrRawInstance(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData, raw: boolean): FileData | import("./lib/file-data").RawFileData;
        getFileDataRawInstance(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData): import("./lib/file-data").RawFileData;
        getFileDataInstance(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData): FileData;
        prepareConfigureFn(configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): import("./lib/ajax-request").ConfigureFn | undefined;
        upload(url: string, headers: object, filesDataOrRaw: FileData[] | import("./lib/file-data").RawFileData[], createFormData?: ((fileData: FileData) => FormData) | undefined, configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): Promise<any>;
        deleteUpload(url: string, headers: object, fileData: FileData | import("./lib/file-data").RawFileData, uploadData?: any, configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): Promise<any>;
        updateUpload(url: string, headers: object, fileData: FileData | import("./lib/file-data").RawFileData, uploadData?: any, configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): Promise<any>;
        autoUpload(filesData: FileData[] | import("./lib/file-data").RawFileData[]): Promise<any>;
        autoDeleteUpload(fileData: FileData | import("./lib/file-data").RawFileData): Promise<any>;
        autoUpdateUpload(fileData: FileData): Promise<any>;
        equalFiles(file1: File, file2: File): boolean;
        isFileAddedAlready(file: File): boolean;
        handleFiles(files: File[] | FileList): void;
        filesChanged(event: InputEvent): void;
        drop(event: DragEvent): void;
        dragEnter(event: DragEvent): void;
        dragOver(event: DragEvent): void;
        dragLeave(event: DragEvent): void;
        removeFileData(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData): void;
        filenameChanged(fileData: FileData): void;
        checkValue(): void;
        sortStart(): void;
        sortEnd(sortData: {
            event: Event;
            newIndex: number;
            oldIndex: number;
            collection: any;
        }): void;
    }, {
        canAddMore: boolean;
        helpTextComputed: string;
        isDeletable: boolean;
        isSortable: boolean;
        hasMultiple: boolean;
        shouldRead: boolean;
    }, Record<"value" | "deletable" | "editable" | "linkable" | "errorText" | "disabled" | "thumbnailSize" | "accept" | "auto" | "compact" | "helpText" | "maxFiles" | "maxSize" | "meta" | "multiple" | "progress" | "read" | "readonly" | "resumable" | "sortable" | "theme" | "uploadConfig" | "uploadHeaders" | "uploadUrl" | "uploadWithCredentials", any>>;
    VueFilePreviewMixin: import("vue/types/vue").ExtendedVue<_Vue, {
        isEditInputFocused: boolean;
        isEditCancelable: boolean;
        fileData: FileData;
    }, {
        updateFileData(): void;
        createThumbnail(fileData: FileData, video: HTMLVideoElement): void;
        playAv(fileData: FileData): void;
        removeFileData(fileData: FileData): void;
        editFileName(): void;
        editInputFocused(): void;
        editInputBlured(): void;
        filenameChanged(completed?: boolean | undefined): void;
        filenameClearPressed(): void;
        clearFilename(): boolean;
        dismissError(): void;
    }, {
        hasLinkableUrl: boolean;
    }, Record<"value" | "deletable" | "editable" | "linkable" | "errorText" | "disabled" | "thumbnailSize", any>>;
    install: Vue.PluginFunction<any>;
}
declare const vfaPlugin: VueFileAgentPlugin;
export declare const mixin: import("vue/types/vue").ExtendedVue<_Vue, {
    filesData: FileData[];
    filesDataRaw: import("./lib/file-data").RawFileData[];
    isDragging: boolean;
    isSorting: boolean;
    isSortingActive: boolean;
    transitionDuration: number;
    overallProgress: number;
    uniqueId: string;
    sortTimeout: number;
}, {
    createThumbnail(fileData: FileData, video: HTMLVideoElement): Promise<void>;
    initVideo(fileData: FileData): void;
    getFileDataOrRawInstance(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData, raw: boolean): FileData | import("./lib/file-data").RawFileData;
    getFileDataRawInstance(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData): import("./lib/file-data").RawFileData;
    getFileDataInstance(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData): FileData;
    prepareConfigureFn(configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): import("./lib/ajax-request").ConfigureFn | undefined;
    upload(url: string, headers: object, filesDataOrRaw: FileData[] | import("./lib/file-data").RawFileData[], createFormData?: ((fileData: FileData) => FormData) | undefined, configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): Promise<any>;
    deleteUpload(url: string, headers: object, fileData: FileData | import("./lib/file-data").RawFileData, uploadData?: any, configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): Promise<any>;
    updateUpload(url: string, headers: object, fileData: FileData | import("./lib/file-data").RawFileData, uploadData?: any, configureXhr?: import("./lib/ajax-request").ConfigureFn | undefined): Promise<any>;
    autoUpload(filesData: FileData[] | import("./lib/file-data").RawFileData[]): Promise<any>;
    autoDeleteUpload(fileData: FileData | import("./lib/file-data").RawFileData): Promise<any>;
    autoUpdateUpload(fileData: FileData): Promise<any>;
    equalFiles(file1: File, file2: File): boolean;
    isFileAddedAlready(file: File): boolean;
    handleFiles(files: File[] | FileList): void;
    filesChanged(event: InputEvent): void;
    drop(event: DragEvent): void;
    dragEnter(event: DragEvent): void;
    dragOver(event: DragEvent): void;
    dragLeave(event: DragEvent): void;
    removeFileData(fileDataOrRaw: FileData | import("./lib/file-data").RawFileData): void;
    filenameChanged(fileData: FileData): void;
    checkValue(): void;
    sortStart(): void;
    sortEnd(sortData: {
        event: Event;
        newIndex: number;
        oldIndex: number;
        collection: any;
    }): void;
}, {
    canAddMore: boolean;
    helpTextComputed: string;
    isDeletable: boolean;
    isSortable: boolean;
    hasMultiple: boolean;
    shouldRead: boolean;
}, Record<"value" | "deletable" | "editable" | "linkable" | "errorText" | "disabled" | "thumbnailSize" | "accept" | "auto" | "compact" | "helpText" | "maxFiles" | "maxSize" | "meta" | "multiple" | "progress" | "read" | "readonly" | "resumable" | "sortable" | "theme" | "uploadConfig" | "uploadHeaders" | "uploadUrl" | "uploadWithCredentials", any>>;
export { VueFileAgentMixin, VueFilePreviewMixin };
export { utils, FileData, plugins };
export default vfaPlugin;
