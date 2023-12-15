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
//images
import { baseImageUrl } from "@/services/API"
const arr = `${baseImageUrl}/icons/dropdownArr.svg`


type Props = {
  name: string | ReactNode,
  image: string;
  imageHeight: number;
  imageWidth: number;
}


const OurServicesCard: FC<Props> = ({ name, image, imageHeight, imageWidth }) => {
  return (
    <div className={classNames(styles.container)}>
      <div className={styles.imageBlock}>
        <Image width={imageWidth} height={imageHeight} className={styles.image} alt={"service"} src={image} />
      </div>
      <div className={styles.textBlock}>
        <h4 className={classNames(styles.title, global.H4)}>
          {name}
        </h4>
        <Link href="/unsere-dienstleistungen" className={classNames(global.Body2, styles.link)}>
          Mehr erfahren
          <Image width={16} height={16} alt="Mehr erfahren" src={arr} />
        </Link>
      </div>
    </div>
  )
}

export default OurServicesCard