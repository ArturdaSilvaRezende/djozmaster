import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import styles from "@/styles/modal/_ModalClose.module.scss";

type PropsPathName = {
  pathname: string;
};

export default function CloseModal(props: PropsPathName) {
  return (
    <Link href={props.pathname} className={styles.modal__close}>
      <button type="button">
        <AiOutlineClose />
      </button>
    </Link>
  );
}
