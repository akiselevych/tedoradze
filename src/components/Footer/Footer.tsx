"use client"
//components
import Image from "next/image"
import Link from "next/link"
//libs
import { usePathname } from 'next/navigation'
import classNames from "classnames"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images
import { baseImageUrl } from "@/services/API"
const logo = `${baseImageUrl}/logos/tedoradzeLogo.svg`
const linkedin = `${baseImageUrl}/icons/LinkedIn.svg`



const SECOND_COLUMN_ITEMS =
  [
    {
      name: "Merab Tedoradze Unternehmensberatung"
    },
    {
      name: "Werastr 126"
    },
    {
      name: "70190 Stuttgart"
    }
  ]


const THIRD_COLUMN_ITEMS = [
  {
    name: "Tel.: +49 177 7376989",
    link: "tel:491777376989"
  },
  {
    name: "E-Mail: info@tedoradze.consulting",
    link: "mailto:info@tedoradze.consulting"
  },
]

const FOURTH_COLUMN_ITEMS = [
  {
    name: "Impressum",
    link: "/impressum"
  },
  {
    name: "Datenschutz",
    link: "/datenschutz"
  },
]

const Footer = ({ lng }: { lng: string }) => {
  const pathname = usePathname()

  const getClassName = (path: string) => {
    return pathname === path ? styles.activeLink : ''
  }

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.navBlock}>
          <div className={classNames(styles.column, styles.FirstColumn)}>
            <Link className={styles.logoLink} href={`/`}>
              <Image width={64} height={64} src={logo} alt="Tedoradze logo" />
            </Link>
            <div className={global.Body2} >
              Gemeinsam können wir die Probleme Ihres Unternehmens lösen!
            </div>
            <Link
              target="_blank"
              className={styles.linkedin}
              href={'https://www.linkedin.com/in/merab-tedoradze-80080919a/?trk=public_profile_browsemap&originalSubdomain=de'}>
              <Image width={24} height={24} src={linkedin} alt="Tedoradze linkedIn" />
            </Link>
          </div>
          <div className={classNames(styles.column, styles.secondCol)}>
            <div className={classNames(global.H5, styles.colTitle)}>Adresse</div>
            {
              SECOND_COLUMN_ITEMS.map(({ name }, i) => (
                <div
                  key={i}
                  className={classNames(styles.colItem, global.Body2)}>
                  {name}
                </div>
              ))
            }
          </div>
          <div className={classNames(styles.column, styles.thirdCol)}>
            <div className={classNames(global.H5, styles.colTitle)}>Kontakt</div>
            {
              THIRD_COLUMN_ITEMS.map(({ name, link }, i) => (
                <Link href={link} key={i} className={classNames(
                  styles.colItem, global.Body2, getClassName(link))}>
                  {name}
                </Link>
              ))
            }
          </div>
          <div className={classNames(styles.column, styles.fourthCol)}>
            <nav className={classNames(global.H5, styles.colTitle)}>Weitere links</nav>
            {
              FOURTH_COLUMN_ITEMS.map(({ name, link }, i) => (
                <Link href={link} key={i} className={classNames(
                  styles.colItem, global.Body2, getClassName(link))}>
                  {name}
                </Link>
              ))
            }
          </div>
        </div>
        <p className={classNames(global.Body3, styles.bottomBlock)}>
          2023 © Merab Tedoradze Unternehmensberatung
        </p>
      </div>
    </footer>
  )
}

export default Footer