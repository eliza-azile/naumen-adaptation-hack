import { useState } from 'react';
import { currentUser } from '../../mocks/data';
import UserCard from './UserCard';


function ProfilePage() {
  const [user, setUser] = useState(currentUser);
  const handleStatusChange = (newStatuses) => {
    setUser({ ...user, statuses: newStatuses });
  };
  return <UserCard user={user} onStatusChange={handleStatusChange} />;
}
export default ProfilePage;