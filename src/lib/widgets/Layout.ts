import { ParentProps, StyleableProps, WidgetProps } from "../Widget";

interface LayoutProps extends ParentProps, StyleableProps {
  path?: string;
}

const Layout = (props: LayoutProps): WidgetProps => ({
  ...props,
  tag: "div",
  style: {
    display: !props.path || window.location.hash === `#${props.path}` ? "" : "none",
    ...props.style 
  },
});

export default Layout;
