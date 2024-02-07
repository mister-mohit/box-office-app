import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <h1>Box Office App</h1>
      <h2>Are you looking for a Movie or an Actor?</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/starred">Starred</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MainLayout;
