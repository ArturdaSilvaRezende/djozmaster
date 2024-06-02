import { Metadata } from "next";
import PageTours from "@/components/pages/tours";

export const metadata: Metadata = {
  title: "Tours | Imagine Festival",
};

export default function Tours() {
  return <PageTours />;
}
