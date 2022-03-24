import { WidgetProps } from "../../../lib/Widget";
import Wrapper from "../../../lib/widgets/Wrapper";
import CarouselControl from "./CarouselControl";
import CarouselItems from "./CarouselItems";

export interface CarouselProps<Props> {
  id: string;
  items: Props[];
  CarouselItem: (props: Props) => WidgetProps;
}

const style = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "100%",
  width: "100%"
};

const Carousel = <Props>(props: CarouselProps<Props>) =>
  Wrapper({
    children: [
      CarouselControl({
        left: true,
        carousel: props.id
      }),
      CarouselItems(props),
      CarouselControl({
        left: false,
        carousel: props.id
      })
    ],
    style
  });

export default Carousel;
