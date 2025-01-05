import { useState, useEffect, useRef } from 'react';
import styles from './Special.module.css';
import shir from "../../images/שיר עדי.png";

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
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let current = 0;
      const increment = stat.target / steps;
      
      return setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timers[index]);
        }
        
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.round(current);
          return newCounts;
        });
      }, interval);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, [isVisible]);

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