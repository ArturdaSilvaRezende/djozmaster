import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import styles from "@/styles/pages/_GoogleMaps.module.scss";

export default function ContactInfo() {
  return (
    <section className={styles.contactinfo}>
      <div className={styles.contact__contents}>
        <h2>Contact info</h2>
        <ul className={styles.contents__itens}>
          <li>
            <p>
              <FaMapMarkerAlt />
            </p>
            <p>
              <span>Address</span>
              <span>Los Angeles Gournadi, 1230 Bariasl</span>
            </p>
          </li>

          <li>
            <p>
              <FaPhoneAlt />
            </p>
            <p>
              <span>Hotline</span>
              <span>1-677-124-44227</span>
              <span>1-688-356-66889</span>
            </p>
          </li>

          <li>
            <p>
              <GrMail />
            </p>
            <p>
              <span>Email</span>
              <span>Support@gamail.com</span>
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.contact__form}>
        <h2>Get in touch</h2>
        <form>
          <div className={styles.form__inputs}>
            <input type="text" placeholder="text" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="website" />
          </div>

          <textarea placeholder="comments"></textarea>

          <button type="button">Send Message</button>
        </form>
      </div>
    </section>
  );
}
