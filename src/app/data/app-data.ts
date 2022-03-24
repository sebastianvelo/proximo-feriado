import { CarouselProps } from "../../lib/components/carousel/Carousel";
import { AppProps } from "../App";
import DateWrapper, { DateWrapperProps } from "../components/date/DateWrapper";
import DateHelper from "../helpers/DateHelper";
import { HomePageProps } from "../layout/HomePage";
import holidays from "./holidays";

const getTitle = (locale: string) => ({
  ar: "Feriados"
})[locale];

const getCarousel = (locale: string): CarouselProps<DateWrapperProps> => ({
  id: "dates",
  CarouselItem: DateWrapper,
  items: holidays[locale].filter(DateHelper.isNext)
})

const homePage: HomePageProps = {
  title: getTitle,
  carousel: getCarousel
}

const data: AppProps = {
  home: homePage
};

export default data;
