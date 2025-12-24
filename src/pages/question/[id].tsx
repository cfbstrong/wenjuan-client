import Head from "next/head";
import styles from "@/styles/Question.module.scss";
import { getQuestionById } from "@/services/question";
import PageWrapper from "@/components/PageWrapper";
import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";

type PropsType = {
  errno: number;
  data?: {
    id: string;
    title: string;
    description?: string;
    js?: string;
    css?: string;
    isPublished: boolean;
    isDeleted: boolean;
    //组件列表
    componentList: Array<any>;
  };
  msg?: string;
};

export default function Question(props: PropsType) {
  const { errno, data, msg } = props;
  const { id, title = "", isDeleted, isPublished, description } = data || {};

  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={description}>
        <h1>{title}</h1>
        <p>该问卷已被删除</p>
      </PageWrapper>
    );
  }

  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={description}>
        <h1>{title}</h1>
        <p>该问卷尚未发布</p>
      </PageWrapper>
    );
  }

  return (
    <>
      {/* <Head>
        <title>Question</title>
        <meta name="description" content="Question page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <PageWrapper title={title} desc={description}>
        <form method="post" action="/api/answer">
          {/* 隐藏域提交id */}
          <input type="hidden" name="questionId" value={id} />
          <div className={styles.componentWrapper}>
            <QuestionInput
              fe_id={"123"}
              props={{ title: "test", placeholder: "test" }}
            />
          </div>
          <div className={styles.componentWrapper}>
            <QuestionRadio
              fe_id={"1234"}
              props={{
                title: "test",
                options: [
                  { label: "test1", value: "test1" },
                  { label: "test2", value: "test21" },
                  { label: "test3", value: "test3" },
                ],
                value: "test",
                vertical: true,
              }}
            />
          </div>
          <div className={styles.submitBtnContainer}>
            {/* <input type="submit" value="提交" /> */}
            <button type="submit">提交</button>
          </div>
        </form>
      </PageWrapper>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  const data = await getQuestionById(id);

  return {
    props: data,
  };
}
