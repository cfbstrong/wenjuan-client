import React, { FC } from "react";
import styles from "./QuestionRadio.module.scss";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    value: string; //默认 被选中的值
    vertical: boolean;
    options: Array<{ value: string; label: string }>;
  };
};

const QuestionRadio: FC<PropsType> = ({ fe_id, props }) => {
  const { title, value, vertical, options = [] } = props;

  return (
    <>
      <p>{title}</p>
      <div>
        {/* <input type="radio" name="radioName" value="value1" /> 选项1
        <input type="radio" name="radioName" value="value2" /> 选项2
        <input type="radio" name="radioName" value="value3" /> 选项3 */}
        {options.map((item) => {
          //这里的value是真正提交到服务器的值，name="value"
          const { value: val, label } = item;
          let itemClassName = "";

          if (vertical) {
            itemClassName = styles.verticalItem;
          } else {
            itemClassName = styles.horizontalItem;
          }

          return (
            <div key={val} className={itemClassName}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value}
                />
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuestionRadio;
