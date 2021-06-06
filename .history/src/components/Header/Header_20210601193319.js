import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ROUTES } from "../../constants/routes";
//------------------
import { FirebaseContext } from "../../firebase/index";
import SearchProducts from "../SearchProduct/SearchProducts";
import { AiOutlineSearch } from "react-icons/ai";

import "./Header.scss";
//------------------

const Nav = () => {
  const history = useHistory();
  const [filter, setFilter] = React.useState("");

  const { totalQuantities } = useSelector((state) => state.cart);
  const [profile, setProfile] = React.useState(null);
  const { user, firebase } = React.useContext(FirebaseContext);
  const check = true;
  React.useEffect(() => {
    getData();
  }, []);

  function getData() {
    if (user) {
      firebase.db
        .collection("profile")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data());
            setProfile(doc.data());
          }
        });
    }
  }

  console.log(user);
  const handleSubmit = (event) => {
    const { search } = window.location;
    const content = new URLSearchParams(search);
    console.log(content);
    const query = filter.toLowerCase();
    alert("ok");
    event.preventDefault();

    // history.push({
    //   pathname: ROUTES.SEARCH,
    //   state: query,
    // });
  };

  return (
    <div className="row">
      <div className="header">
        <div className="header__container container">
          <div className="header__left">
            <div onClick={() => history.push(ROUTES.HOME)}>
              <img src={logo} />
            </div>
          </div>
          <div className="searchbar">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="search product"
                name="s"
                onChange={(event) => setFilter(event.target.value)}
              />
              {/* <Link to={ROUTES.SEARCH}> */}
              <button
                htmlType="submit"
                type="primary"
                // disabled={isFormValid}
                className="btn-search"
              >
                <AiOutlineSearch
                  style={{
                    fontSize: "22px",
                  }}
                />
              </button>
              {/* </Link> */}
            </form>
            {/* <SearchProducts /> */}
          </div>
          <div className="header__right">
            <div className="btn-login">
              {user ? (
                <>
                  <div className="header-account">
                    <FaUserCircle className="header-user" />
                    {user.displayName}
                    {/* {profile ? profile.phone : "none"} */}
                    <div className="header-profile">
                      <div className="profileBtn">Thông tin cá nhân</div>
                      <div className="profileBtn">Xem đơn hàng</div>
                      <div
                        className="profileBtn"
                        onClick={() => firebase.logout()}
                      >
                        log out
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    to={{
                      pathname: ROUTES.LOGIN,
                      state: true,
                    }}
                    className="header-link"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to={{
                      pathname: ROUTES.LOGIN,
                      state: false,
                    }}
                    className="header-link"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
            <div className="cart-box" onClick={() => history.push(ROUTES.CART)}>
              <div className="basket">
                <BsFillBagFill className="cart-icon" />
                {user && <span>{totalQuantities}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <ul className="container">
            <NavLink to={ROUTES.HOME}>
              <li>Home</li>
            </NavLink>
            <li>Product</li>
            <li>About</li>
            <li>Sale</li>
            <NavLink to={ROUTES.CONTACT}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
