"use client"
//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//libs
import classNames from "classnames"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { baseApiUrl } from "@/services/API"
//components
import Link from "next/link"



type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string
  message: string,
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const [loadingStatus, setLoadingStatus] = useState<"idle" | "loading" | "error">("idle")
  const [checkBox, setChecbox] = useState(false)
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoadingStatus("loading")
    fetch(`${baseApiUrl}/send_email/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        setLoadingStatus("idle")
        reset()
      })
      .catch((err) => {
        console.error(err)
        setLoadingStatus("error")
      });

  }

  return (
    <div id="contactPageForm" className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.leftCol}>
          <h2 className={classNames(global.H2, styles.title)}>
            KONTAKT AUFNEHMEN
          </h2>
          <div className={styles.inputsBlock}>
            <div className={styles.inputsRow}>
              <div className={styles.inputBlock}>
                <label>Vorname</label>
                <input
                  {...register("first_name", { required: true })}
                  placeholder="text"
                  type="text"
                  className={styles.input} />
              </div>
              <div className={styles.inputBlock}>
                <label>Nachname</label>
                <input
                  {...register("last_name", { required: false })}
                  placeholder="text"
                  type="text"
                  className={styles.input} />
              </div>
            </div>
            <div className={styles.inputsRow}>
              <div className={styles.inputBlock}>
                <label>E-Mail</label>
                <input
                  {...register("email", { required: true })}
                  placeholder="text"
                  type="email"
                  className={styles.input} />
              </div>
              <div className={styles.inputBlock}>
                <label>Telefon</label>
                <input
                  {...register("phone_number", { required: true })}
                  placeholder="text"
                  type="tel"
                  className={styles.input} />
              </div>
            </div>
            <div className={classNames(styles.inputBlock, global.textArea)}>
              <label>Nachricht</label>
              <textarea
                {...register("message", { required: false })}
                placeholder="text"
                className={styles.input} />
            </div>
            <div className={styles.checkBoxBlock}>
              <div
                tabIndex={0}
                className={classNames(styles.checkBox, checkBox ? styles.checked : '')}
                onClick={() => setChecbox(prev => !prev)}
                onKeyDown={event => {
                  if (event.key === "Enter" || event.key === "Space") {
                    setChecbox(prev => !prev);
                  }
                }}></div>
              <p>Ich erkläre mich mit der Verarbeitung der eingegebenen Daten sowie der <Link href={"/datenschutzerklärung"}>Datenschutzerklärung</Link> einverstanden.</p>
            </div>
          </div>
          <div className={styles.submitBtnBlock}>
            <input className={classNames(global.primaryButton, !checkBox ? global.disablePrimaryButton : '')} type="submit" value={'ANFRAGE SENDEN'} />
            {loadingStatus === "loading" && <p className={styles.loading}>laden...</p>}
            {loadingStatus === "error" && <p className={styles.error}>Fehler aufgetreten, bitte versuchen Sie es erneut</p>}
          </div>
        </form>
        <div className={styles.rightCol}>
          <div className={styles.topRow}>
            <h3 className={global.H3}>KONTAKTINFOS</h3>
            <div className={classNames(styles.colTextBlock, global.Body2)}>
              <div className={styles.textBlockItem}>
                Merab Tedoradze Unternehmensberatung
              </div>
              <div className={styles.textBlockItem}>
                Werastr 126
              </div>
              <div className={styles.textBlockItem}>
                70190 Stuttgart
              </div>
              <div className={styles.textBlockItem}>
                Tel.: <Link href={'tel:491777376989'}>+49 177 7376989</Link>
              </div>
              <div className={styles.textBlockItem}>
                E-Mail: <Link className={styles.link} href="mailto:info@tedoradze.consulting">info@tedoradze.consulting</Link>
              </div>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <h3 className={global.H3}>ÖFFNUNGSZEITEN</h3>
            <div className={classNames(styles.colTextBlock, global.Body2)}>
              <div className={styles.textBlockItem}>
                Nach Absprache/ Termin
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm