import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

function Navbar({ username }) {
  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {/* Final step of drilling to UserProfile */}
      <UserProfile username={username} />
    </nav>
  );
}
export default Navbar;