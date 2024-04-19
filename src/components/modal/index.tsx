"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import styles from "@/styles/_Modal.module.scss";
import "@/styles/_animations.scss";

export default function Modal({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className={`${styles.modal} fadeIn`}>
          <div className={styles.modal__contents}>
            <Link href={pathname} className={styles.modal__close}>
              <button type="button">
                <AiOutlineClose />
              </button>
            </Link>
            <div className={styles.modal__children}>{children}</div>
          </div>
        </dialog>
      )}
    </>
  );
}
