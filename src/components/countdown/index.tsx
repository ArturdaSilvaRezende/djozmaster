"use client";
import { useState } from "react";
import localFont from "next/font/local";
import styles from "@/styles/_Countdown.module.scss";

const RockvilleSolid = localFont({
  src: "../../../public/assets/fonts/RockvilleSolid.woff",
});

const NowRegular = localFont({
  src: "../../../public/assets/fonts/now-regular.otf",
});

export default function Countdown() {
  const fullYear = new Date();
  const countDownDate = new Date(
    `Dec 31, ${fullYear.getFullYear()} 23:59:59`
  ).getTime();
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

  function calculateCountdown() {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      setDays(days);

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hours);

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }

  calculateCountdown();

  return (
    <div className={styles.countdown}>
      <div className={styles.countdown__container}>
        <div className={styles.countdown__title}>
          <h1 className={RockvilleSolid.className}>
            Tomorrowland {fullYear.getFullYear()}
          </h1>
          <h2 className={NowRegular.className}>Music Festival Start in</h2>
        </div>
        <div className={styles.countdown__numbers}>
          <p>
            <span>
              {(days as number) >= 100 ? days : ("0" + days).slice(-2)}
            </span>
            <span>Days</span>
          </p>
          <p>
            <span>{("0" + hours).slice(-2)}</span>
            <span>Hours</span>
          </p>
          <p>
            <span>{("0" + minutes).slice(-2)}</span>
            <span>Minutes</span>
          </p>
          <p>
            <span>{("0" + seconds).slice(-2)}</span>
            <span>Seconds</span>
          </p>
        </div>
        <button>Buy Tickets</button>
      </div>
    </div>
  );
}
