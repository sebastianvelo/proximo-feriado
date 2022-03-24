import Carousel, {
  CarouselProps
} from "../../lib/components/carousel/Carousel";
import Layout from "../../lib/widgets/Layout";
import Title from "../../lib/widgets/Title";
import Wrapper from "../../lib/widgets/Wrapper";
import { DateWrapperProps } from "../components/date/DateWrapper";

export interface HomePageProps {
  title: (locale: string) => string | undefined;
  carousel: (locale: string) => CarouselProps<DateWrapperProps>;
}

const style = {
  page: {
    color: "white",
    background: "linear-gradient(133deg, rgba(0,89,150,1) 0%, rgba(115,0,204,1) 100%, rgba(17,0,75,1) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    overflow: "hidden"
  },
  title: {
    fontSize: "54px",
    position: "absolute",
    top: "0"
  }
};

const getLocale = () => "" || "ar";

const HomePage = (props: HomePageProps) =>
  Layout({
    children: [
      Wrapper({
        children: [
          /*Title({
            text: props.title(getLocale()),
            style: style.title
          }),*/
          Carousel(props.carousel(getLocale()))
        ],
        style: style.page
      })
    ]
  });

export default HomePage;
