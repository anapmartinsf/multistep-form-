import React from "react";

import "./Completion.css";

import {
  BsEmojiFrownFill,
  BsEmojiNeutralFill,
  BsFillEmojiLaughingFill,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsEmojiFrownFill />,
  neutral: <BsEmojiNeutralFill />,
  satisfied: <BsFillEmojiLaughingFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Completion = ({ data }) => {
  return (
    <div className="completion-container">
      <h2>Falta pouco...</h2>
      <p>
        Em breve você receberá um cupom de 10% de desconto para a sua próxima
        compra. Basta concluir sua avaliação!
      </p>
      <h3>Aqui está um resumo da sua avaliação, {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: {emojiData[data.review]}</span>
      </p>
      <p className="review-data">
        <span>Comentário: </span> {data.comment}
      </p>
    </div>
  );
};

export default Completion;
