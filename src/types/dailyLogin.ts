export type DailyLoginReward = {
  day: number;
  rewardType: DLRewardType;
  rewardAmount: number;
  ffItemName?: string;
  ffItemIconUrl?: string;
  status: DLStatus;
};

export enum DLRewardType {
  BOOYAH_TICKET = 0,
  BOOYAH_COIN = 1,
  FF_ITEM = 2
}

export enum DLStatus {
  UNCLAIMED = 0,
  CLAIMED = 1,
  SKIPPED = 2
}

export enum DLClaimRequest {
  CLAIM = 1,
  SKIP = 2
}
