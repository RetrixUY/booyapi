import { apiv3 } from '..';
import { Game } from '../../types/game';

export default {
  get(
    updateTs: number,sessionKey:string
  ): Promise<{
    gameBuildList: Game[];
    updateTs: number;
  }> {
    // platform 0:ALL,1:IOS,2:Android,3:PC
    return apiv3('get', 'game-builds', { platform: 0, updateTs },sessionKey);
  }
};
