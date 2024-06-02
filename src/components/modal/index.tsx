import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import styles from "@/styles/modal/_Modal.module.scss";
import "@/styles/_animations.scss";

type PropsModal = {
  closeModalPath: string;
  modalVideoPath: string;
};

export default function Modal({ closeModalPath, modalVideoPath }: PropsModal) {
  // const pathname = usePathname();

  return (
    <>
      <dialog className={`${styles.modal} fadeIn`}>
        <div className={styles.modal__contents}>
          <Link href={closeModalPath} className={styles.modal__close}>
            <button type="button">
              <AiOutlineClose />
            </button>
          </Link>
          <div className={styles.modal__children}>
            <video controls className={styles.modalvideo}>
              <source src={modalVideoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </dialog>
    </>
  );
}
