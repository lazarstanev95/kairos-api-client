"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KairosApiClient = void 0;
const superagent_1 = require("superagent");
const log4js_1 = require("log4js");
const https_proxy_agent_1 = require("https-proxy-agent");
const logger = (0, log4js_1.getLogger)('Kairos API client');
class KairosApiClient {
    constructor({ appId, appKey, proxy }) {
        this.appId = appId;
        this.appKey = appKey;
        this.proxy = proxy;
    }
    enroll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestConfig = {
                url: 'https://api.kairos.com/enroll',
                headers: {
                    'Content-Type': 'application/json',
                    'app_id': this.appId,
                    'app_key': this.appKey
                },
                data: params
            };
            try {
                this.proxy && logger.info('Enroll process is using proxy', this.proxy);
                const proxyAgent = this.proxy && new https_proxy_agent_1.HttpsProxyAgent(this.proxy);
                const response = yield (0, superagent_1.post)(requestConfig.url)
                    .agent(proxyAgent)
                    .set(requestConfig.headers)
                    .send(requestConfig.data);
                return {
                    body: response.body,
                    status: response.status
                };
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
    recognize(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestConfig = {
                url: 'https://api.kairos.com/recognize',
                headers: {
                    'Content-Type': 'application/json',
                    'app_id': this.appId,
                    'app_key': this.appKey
                },
                data: params
            };
            try {
                this.proxy && logger.info('Recognize process is using proxy', this.proxy);
                const proxyAgent = this.proxy && new https_proxy_agent_1.HttpsProxyAgent(this.proxy);
                const response = yield (0, superagent_1.post)(requestConfig.url)
                    .agent(proxyAgent)
                    .set(requestConfig.headers)
                    .send(requestConfig.data);
                return {
                    body: response.body,
                    status: response.status
                };
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
        });
    }
    detect(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestConfig = {
                url: 'https://api.kairos.com/detect',
                headers: {
                    'Content-Type': 'application/json',
                    'app_id': this.appId,
                    'app_key': this.appKey
                },
                data: params
            };
            try {
                this.proxy && logger.info('Detect process is using proxy', this.proxy);
                const proxyAgent = this.proxy && new https_proxy_agent_1.HttpsProxyAgent(this.proxy);
                const response = yield (0, superagent_1.post)(requestConfig.url)
                    .agent(proxyAgent)
                    .set(requestConfig.headers)
                    .send(requestConfig.data);
                return {
                    body: response.body,
                    status: response.status
                };
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
        });
    }
    galleryListAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const requestConfig = {
                url: 'https://api.kairos.com/gallery/list_all',
                headers: {
                    'Content-Type': 'application/json',
                    'app_id': this.appId,
                    'app_key': this.appKey
                }
            };
            try {
                this.proxy && logger.info('Gallery list all is using proxy', this.proxy);
                const proxyAgent = this.proxy && new https_proxy_agent_1.HttpsProxyAgent(this.proxy);
                const response = yield (0, superagent_1.post)(requestConfig.url)
                    .agent(proxyAgent)
                    .set(requestConfig.headers);
                return {
                    body: response.body,
                    status: response.status
                };
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
        });
    }
    galleryView(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestConfig = {
                url: 'https://api.kairos.com/gallery/view',
                headers: {
                    'Content-Type': 'application/json',
                    'app_id': this.appId,
                    'app_key': this.appKey
                },
                data: params
            };
            try {
                this.proxy && logger.info('Gallery view is using proxy', this.proxy);
                const proxyAgent = this.proxy && new https_proxy_agent_1.HttpsProxyAgent(this.proxy);
                const response = yield (0, superagent_1.post)(requestConfig.url)
                    .agent(proxyAgent)
                    .set(requestConfig.headers)
                    .send(requestConfig.data);
                return {
                    body: response.body,
                    status: response.status
                };
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
    galleryRemove(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestConfig = {
                url: 'https://api.kairos.com/gallery/remove',
                headers: {
                    'Content-Type': 'application/json',
                    'app_id': this.appId,
                    'app_key': this.appKey
                },
                data: params
            };
            try {
                this.proxy && logger.info('Gallery remove is using proxy', this.proxy);
                const proxyAgent = this.proxy && new https_proxy_agent_1.HttpsProxyAgent(this.proxy);
                const response = yield (0, superagent_1.post)(requestConfig.url)
                    .agent(proxyAgent)
                    .set(requestConfig.headers)
                    .send(requestConfig.data);
                return {
                    body: response.body,
                    status: response.status
                };
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
        });
    }
    galleryRemoveSubject(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestConfig = {
                url: 'https://api.kairos.com/gallery/remove_subject',
                headers: {
                    'Content-Type': 'application/json',
                    'app_id': this.appId,
                    'app_key': this.appKey
                },
                data: params
            };
            try {
                this.proxy && logger.info('Gallery remove subject is using proxy', this.proxy);
                const proxyAgent = this.proxy && new https_proxy_agent_1.HttpsProxyAgent(this.proxy);
                const response = yield (0, superagent_1.post)(requestConfig.url)
                    .agent(proxyAgent)
                    .set(requestConfig.headers)
                    .send(requestConfig.data);
                return {
                    body: response.body,
                    status: response.status
                };
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
        });
    }
}
exports.KairosApiClient = KairosApiClient;
