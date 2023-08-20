import { DateTime } from 'luxon';

export const threeHoursPassed = (timeStamp: string) => {
  const threeHoursPassed = DateTime.now().minus({ hour: 3 });
  const timestampDateTime = DateTime.fromISO(timeStamp);

  return timestampDateTime <= threeHoursPassed;
};

export const fourHoursPassed = (timeStamp: string) => {
  const fourHoursPassed = DateTime.now().minus({ hours: 4 });
  const timestampDateTime = DateTime.fromISO(timeStamp);

  return timestampDateTime <= fourHoursPassed;
};
