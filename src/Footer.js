import React from "react";

const Footer = props => {
  const { footerDetails } = props;
  return (
    <footer
      className="container-fluid"
      style={{
        background: "black",
        color: "white",
        lineHeight: "24px",
        width: "100%",
        clear: "both",
        position: "fixed",
        left: "0",
        bottom: "0",
        alignSelf: "center"
        // textAlign: "center",
        // alignContent: "center",
      }}
    >
      <ul className="navbar-nav" style={{ textAlign: "center" }}>
        {footerDetails.map((detail, index) => (
          <li className="nav-item active" key={index}>
            {detail}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
