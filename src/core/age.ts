import type { SelectorArray } from "../index";
import { check } from "../helpers/check";
import { truncate } from "../helpers/truncate";

/**
 * Returns the age (in years) from present time or a specified date.
 *
 * First param is the day of birth.
 *
 * Second param (optional) is the chosen date (otherwise it is present time).
 */
export function age([year, month, day]: SelectorArray, until?: SelectorArray, options?: { toString: boolean }) {
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

  // if toString set to true
  if (options && options.toString) {
    const _years = difference;
    const _months = (difference % 1) * 12;
    const _weeks = (_months % 1) * 4.348125;
    const _days = (_weeks % 1) * 7;
    const _hours = (_days % 1) * 24;

    // if diff > 1 year put in terms of year
    if (_years >= 1) {
      return `${truncate(_years)}y ${truncate(_months) ? truncate(_months) + "m" : ""}`;
    }
    // if diff > 1 month < 1 year ""
    if (_months >= 1) {
      return `${truncate(_months)}m ${truncate(_weeks) ? `${truncate(_weeks)}w` : ""}`;
    }
    // if diff > 1 week < 1 month ""
    if (_weeks >= 1) {
      return `${truncate(_weeks)}w ${truncate(_days) ? `${truncate(_days)}d` : ""}`;
    }
    // if diff > 1 day < 1 week ""
    if (_days >= 1) {
      return `${truncate(_days)}d ${truncate(_hours) ? `${truncate(_hours)}h` : ""}`;
    }
    // if diff > 1 hour < 1 day ""
    if (_hours >= 1) {
      return `${truncate(_hours)}h`;
    }
  }

  return difference;
}
