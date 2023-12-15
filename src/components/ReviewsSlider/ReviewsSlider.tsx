'use client'
//libs
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image'
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
//libs
import classNames from 'classnames'
//images
import { baseImageUrl } from '@/services/API';
const worker = `${baseImageUrl}/workers/ERalphEdwards.png`

const REVIEWS = [
  {
    image: worker,
    name: 'Ralph Edwards',
    kunde: 'Kunde',
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"
  },
  {
    image: worker,
    name: 'Ralph Edwards',
    kunde: 'Kunde',
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"
  },

]
const ReviewsSlider = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div className={styles.leftCol}>
          <div className={styles.textBlock}>
            <h2 className={classNames(global.H2, styles.title)}>
              WAS DIE LEUTE ÜBER UNS SAGEN REFERENZEN
            </h2>
          </div>
        </div>
        <div className={styles.rightCol}>
          <Splide options={{ rewind: true, type: 'loop' }}>
            {REVIEWS.map(({ text, image, name, kunde }, index) => (
              <SplideSlide className={styles.slide} key={index}>
                <div className={styles.userInfoBlock}>
                  <Image className={styles.avatar} width={128} height={128} alt={name} src={image} />
                  <div className={styles.userDataTextBlock}>
                    <h4 className={global.H4}>{name}</h4>
                    <p className={global.Body3}>{kunde}</p>
                  </div>
                </div>
                <div className={classNames(global.Body2, styles.text)}>
                  {text}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>



  );
};

export default ReviewsSlider;
