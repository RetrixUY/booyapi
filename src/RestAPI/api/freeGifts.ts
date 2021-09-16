import { apiv3 } from '..';
import { FreeGift } from '../../types/gift';

export default {
  get(uid: number,sessionKey:string): Promise<FreeGift[]> {
    return apiv3('get', `users/${uid}/free-gifts`,{},sessionKey).then(res => {
      return res.freeGiftList;
    });
  },
  post(uid: number, levels: number[],sessionKey:string): Promise<void> {
    return apiv3('post', `users/${uid}/free-gifts`, {
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
      return apiv3('post', 'free-gifts/send', {
        giftId,
        giftAmount,
        toUid: channelId,
        fromUid: uid
      },sessionKey);
    }
  }
};
