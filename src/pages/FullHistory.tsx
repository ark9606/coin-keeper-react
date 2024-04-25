import { Link } from "react-router-dom";

export const FullHistory = () => {
  return (
    <div>
      <nav>
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
      <h1>Full history here</h1>
    </div>
  );
};