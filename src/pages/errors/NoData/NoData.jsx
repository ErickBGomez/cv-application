import { Button } from "antd";
import { useNavigate } from "react-router";
import "../../../assets/scss/errors-pages.scss";

const NoData = () => {
  const navigate = useNavigate();

  return (
    <div className="no-data error-page">
      <h1 className="error-title">No information found...</h1>
      <p>Click the button below to create a new resume</p>
      <Button type="primary" onClick={() => navigate("/")}>
        Create resume
      </Button>
    </div>
  );
};

export default NoData;
