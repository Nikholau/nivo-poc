import { differenceInDays } from 'date-fns';

export function howLongToReachThatData(date) {
  const currentDate = new Date();
  currentDate.setUTCHours(0, 0, 0, 0);

  const targetDate = new Date(date);
  targetDate.setUTCHours(0, 0, 0, 0);

  const differenceInDaysValue = differenceInDays(targetDate, currentDate);
  const differenceInMonths = Math.floor(differenceInDaysValue / 30);
  const daysRemaining = differenceInDaysValue % 30;

  return {
    months: differenceInMonths > 0 ? differenceInMonths : 0,
    days: daysRemaining > 0 ? daysRemaining : 0,
  };
}
