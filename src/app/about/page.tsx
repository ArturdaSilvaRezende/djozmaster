import { Metadata } from "next";
import PageAbout from "@/components/pages/about";

export const metadata: Metadata = {
  title: "About | Imagine Festival",
};

export default function About() {
  return <PageAbout />;
}
