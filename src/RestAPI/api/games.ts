import { apiv3 } from '..';
import { FFReward } from '../../types/luckyDraw';

export default {
  get(sessionKey:string,
    lang?: string // content language
  ): Promise<{
    gameList: {
      gameId: number;
      viewerCount: number;
    }[];
  }> {
    return apiv3('get', `games`, { lang },sessionKey);
  },
  rewards: {
    get(
      cursor: number,sessionKey:string
    ): Promise<{
      cursor: number;
      rewardList: FFReward[];
    }> {
      return apiv3('get', `games/1/rewards`, { cursor },sessionKey);
    }
  }
};
