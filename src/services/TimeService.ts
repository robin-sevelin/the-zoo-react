import { DateTime } from 'luxon';
import { hoursPassed } from './TimeServiceBase';

export const threeHoursPassed = (timeStamp: string) => {
  const threeHoursPassed = DateTime.now().minus({ hours: 3 });

  return hoursPassed(timeStamp) <= threeHoursPassed;
};

export const fourHoursPassed = (timeStamp: string) => {
  const fourHoursPassed = DateTime.now().minus({ hours: 4 });

  return hoursPassed(timeStamp) <= fourHoursPassed;
};
