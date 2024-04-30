"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CldVideoPlayer } from "next-cloudinary";
import CloseModal from "@/components/modal/closemodal";
import Modal from "@/components/modal";
import localFont from "next/font/local";
import { ServicesList, ServicesImageType } from "./servicesList";
import ServiceImageVideo from "/public/assets/images/services/service-left.jpg";
import PlayImage from "/public/assets/images/play.png";
import styles from "@/styles/main/_AboutServices.module.scss";

const nowRegular = localFont({
  src: "../../../../public/assets/fonts/now-regular.otf",
});

export default function Services() {
  const [servicesList, setServicesList] = useState<ServicesImageType[]>([]);
  const searchParams = useSearchParams();
  const modalServices = searchParams.get("modalservices");
  const pathImages = "/assets/images/services/";

  useEffect(() => {
    setServicesList(ServicesList);
  }, []);

  return (
    <div className={styles.services} id="aboutservices">
      <figure className={styles.services__imageleft}>
        <Image
          src={ServiceImageVideo}
          alt="Background Image - Services"
          width="0"
          height="0"
          className={styles.imageleft}
        />

        <div className={styles.services__play}>
          <span className={styles.play__circle}>
            <Link href="?modalservices=true">
              <button>
                <Image
                  src={PlayImage}
                  alt="Play - Image"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </span>
        </div>
      </figure>

      <div className={styles.services__cards}>
        {servicesList.map((service) => (
          <figure
            key={service.id}
            style={{
              backgroundColor: `${service.bgColor}`,
            }}
          >
            <Image
              src={`${pathImages + service.icon}`}
              alt={service.title}
              width={60}
              height={60}
            />

            <figcaption>
              <h3>{service.title}</h3>
              <p className={nowRegular.className}>{service.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      {modalServices && (
        <Modal>
          <CloseModal pathname="/#aboutservices" />
          <CldVideoPlayer
            width="1620"
            height="1080"
            src="uzkhicmbqq57po6lumyq"
          />
        </Modal>
      )}
    </div>
  );
}
