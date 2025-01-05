import { useState, useEffect, useRef } from 'react';
import styles from './Special.module.css';
import shir from "../../images/שיר עדי.png";
import { AlertCircle, ChevronDown } from 'lucide-react';
import Loader from '../loader/Loader';

const Stats = (props) => {
  const stats = [
    {
      target: 2000,
      text: 'נשים שעברו אצלי החלקות ויצאו מרוצות',
      prefix: 'מעל',
      position: 'topRight'
    },
    {
      target: 93,
      text: 'מבוגרות הקורס מדווחות על עלייה בביטחון המקצועי',
      suffix: '%',
      position: 'bottomRight'
    },
    {
      target: 50,
      text: 'בנות שלמדו להחליק שיער בצורה נכונה',
      suffix: '+',
      position: 'topLeft'
    },
    {
      target: 100,
      text: 'מרוכשות ההחלקה הביתית יצאו מרוצות',
      suffix: '%',
      position: 'bottomLeft'
    }
  ];

  const [countsDisplay, setCountsDisplay] = useState(stats.map(() => 0));
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);
  const animationStarted = useRef(false);
  const countsRef = useRef(stats.map(() => 0));

  // Image loading
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = shir;
  }, []);

  // Animation function
  const startCounting = () => {
    if (animationStarted.current) return;
    animationStarted.current = true;

    stats.forEach((stat, index) => {
      const duration = 2000;
      const fps = 60;
      const totalFrames = (duration / 1000) * fps;
      const increment = stat.target / totalFrames;
      let frame = 0;

      const animate = () => {
        frame++;
        countsRef.current[index] += increment;
        
        if (countsRef.current[index] >= stat.target) {
          countsRef.current[index] = stat.target;
          setCountsDisplay([...countsRef.current]);
          return;
        }

        setCountsDisplay([...countsRef.current]);
        
        if (frame < totalFrames) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  // Intersection Observer
  useEffect(() => {
    if (!imageLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [imageLoaded]);

  if (!imageLoaded) {
    return <Loader />;
  }

  return (
    <>
      <div className={props.scrolled ? styles.descriptionP : styles.description}>
        אם את חולמת על קריירה מתגמלת בעולם הביוטי ולהרוויח עשרות אלפי שקלים <strong>כל חודש</strong>
      </div>
      <div className={styles.title}>את במרחק <span>החלטה אחת</span></div>
      <div className={styles.alert}>
        <AlertCircle />
        <div className={styles.scare}>מלשנות את החיים שלך</div>
        <AlertCircle />
      </div>
      <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={40} strokeWidth={1} color="#D6B69F" />
      </div>
      
      <div className={styles.statsContainer} ref={containerRef}>
        <img 
          src={shir} 
          alt="שיר עדי" 
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.statItem} ${styles[stat.position]}`}>
              <div className={styles.number}>
                {stat.prefix && <span className={styles.prefix}>{stat.prefix} </span>}
                {Math.round(countsDisplay[index])}
                {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
              </div>
              <div className={styles.text}>{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;