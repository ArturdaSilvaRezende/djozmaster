import Tracks from "./tracks";
import ViewTracks from "./viewtracks";
import styles from "@/styles/main/_LatestTracks.module.scss";

export default function LatestTracks() {
  return (
    <section className={styles.latesttracks}>
      <div className={styles.latesttracks__container}>
        <Tracks />
        <ViewTracks />
      </div>
    </section>
  );
}
