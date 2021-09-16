/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiv3 } from '..';
//import { FFAccountInfo } from '../../types/freefireAccount';

export default {
  getItem(token: string,sessionKey:string): Promise<any> {
    return apiv3('get', `ff-accounts`, {
      token
    },sessionKey);
  }
};
