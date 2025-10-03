"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Link from "next/link";

interface SliderCard {
  img: string;
  name: string;
  description: string;
  age: string;
}

const SliderCard = ({ img, name, description, age }: SliderCard) => {
  return (
    <div className={styles.slider_card}>
      <img src={img} alt="" className={styles.specialistImage} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <span>Стаж : {age}</span>
        <Link href="">
          <img src="/socials/waSecond.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

interface HomeTeamProps {
  teamTitle: string;
  teamSubTitle: string;
}

export default function Specialists() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [procedureName, setProcedureName] = useState("");
  const toggleModal = (procedureName = "") => {
    setIsModalOpen(!isModalOpen);
    setProcedureName(procedureName);
  };
  return (
    <>
      <section id="specialists" className="container">
        <div>
          <h2>Специалисты</h2>
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
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3.3,
                spaceBetween: 40,
              },
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <SliderCard
                img="/specialists/1.jpg"
                name="Иванова Мария Сергеевна"
                description="Главный врач, врач-стоматолог терапевт"
                age="17 лет"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img="/specialists/2.jpg"
                name="Маркелова Екатерина Дмитриевна"
                description="Врач-стоматолог хирург имплантолог, врач-стоматолог ортопед, врач-стоматолог терапевт ."
                age="12 лет"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img="/specialists/3.jpg"
                name="Васильева Юлия Сергеевна"
                description="Врач-стоматолог терапевт"
                age="12 лет"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img="/specialists/4.jpg"
                name="Бондарев Станислав Сергеевич"
                description="Врач-стоматолог ортопед"
                age="16 лет"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
