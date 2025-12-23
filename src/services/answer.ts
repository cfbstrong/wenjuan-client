import { post } from "@/services/ajax";

//提交答卷
export async function postAnswer(answerInfo: any) {
  const data = await post("/api/answer", answerInfo);
  return data;
}
