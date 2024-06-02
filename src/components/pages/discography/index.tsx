import Breadcrumb from "@/components/breadcrumb";
import TitleSection from "@/components/titlesection";
import BtnBackToTop from "@/components/features/btnbacktotop";
import styles from "@/styles/pages/_Discography.module.scss";
import Pagination from "./pagination";

export default function PageDiscography() {
  return (
    <>
      <main className={styles.discography}>
        <Breadcrumb page="Discography" />
        <section className={styles.discography__container}>
          <TitleSection title="Latest Releases" subtitle="discography" />
          <Pagination />
        </section>
      </main>
      <BtnBackToTop />
    </>
  );
}
