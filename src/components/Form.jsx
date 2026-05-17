import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.css';
import logo from '../assets/25-naumen_orange.png';
import verybad from '../assets/verybad.png';
import bad from '../assets/bad.png';
import norm from '../assets/norm.png';
import nice from '../assets/nice.png';
import good from '../assets/KAZIKOV.png';


const emotions = [
    {value: 1, label: 'Очень плохо', emoji: verybad},
    {value: 2, label: 'Плохо', emoji: bad},
    {value: 3, label: 'Нейтрально', emoji: norm},
    {value: 4, label: 'Хорошо', emoji: nice},
    {value: 5, label: 'Отлично', emoji: good}
];

const getTitle = () => {
    switch (location.pathname) {
        case '/form': return 'ЕЖЕДНЕВНЫЙ ОТЧЕТ';
        default: return '';
    }
};

function FormPage({ todayTask, onClose, onSubmit }) {
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedEmotion) {
            alert('Пожалуйста, оцените свое состояние');
            return;
        }
        setIsSubmitting(true);
        const formData = {
            emotion: selectedEmotion,
            feedback,
            anonymous: isAnonymous,
            date: new Date().toISOString()
        };
        console.log('Отправлено:', formData);
        const saved = localStorage.getItem('emotionLogs') || '[]';
        const logs = JSON.parse(saved);
        logs.push(formData);
        localStorage.setItem('emotionLogs', JSON.stringify(logs));
        if (onSubmit) onSubmit(formData);
        if (onClose) onClose();
        setIsSubmitting(false);
    };

    return (
        <div className={styles.overlay}>
            <header className={styles.header}>
                <Link to='/profile' className={styles.logoLink}>
                    <img src={logo} alt="Логотип" className={styles.logoImage} />             
                </Link>
                <h1 className={styles.title}>{getTitle()}</h1>
            </header>
            <div className={styles.modal}>
                <h2>Оцените своё эмоциональное состояние на данный момент:</h2>

                <div className={styles.emotionScale}>
                    {emotions.map(emo => (
                        <button 
                            key={emo.value}
                            type="button"
                            className={`${styles.emotionBtn} ${selectedEmotion === emo.value ? styles.selected : ''}`}
                            onClick={() => setSelectedEmotion(emo.value)}
                        >
                            <img src={emo.emoji} alt={emo.label} className={styles.emoji}/>  
                            <span className={styles.value}>{emo.value}</span>
                        </button>
                    ))}
                </div>

                <textarea
                    className={styles.textarea}
                    placeholder='Напишите пару слов о том, как прошёл ваш день'
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={8} 
                />

                <label className={styles.checkboxLabel}>
                    <input type="checkbox" checked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)} /> 
                    Сделать отзыв анонимным
                </label>

                {todayTask && (
                    <div className={styles.taskBlock}>
                        <div className={styles.taskTitle}>Ближайшая задача: </div>
                        <div className={styles.taskContent}>
                            <span>{todayTask.title}</span>
                            <span>{todayTask.image && <img src={todayTask.image} alt="иллюстрация" className={styles.taskImage} />}</span>
                        </div>
                    </div>
                )}

                <button className={styles.submitBtn} onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
            </div>
        </div>
    );
}

export default FormPage;
