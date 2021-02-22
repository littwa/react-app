import React, { useEffect, useRef, useState } from "react";

import { interval, Subject, fromEvent } from "rxjs";
import { takeUntil, debounceTime, buffer, map, filter } from "rxjs/operators";

export default function Stopwatch() {
  const [sec, setSec] = useState(0);
  const [status, setStatus] = useState("stop");
  const waitBtn = useRef();

  useEffect(() => {
    const emit$ = new Subject();

    interval(1000)
      .pipe(takeUntil(emit$))
      .subscribe(() => status === "start" && setSec(x => x + 1000));

    const mouse$ = fromEvent(waitBtn.current, "click");
    const buff$ = mouse$.pipe(debounceTime(300));

    const click$ = mouse$.pipe(
      buffer(buff$),
      map(list => {
        return list.length;
      }),
      filter(x => x === 2),
    );

    click$.subscribe({
      next: () => {
        setStatus("wait");
      },
    });

    return () => emit$.next();
  }, [status]);

  const start = () => {
    setStatus("start");
  };

  const stop = () => {
    setStatus("stop");
    setSec(0);
  };

  const reset = () => {
    setSec(0);
    setStatus(v => (v === "wait" ? "start" : v));
  };

  return (
    <div style={{ padding: "30px" }}>
      <p>{new Date(sec).toISOString().slice(11, 19)}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <button ref={waitBtn}>Wait (x2-click)</button>
    </div>
  );
}
