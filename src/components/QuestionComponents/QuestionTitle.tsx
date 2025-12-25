import React, { FC } from "react";

type PropsType = {
  title: string;
  level: number;
  isCenter: boolean;
};

const QuestionTitle: FC<PropsType> = (props) => {
  const { title, level, isCenter } = props;

  if (level === 1) {
    return <h1 style={{ textAlign: isCenter ? "center" : "left" }}>{title}</h1>;
  }
  if (level === 2) {
    return <h2 style={{ textAlign: isCenter ? "center" : "left" }}>{title}</h2>;
  }
  if (level === 3) {
    return <h3 style={{ textAlign: isCenter ? "center" : "left" }}>{title}</h3>;
  }

  return null;
};

export default QuestionTitle;
