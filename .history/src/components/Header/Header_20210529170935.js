import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ROUTES } from "../../constants/routes";
//------------------
import { FirebaseContext } from "../../firebase/index";
import SearchProducts from "../SearchProduct/SearchProducts";
import "./Header.scss";
//------------------

const Nav = () => {
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
  const history = useHistory();
  const handleSubmit = () => {};
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
            <NavLink to={ROUTES.SEARCH}>search</NavLink>
            <form>
              <input placeholder="search product" />
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
