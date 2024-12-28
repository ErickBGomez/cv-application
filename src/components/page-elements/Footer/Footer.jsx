import { Typography } from "antd";
import "./Footer.scss";

const { Link } = Typography;

const Footer = () => {
  return (
    <footer>
      <span>
        Made by{" "}
        <Link
          className="credits"
          href="https://github.com/ErickBGomez"
          target="_blank"
        >
          Erick B. Gomez
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
