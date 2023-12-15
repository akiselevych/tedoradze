//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//libs
import classNames from "classnames"
//components
import OurServicesCard from "./OurServicesCard/OurServicesCard"
//images
import { baseImageUrl } from "@/services/API"
const businessdevelopment = `${baseImageUrl}/services/Imagebusinessdevelopment.png`
const prozessmanagementLieferkettenoptimierung = `${baseImageUrl}/services/ImageprozessmanagementLieferkettenoptimierung.png`
const qualitatsmanagement = `${baseImageUrl}/services/Imagequalitätsmanagement.png`
const schulungenSeminare = `${baseImageUrl}/services/ImageschulungenSeminare.png`



const CARDS = [
  {
    name: "Qualitätsmanagement",
    image: qualitatsmanagement,
    imageWidth: 227,
    imageHeight: 207
  },
  {
    name: "Schulungen/Seminare",
    image: schulungenSeminare,
    imageWidth: 214,
    imageHeight: 182
  },
  {
    name: <p>Prozessmanagement/<br />Lieferkettenoptimierung</p>,
    image: prozessmanagementLieferkettenoptimierung,
    imageWidth: 162,
    imageHeight: 180
  },
  {
    name: "Businessdevelopment",
    image: businessdevelopment,
    imageWidth: 151,
    imageHeight: 206
  }
]


const OurServices = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div className={classNames(styles.titleBlock)}>
          <h2 className={global.H2}>
            UNSERE DIENSTLEISTUNGEN
          </h2>
        </div>
        <div className={styles.cardBlock}>
          {
            CARDS.map(({ name, image, imageHeight, imageWidth }, index) => <OurServicesCard imageHeight={imageHeight} imageWidth={imageWidth} name={name} image={image} key={index} />)
          }
        </div>
      </div>
    </div>
  )
}

export default OurServices