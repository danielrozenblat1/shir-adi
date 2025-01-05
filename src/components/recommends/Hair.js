import styles from "./Hair.module.css"
import result1 from "../../images/שיר עדי החלקות 1.png"
import result2 from "../../images/שיר עדי החלקות 2.png"
import result3 from "../../images/שיר עדי החלקות 3.png"
import result4 from "../../images/שיר עדי החלקות 4.png"
import result5 from "../../images/שיר עדי החלקות 5.png"
import result6 from "../../images/שיר עדי החלקות 6.png"
import result7 from "../../images/שיר עדי החלקות 7.png"
import result8 from "../../images/שיר עדי החלקות 8.png"
import result9 from "../../images/שיר עדי החלקות 9.png"
import result10 from "../../images/שיר עדי החלקות 10.png"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
const Hair=()=>{
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8, result9,
    result10,  
  ];

  return (
    <>
      <div className={styles.title}>ואלפי בנות עם שיער  מ ו ש ל ם</div>

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
export default Hair