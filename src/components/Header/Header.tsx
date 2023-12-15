"use client"
//components
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "../MobileMenu/MobileMenu"
import Hamburger from 'hamburger-react'
//libs
import { useEffect, useState } from "react"
import classNames from "classnames"
import { usePathname } from "next/navigation"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//images 
import { baseImageUrl } from "@/services/API"
const logo = `${baseImageUrl}/logos/tedoradzeLogo.svg`


const PAGES = [
  {
    name: 'Über uns',
    link: "/"
  },
  {
    name: 'Unsere dienstleistungen',
    link: "/unsere-dienstleistungen"
  },
  {
    name: 'Kontakt',
    link: "/kontakt"
  }
]



function Header({ lng }: { lng: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    document.body.style.overflowY = 'unset'
    setIsMobileMenuOpen(false)
  }, [pathname])

  const getClassName = (path: string) => {
    return pathname === path ? styles.activeLink : ''
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link className={styles.logoLink} href={`/`}>
          <Image width={64} height={64} src={logo} alt="Tedoradze logo" />
        </Link>
        <nav className={styles.DesctopMenuContainer}>
          {
            PAGES.map(({ name, link }, i) => (
              <Link key={link} href={link} className={classNames(global.Body2, styles.menuLink, getClassName(link))}>
                {name}
              </Link>
            ))
          }
        </nav>
        <div className={styles.mopbileMenuToggler}>
          <Hamburger size={24} toggled={isMobileMenuOpen} toggle={() => setIsMobileMenuOpen(prev => !prev)} />
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  )
}

export default Header