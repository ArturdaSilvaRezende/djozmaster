"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/modal";
import { nowRegular } from "@/fonts/fonts";
import { ServicesList, ServicesImageType } from "./servicesList";
import { FaPlay } from "react-icons/fa";
import ServiceImageVideo from "/public/assets/images/services/service-left.jpg";
import styles from "@/styles/main/_AboutServices.module.scss";

export default function Services() {
  const [servicesList, setServicesList] = useState<ServicesImageType[]>([]);
  const searchParams = useSearchParams();
  const modalServices = searchParams.get("modalservices");
  const pathImages = "/assets/images/services/";
  const pathVideoService = "/assets/videos/";

  useEffect(() => {
    setServicesList(ServicesList);
  }, []);

  return (
    <div className={styles.services} id="aboutservices">
      <figure className={styles.services__imageleft}>
        <Image
          src={ServiceImageVideo}
          alt="Background Image - Services"
          width={300}
          height={300}
          priority
          className={styles.imageleft}
        />

        <div className={styles.services__play}>
          <span className={styles.play__circle}>
            <Link href="?modalservices=true">
              <button>
                <FaPlay />
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
        <Modal
          closeModalPath="/#aboutservices"
          modalVideoPath={pathVideoService}
          videoFileName="services.mp4"
        />
      )}
    </div>
  );
}
