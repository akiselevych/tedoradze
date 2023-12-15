//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//libs
import classNames from "classnames"
//components
import Image from "next/image"
//images
import { baseImageUrl } from "@/services/API"
const banner = `${baseImageUrl}/other/helpBannerImage.png`

const HelpBanner = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div className={styles.leftCol}>
          <Image width={418} height={249} src={banner} alt="WIR HELFEN IHNEN" />
        </div>
        <div className={styles.rightCol}>
          <h2 className={classNames(global.H2, styles.title)}>WIR HELFEN IHNEN</h2>
          <div className={classNames(styles.textBlock, global.Body2)}>
            <p>
              Wir helfen Ihnen, Probleme in den Bereichen Automobilsektor, Import & Export, Logistik & Supply Chain und Maschinenbau effektiv zu lösen.
            </p>
            <p>
              Unsere Expertise und individuellen Lösungsansätze ermöglichen es Ihnen, Ihre geschäftlichen Herausforderungen erfolgreich zu meistern. Vertrauen Sie auf unsere Erfahrung und gemeinsam machen wir Ihre Lieferkette qualitativ hochwertig und effizient.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpBanner