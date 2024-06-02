import Breadcrumb from "@/components/breadcrumb";
import Hero from "./hero";
import Carousel from "./carousel";
import TitleSection from "@/components/titlesection";
import BtnBackToTop from "@/components/features/btnbacktotop";
import styles from "@/styles/pages/_Videos.module.scss";

export default function PageVideos() {
  return (
    <>
      <main className={styles.videos}>
        <Breadcrumb page="Videos" />
        <section className={styles.videos__contents}>
          <TitleSection title="Youtube Feed" subtitle="Latest Videos" />
          <Hero />
          <Carousel />
        </section>
      </main>
      <BtnBackToTop />
    </>
  );
}
