import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";

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
}
