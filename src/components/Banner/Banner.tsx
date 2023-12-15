'use client'
//libs
import { FC, MouseEventHandler, RefObject, useEffect, useState } from "react";
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//images
import { baseImageUrl } from "@/services/API";
const closeBtn = `${baseImageUrl}/icons/closeIcon.svg`
const cookie = `${baseImageUrl}/icons/cookie.svg`

const Banner = () => {
  const [isBanner, setIsBanner] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && !JSON.parse(localStorage.getItem("cookieProtection"))) {
      setIsBanner(true)
    }

    //eslint-disable-next-line
  }, []);

  const btnCloseHandler = () => {
    localStorage.setItem("cookieProtection", JSON.stringify(true))
    setIsBanner(false);
  }
  return (
    <>
      {isBanner &&
        <div className={styles.overlay}>
          <div className={`${styles.container}`}>
            <Image src={closeBtn} alt={"Close btn"} width={15} height={15} className={styles.closeBtn} />
            <div className={styles.header}>
              <div className={`${styles.title}`}>
                Wir schätzen Ihre Privatsphäre
              </div>
              <Image src={cookie} alt={"cookie"} width={24} height={23} />
            </div>

            <div className={`${styles.text}`}>
              Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern und personalisierte Inhalte bereitzustellen. Wenn Sie auf "Alle Cookies akzeptieren" klicken, stimmen Sie der Speicherung von Cookies auf Ihrem Gerät zu, um die Nutzung der Website zu analysieren, unsere Dienste zu verbessern und Ihnen relevante Werbung anzuzeigen.
            </div>
            <div className={styles.btnContainer}>
              <div className={`${global.primaryButton}`} onClick={btnCloseHandler}>
                Alle Cookies akzeptieren
              </div>
              <div className={`${styles.declineBtn}`} onClick={btnCloseHandler}>
                Ablehnen
              </div>
            </div>
          </div>
        </div>
      }
    </>

  );
};

export default Banner;
