import localFont from "next/font/local";
import styles from "@/styles/_TitleSection.module.scss";

const RockvilleSolid = localFont({
  src: "../../../public/assets/fonts/RockvilleSolid.woff",
});

type PropsTitle = {
  title: string;
  subtitle: string;
};

export default function TitleSection({ title, subtitle }: PropsTitle) {
  return (
    <div className={styles.titlesection}>
      <h2>{title}</h2>
      <h1 className={RockvilleSolid.className}>{subtitle}</h1>
    </div>
  );
}
