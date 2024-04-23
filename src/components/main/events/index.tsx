"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { EventList, EventsType } from "./eventsList";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "@/styles/main/_Events.module.scss";

export default function Events() {
  const [eventsList, setEventList] = useState<EventsType[]>([]);
  const pathImage = "/assets/images/events/";

  useEffect(() => {
    setEventList(EventList);
  }, []);

  return (
    <section className={styles.events}>
      <span className={styles.indicator}>
        <MdKeyboardDoubleArrowDown />
      </span>
      <div className={styles.events__container}>
        <div className={styles.events__title}>
          <h1>upcoming events</h1>
          <div className={styles.events__buttons}>
            <button className="button-prev">
              <IoIosArrowBack />
            </button>
            <button className="button-next">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          className={styles.mySwipper}
          slidesPerView={"auto"}
          spaceBetween={60}
          loop={true}
          effect={"coverflow"}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            599: {
              slidesPerView: 1,
            },

            600: {
              slidesPerView: 2,
            },

            993: {
              slidesPerView: 3,
            },
          }}
        >
          {eventsList.map((eventItem) => (
            <SwiperSlide key={eventItem.artist}>
              <figure>
                <Image
                  src={`${pathImage + eventItem.img}`}
                  alt={eventItem.artist}
                  width={350}
                  height={300}
                  priority
                  className={styles.events__image}
                />
                <figcaption>
                  <p>{eventItem.eventData}</p>
                  <h2>{eventItem.artist}</h2>
                  <p>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span>{eventItem.address}</span>
                  </p>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
