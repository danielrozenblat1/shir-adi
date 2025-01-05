import { useState, useEffect, useRef } from 'react';
import styles from './Special.module.css';
import shir from "../../images/שיר עדי.png";
import Loader from '../loader/Loader';

const Stats = () => {
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

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);
  const containerRef = useRef(null);

  // Load image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = shir;
  }, []);

  // Intersection Observer
  useEffect(() => {
    if (!imageLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCanAnimate(true);
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

  // Animation
  useEffect(() => {
    if (!canAnimate) return;

    const timers = stats.map((stat, index) => {
      let count = 0;
      return setInterval(() => {
        count += Math.ceil(stat.target / 50);
        
        if (count >= stat.target) {
          count = stat.target;
          clearInterval(timers[index]);
        }

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = count;
          return newCounts;
        });
      }, 40);
    });

    return () => timers.forEach(clearInterval);
  }, [canAnimate]);

  if (!imageLoaded) {
    return <Loader />;
  }

  return (
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
              {counts[index]}
              {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
            </div>
            <div className={styles.text}>{stat.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;