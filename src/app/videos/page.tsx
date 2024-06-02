import { Metadata } from "next";
import PageVideos from "@/components/pages/videos";

export const metadata: Metadata = {
  title: "Videos | Imagine Festival",
};

export default function Videos() {
  return <PageVideos />;
}
