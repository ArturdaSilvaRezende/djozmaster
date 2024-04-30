import Image from "next/image";
import AboutImage from "/public/assets/images/about/about.png";
import styles from "@/styles/main/_AboutServices.module.scss";
import TitleSection from "@/components/titlesection";

export default function Title() {
  return (
    <div className={styles.title}>
      <figure className={styles.tittle__image}>
        <Image src={AboutImage} alt="About - Image" width={620} height={400} />
      </figure>

      <div className={styles.title__description}>
        <TitleSection title="Dj Alexandra Rud" subtitle="Alexandra Rud" />
        <p>
          DJ Rainflow knows how to move your mind, body and soul by delivering
          tracks that stand out from the norm. As if this impressive succession
          of high impact, floor-filling bombs wasn’t enough to sustain.
        </p>
        <button>Contact Me</button>
      </div>
    </div>
  );
}
