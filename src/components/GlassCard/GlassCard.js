import React from 'react';
import styles from './GlassCard.module.css';
import shir from "../../images/שיר עדי מוצרי החלקה.jpeg"
import Button from '../button/Button';
const GlassCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Image Container */}
        <div className={styles.imageContainer}>
          <img
            src={shir}
            alt="Card Image"
            className={styles.image}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>חומר החלקות</h2>
          <p className={styles.description}>
            חומר החלקה ביתית המספיק ל-10 החלקות
          </p>

     <Button text="אני רוצה לשמוע עוד פרטים" message="היי שיר הגעתי מהדף, אני רוצה לשמוע עוד לגבי מוצרי החלקה ביתית"/>
        </div>

        {/* Decorative Elements */}
        <div className={styles.decorTop}></div>
        <div className={styles.decorBottom}></div>
      </div>
    </div>
  );
};

export default GlassCard;