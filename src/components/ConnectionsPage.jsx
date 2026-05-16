import { people } from '../mocks/data';


function ConnectionsPage() {
  return (
    <div>
      <h2>Знакомства</h2>
      <div>
        <input placeholder="Фильтр по городу" />
        <input placeholder="Фильтр по интересам" />
      </div>
      {people.map(p => <div key={p.id}>{p.name}, {p.city}, {p.interests.join(', ')}</div>)}
    </div>
  );
}
export default ConnectionsPage;