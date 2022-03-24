import { EventsProps, StyleableProps, TextProps, WidgetProps } from "../Widget";

interface ButtonProps extends EventsProps, TextProps, StyleableProps {}

const Button = (props: ButtonProps): WidgetProps => ({
  tag: "button",
  ...props,
});

export default Button;
