import {
  AttributesProps,
  EventsProps,
  ParentProps,
  StyleableProps,
  WidgetProps
} from "../Widget";

interface WrapperProps
  extends EventsProps,
    AttributesProps,
    ParentProps,
    StyleableProps {}

const Wrapper = (props: WrapperProps): WidgetProps => ({
  tag: "div",
  ...props
});

export default Wrapper;
