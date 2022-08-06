import React from 'react';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <header className={styles.headerContainer}>
          <h1 className={styles.header}>
            GAMES
            <span className={styles.headerSpan}>.FREE</span>
          </h1>

          <p className={styles.headerSecond}>Best giveaways in gaming</p>
        </header>
        <div className={styles.choiceContainer}>
          <p className={styles.choiceText}>CHOOSE YOUR PLATFORM</p>
        </div>
        <div className={styles.btnContainer}>
          <button type="button" className={styles.btn}>PC</button>
          <button type="button" className={styles.btnActive}>XBOX</button>
          <button type="button" className={styles.btn}>PlayStation</button>
        </div>
      </div>
      <figure className={styles.imgContainer}>
        <img className={styles.imgController} src="./assets/controller.png" alt="gaming controller" />
        <img className={styles.imgShadow} src="./assets/shadow.png" alt="shadow under controller" />
      </figure>
    </section>
  );
}

export default Hero;
