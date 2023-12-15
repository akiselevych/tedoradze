'use client';
//components
import Link from "next/link"
//libs
import { usePathname } from 'next/navigation'
import classNames from "classnames"

//styles
import styles from "./styles.module.scss"


const PAGES = [
  {
    name: 'Über uns',
    link: "/"
  },
  {
    name: 'Unsere dienstleistungen',
    link: "unsere-dienstleistungen"
  },
  {
    name: 'Kontakt',
    link: "kontakt"
  }
]



const MobileMenu = () => {

  const pathname = usePathname()


  const getClassName = (path: string) => {
    return pathname === path ? styles.activeLink : ''
  }
  return (
    <div className={styles.container}>
      <nav className={styles.navBlock}>
        {
          PAGES.map(({ name, link }, i) => (
            <Link key={i} href={`/${link}`} className={classNames(styles.navItem, getClassName(link))}>
              {name}
            </Link>
          ))
        }
      </nav>
    </div>
  )
}

export default MobileMenu