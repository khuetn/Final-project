import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useLocation, withRouter } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ROUTES } from "../../constants/routes";
//------------------
import { FirebaseContext } from "../../firebase/index";
import SearchProducts from "../SearchProduct/SearchProducts";
import "./Header.scss";

//------------------

const Nav = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

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
  const location = useLocation();

  console.log(user);
  function searchDiscount() {
    dispatch({ type: "DISCOUNT", payload: {} });
    history.push(ROUTES.SEARCH);
  }
  function searchProduct() {
    dispatch({ type: "abc", payload: {} });
    history.push(ROUTES.SEARCH);
  }
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
            <SearchProducts />
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
                      <div className="profileBtn">Your Profile</div>
                      <div className="profileBtn">Your Orders</div>
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
            <li onClick={searchProduct}>Product</li>
            <li>About</li>
            <li onClick={searchDiscount}>Sale</li>
            <NavLink to={ROUTES.CONTACT}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Nav);