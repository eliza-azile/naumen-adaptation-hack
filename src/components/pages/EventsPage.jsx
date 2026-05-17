import { useState } from 'react';
import { events, interestHashtags } from '../../mocks/data';
import styles from './EventsPage.module.css';

function EventsPage() {
  const [showAllTags, setShowAllTags] = useState(false);
  const displayedTags = showAllTags ? interestHashtags : interestHashtags?.slice(0, 3) || [];

  return (
    <div className={styles.container}>
      {/* Левая колонка */}
      <div className={styles.leftColumn}>
        <h2>Текущие мероприятия:</h2>
        <div className={styles.eventsList}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <h3>{event.title}</h3>
              <div className={styles.eventDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Формат:</span>
                  <span>{event.format}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Хэштеги:</span>
                  <span>{event.hashtags?.join(', ') || '—'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Бюджет:</span>
                  <span>{event.needBudget ? 'Требуется бюджет' : 'Без бюджета'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Где:</span>
                  <span>{event.where}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.interestsBlock}>
          <h3>Вам может быть интересно:</h3>
          <div className={styles.tagsList}>
            {displayedTags?.map(tag => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>
          {interestHashtags?.length > 3 && (
            <button className={styles.moreTagsBtn} onClick={() => setShowAllTags(!showAllTags)}>
              {showAllTags ? 'Скрыть' : 'Ещё хэштеги'}
            </button>
          )}
        </div>
      </div>

      {/* Правая колонка */}
      <div className={styles.rightColumn}>
        <div className={styles.suggestBlock}>
          <h3>Придумайте что-нибудь сами!</h3>
          <button className={styles.suggestBtn}>Предложить мероприятие</button>
          <p className={styles.suggestHint}>
            Даже маленькая идея может стать большим событием.
          </p>
        </div>
        <div className={styles.decorativeBranch} />
      </div>
    </div>
  );
}

export default EventsPage;