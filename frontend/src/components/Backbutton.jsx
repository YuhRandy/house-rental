import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = ({ text = "" }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2">
      <IoArrowBackSharp onClick={() => navigate(-1)} className="w-7 h-7" />
      <span className="text-xl">{text}</span>
    </div>
  );
};

export default BackButton;
