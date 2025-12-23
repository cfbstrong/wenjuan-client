import type { NextApiRequest, NextApiResponse } from "next";

function getAnswerInfo(reqBody: any) {
  //格式标准化前端提交表单数据的格式
  const answerList: Array<any> = [];

  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      componentId: key,
      value: reqBody[key],
    });
  });

  return {
    questionId: reqBody.questionId,
    answerList,
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //使用: /api/answer即可访问到
  console.log(req.method);
  if (req.method !== "POST") {
    res.status(200).json({ errno: -1, msg: "method error" });
  }
  const answerInfo = getAnswerInfo(req.body);
  //   console.log(answerInfo);

  try {
    //如果提交成功了
    // res.redirect("/success");

    //如果提交失败了
    res.redirect("/fail");
  } catch (err) {}

  //   res.status(200).json({ errno: 0 });
}
