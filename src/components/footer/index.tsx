"use client";
import { usePathname } from "next/navigation";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { nowRegular } from "@/fonts/fonts";
import "../../styles/_footer.scss";

export default function Footer() {
  const pathName = usePathname();

  const handleMarginTop = () => {
    return pathName === "/" ? "footer__margintop" : "";
  };

  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className={`footer ${handleMarginTop()}`}>
      <div className="footer__container">
        <div className="footer__contact">
          <div className="contactItem">
            <div>
              <FaPhoneAlt />
            </div>
            <div>
              <p className={nowRegular.className}>Phone</p>
              <p>1-677-124-44227</p>
            </div>
          </div>
          <div className="contactItem">
            <div>
              <GrMail />
            </div>
            <div>
              <p className={nowRegular.className}>Email</p>
              <p>djmusic@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer__social">
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
        <div className="footer__sendEmail">
          <h2>Stay With Me</h2>
          <form>
            <div>
              <input type="email" name="e-mail" />
              <button type="button">
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="footer__copyright">
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
