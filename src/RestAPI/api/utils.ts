/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {AxiosError} from 'axios';

export default {
  checkRes403(e: AxiosError, action: 'gotoLogin' | 'xman' = 'gotoLogin') {
    if (e.response && e.response.status === 403) {
      return true;
    } else {
      return false;
    }
  },
  getStatusCode(e: AxiosError): number {
    return e.request.status;
  },
  getSubCode(e: AxiosError): number {
    if (e.response) {
      const data = e.response.data;
      if (data && data.code) {
        return data.code;
      }
    }
    return 0;
  },
  getErrorMsg(e: AxiosError) {
    if (e.response && e.response.data) {
      const data = e.response.data;
      if (data.code && data.message) {
        return `${data.message} (${data.code})`;
      }
    }
    return 'unknown error';
  },
  refreshSession(_e: AxiosError) {
    // reset client login status
    //clientLogout();
    // create a new session key from server
    //RestAPI.auths.sessions.post(ClientCache.deviceId, ClientCache.uiLanguage);
  },
  showBannedAlert(_reason: string, _expiry: number) {},
};
