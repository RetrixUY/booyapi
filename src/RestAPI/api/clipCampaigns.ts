import { apiv3 } from '..';
import { ClipCampaign, Sort, ActiveClipCampaign } from '../../types/clipCampaign';
import { PlaybackItem } from '../../types/playback';

export default {
  get(params: {
    cursor: number;
    count: number; // backend max is 10
  },sessionKey:string): Promise<{
    cursor: number;
    campaignList: ClipCampaign[];
  }> {
    return apiv3('get', 'clip-campaigns', params,sessionKey);
  },
  getItem(campaignId: number,sessionKey:string): Promise<ClipCampaign> {
    return apiv3('get', `clip-campaigns/${campaignId}`,{},sessionKey);
  },
  playbacks: {
    get(
      campaignId: number,
      params: {
        cursor: number;
        count: number; // backend max is 10
        sortBy: Sort;
      },sessionKey:string
    ): Promise<{
      cursor: number;
      playbackList: PlaybackItem[];
    }> {
      return apiv3('get', `clip-campaigns/${campaignId}/playbacks`, params,sessionKey);
    }
  },
  getActiveCampaigns(sessionKey:string): Promise<{
    campaignList: ActiveClipCampaign[];
  }> {
    return apiv3('get', 'active-clip-campaigns',{},sessionKey);
  }
};
