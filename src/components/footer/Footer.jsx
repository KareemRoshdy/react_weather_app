import logo from "../../assets/images/kareemLogo.png";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "20px" }}>
      <img
        src={logo}
        alt="logo"
        width="40"
        height="40"
        style={{ borderRadius: "50%", margin: "10px auto" }}
      />
      <p className="" style={{ color: "var(    --on-surface-variant)" }}>
        Copyright 2023 Kareem Roshdy. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
