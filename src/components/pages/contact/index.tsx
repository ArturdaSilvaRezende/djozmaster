import Breadcrumb from "@/components/breadcrumb";
import BtnBackToTop from "@/components/features/btnbacktotop";
import GoogleMaps from "./googleMaps";
import ContactInfo from "./contactInfo";
import styles from "@/styles/pages/_GoogleMaps.module.scss";

export default function PageContact() {
  return (
    <>
      <main className={styles.contact}>
        <Breadcrumb page="Contact" />
        <GoogleMaps />
        <ContactInfo />
      </main>
      <BtnBackToTop />
    </>
  );
}
