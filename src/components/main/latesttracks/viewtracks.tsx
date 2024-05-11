import styles from "@/styles/main/_LatestTracks.module.scss";
import ViewTraksImage from "/public/assets/images/track-right.jpg";
import Image from "next/image";

export default function ViewTracks() {
  return (
    <div className={styles.viewtracks}>
      <p className={styles.viewtracks__title}>View All Tracks</p>
      <div className={styles.viewtracks__image}>
        <Image
          src={ViewTraksImage}
          alt="View Track Image Background"
          priority
        />
      </div>
    </div>
  );
}
