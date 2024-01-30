import { Link } from 'react-router-dom';
import './navbar.css'; // Import the custom styles
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { logout } from '../../store/authSlice'

type Props = {};

const Navbar = (props: Props) => {

    const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    const stickNavbar = () => {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    };

    window.addEventListener('scroll', stickNavbar);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const { userToken, userType } = useSelector((state: RootState) => state.auth);  const dispatch = useDispatch()

  return (
    <nav className={`navbar ${stickyClass} navbar-expand-lg navbar-dark`} style={{ backgroundColor: "#011223" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Eurocars
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cars">
                Cars
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {userToken && userType === 'ADMIN' && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">AdminPanel</Link>
                            </li>
                        )}
                        {userToken && userType !== 'ADMIN' && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/mygarage">MyGarage</Link>
                            </li>
                        )}
                        {!userToken ? (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "red" }} onClick={() => dispatch(logout())}>
                                    Logout
                                </a>
                            </li>
                        )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
