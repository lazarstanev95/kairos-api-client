export interface IEnroll {
    image: string;
    subject_id: string;
    gallery_name: string;
    minHeadScale?: number;
    multiple_faces?: boolean;
    selector?: string;
}
export interface IRecognize {
    image: string;
    gallery_name: string;
    minHeadScale?: string | number;
    threshold?: string | number;
    max_num_results?: string | number;
    selector?: string;
}
export interface IDetect {
    image: string;
    minHeadScale?: string | number;
    selector?: string;
}
export interface IGalleryView {
    gallery_name: string;
}
export interface IGalleryRemove {
    gallery_name: string;
}
export interface IGalleryRemoveSubject {
    subject_id: string;
    gallery_name: string;
    face_id?: string | number;
}
