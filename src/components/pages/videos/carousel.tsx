"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarouselListType, CarouselList } from "./carouselList";
import PlayDefault from "/public/assets/images/play.png";
import styles from "@/styles/pages/_Videos.module.scss";
import "@/styles/_animations.scss";

export default function Carousel() {
  const [carousel, setCarousel] = useState<CarouselListType[]>([]);
  const [activeVideo, setTActiveVideo] = useState(0);

  useEffect(() => {
    setCarousel(CarouselList);
  }, []);

  const showActiveVideo = (cardId: number) => {
    setCarousel((festival) => {
      return festival.map((card) => {
        if (card.id === cardId) {
          setTActiveVideo(cardId);
        }
        return card;
      });
    });
  };

  const closeVideo = () => {
    setTActiveVideo(0);
  };

  return (
    <div className={styles.videos__carousel}>
      <Swiper
        modules={[Pagination, Navigation]}
        className={styles.carousel__contents}
        slidesPerView={"auto"}
        spaceBetween={60}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={{
          599: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 3,
          },
          993: {
            slidesPerView: 4,
          },
        }}
      >
        {carousel.map((item) => (
          <SwiperSlide key={item.id}>
            <figure>
              <div className={styles.carousel__bg}>
                {activeVideo === item.id && (
                  <div className={`${styles.carousel__bg_video} fadeIn`}>
                    <span onClick={() => closeVideo()}>
                      <AiOutlineClose />
                    </span>
                    <video controls>
                      <source
                        src={`assets/videos/${item.videoName}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                <Image
                  src={item.imagePath}
                  alt={item.carouselTitle}
                  width={300}
                  height={300}
                  className={styles.carousel__image}
                />
                <button
                  className={styles.carousel__play}
                  onClick={() => showActiveVideo(item.id)}
                >
                  <Image src={PlayDefault} alt="Icon Play Default" />
                </button>
              </div>

              <figcaption>
                <h3>{item.carouselTitle}</h3>
                <p>{item.data}</p>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.carousel__buttons_prev}>
        <button className="button-prev">
          <IoIosArrowBack />
        </button>
      </div>
      <div className={styles.carousel__buttons_next}>
        <button className="button-next">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
