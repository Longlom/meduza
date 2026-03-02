import { Link } from 'react-router-dom';

import style from './style.module.css'

function MainPage() {
  return (
    <div className="main-container">
      <h1>Meduza</h1>
      <div className={style.buttonGroup}>
        <Link to="/menu" className={style.buttonGroupLink}>View Menu</Link>
      </div>
    </div>
  );
}

export default MainPage;