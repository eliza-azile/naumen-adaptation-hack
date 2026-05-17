import { useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Checklist from '../ui/Checklist';
import { steps as initialSteps } from '../../mocks/data';
import styles from './ProgressPage.module.css';
import knife from '../../assets/images/knife.png';
import mem from '../../assets/images/mem.png';

function ProgressPage() {
  const [steps, setSteps] = useState(initialSteps);

  const handleToggle = (id) => {
    setSteps(prevSteps =>
      prevSteps.map(step =>
        step.id === id ? { ...step, done: !step.done } : step
      )
    );
  };

  const completedCount = steps.filter(step => step.done).length;
  const progressPercent = (completedCount / steps.length) * 100;
  
  const remainingDays = 45;

  return (
    <div className={styles.container}>
      <div className={styles.progressSection}>
        <ProgressBar percent={progressPercent} />
      </div>
      
      {/* Осталось дней + ножик в одной строке */}
      <div className={styles.daysBlock}>
        <span className={styles.daysLabel}>Осталось:</span>
        <span className={styles.daysValue}>{remainingDays} дней</span>
        <img src={knife} alt="ножик" className={styles.daysImage} />
      </div>
      
      {/* Чек-лист и мем */}
      <div className={styles.contentWrapper}>
        <div className={styles.checklistWrapper}>
          <Checklist steps={steps} onToggle={handleToggle} />
        </div>
        <div className={styles.memWrapper}>
          <img src={mem} alt='mem' className={styles.mem} />
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;