"use client";
import Image from "next/image";
import { discographyListType } from "./discographyList";
import DiscoLink01 from "/public/assets/images/discography/link-1.jpg";
import DiscoLink02 from "/public/assets/images/discography/link-2.jpg";

export default function Cards(props: discographyListType) {
  return (
    <>
      <figure className="fadeIn">
        <Image
          src={props.disco}
          alt={`disco-${props.id}`}
          width={250}
          height={250}
          priority
        />
        <figcaption>
          <p>$52,00</p>
          <h3>Edm Party Electro House</h3>
          <div>
            <Image src={DiscoLink01} alt="Apple Store" />
            <Image src={DiscoLink02} alt="Google Play" />
          </div>
        </figcaption>
      </figure>
    </>
  );
}
