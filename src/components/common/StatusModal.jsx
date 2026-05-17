import styles from './StatusModal.module.css';

function StatusModal({ statuses, onSave, onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(statuses);
        onClose();
    };

    const updateStatus = (key, value) => {
        const newStatuses = { ...statuses, [key]: value };
        onSave(newStatuses);
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h3 className={styles.title}>Статус:</h3>
                <div className={styles.field}>
                    <div className={styles.label}>Твои интересы другим пользователям</div>
                    <div className={styles.buttons}>
                        <button onClick={() => updateStatus('showInterests', true)} className={statuses.showInterests ? styles.active : ''}>Отображать</button>
                        <button onClick={() => updateStatus('showInterests', false)} className={!statuses.showInterests ? styles.active : ''}>Не отображать</button>
                    </div>
                </div>        
                <div className={styles.field}>
                    <div className={styles.label}>Мероприятия тебе</div>
                    <div className={styles.buttons}>
                        <button onClick={() => updateStatus('eventsInterests', true)} className={statuses.eventsInterests ? styles.active : ''}>Интересны</button>
                        <button onClick={() => updateStatus('eventsInterests', false)} className={!statuses.eventsInterests ? styles.active : ''}>Не интересны</button>
                    </div>
                </div> 
                <div className={styles.field}>
                    <div className={styles.label}>К общению</div>
                    <div className={styles.buttons}>
                        <button onClick={() => updateStatus('readyToCommunicate', true)} className={statuses.readyToCommunicate ? styles.active : ''}>Расположен</button>
                        <button onClick={() => updateStatus('readyToCommunicate', false)} className={!statuses.readyToCommunicate ? styles.active : ''}>Не расположен</button>
                    </div>
                </div> 
            </div>     
        </div>
    );
}

export default StatusModal;