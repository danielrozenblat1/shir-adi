import { AlertCircle, ChevronDown } from "lucide-react"
import styles from "./FirstScreen.module.css"


const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled? styles.descriptionP:styles.description}>אם את חולמת על קריירה מתגמלת בעולם הביוטי ולהרוויח עשרות אלפי שקלים <strong>כל חודש</strong></div>
<div className={styles.title}>את במרחק <span>החלטה אחת</span></div>
<div className={styles.alert}><AlertCircle /><div className={styles.scare}>מלשנות את החיים שלך</div><AlertCircle /></div>
<div className={styles.arrowContainer}>
  <ChevronDown className={styles.bounceArrow} size={40} strokeWidth={1} color="#D6B69F" />
</div>
</>


}
export default FirstScreen