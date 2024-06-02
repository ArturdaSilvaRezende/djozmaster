import { Metadata } from "next";
import PageDiscography from "@/components/pages/discography";

export const metadata: Metadata = {
  title: "Discography | Imagine Festival",
};

export default function Discography() {
  return <PageDiscography />;
}
