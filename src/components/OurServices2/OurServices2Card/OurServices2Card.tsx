//libs
import { StaticImageData } from 'next/image'
import { type } from 'os'
import { FC, ReactElement, ReactNode } from 'react'
import classNames from 'classnames'
//components
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"



type Props = {
  name: string | ReactNode,
  text: string[]
}


const OurServicesCard: FC<Props> = ({ name, text }) => {
  return (
    <div className={classNames(styles.container)}>
      <h4 className={classNames(global.H4, styles.title)}>
        {name}
      </h4>
      <div className={classNames(styles.textBlock, global.Body2)}>
        {text.map((item, i) => <p key={i}>{item}</p>)}
      </div>
    </div>
  )
}

export default OurServicesCard