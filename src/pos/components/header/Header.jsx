import { useState, useEffect } from 'react';
import { formatDate, formatTime } from '../../utils/calculations';
import styles from './Header.module.css';

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.dateTime}>
          <i className="pi pi-calendar"></i>
          <span>{formatDate(currentDate)}</span>
        </div>
        <div className={styles.separator}>-</div>
        <div className={styles.dateTime}>
          <i className="pi pi-clock"></i>
          <span>{formatTime(currentDate)}</span>
        </div>
      </div>

      <div className={styles.center}>
        <button className={styles.openOrderBtn}>
          <i className="pi pi-folder-open"></i>
          <span>Open Order</span>
        </button>
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn} title="Notifications">
          <i className="pi pi-bell"></i>
        </button>
        <button className={styles.iconBtn} title="Settings">
          <i className="pi pi-cog"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
