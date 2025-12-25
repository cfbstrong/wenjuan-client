import React, { FC } from "react";
import styles from "./QuestionCheckbox.module.scss";

//important: 提交给服务端的数据格式为：{fe_id:xxx, selectedItems: "a.b.c"}
type ListItemType = {
  value: string;
  label: string;
  checked: boolean;
};

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    vertical: boolean;
    list: Array<ListItemType>;
  };
};

const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, vertical, list } = props;

  const checkboxItemStyle = vertical
    ? styles.verticalItem
    : styles.horizontalItem;

  function handleCheckboxChange(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <p>{title}</p>
      <div>
        {list.map((item, index) => {
          const { value, label, checked } = item;
          return (
            <label key={index} className={checkboxItemStyle}>
              <input
                type="checkbox"
                checked={checked}
                value={value}
                onChange={(e) => {
                  handleCheckboxChange(e);
                }}
              />
              {label}
            </label>
          );
        })}
      </div>
    </>
  );
};

export default QuestionCheckbox;
