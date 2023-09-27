import { post } from "superagent";
import { getLogger } from "log4js";
import { HttpsProxyAgent } from "https-proxy-agent";
import { 
    IDetect, 
    IEnroll, 
    IGalleryRemove, 
    IGalleryRemoveSubject, 
    IGalleryView, 
    IRecognize 
} from "./kairos.interfaces";
const logger = getLogger('Kairos API client');

interface IKairosClient {
    appId: string,
    appKey: string,
    proxy?: string
}

export class KairosApiClient {
    appId: string;
    appKey: string;
    proxy?: string;
    constructor({ appId, appKey, proxy }: IKairosClient) {
        this.appId = appId;
        this.appKey = appKey;
        this.proxy = proxy;
    }

    async enroll(params: IEnroll) {
        const requestConfig = {
            url: 'https://api.kairos.com/enroll',
            headers: {
                'Content-Type': 'application/json',
                'app_id': this.appId,
                'app_key': this.appKey
            },
            data: params
        }
        try {
            this.proxy && logger.info('Enroll process is using proxy', this.proxy);
            const proxyAgent = this.proxy && new HttpsProxyAgent(this.proxy);
            const response = await post(requestConfig.url)
                .agent(proxyAgent)
                .set(requestConfig.headers)
                .send(requestConfig.data);
            return {
                body: response.body,
                status: response.status
            }
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    async recognize(params: IRecognize) {
        const requestConfig = {
            url: 'https://api.kairos.com/recognize',
            headers: {
                'Content-Type': 'application/json',
                'app_id': this.appId,
                'app_key': this.appKey
            },
            data: params
        }
        try {
            this.proxy && logger.info('Recognize process is using proxy', this.proxy);
            const proxyAgent = this.proxy && new HttpsProxyAgent(this.proxy);
            const response = await post(requestConfig.url)
                .agent(proxyAgent)
                .set(requestConfig.headers)
                .send(requestConfig.data);
            return {
                body: response.body,
                status: response.status
            }
        } catch (error) {
            logger.error(error);
            throw new Error(error);
        }
    }

    async detect(params: IDetect) {
        const requestConfig = {
            url: 'https://api.kairos.com/detect',
            headers: {
                'Content-Type': 'application/json',
                'app_id': this.appId,
                'app_key': this.appKey
            },
            data: params
        }
        try {
            this.proxy && logger.info('Detect process is using proxy', this.proxy);
            const proxyAgent = this.proxy && new HttpsProxyAgent(this.proxy);
            const response = await post(requestConfig.url)
                .agent(proxyAgent)
                .set(requestConfig.headers)
                .send(requestConfig.data);
            return {
                body: response.body,
                status: response.status
            }
        } catch (error) {
            logger.error(error);
            throw new Error(error);
        }
    }

    async galleryListAll() {
        const requestConfig = {
            url: 'https://api.kairos.com/gallery/list_all',
            headers: {
                'Content-Type': 'application/json',
                'app_id': this.appId,
                'app_key': this.appKey
            }
        }
        try {
            this.proxy && logger.info('Gallery list all is using proxy', this.proxy);
            const proxyAgent = this.proxy && new HttpsProxyAgent(this.proxy);
            const response = await post(requestConfig.url)
                .agent(proxyAgent)
                .set(requestConfig.headers)
            return {
                body: response.body,
                status: response.status
            }
        } catch (error) {
            logger.error(error);
            throw new Error(error);
        }
    }

    async galleryView(params: IGalleryView) {
        const requestConfig = {
            url: 'https://api.kairos.com/gallery/view',
            headers: {
                'Content-Type': 'application/json',
                'app_id': this.appId,
                'app_key': this.appKey
            },
            data: params
        }
        try {
            this.proxy && logger.info('Gallery view is using proxy', this.proxy);
            const proxyAgent = this.proxy && new HttpsProxyAgent(this.proxy);
            const response = await post(requestConfig.url)
                .agent(proxyAgent)
                .set(requestConfig.headers)
                .send(requestConfig.data)
            return {
                body: response.body,
                status: response.status
            }
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    async galleryRemove(params: IGalleryRemove) {
        const requestConfig = {
            url: 'https://api.kairos.com/gallery/remove',
            headers: {
                'Content-Type': 'application/json',
                'app_id': this.appId,
                'app_key': this.appKey
            },
            data: params
        }
        try {
            this.proxy && logger.info('Gallery remove is using proxy', this.proxy);
            const proxyAgent = this.proxy && new HttpsProxyAgent(this.proxy);
            const response = await post(requestConfig.url)
                .agent(proxyAgent)
                .set(requestConfig.headers)
                .send(requestConfig.data)
            return {
                body: response.body,
                status: response.status
            }
        } catch (error) {
            logger.error(error);
            throw new Error(error);
        }
    }

    async galleryRemoveSubject(params: IGalleryRemoveSubject) {
        const requestConfig = {
            url: 'https://api.kairos.com/gallery/remove_subject',
            headers: {
                'Content-Type': 'application/json',
                'app_id': this.appId,
                'app_key': this.appKey
            },
            data: params
        }
        try {
            this.proxy && logger.info('Gallery remove subject is using proxy', this.proxy);
            const proxyAgent = this.proxy && new HttpsProxyAgent(this.proxy);
            const response = await post(requestConfig.url)
                .agent(proxyAgent)
                .set(requestConfig.headers)
                .send(requestConfig.data)
            return {
                body: response.body,
                status: response.status
            }
        } catch (error) {
            logger.error(error);
            throw new Error(error);
        }
    }
}