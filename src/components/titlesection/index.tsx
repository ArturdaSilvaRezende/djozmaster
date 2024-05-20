import { RockvilleSolid } from "@/fonts/fonts";
import styles from "@/styles/_TitleSection.module.scss";

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
