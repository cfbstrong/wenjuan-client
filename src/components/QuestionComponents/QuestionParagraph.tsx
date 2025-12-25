import { disconnect } from "process";
import React, { FC } from "react";

type PropsType = {
  text: string;
  isCenter: boolean;
};

const QuestionParagraph: FC<PropsType> = (props) => {
  const { text, isCenter } = props;

  const textList = text.split("\n");

  return (
    <p style={{ textAlign: isCenter ? "center" : "left" }}>
      {textList.map((t, index) => {
        return (
          <span key={index}>
            {index > 0 && <br />}
            {t}
          </span>
        );
      })}
    </p>
  );
};

export default QuestionParagraph;
