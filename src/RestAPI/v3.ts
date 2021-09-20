import axios, { AxiosRequestConfig, Method } from "axios";
import {objectToCamel, objectToSnake } from 'ts-case-convert';
import {v1 as uuidv1} from 'uuid';
import ApiUtils from './api/utils';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function v3(method: Method = 'GET',src: string,data: any = {},sessionKey: string,headers?: object): Promise<any>{

    const url = `https://booyah.live/api/v3/${src}`;
    const requestId = uuidv1();
    
    const params: AxiosRequestConfig = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
            'X-Request-ID': requestId,
            'Booyah-Session-Key': sessionKey,
            'X-CSRF-Token': sessionKey,
            ...headers
        },
        withCredentials: true
    }
    switch (method) {
        case 'get':
            params.params = objectToSnake(data);
            break;
        case 'delete':
            params.params = JSON.stringify(data);
            params.data = JSON.stringify(data);
            break;
        case 'post':
            params.data = objectToSnake(data);
            break
        default:
            params.data = JSON.stringify(data);
            break;
    }
    return axios(params)
        .then(res => {
            data = objectToCamel(res.data);
            res.data = data;

            if (headers){
                return res;
            }
            else {
                return data;
            }
        })
        .catch(e => {
            if (e.response){
                e.response.data = objectToCamel(e.response.data);
                const status = ApiUtils.getStatusCode(e);
                const code = ApiUtils.getSubCode(e);
                throw {status,code};
            }
        })
}