import { useState } from 'react';
import ProgressBar from '../ui/ProgressBar';
import Checklist from '../ui/Checklist';
import { steps as initialSteps } from '../../mocks/data';
import styles from './ProgressPage.module.css';

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
  
  // Оставшиеся дни (пример)
  const remainingDays = 45; // или посчитай из дат

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Текущий прогресс</h1>
      
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{progressPercent}%</span>
          <span className={styles.statLabel}>Прогресс</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{remainingDays}</span>
          <span className={styles.statLabel}>Осталось дней</span>
        </div>
      </div>

      <ProgressBar percent={progressPercent} />
      
      <Checklist steps={steps} onToggle={handleToggle} />
    </div>
  );
}

export default ProgressPage;