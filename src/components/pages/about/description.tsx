import Image from "next/image";
import AboutImage from "/public/assets/images/about/about.png";
import AboutImageSignature from "/public/assets/images/about/signature.png";
import styles from "@/styles/pages/_About.module.scss";

export default function Description() {
  return (
    <section className={styles.about__description}>
      <div className={styles.about__image}>
        <Image src={AboutImage} alt="About Image" />
      </div>

      <div className={styles.about__contents}>
        <h2>He Heard Something That He Knew To Be Music</h2>
        <p>
          At vero eos et accusamus et iusto odi odgnissimos ducimus qui
          blanditiis praesentium volup tatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia deserunt mollitia animi
          quod justo pro an.
        </p>
        <Image src={AboutImageSignature} alt="About Signature" />
      </div>
    </section>
  );
}
