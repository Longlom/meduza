import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="main-container">
      <h1>Welcome to Meduza</h1>
      <div className="button-group">
        <Link to="/menu" className="button">View Menu</Link>
      </div>
    </div>
  );
}

export default MainPage;