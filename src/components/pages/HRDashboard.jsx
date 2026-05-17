import {
  hrEmotionalState,
  hrBurnout,
  hrFeedback,
  hrRequests,
  hrPopularSections,
  ganttData,
} from '../../mocks/data';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import styles from './HRDashboard.module.css';
import nice from '../../assets/images/nice.png';

const feedbackColors = { positive: '#5DB84579', neutral: '#FFC61D93', negative: '#FF1D1D96' };

// Компонент шкалы сгорания
const BurnoutGauge = ({ value, trend }) => {
  let color = '#5DB84579';
  if (value > 70) color = '#FF1D1D96';
  else if (value > 30) color = '#FFC61D93';
  return (
    <div className={styles.burnout}>
      <div className={styles.burnoutBar}>
        <div className={styles.burnoutFill} style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
      <div className={styles.burnoutValue}>{value}%</div>
      <div className={styles.trend}>
        {trend > 0 ? `+ ${trend}% за неделю` : `-${trend}% за неделю`}
      </div>
    </div>
  );
};

// Общее эмоциональное состояние
const EmotionalState = () => (
  <div className={styles.card}>
    <h3>Эмоциональное состояние подопечных</h3>
    <div className={styles.emotionMain}>
      <img src={nice} alt="Хорошо" className={styles.emoji}/>
      <span className={styles.emotionPercent}>{hrEmotionalState.good}%</span>
    </div>
    <div className={styles.emotionDetails}>
      <div>{hrEmotionalState.good}% - хорошо</div>
      <div>{hrEmotionalState.neutral}% - нейтрально</div>
      <div>{hrEmotionalState.bad}% - нуждаются в поддержке</div>
    </div>
  </div>
);

// Уровень сгорания
const BurnoutBlock = () => (
  <div className={styles.card}>
    <h3>Общий уровень «Выгорания»</h3>
    <BurnoutGauge value={hrBurnout.value} trend={hrBurnout.trend} />
  </div>
);

// Обратная связь (столбцы)
const FeedbackChart = () => {
  const data = [
    { name: 'Положительная', value: hrFeedback.positive, color: feedbackColors.positive },
    { name: 'Нейтральная', value: hrFeedback.neutral, color: feedbackColors.neutral },
    { name: 'Негативная', value: hrFeedback.negative, color: feedbackColors.negative },
  ];
  return (
    <div className={styles.card}>
      <h3>Уровень обратной связи</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// RequestsList component
const RequestsList = () => (
  <div className={styles.card}>
    <h3 className={styles.requestTitle}>Запросы</h3>
    {hrRequests.length === 0 ? (
      <p>Нет новых запросов. Отдыхайте 🐼</p>
    ) : (
      <div className={styles.requestList}>
        {hrRequests.map((req, idx) => (
          <div 
            key={idx} 
            className={`${styles.requestCard} ${req.status === 'completed' ? styles.completed : styles.pending}`}
          >
            <div className={styles.requestHeader}>
              <img src={req.avatar} alt={req.name} className={styles.avatar} />
              <div className={styles.requestContent}>
                <div className={styles.requestName}>{req.name}</div>
                <div className={styles.requestText}>{req.text}</div>
              </div>
              {req.status === 'completed' && (
                <div className={styles.checkmark}>✓</div>
              )}
            </div>
            {req.status === 'new' && (
              <div className={styles.requestFooter}>
                <button className={styles.replyBtn}>Ответить</button>
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);

// Популярность подразделов (по среднему времени)
const PopularSections = () => {
  // Преобразуем время в минуты для столбцов
  const parseTime = (timeStr) => {
    const match = timeStr.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };
  const data = hrPopularSections.map(s => ({
    name: s.name,
    minutes: parseTime(s.averageTime),
    label: s.averageTime,
  }));
  const maxMinutes = Math.max(...data.map(d => d.minutes), 1);
  return (
    <div className={styles.card}>
      <h3 className={styles.barHeader}>Популярность подразделов</h3>
      <div className={styles.barsContainer}>
        {data.map(section => (
          <div key={section.name} className={styles.barWrapper}>
            <span className={styles.barLabel}>{section.name}</span>
            <div
              className={styles.bar}
              style={{ 
                width: `${(section.minutes / maxMinutes) * 100}%`,
                backgroundColor: section.minutes === maxMinutes ? '#FF671D' : '#D9D9D9'
              }}
            />
            <span className={styles.barValue}>{section.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Диаграмма Ганта (12 дней)
const GanttChart = () => {
  const dayCount = 12;
  const dayLabels = Array.from({ length: dayCount }, (_, i) => `День ${i+1}`);
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#5DB84579';
      case 'partial': return '#FFC61D93';
      case 'none': return '#FF1D1D96';
      default: return '#e0e0e0';
    }
  };

  // Проверяем, есть ли у сотрудника больше 2 красных меток
  const hasProblems = (days) => {
    const noneCount = days.filter(day => day === 'none').length;
    return noneCount >= 2;  // больше двух
  };

  return (
    <div className={styles.ganttCard}>
      <h3 className={styles.gantTitle}>ДИАГРАММА ГАНТА</h3>
      <div className={styles.ganttTable}>
        <div className={styles.ganttHeader}>
          <div className={styles.ganttName}>Сотрудник</div>
          {dayLabels.map(day => (
            <div key={day} className={styles.ganttDay}>{day}</div>
          ))}
        </div>
        {ganttData.map(employee => {
          const hasProblem = hasProblems(employee.days);
          
          return (
            <div 
              key={employee.name} 
              className={`${styles.ganttRow} ${hasProblem ? styles.ganttRowWarning : ''}`}
            >
              <div className={`${styles.ganttName} ${hasProblem ? styles.ganttNameWarning : ''}`}>
                {employee.name}
              </div>
              {employee.days.map((status, idx) => (
                <div
                  key={idx}
                  className={styles.ganttCell}
                  style={{ backgroundColor: getStatusColor(status) }}
                  title={status === 'none' && employee.problem ? employee.problem : (status === 'none' ? 'Риск отставания' : '')}
                />
              ))}
            </div>
          );
        })}
      </div>
      <div className={styles.ganttLegend}>
        <span><span style={{ backgroundColor: '#5DB84579' }}></span> Выполнено</span>
        <span><span style={{ backgroundColor: '#FFC61D93' }}></span> Частично</span>
        <span><span style={{ backgroundColor: '#FF1D1D96' }}></span> Риск (нет прогресса)</span>
        <span><span style={{ backgroundColor: '#e0e0e0' }}></span> Будущее</span>
      </div>
    </div>
  );
};
// Основной компонент
function HRDashboard() {
  return (
    <>
        <h1 className={styles.title}>СТАТИСТИКА</h1>
        <div className={styles.dashboard}>
        <div className={styles.leftColumn}>
            <EmotionalState />
            <BurnoutBlock />
            <FeedbackChart />
        </div>
        <div className={styles.rightColumn}>
            <RequestsList />
            <PopularSections />
        </div>
        <div className={styles.fullWidth}>
            <GanttChart />
        </div>
        </div>
    </>
  );
}

export default HRDashboard;


