/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
import v3 from "../v3";
import { VodUploadParam, ClipUploadParam } from '../../types/video';
import {
  FFLuckyDrawItem,
  FFLuckyDrawWinner,
  FFLuckyDrawRounds,
  FFLuckyDrawRoundInfo,
  FFReward
} from '../../types/luckyDraw';
import { GiftReceived, Gifter, GiftStatus, GiftLogOrderType } from '../../types/gift';
import { Stream, StreamSettings } from '../../types/stream';
import { Channel } from '../../types/channel';
import {
  AlertConfig,
  AlertBannerTab,
  BannerAlertConfig,
  CommonConfig
} from '../../types/alertConfig';
import { User } from '../../types/user';
//import { Hostee } from '../../types/hostee';
import { SocialPlatform } from '../../types/platform';
import {
  StreamerProgramStats,
  StreamerEntryLevel,
  StreamerProgramRecordOffset,
  StreamerProgramWithdrawType,
  StreamerProgramPayout
} from '../../types/streamerProgram';
import { PlaybackItem } from '../../types/playback';
import { VideoFilterType } from '../../types/video';

export default {
  alertConfigs: {
    get(
      channelId: number,sessionKey: string
    ): Promise<{
      alertConfig: AlertConfig;
      chatMsgCommonConfig: CommonConfig;
      giftRankingCommonConfig: CommonConfig;
      bannerAlertNewFollowerConfig: BannerAlertConfig;
      bannerAlertFreeGiftConfig: BannerAlertConfig;
      bannerAlertCoinGiftConfig: BannerAlertConfig;
      bannerAlertHostingConfig: BannerAlertConfig;
      bannerAlertLootdropWinnerConfig: BannerAlertConfig;
    }> {
      return v3('get', `channels/${channelId}/alert-configs`,{},sessionKey);
    },
    patch(channelId: number, config: Partial<AlertConfig>,sessionKey: string): Promise<void> {
      return v3('patch', `channels/${channelId}/alert-configs`, {
        ...config
      },sessionKey);
    },
    getTab(
      channelId: number,
      tab: AlertBannerTab,sessionKey: string
    ): Promise<{
      alertConfig: AlertConfig;
      chatMsgCommonConfig: CommonConfig;
      giftRankingCommonConfig: CommonConfig;
      bannerAlertNewFollowerConfig: BannerAlertConfig;
      bannerAlertFreeGiftConfig: BannerAlertConfig;
      bannerAlertCoinGiftConfig: BannerAlertConfig;
      bannerAlertHostingConfig: BannerAlertConfig;
      bannerAlertLootdropWinnerConfig: BannerAlertConfig;
    }> {
      return v3('get', `channels/${channelId}/alert-configs/${tab}`,{},sessionKey);
    },
    postTest(channelId: number, tab: AlertBannerTab,sessionKey: string): Promise<{}> {
      return v3('post', `channels/${channelId}/alert-config-test/${tab}`,{},sessionKey);
    }
  },
  ffLuckyDraws: {
    get(
      channelId: number,
      cursor: number,sessionKey: string
    ): Promise<{
      cursor: number;
      luckyDrawList: FFLuckyDrawItem[];
    }> {
      return v3('get', `channels/${channelId}/ff-lucky-draws`, { cursor },sessionKey);
    },
    post(
      channelId: number,
      luckyDrawInfo: {
        rewardList: FFLuckyDrawItem[];
        mode: number;
        criteria: number;
        modeConfig: string;
      },sessionKey: string
    ): Promise<{
      delayDraw: boolean;
      refundedRewardList: FFLuckyDrawItem[];
      winnerList: FFLuckyDrawWinner[];
      roundId: number;
    }> {
      return v3(
        'post',
        `channels/${channelId}/ff-lucky-draws`,
        luckyDrawInfo,sessionKey
      );
    },
    getLogs(
      channelId: number,
      cursor: number,
      count: number,sessionKey: string
    ): Promise<{
      cursor: number;
      winnerList: FFLuckyDrawWinner[];
    }> {
      return v3('get', `channels/${channelId}/ff-lucky-draws/logs`, {
        cursor,
        count
      },sessionKey);
    },
    getRoundHistory(
      channelId: number,sessionKey: string,
      cursor?: number,
      count?: number
    ): Promise<{
      nextCursor: number;
      luckyDrawRounds: FFLuckyDrawRounds[];
    }> {
      return v3('get', `channels/${channelId}/ff-lucky-draw-rounds`, {
        cursor,
        count
      },sessionKey);
    },
    getRound(
      channelId: number,sessionKey: string
    ): Promise<{
      countDownTime: number;
      ffAccountInfo: {
        accountId: string;
        nickName: string;
      };
      itemInfo: FFReward;
      roundInfo: FFLuckyDrawRoundInfo;
    }> {
      return v3('get', `channels/${channelId}/ff-lucky-draw-ongoing-round`,{},sessionKey);
    },
    deleteRound(channelId: number, roundId: number,sessionKey: string): Promise<void> {
      return v3(
        'delete',
        `channels/${channelId}/ff-lucky-draw-rounds/${roundId}`,{},sessionKey
      );
    },
    getRoundWinner(
      channelId: number,
      roundId: number,sessionKey: string,
      cursor?: number,
      count?: number
    ): Promise<{
      nextCursor: number;
      luckyDrawWinners: {
        itemInfo: FFReward;
        quantity: number;
        userInfo: {
          nickname: string;
          thumbnail: string;
          uid: number;
        };
      }[];
    }> {
      return v3(
        'get',
        `channels/${channelId}/ff-lucky-draw-rounds/${roundId}/winners`,
        {
          cursor,
          count
        }
      ,sessionKey);
    }
  },
  firebaseTokens: {
    post(channelId: number,sessionKey: string): Promise<{ token: string }> {
      return v3('post', `channels/${channelId}/firebase-tokens`,{},sessionKey);
    }
  },
  getItem(
    channelId: number | string,sessionKey: string
  ): Promise<{ user: User; channel: Channel }> {
    return v3('get', `channels/${channelId}`,{},sessionKey);
  },
  gifts: {
    getLogs(
      channelId: number,
      startTime: number,
      endTime: number,
      logType: GiftStatus,
      orderType: GiftLogOrderType,
      count: number,
      cursor: number,sessionKey: string
    ): Promise<{
      nextCursor: number;
      sendGiftLogList: GiftReceived[];
    }> {
      return v3('get', `channels/${channelId}/gifts/logs`, {
        txnType: logType,
        orderType,
        startTime,
        endTime,
        count,
        cursor
      },sessionKey);
    },
    getTopGifters(
      channelId: number,
      type = 0,sessionKey: string
    ): Promise<{
      me: Gifter;
      topGifterList: Gifter[];
    }> {
      return v3('get', `channels/${channelId}/gifts/top-gifters`, {
        type
      },sessionKey);
    }
  },
  patch(
    channel: Partial<Channel> &
      Partial<
        Pick<
          StreamSettings,
          'description' | 'gameBuildId' | 'streamingLang' | 'tagUniq'
        >
      >,sessionKey: string
  ): Promise<void> {
    const { channelId } = channel;
    return v3('patch', `channels/${channelId}`, channel,sessionKey);
  },
  getStats(
    channelId: number,
    startTime: number,
    endTime: number,sessionKey: string
  ): Promise<{
    clipStats: {
      totalLikes: number;
    };
    highlightStats: {
      totalViews: number;
    };
    streamStats: {
      averageViewers: number;
      averageLoggedInBooyahCcu: number;
      peakViewers: number;
      peakViewersTime: number;
      totalViewers: number;
      receivedGiftValue: number;
      receivedTicket: number;
      minutesWatched: number;
      minutesStreamed: number;
      streamDays: number;
    };
    newFollowers: number;
  }> {
    return v3('get', `channels/${channelId}/stats`, {
      startTime,
      endTime
    },sessionKey);
  },
  streams: {
    get(channelId: number,sessionKey: string): Promise<Stream> {
      return v3('get', `channels/${channelId}/streams`,{},sessionKey);
    }
  },
  streamKeys: {
    post(channelId: number,sessionKey: string): Promise<{ streamKey: string; url: string }> {
      return v3('post', `channels/${channelId}/stream-keys`,{},sessionKey);
    }
  },
  streamSettings: {
    get(channelId: number,sessionKey: string): Promise<StreamSettings> {
      return v3('get', `channels/${channelId}/stream-settings`,{},sessionKey).then(
        (res: StreamSettings) => {
          if (!res.resolution) {
            res.resolution = '720p';
          }
          return res;
        }
      );
    },
    post(
      settings: Partial<StreamSettings> & {
        fbGroupId?: string;
        fbGroupName?: string;
        fbPageId?: string;
        fbPageName?: string;
        fbPrivacy?: 0 | 1;
      },sessionKey: string
    ) {
      // use thumbnail key to update the field
      // backend accepts relative path for thumbnail
      settings.thumbnail = settings.thumbnailPath;
      delete settings.thumbnailPath;

      return v3(
        'post',
        `channels/${settings.channelId}/stream-settings`,
        settings,sessionKey
      );
    }
  },
  postVideos(
    channelId: number,
    params: VodUploadParam,sessionKey: string
  ): Promise<{ uuid: string }> {
    return v3('post', `channels/${channelId}/videos`, params,sessionKey);
  },
  postClips(
    channelId: number,
    params: ClipUploadParam,sessionKey: string
  ): Promise<{ clipId: string }> {
    return v3('post', `channels/${channelId}/clips`, params,sessionKey);
  },
  hostees: {
    getItem(channelId: number,sessionKey: string): Promise<any> {
      return v3('get', `channels/${channelId}/hostees`,{},sessionKey);
    },
    post(channelId: number, hosteeId: number,sessionKey: string): Promise<void> {
      return v3('post', `channels/${channelId}/hostees`, {
        channelId: hosteeId
      },sessionKey);
    },
    delete(channelId: number,sessionKey: string): Promise<void> {
      return v3('delete', `channels/${channelId}/hostees`,{},sessionKey);
    }
  },
  savedHostees: {
    get(
      channelId: number,
      params: {
        cursor: number;
        count: number;
      },sessionKey: string
    ): Promise<{
      cursor: number;
      savedHosteeList: {
        channel: Channel;
        user: User;
      }[];
    }> {
      return v3('get', `channels/${channelId}/saved-hostees`, params,sessionKey);
    },
    post(channelId: number, hosteeId: number,sessionKey: string): Promise<void> {
      return v3('post', `channels/${channelId}/saved-hostees`, {
        channelId: hosteeId
      },sessionKey);
    },
    delete(channelId: number, hosteeId: number,sessionKey: string): Promise<void> {
      return v3('delete', `channels/${channelId}/saved-hostees/${hosteeId}`,{},sessionKey);
    }
  },
  socialLinks: {
    post(
      channelId: number,
      platform: SocialPlatform,
      link: string,sessionKey: string
    ): Promise<void> {
      // backend will patch the record if platform exists
      return v3('post', `channels/${channelId}/social-links`, {
        platform,
        link
      },sessionKey);
    },
    delete(channelId: number, platform: SocialPlatform,sessionKey: string): Promise<void> {
      return v3('delete', `channels/${channelId}/social-links`, {
        platform
      },sessionKey);
    }
  },
  streamerPrograms: {
    get(
      channelId: number,
      recordOffset: StreamerProgramRecordOffset = StreamerProgramRecordOffset.CURRENT_MONTH,sessionKey: string
    ): Promise<StreamerProgramStats> {
      return v3('get', `channels/${channelId}/streamer-programs`, {
        recordOffset
      },sessionKey);
    },
    post(channelId: number,sessionKey: string) {
      return v3('post', `channels/${channelId}/streamer-programs`,{},sessionKey);
    },
    payouts: {
      get(
        channelId: number,sessionKey: string
      ): Promise<{
        currency: string;
        payoutList: StreamerProgramPayout[];
      }> {
        return v3('get', `channels/${channelId}/streamer-programs/payouts`,{},sessionKey);
      },
      post(
        channelId: number,
        recordId: number,
        withdrawType: StreamerProgramWithdrawType,sessionKey: string,
      ) {
        return v3(
          'post',
          `channels/${channelId}/streamer-programs/payouts/${recordId}`,
          {
            withdrawType
          },sessionKey
        );
      }
    },
    getPermissions(channelId: number,sessionKey: string): Promise<StreamerEntryLevel> {
      return v3(
        'get',
        `channels/${channelId}/streamer-programs/permissions`,{},sessionKey
      );
    }
  },
  pinnedPlaybacks: {
    get(
      channelId: number,sessionKey: string,
      gameId?: number,
      contentLanguage?: string,
      type?: VideoFilterType
    ): Promise<{
      playbackList: PlaybackItem[];
    }> {
      return v3('get', `channels/${channelId}/pinned-playbacks`, {
        type,
        gameId,
        contentLanguage
      },sessionKey);
    }
  }
};
