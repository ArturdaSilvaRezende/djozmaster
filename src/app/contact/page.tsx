import { Metadata } from "next";
import PageContact from "@/components/pages/contact";

export const metadata: Metadata = {
  title: "Contact | Imagine Festival",
};

export default function Contact() {
  return <PageContact />;
}
