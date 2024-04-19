import Modal from "@/components/modal";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="mt-32">
      <Link href="?modal=true">Test</Link>

      <Modal>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
