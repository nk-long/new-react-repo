import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1TFlOkSYVdbG0RiKjNm1CQP75NNQPJKjhw&usqp=CAU"
    />
  );
};

const Header = () => {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>

          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/con">Contacts</Link>
          </li>
        </ul>
      </div>
      {isLogin ? (
        <button
          onClick={() => {
            setLogin(false);
          }}
        >
          {" "}
          Login{" "}
        </button>
      ) : (
        <button
          onClick={() => {
            setLogin(true);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
