import Services from "./services";
import Title from "./title";
import styles from "@/styles/main/_AboutServices.module.scss";

export default function AboutServices() {
  return (
    <section className={styles.aboutservices}>
      <Title />
      <Services />
    </section>
  );
}
