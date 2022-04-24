import { Outlet, Link } from "react-router-dom";
import '../App.css';

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome.
        </h1>
        <p>
            <Link to="/" className="nav">Home</Link>
            <Link to="/login" className="nav">Login</Link>
            <Link to="/contact" className="nav">About</Link>
        </p>
      </header>

      <Outlet />

    </div>
  );
}

export default Layout;
