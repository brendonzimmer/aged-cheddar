import type { SelectorArray } from "../index";
import { leap } from "./leap";

/**
 * returns `true` if params make a valid date.
 * @internal
 */
export function check(year: SelectorArray[0], month: SelectorArray[1], day: SelectorArray[2]) {
  if (month === 2) {
    if (leap(year)) return day <= 29;
    return day <= 28;
  }

  if (month === (4 || 6 || 7 || 9 || 11)) return day <= 30;
  return day <= 31;
}
