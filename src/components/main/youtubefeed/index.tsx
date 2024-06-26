"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import TitleSection from "@/components/titlesection";
import { FestivalType, FestivalList } from "./youtubefeedlist";
import PlayDefault from "/public/assets/images/play-default.png";
import styles from "@/styles/main/_YoutubeFeed.module.scss";
import "@/styles/_animations.scss";

export default function YoutubeFeed() {
  const [festivals, setFestivals] = useState<FestivalType[]>([]);
  const [activeVideo, setTActiveVideo] = useState(0);

  const showActiveVideo = (cardId: number) => {
    setFestivals((festival) => {
      return festival.map((card) => {
        if (card.id === cardId) {
          setTActiveVideo(cardId);
        }
        return card;
      });
    });
  };

  const closeVideo = () => {
    setTActiveVideo(0);
  };

  useEffect(() => {
    setFestivals(FestivalList);
  }, []);

  return (
    <section className={styles.youtubefeed}>
      <TitleSection title="Youtube feed" subtitle="Latest videos" />
      <div className={styles.youtubefeed__container}>
        {festivals.map((festival) => (
          <figure key={festival.id} className={styles.youtubefeed__item}>
            <div className={styles.youtubefeed__contents}>
              <Image
                src={festival.fileImageName}
                alt={festival.festivalAbout}
                width={500}
                height={0}
                className={styles.imageCard}
              />

              {activeVideo === festival.id && (
                <div className={`${styles.youtubefeed__video} fadeIn`}>
                  <button type="button" onClick={() => closeVideo()}>
                    <AiOutlineClose />
                  </button>
                  <video controls>
                    <source src={festival.fileVideoName} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <div className={styles.youtubefeed__play}>
                <button onClick={() => showActiveVideo(festival.id)}>
                  <Image
                    src={PlayDefault}
                    alt="Play Icon Default"
                    width={33}
                    height={33}
                  />
                </button>
              </div>
            </div>

            <figcaption className={styles.youtubefeed__description}>
              <p>Imagine Music Festival</p>
              <h3>{festival.festivalAbout}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
