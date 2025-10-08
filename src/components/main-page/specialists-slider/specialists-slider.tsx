// components/services/specialists/specialists-slider.tsx
"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Link from "next/link";
import { specialistsData } from "@/data/specialists.data";

interface SliderCardProps {
  img: string;
  name: string;
  description: string;
  stage?: string;
  showStage?: boolean;
  link?: string;
  showWhatsApp?: boolean;
  waLink?: string; // Добавляем пропс для WhatsApp ссылки
}

export const SliderCard = ({
  img,
  name,
  description,
  stage,
  showStage = true,
  link = "",
  showWhatsApp = true,
  waLink = "", // Добавляем waLink
}: SliderCardProps) => {
  return (
    <div className={styles.slider_card}>
      <div className={styles.card_link}>
        <img src={img} alt={name} className={styles.specialistImage} />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.card_footer}>
        {showStage && stage && <span>Стаж: {stage}</span>}

        {showWhatsApp &&
          waLink && ( // Показываем WhatsApp только если есть ссылка
            <Link href={waLink} target="_blank" rel="noopener noreferrer">
              <img src="/socials/waSecond.svg" alt="WhatsApp" />
            </Link>
          )}
      </div>
    </div>
  );
};

export default function Specialists() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [procedureName, setProcedureName] = useState("");
  const toggleModal = (procedureName = "") => {
    setIsModalOpen(!isModalOpen);
    setProcedureName(procedureName);
  };

  const allSpecialists = Object.values(specialistsData);

  return (
    <>
      <section id="specialists" className="component">
        <div className={styles.head}>
          <h2>Специалисты</h2>
          <Link href="/specialists" className={styles.all_button}>
            <span>Все специалисты</span>
          </Link>
        </div>

        <div className={styles.home_team_slider}>
          <Swiper
            modules={[Navigation, Pagination]}
            className={styles.mySwiper}
            spaceBetween={20}
            slidesPerView="auto"
            navigation={{
              nextEl: `.${styles.custom_next}`,
              prevEl: `.${styles.custom_prev}`,
              disabledClass: "swiper-button-disabled",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.1,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1600: {
                slidesPerView: 3.8,
                spaceBetween: 40,
              },
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {allSpecialists.map((specialist) => (
              <SwiperSlide key={specialist.id}>
                <SliderCard
                  img={specialist.imageLink}
                  name={specialist.name}
                  description={specialist.description}
                  stage={specialist.stage}
                  showStage={!!specialist.stage}
                  link={`/specialists/${specialist.id}`}
                  showWhatsApp={true}
                  waLink={specialist.waLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
