"use client";
import { useState } from "react";
import Navigations from "./navigations";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Popover } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import styles from "@/styles/_Header.module.scss";
import HeaderLogo from "/public/assets/images/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const bgHeaderActive = () => {
    return pathName === "/" ? "bgHeaderDefault" : "bgHeaderActive";
  };

  return (
    <header className={`${bgHeaderActive()} ${styles.header}`}>
      <div className={styles.header__container} aria-label="Global">
        <Link href="/">
          <Image src={HeaderLogo} alt="DjOz - Master" />
        </Link>

        <div className={styles.header__openmenu}>
          <button type="button" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className={styles.header__navigations}>
          <Navigations
            classNameNavigation={styles.header__menu}
            classNameSocial={styles.header__socials}
          />
        </Popover.Group>
      </div>

      <Dialog
        as="div"
        className={`${styles.header__dialog} fadeIn`}
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className={styles.header__panel}>
          <div className={styles.header__controlpanel}>
            <Link href="/">
              <Image src={HeaderLogo} alt="DjOz - Master" />
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <Navigations
            classNameNavigation={styles.header__navigationpanel}
            classNameSocial={styles.header_socialpanel}
          />
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
