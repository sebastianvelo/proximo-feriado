import Text from "../../../lib/widgets/Text";
import Title from "../../../lib/widgets/Title";
import Wrapper from "../../../lib/widgets/Wrapper";
import DateHelper from "../../helpers/DateHelper";

export interface DateWrapperProps {
  date: {
    month: number;
    day: number;
  };
  name: string;
  lang: string;
}

const style = {
  wrapper: {
    textAlign: "center",
    width: "100vw",
    padding: "0px 150px",
    textShadow: "#000 3px 2px 5px",
  },
  date: {
    fontSize: "60px"
  },
  name: {
    fontSize: "40px",
    fontWeight: "bold"
  },
  remaining: {
    fontSize: "75px",
    fontWeight: "bold"
  }
};

const DateWrapper = (props: DateWrapperProps) =>
  Wrapper({
    children: [
      Text({
        text: DateHelper.Wordings.getRemaining(props),
        style: style.remaining
      }),
      Text({
        text: DateHelper.Wordings.getDate(props),
        style: style.date
      }),
      Text({
        text: DateHelper.Wordings.getName(props),
        style: style.name
      })
    ],
    style: style.wrapper
  });

export default DateWrapper;
