import { MdOutlineArticle } from "react-icons/md";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="icon">
          <MdOutlineArticle />
        </div>
        <div className="title">Resume Generator</div>
      </div>
    </header>
  );
};

export default Header;
