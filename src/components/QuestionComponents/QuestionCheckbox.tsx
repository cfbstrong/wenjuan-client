import React, { FC, useState, useEffect } from "react";
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

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  useEffect(() => {
    list.forEach((item) => {
      if (item.checked) {
        setCheckedItems((prev) => [...prev, item.value]);
      }
    });
  }, [list]);

  const checkboxItemStyle = vertical
    ? styles.verticalItem
    : styles.horizontalItem;

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    //在页面进行简单的测试可以发现：它并不是一个受控组件
    //想要受控，需要维护状态
    // console.log(e.target.value);
    const selectedValue = e.target.value;
    if (checkedItems.includes(selectedValue)) {
      setCheckedItems(checkedItems.filter((item) => item !== selectedValue)); //数据不可变性
    } else {
      setCheckedItems([...checkedItems, selectedValue]);
    }
  }

  return (
    <>
      <p>{title}</p>
      <input type="hidden" name={fe_id} value={checkedItems.toString()} />
      <div>
        {list.map((item, index) => {
          const { value, label, checked } = item;
          return (
            <label key={index} className={checkboxItemStyle}>
              <input
                type="checkbox"
                checked={checkedItems.includes(value)}
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
