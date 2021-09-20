import {User} from './user';
import {Channel} from './channel';

export enum RankingTimeScope {
  day = 0,
  week = 1,
  month = 2,
}

export enum RankingListKey {
  MOST_WATCHED = 'watchedTimeRankingList',
  RISING_STAR = 'exclSgdWatchedTimeRankingList',
  MOST_POPULAR = 'popularityRankingList',
  COMMUNITY_DARLINGS = 'exclSgdPopularityRankingList',
  SWAG_KINGS = 'contributionRankingList',
}

export type RankingUserProfile = {
  user: User;
  channel: Channel;
  rank: {
    rankDiff: number;
    score: number;
  };
};

export type RankingsList = {
  [RankingTimeScope.day]: RankingUserProfile[];
  [RankingTimeScope.week]: RankingUserProfile[];
  [RankingTimeScope.month]: RankingUserProfile[];
};

export type Rankings = {
  [RankingListKey.MOST_WATCHED]: RankingUserProfile[];
  [RankingListKey.RISING_STAR]: RankingUserProfile[];
  [RankingListKey.MOST_POPULAR]: RankingUserProfile[];
  [RankingListKey.COMMUNITY_DARLINGS]: RankingUserProfile[];
  [RankingListKey.SWAG_KINGS]: RankingUserProfile[];
};

export type RankingCard = {
  id: string;
  key: RankingListKey;
  timeScope: RankingTimeScope;
  bannerTheme: string;
  name: string;
  showScore: boolean;
};

export const defaultRankingsList = {
  [RankingTimeScope.day]: [],
  [RankingTimeScope.week]: [],
  [RankingTimeScope.month]: [],
};

export const defaultRankingCards: RankingCard[] = [
  {
    id: 'most-watched',
    key: RankingListKey.MOST_WATCHED,
    timeScope: RankingTimeScope.week,
    bannerTheme: 'yellow',
    name: 'label_ranking_most_watched',
    showScore: false,
  },
  {
    id: 'rising-stars',
    key: RankingListKey.RISING_STAR,
    timeScope: RankingTimeScope.week,
    bannerTheme: 'blue',
    name: 'label_ranking_rising_stars',
    showScore: false,
  },
  {
    id: 'most-popular',
    key: RankingListKey.MOST_POPULAR,
    timeScope: RankingTimeScope.week,
    bannerTheme: 'purple',
    name: 'label_ranking_most_popular',
    showScore: true,
  },
  {
    id: 'community-darlings',
    key: RankingListKey.COMMUNITY_DARLINGS,
    timeScope: RankingTimeScope.week,
    bannerTheme: 'green',
    name: 'label_ranking_community_darlings',
    showScore: true,
  },
  {
    id: 'swag-kings',
    key: RankingListKey.SWAG_KINGS,
    timeScope: RankingTimeScope.week,
    bannerTheme: 'red',
    name: 'label_ranking_swag_kings',
    showScore: true,
  },
];
