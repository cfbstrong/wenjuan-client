import { get } from "@/services/ajax";

export async function getQuestionById(id: string) {
  const data = await get(`/api/question/${id}`);
  return data;
}
