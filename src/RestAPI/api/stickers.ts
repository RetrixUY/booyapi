/* eslint-disable @typescript-eslint/no-explicit-any */
import v3 from '../v3';
//import { Sticker } from '../../types/sticker';

export default {
  getItem(id: number, sessionKey: string): Promise<any> {
    return v3('get', `stickers/${id}`, {}, sessionKey);
  },
};
