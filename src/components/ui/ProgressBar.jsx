import styles from './ProgressBar.module.css';

function ProgressBar({ percent }) {
  const safePercent = Math.min(100, Math.max(0, percent));
  const roundedPercent = Math.round(safePercent);
  
  return (
    <div className={styles.container}>
      <span className={styles.percentText}>{roundedPercent}%</span>
      <div className={styles.progressWrapper}>
        <div 
          className={styles.progressFill}
          style={{ width: `${safePercent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;