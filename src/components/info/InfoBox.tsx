import React from 'react';
import styles from './InfoBox.module.scss';

function InfoBox() {
  return (
    <div className={styles.InfoBoxContainer}>
      <figure className={styles.imgContainer}>
        <img className={styles.img} src="./assets/plate.png" alt="virtual boy" />
      </figure>
      <div className={styles.textContainer}>
        <header className={styles.header}>Tell Me Why: Chapters 1-3 (Steam)</header>
        <p className={styles.description}>
          Claim VirtuaVerse without any cost on GOG! VirtuaVerse is a cool pixel-art old-school
          cyberpunk point-and-click adventure game set in a future not so far away... Check it out!
        </p>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.detailsBtn} type="button">DETAILS</button>
      </div>
    </div>
  );
}

export default InfoBox;
