/* eslint-disable @typescript-eslint/no-explicit-any */
//import { SocialLink } from 'types/socialLink';

export type PromiseType<T> = T extends (...args: any) => Promise<infer U>
  ? U
  : any;

export interface Language {
  code: string;
  name: string;
}

export type StreamStats = {
  minutesStreamed: number;
  minutesWatched: number;
  totalViewers: number;
  newFollowers: number;
  peakViewers: number;
  peakViewersTime: number;
  clipTotalLikes: number;
  receivedGiftValue: number;
  receivedTicket: number;
  averageViewers: number;
  averageLoggedInBooyahCcu: number;
  uniqueDays: number;
};

export type ServerConfig = {
  global: {
    streamEventsSampleRate: number;
    mux: {
      web: {
        sampleRateDefault: number;
        sampleRateEmbedPlayer: number;
      };
    };
    lootdropConfigs: {gameId: number; loginUrl: string}[];
    assessmentRequestIntervalSec: number;
  };
  regional: {
    region: string;
    socialLinks: any;
    disabledFeatures: string[];
    clanContactEmail: string;
    help: {
      url: string;
      type: string;
    };
  };
};

export const defaultServerConfig: ServerConfig = {
  global: {
    streamEventsSampleRate: 0.5,
    mux: {
      web: {
        sampleRateDefault: 0,
        sampleRateEmbedPlayer: 0,
      },
    },
    lootdropConfigs: [],
    assessmentRequestIntervalSec: 5,
  },
  regional: {
    region: '',
    socialLinks: [],
    disabledFeatures: [],
    clanContactEmail: '',
    help: {
      url: '',
      type: '',
    },
  },
};

export enum FileType {
  mp4 = 'video/mp4',
  jpeg = 'image/jpeg',
  png = 'image/png',
  webp = 'image/webp',
  gif = 'image/gif',
  image = 'image/*',
}

// https://confluence.garenanow.com/display/MAMBET/MTV+Server+Error+Code
export enum ApiErrorCode {
  // 400
  RegionAlreadyUpdated = 400001,
  BalanceInSufficient = 400002,
  WithdrawRegionNotSupport = 400003,
  RegionInvalid = 400010,
  ClanAlreadyApply = 400012,
  UnSupportedAspectRatio = 400018,
  UnsupportedClipBitrate = 400019,
  UnsupportedClipSize = 400020,

  // 403
  Forbidden = 403,
  SessionInvalid = 4030,
  FbGroupRestream = 403001,
  FbPageRestream = 403002,
  NicknameCooldown = 403003,
  NicknameReserved = 403004,
  GameAlreadyLinked = 403005,
  UserRegionNotSupported = 403006,
  UserRegionNotConfirmed = 403007,
  StreamerHasBeenBanned = 403008,
  FFAccountNotBound = 403009,
  JoinClanBeenBanned = 403010,
  LevelNotReached = 403012,
  RegionNotEqual = 403013,
  NotStreaming = 403015,
  GameLinkCooldown = 403016,
  NicknameFilterWords = 403017,
  ClipCampaignInactive = 403022,
  FFBindRegionNotSupported = 403024,
  ChannelCCULimit = 403025,
  ErrorPlaybackProtected = 403027,
  LoginInvalid = 4031,
  NoPriviledge = 4033,
  UserBanned = 4036,
  // 404
  TokenExpired = 4040,
  NotFound = 404,
  FFAccountRegionNotSupported = 404001,
  FFBindingPlayerNotFound = 404002,

  // 409
  Conflict = 409,
  ResourceLimitExceeded = 409001,
  AlreadyJoinOneClan = 409002,
  AlreadyReviewed = 409003, // Daily login
  AlreadyHosted = 409004,

  // 429
  TooManyRequests = 429,

  // 500
  ServerError = 500,
}

export enum FFBindingResult {
  success = 'success',
  error = 'error',
  duplicated = 'duplicate',
  cooldown = 'cooldown',
}
