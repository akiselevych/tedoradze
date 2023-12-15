//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//libs
import classNames from "classnames"
import { FC } from "react"
//components
import Link from "next/link"


type Props = {
  id: string
}

const СontactUsBanner: FC<Props> = ({ id }) => {
  return (
    <div id={id} className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <h2 className={classNames(global.H2, styles.title)}>
          WIR STELLEN UNS VOR
        </h2>
        <p className={classNames(global.Body2, styles.subTitle)}>
          Unsere Experten freuen sich darauf, Ihre unternehmerischen Herausforderungen gemeinsam mit Ihnen zu bewältigen.
        </p>
        <Link href="/kontakt" className={classNames(global.primaryButton)}>
          JETZT KONTAKTIEREN
        </Link>
      </div>
    </div>
  )
}

export default СontactUsBanner