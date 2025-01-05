import styles from "./Students.module.css"
import result1 from "../../images/שיר עדי המלצות 1.png"
import result2 from "../../images/שיר עדי המלצות 2.png"
import result3 from "../../images/שיר עדי המלצות 3.png"
import result4 from "../../images/שיר עדי המלצות 4.png"
import result5 from "../../images/שיר עדי המלצות 5.png"
import result6 from "../../images/שיר עדי המלצות 6.png"
import result7 from "../../images/שיר עדי המלצות 7.png"
import result8 from "../../images/שיר עדי המלצות 8.png"
import result9 from "../../images/שיר עדי המלצות 9.png"
import result10 from "../../images/שיר עדי המלצות 10.png"
import result11 from  "../../images/שיר עדי המלצות 11.png"
import result12 from  "../../images/שיר עדי המלצות 12.png"
import result13 from  "../../images/שיר עדי המלצות 13.png"
import result14 from  "../../images/שיר עדי המלצות 14.png"
import result15 from  "../../images/שיר עדי המלצות 15.png"
import result16 from  "../../images/שיר עדי המלצות 16.png"
import result17 from  "../../images/שיר עדי המלצות 17.png"


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
const Students=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 450 ? 1 :
                 
                      window.innerWidth <= 1050 ? 2 : 4,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
        {
          type: 'image',
          src: result13,
        },
        {
          type: 'image',
          src: result14,
        },
        {
          type: 'image',
          src: result15,
        },
        {
          type: 'image',
          src: result8,
        },
        {
          type: 'image',
          src: result10,
        },
        {
          type: 'image',
          src: result9,
        },
        
        {
          type: 'image',
          src: result9,
        },
        {
          type: 'image',
          src: result2,
        },
        {
          type: 'image',
          src: result3,
        },
        {
          type: 'image',
          src: result4,
        }, 
        {
          type: 'image',
          src: result16,
        },
        {
          type: 'image',
          src: result17,
        },
       
        {
          type: 'image',
          src: result5,
        },
          {
            type: 'image',
            src: result6,
          },
          {
            type: 'image',
            src: result7,
          },
        ];  
return <>
<div className={styles.title} id="לקוחות ממליצות">והנה מה שיש לחלק מהן מהם להגיד</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`שיר עדי לקוחה ממליצה מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>

<Button text="אני רוצה לשמוע עוד על הקורס" message="היי שיר, הגעתי מהדף! אשמח לשמוע עוד על הקורס"/>
<Button text="אני רוצה לקבוע החלקה" message="היי שיר, הגעתי מהדף! אשמח לקבוע החלקה"/>
</>


}
export default Students