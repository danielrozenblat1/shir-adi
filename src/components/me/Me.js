import React from 'react';
import styles from './Me.module.css';
import shiradi from "../../images/שיר עדי תדמית.png";
import Recommends from '../recommends/Recommends';
import Hair from '../recommends/Hair';
import Students from '../recommends/Students';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={shiradi} alt="שיר עדי" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>שיר עדי</h1>
          <div className={styles.subtitle}>"החלומות הכי גדולים מתחילים מצעד קטן"</div>
          <p className={styles.description}>
        הכל התחיל כשעבדתי במספרה להחלקות שיער מהבוקר עד הערב, אהבתי את מה שאני עושה ונהנתי מהעבודה עד שיום אחד פיטרו אותי. באותו רגע הבנתי שאני יכולה לעשות את זה בעצמי! קניתי את הגלון הראשון שלי והתחלתי לעבוד מהסלון של ההורים שלי!
          </p>
          <p className={styles.description}>
            היום, אחרי עשור של ניסיון בתחום ההחלקות ומספרה מלאת לקוחות, אני מעבירה את הידע שלי הלאה. אני מאמינה שכל אחת יכולה להצליח עם התשוקה והכלים הנכונים. בקורסים שלי אני מלמדת לא רק את הטכניקה, אלא את כל מה שלמדתי על ניהול ספקים, עסק ועובדים. אני מלווה את התלמידות שלי צמוד לאורך כל הדרך, גם הרבה אחרי סיום הקורס, כי ההצלחה שלהן היא ההצלחה שלי.
          </p>
        </div>
      </div>
<Recommends/>
<Hair/>
<Students/>
    </>
  );
};

export default AboutMe;