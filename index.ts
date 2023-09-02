import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap
// Example 4: mergeMap with resultSelector

// helper to create promise
const innerPromise = (val) =>
  new Promise((resolve) => resolve(`${val}-PromiseVal`));

// emit 'Hello'
const src$ = of('SrcVal');

src$
  .pipe(
    mergeMap(
      (val) => innerPromise(val),
      /* you can also supply a second argument which receives the source value and emitted
      value of inner observable or promise*/
      (valueFromSource, valueFromPromise) => {
        return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
      }
    )
  )
  .subscribe((val) => console.log(val));
// output: "Source: Hello, Promise: Hello World From Promise!"
