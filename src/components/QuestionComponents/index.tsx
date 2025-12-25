import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import QuestionTitle from "./QuestionTitle";
import QuestionParagraph from "./QuestionParagraph";
import QuestionInfo from "./QuestionInfo";
import QuestionTextarea from "./QuestionTextarea";
import QuestionCheckbox from "./QuestionCheckbox";

type ComponentInfo = {
  fe_id: string;
  title: string;
  type: string;
  isHidden: boolean;
  isLocked: boolean;
  props: any;
};

export function getComponent(component: ComponentInfo) {
  const { fe_id, type, isHidden, props } = component;

  if (isHidden) {
    return;
  }

  if (type == "questionRadio") {
    return <QuestionRadio fe_id={fe_id} props={props} />;
  }

  if (type == "questionInput") {
    return <QuestionInput fe_id={fe_id} props={props} />;
  }

  if (type == "questionTitle") {
    return <QuestionTitle {...props} />;
  }

  if (type == "questionPragraph") {
    return <QuestionParagraph {...props} />;
  }

  if (type == "questionInfo") {
    return <QuestionInfo {...props} />;
  }

  if (type == "questionTextarea") {
    return <QuestionTextarea fe_id={fe_id} props={props}></QuestionTextarea>;
  }

  if (type == "questionCheckbox") {
    return <QuestionCheckbox fe_id={fe_id} props={props}></QuestionCheckbox>;
  }
}
