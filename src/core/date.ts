import type { SelectorArray } from "../index";
import { check } from "../helpers/check";

/**
 * Returns the date `X` years from a `specified date`.
 *
 * First param is age in years.
 *
 * Second param is the chosen date.
 */
export function date(age: number, [year, month, day]: SelectorArray) {
  if (!check(year, month, day)) throw new Error(`Invalid Date - ${month + "/" + day + "/" + year} does not exist.`);

  const from = new Date(year, month - 1, day);

  const future = from.getTime() + age * 1000 * 60 * 60 * 24 * 365.2425; // age in years converted to ms and added to chosen date

  const result = new Date(future);

  return result;
}
