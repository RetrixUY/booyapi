import { GroupTier, ProgramLevel } from './streamProgram';
import { Channel } from './channel';
import { User } from './user';
import { Stream } from './stream';

export enum ClanApplicationReview {
  REJECT = 0,
  ACCEPT = 1
}

export enum ClanStatsSort {
  HOURS_WATCHED = 0,
  HOURS_STREAMED = 1
}

// value here are random
export enum ClanStatsFilter {
  TODAY = 0,
  YESTERDAY = 1,
  CURRENT_WEEK = 10,
  LAST_WEEK = 11,
  CURRENT_MONTH = 20,
  LAST_MONTH = 21
}

export enum ClanStatsType {
  DAY = 1,
  WEEK = 2,
  MONTH = 3
}

export enum ClanApplicationStatus {
  NOT_APPLYING = 0,
  PENDING = 1,
  APPROVED = 2,
  REJECTED = 3
}

export type Clan = {
  id: number;
  alias?: string;
  name: string;
  description: string;
  createTime: number;
  updateTime: number;
  memberCount: number;
  memberLimit: number;
  entryGroupId: GroupTier;
  entryLevelId: ProgramLevel;
  region: string;
  resources: {
    badgeUrl: string;
    logoUrl: string;
    pcBannerUrl: string;
    mobileBannerUrl: string;
    colorCode: string;
  };
  socialLinkList: [];
  memberList: ClanMember[];
  adminList: number[];
  applicationStatus?: ClanApplicationStatus;
  applicationCooldownTime?: number; // timestamp, the next time user can apply again after application has been rejected
  isEsports?: boolean;
};

export interface ClanStats {
  loggedInMinutesWatched: number;
  minutesStreamed: number;
  minutesWatched: number;
}

export interface ClanMemberStats extends ClanStats {
  uid: number;
  nickname: string;
  thumbnail: string;
}

export interface ClanMember {
  id: number;
  user: User;
  channel: Channel;
  createTime: number;
  stream?: Stream; // exists when channel.isStreaming is true
}

export interface ClanApplication {
  clanId: number;
  createTime: number;
  email: string;
  id: number;
  loggedInMinutesWatched: number;
  minutesStreamed: number;
  minutesWatched: number;
  phone: string;
  reason: string;
  status: ClanApplicationStatus;
  updateTime: number;
  user: {
    thumbnail: string;
    nickname: string;
    uid: number;
  };
}

export const defaultClan = {
  id: 0,
  name: '– –',
  description: '',
  createTime: 0,
  updateTime: 0,
  memberCount: 0,
  memberLimit: 0,
  entryGroupId: GroupTier.ENTRY,
  entryLevelId: ProgramLevel.NONE,
  region: '',
  resources: {
    badgeUrl: '',
    logoUrl: '',
    pcBannerUrl: '',
    mobileBannerUrl: '',
    colorCode: ''
  },
  socialLinkList: [],
  memberList: [],
  adminList: []
};
