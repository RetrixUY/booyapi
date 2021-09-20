export enum DailyTaskStatus {
  PROGRESS = 0,
  FINISHED = 1,
  CLAIMED = 2,
}

export enum DailyTaskReward {
  BOOYAH_TICKET = 0,
  BOOYAH_COIN = 1,
  FFGIFT = 2,
}

export enum DailyTaskType {
  DAILY_LOGIN = 0,
  CHAT_IN_LIVE = 1,
  FOLLOW_STREAMER = 2,
  SENT_GIFT_IN_LIVE = 3,
  SHARE_STREAM = 4,
  WATCH_CLIPS = 5,
  LIKE_CLIPS = 6,
  UPLOAD_CLIPS = 7,
}

export interface DailyTask {
  completeAmount: number;
  name: string;
  recordId: number;
  requireAmount: number;
  rewardAmount: number;
  rewardType: DailyTaskReward;
  status: DailyTaskStatus;
  isDailyLogin?: boolean;
  taskType: DailyTaskType;
}

export const defaultDailyTask: DailyTask = {
  completeAmount: 0,
  name: '',
  recordId: 0,
  requireAmount: 0,
  rewardAmount: 0,
  rewardType: 0,
  status: 0,
  taskType: 0,
};

export enum TLEStatus {
  PROGRESS = 0,
  FINISHED = 1,
  CLAIMED = 2,
}

export enum TLEPrizeType {
  PRIZE = 1,
  CONSOLATION = 2,
}

export enum TLERewardType {
  BOOYAH_TICKET = 0,
  FREEFIRE_ITEM = 1,
}

export enum TLEQueryType {
  COMPLETED = 0,
  ALL = 1,
}

export enum TLEClaimQueryType {
  CLAIM = 0,
  GIVE_UP = 1,
}

export enum TLEEventType {
  CLAIM_BOOYAH_TICKET = 1,
  WATCH_STREAM = 2,
  WATCH_CLIP = 3,
}
export enum TLEEventScope {
  ALL_PLATFORM = 0,
  SPECIFIC_CHANNEL = 1,
}

export interface TimeLimitedTask {
  bannerUrl: string;
  bigBannerUrl?: string;
  completeAmount: number;
  consolationTicketAmount: number;
  endTs: number;
  eventType: TLEEventType;
  eventScope: TLEEventScope;
  metric: number;
  name: string;
  prizeType: TLEPrizeType;
  recordUuid: string;
  requireAmount: number;
  rewardAmount: number;
  rewardFfItem: {
    iconUrl: string;
    itemName: string;
    itemUniq: string;
  };
  rewardType: TLERewardType;
  userStatus: TLEStatus;
  detail?: string;
  playbackUrl?: string;
  eventId: number;
}

export const defaultTimeLimitedTask: TimeLimitedTask = {
  bannerUrl: '',
  bigBannerUrl: '',
  completeAmount: 0,
  consolationTicketAmount: 0,
  eventType: TLEEventType.CLAIM_BOOYAH_TICKET,
  eventScope: TLEEventScope.ALL_PLATFORM,
  endTs: 0,
  metric: 0,
  name: '',
  prizeType: TLEPrizeType.PRIZE,
  recordUuid: '0',
  requireAmount: 0,
  rewardAmount: 0,
  rewardFfItem: {
    iconUrl: '',
    itemName: '',
    itemUniq: '',
  },
  rewardType: TLERewardType.BOOYAH_TICKET,
  userStatus: TLEStatus.PROGRESS,
  detail: '',
  eventId: 0,
};
