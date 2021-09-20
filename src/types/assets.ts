export type memeList = {
    id: number;
    name: string;
    snapshot: string;
    url: string;
  };
  
  export type musicList = {
    duration: number;
    id: number;
    name: string;
    thumbnail: string;
    url: string;
  };
  
  export type soundEffectList = {
    duration: number;
    id: number;
    name: string;
    url: string;
  };
  
  export type stickerList = {
    id: number;
    name: string;
    snapshot: string;
    url: string;
  };
  
  export enum assetsType {
    music = 1,
    sfx = 2,
    sticker = 3,
    meme = 4
  }
  
  export enum assetsMode {
    all = 0,
    happy = 1,
    sad = 2,
    surprise = 4,
    wonder = 8,
    weird = 16,
    fail = 32,
    fear = 64,
    funny = 128,
    angry = 256,
    ff = 512
  }
  