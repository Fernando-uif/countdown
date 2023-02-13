import React from "react";
import time from "../sass/layout/timer.module.scss";
import text from "../sass/base/text.module.scss";
export const Timer = () => {
  return (
    <section className={`${time.timer}`}>
      <article>
        <div className={`${time.time}`}>
          <span className={`${time.line}`}></span>
          08
        </div>
        <div className={`${text.detail}`}>days</div>
      </article>

      <article>
        <div className={`${time.time}`}>23</div>
        <div className={`${text.detail}`}>hours</div>
      </article>

      <article>
        <div className={`${time.time}`}>55</div>
        <div className={`${text.detail}`}>minutes</div>
      </article>

      <article>
        <div className={`${time.time}`}>41</div>
        <div className={`${text.detail}`}>seconds</div>
      </article>
    </section>
  );
};
