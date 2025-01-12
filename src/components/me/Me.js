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
          הכל התחיל בגיל 18 כשהתחלתי לעבוד במספרה מבוקר עד ערב , ואחרי תקופה ארוכה של עבודה אינטנסיבית והרבה אהבה למקצוע הבנתי שאני יכולה לעשות את זה לבד! קניתי את הגלון הראשון שלי והתחלתי לעבוד מהסלון של ההורים שלי, ובגיל 20 פתחתי את העסק הראשון שלי!
          </p>
          <p className={styles.description}>
          היום, אחרי עשור של ניסיון בתחום ההחלקות , ניהול ספקים  , עסק , עובדות , ומספרה מלאת לקוחות , אני מעבירה את הידע שלי הלאה. אני מאמינה שעם תשוקה, והכלים הנכונים כל אחת יכולה להצליח! בקורסים שלי אני מלמדת הטכניקה המדויקת לתוצאה שכל אחת תרצה לבחור דווקא בך! אני מלווה את התלמידות שלי צמוד לאורך כל הדרך, וגם לאחר סיום הקורס, כי ההצלחה שלהן היא ההצלחה שלי.
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