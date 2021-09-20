import v3 from "../v3";
import { News, NewsTag } from '../../types/news';

export default {
  getItem(newsId: number,sessionKey:string): Promise<News> {
    return v3('get', `news/${newsId}`,{},sessionKey);
  },
  get(params: {
    cursor: number;
    count: number;
    tag?: NewsTag;
  },sessionKey:string): Promise<{
    cursor: number;
    newsList: News[];
  }> {
    return v3('get', 'news', params,sessionKey);
  },
  getTags(sessionKey:string): Promise<{
    tags: NewsTag[];
  }> {
    return v3('get', 'news-tags',{},sessionKey);
  },
  getRecommendedNews(
    newsId: number,sessionKey:string
  ): Promise<{
    newsList: News[];
  }> {
    return v3('get', `recommended-news`, {
      ref_news_id: newsId
    },sessionKey);
  }
};
