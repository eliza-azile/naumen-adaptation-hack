import { useState } from 'react';
import styles from './Adaptation.module.css';
import branchImg from '../assets/i2.png';
import { currentUser } from '../../mocks/data';
import UserCard from './UserCard';

function Adaptation() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    { id: 1, title: 'ЗНАКОМСТВО', description: 'Познакомься с командой и получи доступы', row: 4, col: 1 },
    { id: 2, title: 'ИНСТРУМЕНТАРИЙ', description: 'Установи всё необходимое для работы', row: 3, col: 2 },
    { id: 3, title: 'ПЕРВЫЕ ЗАДАЧИ', description: 'Выполни первые задачи и покажи себя', row: 2, col: 3 },
    { id: 4, title: 'СВОБОДА', description: 'Работай самостоятельно и развивайся', row: 1, col: 4 }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>АДАПТАЦИЯ В NAUMEN</h1>
      
      <div className={styles.contentWrapper}>
        <div className={styles.grid}>
          {stages.map((stage) => (
            <div 
              key={stage.id} 
              className={`${styles.card} ${stage.id === activeStage ? styles.activeCard : ''}`}
              style={{ gridRow: stage.row, gridColumn: stage.col }}
              onClick={() => setActiveStage(stage.id)}
            >
              <div className={styles.starWrapper}>
                <svg 
                  className={`${styles.star} ${stage.id === activeStage ? styles.activeStar : styles.inactiveStar}`}
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    fill={stage.id === activeStage ? '#FF6720' : 'none'}
                  />
                </svg>
                <span className={styles.stageNumber}>0{stage.id}</span>
              </div>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              {stage.id === activeStage && (
                <p className={styles.stageDescription}>{stage.description}</p>
              )}
            </div>
          ))}
          <div className={styles.imageCell} style={{ gridRow: 1, gridColumn: 4 }}>
            <img src={branchImg} alt="branch" className={styles.branchImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adaptation;