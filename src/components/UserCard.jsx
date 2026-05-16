import styles from './UserCard.module.css';

function UserCard({ user, onStatusChange }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {user.photo && (
          <img 
            src={user.photo} 
            alt={user.name} 
            className={styles.avatar}
          />
        )}
        <div>
          <h2 className={styles.name}>{user.name}</h2>
          <p className={styles.grade}>{user.grade}</p>
        </div>
      </div>
      
      <div className={styles.info}>
        <p>📍 Город: {user.city}</p>
        <p>🎯 Интересы: {user.interests?.join(', ') || 'Не указаны'}</p>
      </div>
      
      <div className={styles.statuses}>
        <label className={styles.toggle}>
          <input 
            type="checkbox"
            checked={user.statuses?.showInterests}
            onChange={() => onStatusChange('showInterests')}
          />
          <span>Показывать интересы</span>
        </label>
        
        <label className={styles.toggle}>
          <input 
            type="checkbox"
            checked={user.statuses?.readyToCommunicate}
            onChange={() => onStatusChange('readyToCommunicate')}
          />
          <span>Готов к общению</span>
        </label>
      </div>
    </div>
  );
}

export default UserCard;