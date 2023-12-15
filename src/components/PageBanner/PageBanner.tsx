'use client'
//libs
import { FC, ReactNode } from "react"
import classNames from "classnames"
import Link from "next/link"
//conponrnts
import Image from "next/image"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images
import { baseImageUrl } from "@/services/API"
const arrow = `${baseImageUrl}/icons/arrowBottom.svg`


interface Props {
  nextBlockLink?: string;
  topText: ReactNode;
  title: string;
  subtitle: string;
  btnText: string;
}

const PageBanner: FC<Props> = ({ nextBlockLink, topText, title, subtitle, btnText }) => {


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };



  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div className={styles.titleBlock}>
          <div className={classNames(global.Body2, styles.topText)}>{topText}</div>
          <h1 className={classNames(styles.title, global.H1)}>
            {title}
          </h1>
          <div className={classNames(global.Body2, styles.subtitle)}>
            {subtitle}
          </div>
        </div>
        <div className={styles.btnBlock}>
          <Link
            href={nextBlockLink ?? ''}
            onClick={handleScroll}
            className={classNames(global.primaryButton)}>
            {btnText}
          </Link >
          <Link
            href={nextBlockLink ?? ''} onClick={handleScroll}
            className={styles.btnBlock}>
            <Image width={24} height={24} priority src={arrow} alt="Learn more" />
          </Link >
        </div>
      </div>
    </div>
  )
}

export default PageBanner





