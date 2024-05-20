"use client";
import { useState, useEffect } from "react";
import { nowRegular } from "@/fonts/fonts";
import { RockvilleSolid } from "@/fonts/fonts";
import styles from "@/styles/_Countdown.module.scss";

type classesProps = {
  countdownClass?: string;
  countdownContainerClass?: string;
};

export default function Countdown({
  countdownClass,
  countdownContainerClass,
}: classesProps) {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  const [expired, setExpired] = useState<number>();
  const fullYear = new Date();
  const countDownDate = new Date(
    `Dec 31, ${fullYear.getFullYear()} 23:59:59`
  ).getTime();

  useEffect(() => {
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
        setExpired(distance);
      }, 1000);

      return () => clearInterval(interval);
    }

    calculateCountdown();
  }, [countDownDate]);

  return (
    <div className={`${styles.countdown} ${countdownClass}`}>
      <div
        className={`${styles.countdown__container} ${countdownContainerClass}`}
      >
        <div className={styles.countdown__title}>
          <h1 className={RockvilleSolid.className}>
            Tomorrowland {fullYear.getFullYear()}
          </h1>
          <h2 className={nowRegular.className}>Music Festival Start in</h2>
        </div>
        <div className={styles.countdown__numbers}>
          {(expired as number) <= 0 ? (
            <p className={styles.expired}>
              <span>EXPIRED</span>
            </p>
          ) : (
            <>
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
            </>
          )}
        </div>
        <button>Buy Tickets</button>
      </div>
    </div>
  );
}
