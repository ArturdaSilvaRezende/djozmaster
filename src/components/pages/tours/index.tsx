"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Countdown from "@/components/countdown";
import { toursListType, toursList } from "./toursList";
import "@/styles/pages/_tours.scss";

export default function PageTours() {
  const [tourList, setTourList] = useState<toursListType[]>([]);

  useEffect(() => {
    setTourList(toursList);
  }, []);

  return (
    <main className="tours">
      <section className="tours__container">
        <div className="tours__countdown">
          <Countdown
            countdownClass="countdown__padding"
            countdownContainerClass="countdown__padding-container"
          />
        </div>

        {tourList.map((tour) => (
          <div className="tours__contents" key={tour.id}>
            <div className="tours__item">
              <div className="item__description">
                <h2>{tour.title}</h2>
                <div className="item__address">
                  <div className="address__text">
                    <p>
                      <MdOutlineWatchLater />
                      <span>8:00pm | Dec 15, 2019</span>
                    </p>
                    <p>
                      <FaMapMarkerAlt />
                      <span>Funkhaus Berlin, Berlin, Germany</span>
                    </p>
                  </div>
                  <button>$35,00</button>
                </div>
                <div className="item__text">
                  <p>{tour.toursAbout}</p>
                  <p>{tour.toursDescription}</p>
                </div>
              </div>
              <button className="item__buyTickets">Buy Tickets</button>
            </div>
            <figure className="tours__image">
              <Image
                src={`${tour.tourImage}`}
                alt="Festival Tour Image"
                width={230}
                height={250}
                priority
              />
            </figure>
          </div>
        ))}
      </section>
    </main>
  );
}
