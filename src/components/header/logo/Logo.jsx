import logo from "../../../assets/images/kareemLogo.png";

const Logo = () => {
  return (
    <div className="logo flex align-center gap-10">
      <img src={logo} alt="logo" className="logo-image" />
      <p>WeatherApp</p>
    </div>
  );
};

export default Logo;
