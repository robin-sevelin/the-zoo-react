import { DateTime } from 'luxon';

export const hoursPassed = (timeStamp: string) => {
  return DateTime.fromISO(timeStamp);
};
