import { PlaybackItem } from './playback';

export enum Sort {
  Hot = 0,
  Latest = 1
}

type Reward = {
  ffItemIconUrl: string;
  ffItemName: string;
  rewardAmount: number;
  rewardType: number;
};

export enum ClipCampaignRewardType {
  BOOYAH_TICKET = 0,
  FREEFIRE_GIFT = 2,
  CASH_COIN = 3
}

export type RankReward = {
  rank: number;
  rewardList: Reward[];
};

export enum Status {
  disabled = 0,
  enabled = 1,
  ended = 2,
  reviewed = 3
}

export type ClipCampaign = {
  bannerUrl: string;
  canJoin: boolean; // backend returns true if region matches
  createTime: number;
  demoEntryList: PlaybackItem[];
  endTime: number;
  entryCount: number;
  id: number;
  name: string;
  rankRewardList: RankReward[];
  region: string;
  rules: string;
  startTime: number;
  status: Status;
  topEntryList: PlaybackItem[];
  totalLikeCount: number;
  totalViewCount: number;
  updateTime: number;
};

export const defaultClipCampaign: ClipCampaign = {
  bannerUrl: '',
  canJoin: false,
  createTime: 0,
  demoEntryList: [],
  endTime: 0,
  entryCount: 0,
  id: 0,
  name: '',
  rankRewardList: [],
  region: '',
  rules: '',
  startTime: 0,
  status: Status.enabled,
  topEntryList: [],
  totalLikeCount: 0,
  totalViewCount: 0,
  updateTime: 0
};

export type ActiveClipCampaign = {
  bannerUrl: string;
  endTime: number;
  id: number;
  name: string;
  startTime: number;
};
