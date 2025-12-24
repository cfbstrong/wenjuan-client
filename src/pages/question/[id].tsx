import Head from "next/head";
import styles from "@/styles/Question.module.scss";
import PageWrapper from "@/components/PageWrapper";
import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";

type PropsType = {
  id: string;
};

export default function Question(props: PropsType) {
  const { id } = props;

  return (
    <>
      {/* <Head>
        <title>Question</title>
        <meta name="description" content="Question page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <PageWrapper title="Question" desc="Question page">
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

  return {
    props: {
      id,
    },
  };
}
