import Image from "next/image";
import TitleSection from "@/components/titlesection";
import ServiceAsImage01 from "/public/assets/images/services/as-1.jpg";
import ServiceAsImage02 from "/public/assets/images/services/as-2.jpg";
import ServiceAsImage03 from "/public/assets/images/services/as-3.jpg";
import ServiceAsImageIcon01 from "/public/assets/images/services/as-icon-1.png";
import ServiceAsImageIcon02 from "/public/assets/images/services/as-icon-2.png";
import ServiceAsImageIcon03 from "/public/assets/images/services/as-icon-3.png";
import styles from "@/styles/pages/_About.module.scss";

export default function Services() {
  return (
    <section className={styles.services}>
      <TitleSection title="Where do i play" subtitle="Best Service" />

      <div className={styles.services__container}>
        <figure>
          <Image
            src={ServiceAsImage01}
            alt="Service As Image 01"
            className={styles.image__card}
          />

          <figcaption>
            <div>
              <Image
                src={ServiceAsImageIcon01}
                alt="Service As Image Icon 01"
              />
            </div>

            <h3>Wedding</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </figcaption>
        </figure>

        <figure>
          <Image
            src={ServiceAsImage02}
            alt="Service As Image 02"
            className={styles.image__card}
          />

          <figcaption>
            <div>
              <Image
                src={ServiceAsImageIcon02}
                alt="Service As Image Icon 02"
              />
            </div>

            <h3>Clubs and bar</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </figcaption>
        </figure>

        <figure>
          <Image
            src={ServiceAsImage03}
            alt="Service As Image 03"
            className={styles.image__card}
          />

          <figcaption>
            <div>
              <Image
                src={ServiceAsImageIcon03}
                alt="Service As Image Icon 03"
              />
            </div>

            <h3>Corporate events</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
