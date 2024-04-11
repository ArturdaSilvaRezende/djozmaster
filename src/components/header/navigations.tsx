import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderLinks, NavLinks } from "./navlinks";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

type Props = {
  classNameNavigation: string;
  classNameSocial: string;
};

export default function Navigations({
  classNameNavigation,
  classNameSocial,
}: Props) {
  const [links] = useState<NavLinks[]>(HeaderLinks);
  const pathName = usePathname();

  const isActive = (href: string) => {
    pathName.endsWith(href);
    return pathName === href ? "active" : "";
  };

  return (
    <>
      <nav className={classNameNavigation}>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={`${isActive(link.href)}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ul className={classNameSocial}>
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
    </>
  );
}
