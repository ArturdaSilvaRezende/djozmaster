"use client";
import { useState, useEffect } from "react";
import TitleSection from "@/components/titlesection";
import { SoundsList, SoundsListType } from "./latesttracksList";
import styles from "@/styles/main/_LatestTracks.module.scss";

export default function Tracks() {
  const [sound, setSound] = useState<SoundsListType[]>([]);

  useEffect(() => {
    setSound(SoundsList);
  }, []);

  return (
    <div className={styles.tracks}>
      <TitleSection title="Latest Tracks" subtitle="Master Podcast" />

      <div className={styles.tracks__container}>
        {sound.map((sound) => (
          <div key={sound.id} className={styles.tracks__contents}>
            <p>
              <span>{sound.artist}</span> / <span>{sound.music}</span>
            </p>
            <audio controls>
              <source src={sound.file} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
