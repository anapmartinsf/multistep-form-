import "./Steps.css";
import { FiUser } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <FiUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <FaRegStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <TbSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
