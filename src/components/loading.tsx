import { LoaderCircle } from "lucide-react";
import "../styles/loading.scss";

const Loading = () => {
  return (
    <div className="spinner">
      <LoaderCircle size={30} />
    </div>
  );
};

export default Loading;
