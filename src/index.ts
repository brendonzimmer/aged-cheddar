import { date } from "./core/date";
import { age } from "./core/age";

export { date, age };

/**
 * Date input type.
 *
 * Can produce invalid dates without the internal `check` function.
 *
 * Order: Year, Month, Day
 */
export type SelectorArray = [
  number,
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  (
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
  )
];
