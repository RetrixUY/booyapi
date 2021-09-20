import v3 from "../v3";
import { FreeGift } from '../../types/gift';

export default {
  get(uid: number,sessionKey:string): Promise<FreeGift[]> {
    return v3('get', `users/${uid}/free-gifts`,{},sessionKey).then(res => {
      return res.freeGiftList;
    });
  },
  post(uid: number, levels: number[],sessionKey:string): Promise<void> {
    return v3('post', `users/${uid}/free-gifts`, {
      free_gift_level_list: levels
    },sessionKey);
  },
  send: {
    post(
      uid: number,
      channelId: number,
      giftId: number,
      giftAmount: number,sessionKey:string
    ): Promise<{
      ticketBalance: number;
    }> {
      return v3('post', 'free-gifts/send', {
        giftId,
        giftAmount,
        toUid: channelId,
        fromUid: uid
      },sessionKey);
    }
  }
};
