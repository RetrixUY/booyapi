/* eslint-disable @typescript-eslint/no-explicit-any */
import v3 from '../v3';
//import { FFAccountInfo } from '../../types/freefireAccount';

export default {
  getItem(token: string, sessionKey: string): Promise<any> {
    return v3(
      'get',
      'ff-accounts',
      {
        token,
      },
      sessionKey
    );
  },
};
