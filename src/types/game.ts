import { SessionPlatform } from './platform';

export interface Game {
  gameBuildId: number; // primary key
  gameId: number;
  name: string;
  lang: string;
  portrait: string;
  icon: string;
  packageName: string;
  highlightAvail: number;
  platform: SessionPlatform;
  viewerCount: number;
}

export interface CachedGames {
  [id: number]: Game;
}

// Game list can be updated by server side from time to time, dont hardcode all game id.
// The following game ids are special, it's safe to use these hardcoded game ids.
//   FREE_FIRE: we use it as default game in many pages
//   IRL: it isn't a game, but we put it in game list, and we have some special logic for it
export enum GameIds {
  OTHERS = 0,
  FREE_FIRE = 1,
  ARENA_OF_VALOR = 5,
  IRL = 100000
}

export interface GameFollowingList {
  createTime: number;
  gameId: number;
}

export type GameItem = {
  game: Pick<
    Game,
    'gameBuildId' | 'gameId' | 'name' | 'icon' | 'portrait' | 'viewerCount'
  >;
  isFollowing: boolean;
};
