import React from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  const style = {
    link: {
      color: "white",
      textDecoration: "none",
    },
  };

  return (
    <div>
      <nav>
        <ul className="nav-link">
          <Link style={style.link} to="/">
            <button>Quiz</button>
          </Link>
          <Link style={style.link} to="/signin">
          <button>Login</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
