"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Фон появляется когда страница прокручена больше чем на 50px
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка при размонтировании
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${
        isScrolled && !menuOpen ? styles.scrolled : ""
      }`}
    >
      {/* Остальной код без изменений */}
      <div>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo/logo.svg"
              alt="Логотип"
              width={220}
              height={60}
              priority
            />
          </Link>

          {/* Навигация desktop */}
          <nav className={styles.nav}>
            <a href="#about">О клинике</a>
            <a href="/services">Услуги</a>
            <a href="/specialists">Специалисты</a>
            <a href="#sales">Акции</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>

          {/* Контакты и кнопка */}
          <div className={styles.actions}>
            <div className={styles.contacts}>
              <a href="tel:+7 902 983 0005" className={styles.phone}>
                +7 902 983 0005
              </a>
              <div
                style={{
                  backgroundColor: "black",
                  height: "20px",
                  width: "1.3px",
                }}
              ></div>
              <a href="tel:+7(3842) 58 30 26" className={styles.phone}>
                +7(3842) 58 30 26
              </a>
              <div className={styles.socials}>
                <Link href="https://vk.com/id138205400" target="_blank">
                  <Image
                    src="/socials/vk.svg"
                    alt="VK"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://wa.me/89059949973" target="_blank">
                  <Image
                    src="/socials/wa.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* Мобильное меню */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          menuOpen ? styles.mobileMenuOverlayActive : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`${styles.mobileMenu} ${
            menuOpen ? styles.mobileMenuActive : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={styles.mobile_logo_container}
          >
            <img src="/logo/logo.svg" alt="" className={styles.mobile_logo} />
          </Link>
          <nav>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              О клинике
            </a>
            <a href="/services" onClick={() => setMenuOpen(false)}>
              Услуги
            </a>
            <a href="/specialists" onClick={() => setMenuOpen(false)}>
              Специалисты
            </a>
            <a href="#sales" onClick={() => setMenuOpen(false)}>
              Акции
            </a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>
              Отзывы
            </a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>
              Контакты
            </a>
          </nav>
          <div className={styles.mobileContacts}>
            <Link href="tel:+7 902 983 0005">
              <span>+7 902 983 0005</span>
            </Link>
            <Link href="tel:+7(3842) 58 30 26">
              <span>+7(3842) 58 30 26</span>
            </Link>
            <div className={styles.socials}>
              <Link href="" target="_blank">
                <Image
                  src="/footer/vk.svg"
                  alt="whatsapp"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="" target="_blank">
                <Image
                  src="/footer/wa.svg"
                  alt="telegram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
