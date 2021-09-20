import v3 from "../v3";

export default {
  get(
    updateTime: number,
    cursor: number,
    count: number,sessionKey: string
  ): Promise<{
    cursor: number;
    stickerPackList: {
      id: number;
      updateTime: number;
      lang?: string;
      name?: string;
      thumbnail?: string;
      stickerList?: {
        id: number;
        updateTime: number;
        packId?: number;
        name?: string;
        url?: string;
      }[];
    }[];
  }> {
    return v3('get', 'sticker-packs', {
      lang: undefined,
      updateTime,
      cursor,
      count
    },sessionKey);
  }
};
