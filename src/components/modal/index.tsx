import styles from "@/styles/modal/_Modal.module.scss";
import "@/styles/_animations.scss";

export default function Modal({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();

  return (
    <>
      <dialog className={`${styles.modal} fadeIn`}>
        <div className={styles.modal__contents}>
          <div className={styles.modal__children}>{children}</div>
        </div>
      </dialog>
    </>
  );
}
