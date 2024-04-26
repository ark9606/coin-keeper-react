import { Link } from "react-router-dom";
import './Menu.scss';

export const Menu = () => {
  return (
    <nav id='menu'>
      <ul>
        <li>
          <Link to="/">Add expense</Link>
        </li>
        <li>
          <Link to='/history'>Full history</Link>
        </li>
        <li>
          <Link to='/analytics'>Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};