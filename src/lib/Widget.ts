export interface TextProps {
  text?: string;
}

export interface ParentProps {
  children?: WidgetProps[];
}

export interface StyleableProps {
  style?: { [key: string]: string };
}

export interface AttributesProps {
  attr?: { [key: string]: string };
}

export interface EventsProps {
  events?: { [event: string]: (e: any) => void };
}

export interface WidgetProps
  extends AttributesProps,
    EventsProps,
    TextProps,
    ParentProps,
    StyleableProps {
  tag: string;
}

const Widget = (props: WidgetProps): HTMLElement => {
  const widget = document.createElement(props.tag);
  const children = props.children?.map(Widget);
  Object.entries(props.attr ?? {})?.forEach(([key, value]) =>
    widget.setAttribute(key, value)
  );
  Object.entries(props.style ?? {})?.forEach(
    ([key, value]) => (widget.style[key] = value)
  );
  Object.entries(props.events ?? {})?.forEach(([event, listener]) =>
    widget.addEventListener(event, listener)
  );
  widget.textContent = props.text ?? null;
  children?.forEach((child) => widget.append(child));
  return widget;
};

export default Widget;
