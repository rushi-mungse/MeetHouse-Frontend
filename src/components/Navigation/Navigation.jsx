import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { logout } from "../../http/index";
import { setAuth } from "../../store/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const ourBrand = {
    display: "flex",
    alignItems: "center",
    justofyContent: "center",
    textDecoration: "none",
  };

  const logoText = {
    marginLeft: "10px",
    color: "#FFF",
    letterSpacing: "1px",
  };
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const logoutUser = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth({ data }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className={styles.navigation}>
      <Link style={ourBrand} to="/">
        <img src="/images/logo.png" alt="logo" />
        <h1 style={logoText}>MeetHouse</h1>
      </Link>
      {isAuth && (
        <div className={styles.userInfo}>
          {user.name && <h4 className={styles.userName}>@{user.username}</h4>}
          {user.avatar && (
            <img src={user.avatar} alt="avatar" className={styles.avatar} />
          )}
          <button className={styles.logoutBtn} onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
