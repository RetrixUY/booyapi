import { Resolution, Mirror } from './videoPlayer';
import { User } from './user';
import { Channel } from './channel';
import { FFLuckyDrawRoundInfo } from './luckyDraw';

export interface Stream {
  gameBuildId: number;
  snapshot: string;
  streamAddrList: Resolution[];
  mirrorList: Mirror[];
  defaultMirror: string;
  viewerCount: number;
  encoder?: string;
  lootdropInfo?: Lootdrop;
  luckyDrawInfo?: LuckyDrawInfo;
  viewerCountInfo: ViewerCount[];
  createTime: number;
  sourceStreamUrlPath: string;
}

export const defaultStream = {
  gameBuildId: 0,
  snapshot: '',
  streamAddrList: [],
  mirrorList: [],
  defaultMirror: '',
  viewerCount: 0,
  viewerCountInfo: []
};

export interface StreamItem {
  channel: Channel;
  user: User;
  stream: Stream;
}

export interface Lootdrop {
  bigLabel: string;
  webPreBindIcon: string;
  webPostBindIcon: string;
  webPreBindBanner: string;
  webPostBindBanner: string;
  accountId?: string;
  loginUrl: string;
  name: string;
}

export interface LuckyDrawInfo {
  countDownTime: number;
  roundInfo: FFLuckyDrawRoundInfo;
}

export const defaultLuckyDrawInfo = {
  countDownTime: -1,
  roundInfo: {
    channelId: 0,
    criteria: -1,
    itemUniq: '',
    mode: 0,
    quantity: 0,
    roundId: 0,
    winnerAmount: 0
  }
};

export type ViewerCount = {
  liveViews: number;
  platform: string;
};

export interface StreamSettings {
  channelId: number;
  description: string;
  gameBuildId: number;
  streamingLang: string;
  title: string;
  voiceCommand: boolean;
  resolution: string;
  settingList: {
    platform: string;
    fbGroupId?: string;
    fbGroupName?: string;
    fbPageId?: string;
    fbPageName?: string;
    private?: number;
    streamKey?: string;
    streamUrl?: string;
  }[];
  streamStartMsg: string;
  tagUniq: string;
  thumbnail: string; // absolute path
  thumbnailPath: string; // relative path, used to send to backend if thumbnail is not changed
}

export type FBTarget = {
  id: string;
  name: string;
  picture: string;
};

export enum FBPrivacy {
  MY_WALL = 0,
  ONLY_ME = 1
}

export type FBRestream = {
  groupId: string;
  groupName: string;
  pageId: string;
  pageName: string;
  privacy: FBPrivacy;
};

export interface HostStreamItem extends StreamItem {
  hosterList: {
    channelId: number;
    createTime: number;
    followerCount: number;
    nickname: string;
    thumbnail: string;
    updateTime: number;
  }[];
}

export const defaultStreamSettings = {
  channelId: 0,
  description: '',
  gameBuildId: 0,
  streamingLang: '',
  title: '',
  voiceCommand: false,
  resolution: '',
  settingList: [],
  streamStartMsg: '',
  tagUniq: '',
  thumbnail: '',
  thumbnailPath: ''
};
