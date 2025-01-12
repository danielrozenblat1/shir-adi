import React from 'react';
import { 
  Sparkles, 
  Scissors, 
  UserCheck, 
  MessageCircle, 
  Database, 
  XCircle, 
  GitCompare, 
  ClipboardList,
  Camera,
  Clock,
  Calendar,
  Check,
  ChevronDown
} from 'lucide-react';
import styles from './Course.module.css';
import Button from '../button/Button';

const CourseCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Decorative Shapes */}
      

        <header className={styles.header}>
          <h1 className={styles.title} id="קורס החלקות">תחזיקי חזק!</h1>
          <div className={styles.subtitle}>את עומדת לרכוש מקצוע משנה חיים</div>
        </header>

        <div className={styles.content}>
          <p className={styles.description}>
            ביומיים של למידה באופן עיוני ומעשי.
            <br />
            *הקורס מיועד למתחילות ומקצועיות בו זמנית*
          </p>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <Sparkles className={styles.icon} size={24} />
              <span>תוכן הקורס:</span>
            </h3>
            
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Scissors className={styles.icon} size={20} />
                <span>אבחון והכרת סוגי שיער</span>
              </li>
              <li className={styles.listItem}>
                <UserCheck className={styles.icon} size={20} />
                <span>תיאום ציפיות עם לקוחות</span>
              </li>
              <li className={styles.listItem}>
                <MessageCircle className={styles.icon} size={20} />
                <span>התמודדות עם מצבים שונים</span>
              </li>
              <li className={styles.listItem}>
                <Database className={styles.icon} size={20} />
                <span>סוגי החלקות בשוק / התאמת החלקה לפי סוג שיער</span>
              </li>
              <li className={styles.listItem}>
                <XCircle className={styles.icon} size={20} />
                <span>מתי לא עושים החלקה</span>
              </li>
              <li className={styles.listItem}>
                <GitCompare className={styles.icon} size={20} />
                <span>הבדלי עבודה בין שיער טבעי לצבוע</span>
              </li>
              <li className={styles.listItem}>
                <ClipboardList className={styles.icon} size={20} />
                <span>שלבי עבודה וביצוע מחליק באופן יסודי, תוך שמירת בריאות השיער</span>
              </li>
              <li className={styles.listItem}>
                <Camera className={styles.icon} size={20} />
                <span>שיווק נכון וזויות צילום</span>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <Calendar className={styles.icon} size={24} />
              <span>מבנה הקורס:</span>
            </h3>
            <div className={styles.info}>
              <Calendar className={styles.icon} size={20} />
              <span>2 מפגשים</span>
            </div>
            <div className={styles.info}>
              <Clock className={styles.icon} size={20} />
              <span>בין השעות: 9:00-15:00</span>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>כמה דגשים חשובים</h3>
            <div className={styles.description}>
              <div className={styles.emphasizedItem}>
                <Check className={styles.emphasizedIcon} size={20} />
                <span>ביום לימוד נעבוד על מודליסטיות</span>
              </div>
              
              <div className={styles.emphasizedItem}>
                <Check className={styles.emphasizedIcon} size={20} />
                <span>נלמד לעבוד גם על שיער טבעי וגם על שיער צבוע</span>
              </div>
              
              <div className={styles.emphasizedItem}>
                <Check className={styles.emphasizedIcon} size={20} />
                <span>נלמד את כל טכניקות עבודה מהתאמת החלקה ללקוחה ועד לתוצאה מקצועית</span>
              </div>
              
              <div className={styles.emphasizedItem}>
                <Check className={styles.emphasizedIcon} size={20} />
                <span>תקבלי ליווי צמוד שלי לאחר הקורס לכל שאלה,התייעצות או חשש</span>
              </div>
              
              <div className={styles.emphasizedItem}>
                <Check className={styles.emphasizedIcon} size={20} />
                <span>התלמידות הקורס עובדות הכשרה מלאה באופן עיוני ומעשי</span>
              </div>

              <div className={styles.emphasizedItem}>
                <Check className={styles.emphasizedIcon} size={20} />
                <span>כל מחזור מכיל עד 3 תלמידות עם דגש על היחס הכי אישי ומקצועי שיש</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={32} color="#4a2912" />
      </div>
      
      <Button text="שיר, בואי נדבר!" />
    </div>
  );
};

export default CourseCard;