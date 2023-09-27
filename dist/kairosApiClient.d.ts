import { IDetect, IEnroll, IGalleryRemove, IGalleryRemoveSubject, IGalleryView, IRecognize } from "./kairos.interfaces";
interface IKairosClient {
    appId: string;
    appKey: string;
    proxy?: string;
}
export declare class KairosApiClient {
    appId: string;
    appKey: string;
    proxy?: string;
    constructor({ appId, appKey, proxy }: IKairosClient);
    enroll(params: IEnroll): Promise<{
        body: any;
        status: number;
    }>;
    recognize(params: IRecognize): Promise<{
        body: any;
        status: number;
    }>;
    detect(params: IDetect): Promise<{
        body: any;
        status: number;
    }>;
    galleryListAll(): Promise<{
        body: any;
        status: number;
    }>;
    galleryView(params: IGalleryView): Promise<{
        body: any;
        status: number;
    }>;
    galleryRemove(params: IGalleryRemove): Promise<{
        body: any;
        status: number;
    }>;
    galleryRemoveSubject(params: IGalleryRemoveSubject): Promise<{
        body: any;
        status: number;
    }>;
}
export {};
