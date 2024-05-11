import Skills from "./skills";
import Description from "./description";
import Pictures from "./pictures";
import Services from "./services";
import Breadcrumb from "@/components/breadcrumb";
import styles from "@/styles/pages/_About.module.scss";

export default function PageAbout() {
  return (
    <main className={styles.about}>
      <Breadcrumb page="About" />
      <div className={styles.about__container}>
        <Skills />
        <Description />
        <Pictures />
        <Services />
      </div>
    </main>
  );
}
