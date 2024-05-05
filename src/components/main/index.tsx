import Countdown from "../countdown";
import AboutServices from "./aboutservices";
import Events from "./events";
import Hero from "./hero";
import LatestTracks from "./latesttracks/intex";
import YoutubeFeed from "./youtubefeed";

export default function Main() {
  return (
    <main>
      <Hero />
      <Events />
      <AboutServices />
      <LatestTracks />
      <YoutubeFeed />
      <Countdown />
    </main>
  );
}
