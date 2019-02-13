/* @flow */

import type {
  SugarlessIterator,
  SugarlessIteratorResult,
} from "@capnp-js/transform";

export function concat<T>(t1: SugarlessIterator<T>, t2: SugarlessIterator<T>): SugarlessIterator<T> {
  let which: 1 | 2 = 1;

  return {
    next(): SugarlessIteratorResult<T> {
      if (which === 1) {
        const next = t1.next();
        if (next.done === true) {
          which = 2;
          return t2.next();
        } else {
          return next;
        }
      } else {
        (which: 2);
        return t2.next();
      }
    },
  };
}
