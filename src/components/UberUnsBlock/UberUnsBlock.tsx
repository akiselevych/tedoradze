//libs
import classNames from "classnames"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//components
import Image from "next/image"
//imiages
import { baseImageUrl } from "@/services/API"
const worker = `${baseImageUrl}/workers/comanyWorker.png`


const UberUnsBlock = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div className={styles.titleBlock}>
          <h2 className={classNames(global.H2, styles.title)}>Über uns</h2>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.imageWrapper}>
            <Image width={566} height={330} src={worker} alt="Über uns" />
          </div>
          <div className={classNames(styles.textBlock, global.Body2)}>
            <p className={styles.textItem}>
              Willkommen bei der Merab Tedoradze Unternehmensberatung! Mit unserer Expertise im Automotive-Lieferantenaufbau, Projektmanagement, Qualitäts- und Prozessmanagement sind wir Ihr idealer Partner für nachhaltigen Erfolg.
            </p>
            <p className={styles.textItem}>
              Unser Gründer, Merab Tedoradze, verfügt über eine Dekade Branchenerfahrung im Automobilsektor, Beratung, Import & Export, Logistik & Supply Chain sowie Maschinenbau und ist als Lean Six Sigma Black Belt zertifiziert.            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UberUnsBlock