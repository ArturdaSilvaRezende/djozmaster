import AboutServices from "./aboutservices";
import Events from "./events";
import Hero from "./hero";
import LatestTracks from "./latesttracks/intex";

export default function Main() {
  return (
    <main>
      <Hero />
      <Events />
      <AboutServices />
      <LatestTracks />
    </main>
  );
}
