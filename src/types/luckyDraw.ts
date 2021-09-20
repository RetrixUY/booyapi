import {User} from './user';

export type FFLuckyDrawItem = {
  amount: number;
  itemUniq: string;
  quantity: number;
};

export type FFLuckyDrawWinner = {
  createTime: number;
  itemUniq: string;
  quantity: number;
  user: User;
};

export type FFReward = {
  iconUrl: string;
  itemUniq: string;
  name: string;
};

export type FFLuckyDrawReply = {
  refundedRewardList: FFLuckyDrawItem[];
  winnerList: FFLuckyDrawWinner[];
};

export type RewardsMap = {
  [itemUniq: string]: FFReward;
};

export enum FFLuckyDrawMode {
  INSTANT = 0,
  COUNTDOWN = 1,
}

export enum FFLuckyDrawCriteriaType {
  NOT_SET = -1,
  ALL_USER = 0,
  FOLLOWER = 1,
  ALL_GIFTER = 2,
  COIN_GIFTER = 4,

  // combination values
  FOLLOWER_ALL_GIFTER = FFLuckyDrawCriteriaType.FOLLOWER |
    FFLuckyDrawCriteriaType.ALL_GIFTER, // 3
  FOLLOWER_COIN_GIFTER = FFLuckyDrawCriteriaType.FOLLOWER |
    FFLuckyDrawCriteriaType.COIN_GIFTER, // 5

  WT30 = 8, // watch time 30 min
  WT1 = 16, // watch time 1 hour
  WT3 = 32,
  WT10 = 64,

  PT24 = 128, // period time 24 hours
  PT3 = 256, // period time 3 days
  PT10 = 512,
  PT30 = 1024,
}

export type FFLuckyDrawCriteriaSelectType = {
  value: number;
  label: string;
  num: number;
};

export type FFLuckyDrawRoundInfo = {
  channelId: number;
  createTime?: number;
  criteria: number;
  itemUniq: string;
  mode: number;
  quantity: number;
  roundId: number;
  status?: number;
  updateTime?: number;
  winnerAmount: number;
  cancelReason?: string;
};

export type FFLuckyDrawRounds = {
  isWinner: boolean;
  roundInfo: FFLuckyDrawRoundInfo;
  itemInfo: FFReward;
};

export enum FFLuckyDrawStatus {
  CLOSED = 0,
  ONGOING = 1,
  CANCELMANUALLY = 2,
  MANUALAUTOMATICALLY = 3,
  EXCEPTION = 4,
}
