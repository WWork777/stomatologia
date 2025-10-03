import styles from "./styles.module.scss";

interface ServiceCardProps {
  title: string;
  description: string;
  imageLink: string;
}

const ServiceCard = ({ title, description, imageLink }: ServiceCardProps) => {
  return (
    <div className={styles.service_card}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={imageLink} alt={title} className={styles.serviceImage} />
      </div>
      <button>Записаться</button>
    </div>
  );
};

export default function Services() {
  return (
    <section className="container" id="services">
      <div>
        <h2>Услуги</h2>
      </div>
      <div className={styles.services_list}>
        <ServiceCard
          title="Детская стоматология"
          description="это комплекс процедур, направленных на удаление с зубов самого разного рода отложений."
          imageLink="services/1.png"
        />
        <ServiceCard
          title="Имплантация зубов"
          description="хирургическая процедура, которая позволяет вживлять в костную ткань челюсти искусственный корень — титановый имплант."
          imageLink="services/2.png"
        />
        <ServiceCard
          title="Исправление прикуса"
          description="Наша стоматология оказывает полный спектр услуг, направленный на исправление прикуса зубов."
          imageLink="services/3.png"
        />
        <ServiceCard
          title="Отбеливание зубов"
          description="Белоснежные зубы – это неотъемлемый атрибут шикарной здоровой «голливудской» улыбки."
          imageLink="services/4.png"
        />
        <ServiceCard
          title="Профессиональная гигиена"
          description="это комплекс процедур, направленных на удаление с зубов самого разного рода отложений."
          imageLink="services/5.png"
        />
        <ServiceCard
          title="Рентгенодиагностика"
          description="С помощью рентгенодиагностики стоматологи определяют глубину поражения зуба кариесов, наличие кист и гранулем, оценивают состояние костных тканей."
          imageLink="services/6.png"
        />
      </div>
      <div className={styles.all_services_button}>
        <button>
          <p>Все услуги</p>
        </button>
      </div>
    </section>
  );
}
