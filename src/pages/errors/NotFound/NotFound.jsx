import { useNavigate } from "react-router";
import { Button } from "antd";
import "../../../assets/scss/errors-pages.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found error-page">
      <h1 className="error-title">Page not found...</h1>
      <p>It appears that the page you are looking for does not exist.</p>
      <Button type="primary" onClick={() => navigate("/")}>
        Go back to form
      </Button>
    </div>
  );
};

export default NotFound;
