import Image from "next/image";
import Picture01 from "/public/assets/images/about/ap-1.jpg";
import Picture02 from "/public/assets/images/about/ap-2.jpg";
import Picture03 from "/public/assets/images/about/ap-3.jpg";
import Picture04 from "/public/assets/images/about/ap-4.jpg";
import Picture05 from "/public/assets/images/about/ap-5.jpg";
import Picture06 from "/public/assets/images/about/ap-6.jpg";
import Picture07 from "/public/assets/images/about/ap-7.jpg";
import styles from "@/styles/pages/_About.module.scss";

export default function Pictures() {
  return (
    <section className={styles.about__pictures}>
      <Image src={Picture01} alt="Picture ap-1" />
      <Image src={Picture02} alt="Picture ap-2" />
      <Image src={Picture03} alt="Picture ap-3" />
      <Image src={Picture04} alt="Picture ap-4" />
      <Image src={Picture05} alt="Picture ap-5" />
      <Image src={Picture06} alt="Picture ap-6" />
      <Image src={Picture07} alt="Picture ap-7" />
    </section>
  );
}
