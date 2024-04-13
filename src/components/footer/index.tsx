import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import localFont from "next/font/local";
import styles from "@/assets/styles/_Footer.module.scss";

const nowRegular = localFont({ src: "../../assets/fonts/now-regular.otf" });
const rajdhaniRegular = localFont({
  src: "../../assets/fonts/Rajdhani-Regular.ttf",
});

export default function Footer() {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__contact}>
          <div className={styles.contactItem}>
            <div>
              <FaPhoneAlt />
            </div>
            <div>
              <p className={nowRegular.className}>Phone</p>
              <p>1-677-124-44227</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div>
              <GrMail />
            </div>
            <div>
              <p className={nowRegular.className}>Email</p>
              <p>djmusic@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.footer__social}>
          <h2>DJoz</h2>
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaDribbble />
            </li>
          </ul>
        </div>
        <div className={styles.footer__sendEmail}>
          <h2>Stay With Me</h2>
          <form>
            <div>
              <input type="email" />
              <button type="button">
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className={styles.footer__copyright}>
        Copyright © {fullYear} All rights reserved | This template is made with
        by
        <a
          href="https://themewagon.com/themes/free-bootstrap-responsive-personal-portfolio-template-djoz/"
          target="_blanck"
        >
          Theme Wagon
        </a>
      </p>
    </footer>
  );
}
