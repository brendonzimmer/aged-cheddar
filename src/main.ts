/**
 * returns `true` if `year` is a leap year.
 * @internal
 */
function leap(year: number) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

/**
 * returns `true` if params make a valid date.
 * @internal
 */
function check(year: selector["year"], month: selector["month"], day: selector["day"]) {
  if (month === 2) {
    if (leap(year)) return day <= 29;
    return day <= 28;
  }

  if (month === (4 || 6 || 7 || 9 || 11)) return day <= 30;
  return day <= 31;
}

/**
 * returns the age (in years) from present time or a specified date.
 */
export default function age({ year, month, day }: selector, until?: selector) {
  if (!check(year, month, day)) throw new Error(`Invalid Date - ${month + "/" + day + "/" + year} does not exist.`);

  const date = new Date(year, month - 1, day);
  const now = until ? new Date(until.year, until.month - 1, until.day) : new Date();

  const difference = (now.getTime() - date.getTime()) / 1000 / 60 / 60 / 24 / 365.2425; // in years
  return difference;
}
