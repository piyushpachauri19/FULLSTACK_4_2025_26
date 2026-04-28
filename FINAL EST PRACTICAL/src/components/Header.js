import Navbar from './Navbar';

function Header({ username }) {
  return (
    <header style={{ padding: '1rem', background: '#f4f4f4' }}>
      <h1>My Portfolio</h1>
      <Navbar username={username} />
    </header>
  );
}
export default Header;