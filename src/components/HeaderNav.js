import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div style={styles.flexContainer}>
      <div>
        <Link to="/shop/guys" style={styles.item} className="item">
          Guys
        </Link>
        <Link to="/shop/girls" style={styles.item} className="item">
          Girls
        </Link>
        <Link to="/shop/gilly-hicks" style={styles.item} className="item">
          Gilly Hicks
        </Link>
        <Link to="/shop/jeans" style={styles.item} className="item">
          Jeans
        </Link>
      </div>
    </div>
  );
};

export default HeaderNav;

const styles = {
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "57px",
    backgroundColor: "#292A33"
  },
  item: {
      margin: '20px',
      color: '#fcfcfa',
      fontSize: '1em',
      fontFamily: "PF Din,pfdin,sans-serif",
      fontWeight: '300px'
  }
};
