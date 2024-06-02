"use client";
import { useState } from "react";
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import styles from "@/styles/pages/_GoogleMaps.module.scss";

export default function GoogleMaps() {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();
  const API_KEY = "AIzaSyB_8i8ofhsXIRirUDsWxSKv4OSaKrC4Ssk";
  const MAP_ID = "178739f56470ef24";

  return (
    <section className={styles.googleMaps}>
      <APIProvider apiKey={API_KEY}>
        <Map
          className={styles.googleMaps__contents}
          defaultCenter={{ lat: -22.97570575, lng: -43.18662424789011 }}
          defaultZoom={18}
          mapId={MAP_ID}
        >
          <AdvancedMarker
            position={{ lat: -22.97570575, lng: -43.18662424789011 }}
            ref={markerRef}
            onClick={() => setInfowindowOpen(true)}
            title={"AdvancedMarker that opens an Infowindow when clicked."}
          >
            {infowindowOpen && (
              <InfoWindow
                anchor={marker}
                maxWidth={300}
                onCloseClick={() => setInfowindowOpen(false)}
              >
                <p className="mb-3 text-red-800 font-bold text-2xl">
                  We are here!
                </p>
                <hr />
                <p className="pt-3 text-black font-bold ">Imagine Festival</p>
              </InfoWindow>
            )}
            <Pin
              background={"#b40000"}
              borderColor={"#ffffff"}
              glyphColor={"#000000"}
            />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </section>
  );
}
