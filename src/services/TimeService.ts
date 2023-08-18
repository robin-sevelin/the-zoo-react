import { DateTime } from 'luxon';

export const checkHoursPassed = (timeStamp: string) => {
  const threeHoursPassed = DateTime.now().minus({ hours: 3 });
  const timestampDateTime = DateTime.fromISO(timeStamp);

  return timestampDateTime <= threeHoursPassed;
};
