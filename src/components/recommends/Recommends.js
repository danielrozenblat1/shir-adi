import styles from "./Recommends.module.css"
import result1 from "../../images/שיר עדי תעודות 1.png"
import result2 from "../../images/שיר עדי תעודות 2.png"
import result3 from "../../images/שיר עדי תעודות 3.png"
import result4 from "../../images/שיר עדי תעודות 4.png"
import result5 from "../../images/שיר עדי תעודות 5.png"
import result6 from "../../images/שיר עדי תעודות 6.png"
import result7 from "../../images/שיר עדי תעודות 7.png"
import result8 from "../../images/שיר עדי תעודות 8.png"
import result9 from "../../images/שיר עדי תעודות 9.png"
import result10 from "../../images/שיר עדי תעודות 10.png"
import result11 from  "../../images/שיר עדי תעודות 11.png"
import result12 from  "../../images/שיר עדי תעודות 12.png"
import result13 from  "../../images/שיר עדי תעודות 13.png"
import result14 from  "../../images/שיר עדי תעודות 14.png"
import result15 from  "../../images/שיר עדי תעודות 15.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
const Recommends=()=>{
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8, result9,
    result10, result11, 
  ];

  return (
    <>
      <div className={styles.title}>הוצאתי עשרות בנות עם תעודות</div>

      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* First group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
          {/* Second identical group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
   
    </>
  );
}
export default Recommends