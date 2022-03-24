import { StyleableProps, TextProps, WidgetProps } from "../Widget";

interface TextCProps extends TextProps, StyleableProps {}

const Text = (props: TextCProps): WidgetProps => ({
  tag: "p",
  ...props
});

export default Text;
