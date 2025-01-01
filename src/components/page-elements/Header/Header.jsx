import Logo from "../../../../public/favicon.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="icon">
          <img src={Logo} alt="Resume Generator logo" />
        </div>
        <div className="title">Resume Generator</div>
      </div>
    </header>
  );
};

export default Header;
