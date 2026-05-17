import { events } from '../mocks/data';


function EventsPage() {
  return (
    <div>
      <h2>Мероприятия</h2>
      <ul>
        {events.map(e => <li key={e.id}>{e.title} – {e.date}</li>)}
      </ul>
      <button>➕ Создать мероприятие</button>
    </div>
  );
}
export default EventsPage;