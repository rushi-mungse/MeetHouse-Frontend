import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
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

  return (
    <nav>
      <div className={styles.navigation}>
        <Link style={ourBrand} to="/">
          <img src="/images/logo.png" alt="logo" />
          <h1 style={logoText}>MeetHouse</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
