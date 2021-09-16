/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiv3 } from '..';
//import { Sticker } from '../../types/sticker';

export default {
  getItem(id: number,sessionKey: string): Promise<any> {
    return apiv3('get', `stickers/${id}`,{},sessionKey);
  }
};
