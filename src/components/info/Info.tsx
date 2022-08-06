import React from 'react';
import InfoBox from './InfoBox';
import styles from './Info.module.scss';

function Info() {
  return (
    <div className={styles.infoContainer}>
      <InfoBox />
      <InfoBox />
      <InfoBox />
      <InfoBox />
      <InfoBox />
      <InfoBox />
    </div>
  );
}

export default Info;
