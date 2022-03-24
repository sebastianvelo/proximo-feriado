import { StyleableProps, TextProps, WidgetProps } from "../Widget";

interface TitleProps extends TextProps, StyleableProps {}

const Title = (props: TitleProps): WidgetProps => ({
  tag: "h1",
  ...props
});

export default Title;
