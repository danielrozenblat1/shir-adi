import Can from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import  succsess from "../Icons/wired-lineal-633-female-standing-morph-success (2).json" 
import money from "../Icons/wired-lineal-414-money-bag-dollar-hover-shake (5).json"
import control from "../Icons/wired-lineal-161-growth-hover-rising (1).json"
import calm from "../Icons/wired-lineal-628-yoga-female-hover-pinch.json"
import infinity from "../Icons/wired-lineal-233-arrow-22-hover-cycle (2).json"
import famale from "../Icons/wired-lineal-692-hairdresser-barber-hover-pinch.json"
import Box from "../components/box/Box"
import Button from "../components/button/Button"
import AboutMe from "../components/me/Me"
import CourseCard from "../components/Course/Course"
const SecondScreen=()=>{


    return <>
<div className={styles.title}>בואי נדבר תכלס</div>
<div className={styles.description}>אם הגעת לכאן כבר יצא לך לשמוע על החלקות שיער וסיפרו לך שאת יכולה</div>
<div className={styles.row}>
<Can text="לקום כל בוקר בתחושה של הגשמה עצמית" icon={succsess}/>
<Can text="להרוויח סכומים שפעם רק חלמת עליהם והיום הבנת שזה אפשרי" icon={money}/>
    <Can text="להתחיל להחליט ולשלוט על החיים שלך בעצמך ולא ע''י אף אחד אחר " icon={control}/>
</div>
<div className={styles.title}>וזה באמת נכון!</div>
<div className={styles.description}>את יכולה להגיע לשם</div>
<div className={styles.title}>אבל</div>
<div className={styles.description}>זה לא חלום ורוד וזה לא קורה תוך יום</div>
<div className={styles.title}>זה ידרוש ממך</div>
<div className={styles.row}>
<Box 
        title="התמדה"
        description="הדרך להצלחה דורשת התמדה יומיומית בתרגול יומיומי ולא לעצור , 
מי שקובע את ההצלחה שלך - זו רק את!"
        icon={infinity}
      />
      <Box 
        title="נחישות"
        description="כדי להגיע לעסק מצליח שתמיד חלמת את צריכה להיות עם כוונה חד משמעית לעבר המטרה. תהיי רעבה לטרוף את המקצוע!"
        icon={famale}
      />
      <Box 
        title="סבלנות"
        description="בניית עסק מצליח בתחום לוקחת זמן. סבלנות תעזור לך לא לאבד את עצמך גם בתהליך הלמידה, גם בבניית המוניטין, וגם ביצירת רשת לקוחות נאמנה"
        icon={calm}
      />
</div>
<Button text="שיר, אני רוצה לשמוע עוד"/>
<CourseCard/>
<AboutMe/>
    </>
}
export default SecondScreen