import v3 from "../v3";
import { Gift } from '../../types/gift';

export default {
  get(
    channelId: number,sessionKey:string
  ): Promise<{
    giftList: Gift[];
    freeGiftList: Gift[];
  }> {
    return v3('get', 'gifts', { channelId },sessionKey);
  },
  send: {
    post(
      uid: number,
      channelId: number,
      giftId: number,
      giftAmount: number,sessionKey:string
    ): Promise<{
      coinBalance: number;
    }> {
      return v3('post', 'gifts/send', {
        giftId,
        giftAmount,
        toUid: channelId,
        fromUid: uid
      },sessionKey);
    }
  }
};
