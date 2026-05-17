import { useState } from 'react';
import StatusModal from './StatusModal';
import styles from './UserCard.module.css';


function UserCard({ user, onStatusChange }) {
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div className={styles.card}>
            <div className={styles.headerRow}>
                <div className={styles.avatarWrapper}>
                    <img src={user.photo} alt={user.name} className={styles.avatar} />
                </div>
                <div className={styles.mainInfo}>
                    <h2>{user.name}</h2>
                    <div style={{ cursor: 'pointer' }} onClick={() => setModalOpen(true)}>
                        <p>{user.statuses.eventsInterests ? 'Интересны' : 'Не интересны'} мероприятия / {user.statuses.readyToCommunicate ? 'Готов к общению' : 'Не готов'}</p>
                    </div>
                </div>
            </div>

            <div className={styles.propertiesGrid}>
                    <div className={styles.label}>Специальность</div>
                    <div className={styles.value}>{user.specialization}</div>
                    <div className={styles.label}>Город</div>
                    <div className={styles.value}>{user.city}</div>
                    <div className={styles.label}>Грейд</div>
                    <div className={styles.value}>{user.grade}</div>
                    <div className={styles.label}>Период испытательного срока</div>
                    <div className={styles.value}>{user.period}</div>
                    <div className={styles.label}>Руководитель</div>
                    <div className={styles.link}>{user.director}</div>
                    <div className={styles.label}>HRBR</div>
                    <div className={styles.link}>{user.hrbr}</div>
                    <div className={styles.list}>Достижения</div>
                    <div className={styles.value}>{user.achievments.map(achiv => <div key={achiv.id}>{achiv}</div>)}</div>
                    <div className={styles.label}>Команда</div>
                    <div className={styles.value}>{user.team}</div>
                    <div className={styles.label}>Интересы</div>
                    <div className={styles.value}>{user.interests.map(interest => <div key={interest.id}>#{interest}</div>)}</div>
            </div>
            {modalOpen && (
                <StatusModal
                    statuses={user.statuses}
                    onSave={onStatusChange}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
}

export default UserCard;