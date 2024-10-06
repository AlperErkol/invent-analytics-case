import { LoaderCircle } from "lucide-react";
import "../styles/loading.scss";

const Loading = () => {
  return (
    <div className="data-status-boundry">
      <div className="spinner">
        <LoaderCircle size={30} />
      </div>
    </div>
  );
};

export default Loading;
