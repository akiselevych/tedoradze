//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//libs
import classNames from "classnames"
//components
import Image from "next/image"
//images
import { baseImageUrl } from "@/services/API"
const banner = `${baseImageUrl}/other/contactBannerImage.png`

const ContactPageBanner = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div className={styles.leftCol}>
          <Image width={225} height={313} src={banner} alt="WIR HELFEN IHNEN" />
        </div>
        <div className={styles.rightCol}>
          <h2 className={classNames(global.H2, styles.title)}>
            KONTAKTIEREN SIE UNS
          </h2>
          <div className={classNames(styles.textBlock, global.Body2)}>
            <p>
              Unsere Experten freuen sich darauf, Ihre unternehmerischen Herausforderungen gemeinsam mit Ihnen zu bewältigen. Nutzen Sie unsere Erfahrung in den Bereichen Automobil, Beratung, Logistik und mehr, um Ihre Projekte zum Erfolg zu führen. Kontaktieren Sie uns noch heute und lassen Sie uns gemeinsam die Probleme Ihres Unternehmens beseitigen!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPageBanner