import styles from './Checklist.module.css';

function Checklist({ steps, onToggle }) {
  // Находим индекс первой невыполненной задачи
  const firstIncompleteIndex = steps.findIndex(step => !step.done);
  
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Чек-лист адаптации</h3>
      <div className={styles.stepsList}>
        {steps.map((step, index) => {
          const isCompleted = step.done;
          const isEarlyCompleted = step.earlyCompleted;
          const isNextTask = index === firstIncompleteIndex;
          
          return (
            <label key={step.id} className={styles.stepItem}>
              <input 
                type="checkbox"
                checked={isCompleted}
                onChange={() => onToggle(step.id)}
                className={styles.checkbox}
              />
              <span className={`${styles.customCheckbox} ${isCompleted ? styles.checked : ''}`}>
                {isCompleted && <span className={styles.checkmark}>✓</span>}
              </span>
              <span className={isCompleted ? styles.completed : styles.stepTitle}>
                {step.title}
              </span>
              
              {/* Справа от задачи */}
              <div className={styles.rightInfo}>
                {isCompleted && isEarlyCompleted && (
                  <span className={styles.earlyBadge}>*выполнена заранее</span>
                )}
                {isNextTask && !isCompleted && (
                  <span className={styles.nextBadge}>
                    <span className={styles.arrow}>⬅</span> ближайшая задача
                  </span>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Checklist;