import React from "react";
import "./ReviewForm.css";
import {
  BsEmojiFrownFill,
  BsEmojiNeutralFill,
  BsFillEmojiLaughingFill,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container ">
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="unsatisfied"
            required
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="neutral"
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="satisfied"
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiLaughingFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="very_satisfied"
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          placeholder="Descreva como foi a sua experiência"
          required
          value={data.comment}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
