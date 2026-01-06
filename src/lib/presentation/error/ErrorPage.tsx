import Result from "antd/es/result";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../shared/CustomButton";

 const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <div className="flex justify-center">
          <CustomButton type="primary" onClick={() => navigate("/")}>
            Back Home
          </CustomButton>
        </div>
      }
    />
  );
};

export default ErrorPage;
