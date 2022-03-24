import { WidgetProps } from "../../../lib/Widget";
import Wrapper from "../../../lib/widgets/Wrapper";

export interface CarouselItemsProps<Props> {
  id?: string;
  items: Props[];
  CarouselItem: (props: Props) => WidgetProps;
}

const style = <Props>(props: CarouselItemsProps<Props>) => ({
  display: "flex",
  width: `${props.items.length * 100}vw`
});

const CarouselItems = <Props>(props: CarouselItemsProps<Props>) =>
  Wrapper({
    children: props.items.map(props.CarouselItem),
    style: style(props),
    attr: {
      id: props.id!,
      active: "0"
    }
  });

export default CarouselItems;
