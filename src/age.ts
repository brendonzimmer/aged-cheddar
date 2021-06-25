import type { SelectorArray } from "../index";
import { check } from "./util/check";

/**
 * Returns the age (in years) from present time or a specified date.
 *
 * First param is the day of birth.
 *
 * Second param (optional) is the chosen date (otherwise it is present time).
 */
export function age([year, month, day]: SelectorArray, until?: SelectorArray): number {
  if (!check(year, month, day)) throw new Error(`Invalid Date - ${month + "/" + day + "/" + year} does not exist.`);

  const date = new Date(year, month - 1, day);
  let now;

  if (until) {
    if (!check(until[0], until[1], until[2]))
      throw new Error(`Invalid Date - ${until[1] + "/" + until[2] + "/" + until[0]} does not exist.`);

    now = new Date(until[0], until[1] - 1, until[2]);
  } else {
    now = new Date();
  }

  const difference = (now.getTime() - date.getTime()) / 1000 / 60 / 60 / 24 / 365.2425; // in years
  return difference;
}
