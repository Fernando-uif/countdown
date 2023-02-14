import { useState, useEffect } from "react";
import moment from "moment";

import time from "../sass/layout/timer.module.scss";
import text from "../sass/base/text.module.scss";

export const Timer = () => {
  const fechaFinal = moment("06-04-2023", "MM-DD-YYYY");
  const [days, setdays] = useState("0");
  const [hours, sethours] = useState("0");
  const [minutes, setminutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  useEffect(() => {
    if (!fechaFinal.diff(moment(), "days")) return;
    const timer = setInterval(() => {
      setdays(fechaFinal.diff(moment(), "days"));
      sethours(24 - moment().hours());
      setminutes(60 - moment().minutes());
      setSeconds(60 - moment().seconds());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  return (
    <section className={`${time.timer}`}>
      <article>
        <div className={`${time.time}`}>
          <span className={`${time.line}`}></span>
          {days}
        </div>
        <div className={`${text.detail}`}>days</div>
      </article>

      <article>
        <div className={`${time.time}`}>{hours}</div>
        <div className={`${text.detail}`}>hours</div>
      </article>

      <article>
        <div className={`${time.time}`}>{minutes}</div>
        <div className={`${text.detail}`}>minutes</div>
      </article>

      <article>
        <div className={`${time.time}`}>{seconds}</div>
        <div className={`${text.detail}`}>seconds</div>
      </article>
    </section>
  );
};
