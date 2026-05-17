import styles from './ProgressBar.module.css';

function ProgressBar({ percent }) {
  const safePercent = Math.min(100, Math.max(0, percent));
  const roundedPercent = Math.round(safePercent); // ← округляет до целого
  
  return (
    <div className={styles.container}>
      <div className={styles.progressWrapper}>
        <div 
          className={styles.progressFill}
          style={{ width: `${safePercent}%` }}
        />
      </div>
      <span className={styles.percentText}>{roundedPercent}%</span>
    </div>
  );
}

export default ProgressBar;