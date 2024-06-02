"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/modal";
import { RockvilleSolid } from "@/fonts/fonts";
import PlayDefault from "/public/assets/images/play-default.png";
import styles from "@/styles/main/_Hero.module.scss";

export default function Hero() {
  const searchParams = useSearchParams();
  const modalHero = searchParams.get("modalhero");

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.hero__container}>
        <h2>New Sigle</h2>
        <h1 className={RockvilleSolid.className}>Feel the heart beats</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link href="?modalhero=true">
          <div className={styles.hero__play}>
            <button>
              <Image src={PlayDefault} alt="Play Default" />
            </button>
          </div>
        </Link>
      </div>
      {modalHero && (
        <Modal
          closeModalPath="/#hero"
          modalVideoPath="/assets/videos/hero.mp4"
        />
      )}
    </section>
  );
}
