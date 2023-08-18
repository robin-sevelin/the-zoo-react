import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/animals'>våra djur</Link>
        </li>
      </ul>
    </nav>
  );
};
