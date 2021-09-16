export type News = {
  id: number;
  title: string;
  content: string;
  publishTime: number;
  coverUrl: string;
  tag: NewsTag;
  viewCount: number;
  shareUrl: string;
  summary: string;
  visible: number;
  weight: number;
};

export enum NewsTag {
  New_FEATURES = 'NEW_FEATURES',
  E_SPORTS = 'ESPORTS',
  STREAMER = 'STREAMER',
  EVENTS = 'EVENTS',
  NEWS = 'NEWS',
  ENGINEERING = 'ENGINEERING',
  ANNOUNCEMENTS = 'ANNOUNCEMENTS',
  FREE_FIRE = 'FREE_FIRE'
}

export type NewsTagValue = NewsTag | null;

export interface NewsTab {
  id: string;
  name: string;
  value: NewsTagValue;
  tagContainerColor: 'blue' | 'orange';
}
