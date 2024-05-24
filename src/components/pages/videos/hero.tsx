import Image from "next/image";
import VideosImageHero from "/public/assets/images/videos/large-item.jpg";
import styles from "@/styles/pages/_Videos.module.scss";

export default function Hero() {
  const fullYear = new Date();

  return (
    <figure className={styles.videos__hero}>
      <Image src={VideosImageHero} alt="Image Hero" width={1200} height={500} />

      <figcaption className={styles.hero__caption}>
        <h4>
          Martin Garrix & Pierce Fulton feat. Mike Shinoda - Waiting For
          Tomorrow (Official Video)
        </h4>
        <p>Dec 17, {fullYear.getFullYear()}</p>
      </figcaption>
    </figure>
  );
}
