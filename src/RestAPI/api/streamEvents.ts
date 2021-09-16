import { apiv3 } from '..';
import { Stream } from '../../types/stream';
import { Channel } from '../../types/channel';
import { TimeLimitedTask } from '../../types/tasks';
import { User } from '../../types/user';

export default {
  getItem(eventId: number,sessionKey: string): Promise<TimeLimitedTask> {
    return apiv3('get', `stream-events/${eventId}`,{},sessionKey);
  },
  getSchedules(
    eventId: number,sessionKey: string
  ): Promise<{
    scheduleInfoList: {
      user: User;
      channel: Channel;
      stream?: Stream; // stream only exist when stream is online
      utcStreamDayBeginTime: number;
      utcStreamTime: number;
    }[];
  }> {
    return apiv3('get', `stream-events/${eventId}/schedules`,{},sessionKey);
  }
};
