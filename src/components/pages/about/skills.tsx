"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/modal";
import localFont from "next/font/local";
import SkillsVideo from "/public/assets/images/about/skill-video.jpg";
import PlayDefault from "/public/assets/images/play-default.png";
import styles from "@/styles/pages/_About.module.scss";

const RockvilleSolid = localFont({
  src: "../../../../public/assets/fonts/RockvilleSolid.woff",
});

export default function Skills() {
  const searchParams = useSearchParams();
  const modalHero = searchParams.get("modalAbout");
  const pathVideoAbout = "/assets/videos/";

  return (
    <section className={styles.about__skills}>
      <div className={styles.skills__description}>
        <div className={styles.description__title}>
          <h1>Dj Alexandra Rud</h1>
          <h2 className={RockvilleSolid.className}>Dj&apos;s Skills</h2>
        </div>
        <p className={styles.description__contents}>
          DJ Rainflow knows how to move your mind, body and soul by delivering
          tracks that stand out from the norm.
        </p>
        <div className={styles.skills__bar}>
          <p>
            <span>Perform</span>
            <span className={styles.perform}>95%</span>
          </p>
          <div className={styles.bar}>
            <span className={styles.perform}></span>
          </div>
        </div>

        <div className={styles.skills__bar}>
          <p>
            <span>Use Midi</span>
            <span className={styles.useMidi}>85%</span>
          </p>
          <div className={styles.bar}>
            <span className={styles.useMidi}></span>
          </div>
        </div>

        <div className={styles.skills__bar}>
          <p>
            <span>Remix and mash up</span>
            <span className={styles.remix}>98%</span>
          </p>
          <div className={styles.bar}>
            <span className={styles.remix}></span>
          </div>
        </div>
      </div>
      <div className={styles.skills__video}>
        <Image
          src={SkillsVideo}
          alt="Skills Videos"
          className={styles.video__image}
          priority
        />
        <Link href="?modalAbout=true">
          <div className={styles.skills__play}>
            <button>
              <Image
                src={PlayDefault}
                alt="Icon Play Default"
                width={49}
                height={49}
              />
            </button>
          </div>
        </Link>
      </div>
      {modalHero && (
        <Modal
          closeModalPath="/about"
          modalVideoPath={pathVideoAbout}
          videoFileName="about.mp4"
        />
      )}
    </section>
  );
}
