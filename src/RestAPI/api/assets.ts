import { apiv3 } from '..';
import {
  memeList,
  musicList,
  soundEffectList,
  stickerList
} from '../../types/assets';

export default {
  get(
    type: number,
    mood: number,
    lang: string,sessionKey: string,
    cursor?: number,
    count?: number,
  ): Promise<{
    cursor: number;
    memeList: memeList[];
    musicList: musicList[];
    soundEffectList: soundEffectList[];
    stickerList: stickerList[];
  }> {
    return apiv3('get', 'assets', {
      type, // 1: Music, 2: SFX, 3: Sticker, 4: Meme
      mood, // 0: All, 1: Happy, 2: Sad, 4: Surprise, 8: Wonder, 16:Weird, 32:Fail, 64: Fear, 128: Funny, 256: Angry, 512: FF
      sys_lang: lang, // content-language
      cursor,
      count
    },sessionKey);
  }
};
