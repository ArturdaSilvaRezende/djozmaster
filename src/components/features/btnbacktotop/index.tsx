"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "@/styles/features/_BtnBackToTop.scss";
import "@/styles/_animations.scss";

export default function BtnBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isVisible = scrollTop > 300;

    setIsVisible(isVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="btnBackToTop fadeIn" onClick={scrollToTop}>
          <button type="button">
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
}
