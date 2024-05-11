import { FaHome } from "react-icons/fa";
import styles from "@/styles/_Breadcrumb.module.scss";
import Link from "next/link";

type BreadcrumpProps = {
  page: string;
};

export default function Breadcrumb({ page }: BreadcrumpProps) {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.breadcrumb__home}>
        <FaHome />
        <Link href="/">Home</Link>
      </div>
      <p className={styles.breadcrum__page}>
        | <span>{page}</span>
      </p>
    </div>
  );
}
