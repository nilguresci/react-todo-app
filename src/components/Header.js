import PropTypes from "prop-types";
import Login from "./Login";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const Header = ({ title }) => {
  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <header className="d-flex header">
      <div className="col-2"></div>
      <div className="col-8 title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-left"
          viewBox="0 0 16 16"
        >
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
        </svg>
        <h3 className="ms-2">{title}</h3>
      </div>
      <div className="col-2 d-flex">
        {localStorage.getItem("user") ? (
          <>
            <div style={{ marginRight: "15px" }}>
              {localStorage.getItem("user")}
            </div>
            <a href="/login" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "School",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
