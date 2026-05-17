import styles from './Checklist.module.css';

function Checklist({ steps, onToggle }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Чек-лист адаптации</h3>
      <div className={styles.stepsList}>
        {steps.map(step => (
          <label key={step.id} className={styles.stepItem}>
            <input 
              type="checkbox"
              checked={step.done}  // В data.js поле называется 'done'
              onChange={() => onToggle(step.id)}
              className={styles.checkbox}
            />
            <span className={step.done ? styles.completed : ''}>
              {step.title}
            </span>
            <span className={styles.milestone}>{step.Milestone}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Checklist;