/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author RetrixUY <retrixuy@gmail.com>
*/

import ApiApps from './api/apps';
import ApiAuths from './api/auths';
import ApiAssets from './api/assets';
import ApiCallbacks from './api/callbacks';
import ApiChannels from './api/channels';
import ApiChatrooms from './api/chatrooms';
import ApiClans from './api/clans';
import ApiClipCampaigns from './api/clipCampaigns';
import ApiComments from './api/comments';
import ApiContentLanguages from './api/contentLanguages';
import ApiFeeds from './api/feeds';
import ApiFFAccounts from './api/ffAccounts';
import ApiFreeGifts from './api/freeGifts';
import ApiGames from './api/games';
import ApiGameBuilds from './api/gameBuilds';
import ApiGifts from './api/gifts';
import ApiGuests from './api/guests';
import ApiNews from './api/news';
import ApiPlaybacks from './api/playbacks';
import ApiProtections from './api/protections';
import ApiRankings from './api/rankings';
import ApiReports from './api/reports';
import ApiSearches from './api/searches';
import ApiStickers from './api/stickers';
import ApiStickerPacks from './api/stickerPacks';
import ApiStreamEvents from './api/streamEvents';
import ApiStreams from './api/streams';
import ApiStreamerPrograms from './api/streamerPrograms';
import ApiTags from './api/tags';
import ApiUtils from './api/utils';
import ApiUsers from './api/users';
import v3 from './v3';

export default {
    getServerTs(): Promise<{serverTs: number}>{
        return v3('get','server-ts',{},'');
         },
    auths: ApiAuths,
    apps: ApiApps,
    assets: ApiAssets,
    callbacks: ApiCallbacks,
    channels: ApiChannels,
    chatrooms: ApiChatrooms,
    clans: ApiClans,
    clipCampaigns: ApiClipCampaigns,
    comments: ApiComments,
    contentLanguages: ApiContentLanguages,
    feeds: ApiFeeds,
    ffAccounts: ApiFFAccounts,
    freeGifts: ApiFreeGifts,
    games: ApiGames,
    gameBuilds: ApiGameBuilds,
    gifts: ApiGifts,
    guests: ApiGuests,
    news: ApiNews,
    playbacks: ApiPlaybacks,
    protections: ApiProtections,
    rankings: ApiRankings,
    report: ApiReports,
    searches: ApiSearches,
    stickerPacks: ApiStickerPacks,
    stickers: ApiStickers,
    streamEvents: ApiStreamEvents,
    streamerPrograms: ApiStreamerPrograms,
    streams: ApiStreams,
    tags: ApiTags,
    utils: ApiUtils,
    users: ApiUsers,
}
