import Link from "next/link";
import Modal from "@/components/modal";
import localFont from "next/font/local";
import Image from "next/image";
import PlayDefault from "/public/assets/images/play-default.png";
import styles from "@/styles/main/_Hero.module.scss";

const RockvilleSolid = localFont({
  src: "../../../../public/assets/fonts/RockvilleSolid.woff",
});

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <h2>New Sigle</h2>
        <h1 className={RockvilleSolid.className}>Feel the heart beats</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link href="?modal=true">
          <div className={styles.hero__play}>
            <button>
              <Image src={PlayDefault} alt="Play Default" />
            </button>
          </div>
        </Link>
      </div>
      <Modal>
        <iframe
          src="https://www.youtube.com/embed/SBSQ4-lyVhk?si=bva6GuN9IDdzzcMb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </Modal>
    </section>
  );
}
