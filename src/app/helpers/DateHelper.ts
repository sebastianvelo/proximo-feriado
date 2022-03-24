import { DateWrapperProps } from "../components/date/DateWrapper";

class DateHelper {
  private static calculateDifference = (dateTo: Date) => {
    const now = new Date();
    const time = (dateTo.getTime() - now.getTime() + 1000) / 1000;
    const seconds = ("0" + Math.floor(time % 60)).slice(-2);
    const minutes = ("0" + Math.floor((time / 60) % 60)).slice(-2);
    const hours = ("0" + Math.floor((time / 3600) % 24)).slice(-2);
    const days = Math.floor(time / (3600 * 24));

    return {
      seconds,
      minutes,
      hours,
      days,
      time
    };
  };

  private static getDateFromProps = (props: DateWrapperProps) =>
    new Date(new Date().getFullYear(), props.date.month - 1, props.date.day);

  private static getDifferenceDays = (props: DateWrapperProps) =>
    DateHelper.calculateDifference(DateHelper.getDateFromProps(props)).days + 1;

  private static getDateWording = (props: DateWrapperProps) => DateHelper.getDateFromProps(props).toLocaleDateString(
    "es-AR",
    DateHelper.getDateOptions
  )

  private static getDateWordingFormatted = (props: DateWrapperProps) => {
    const wording = DateHelper.getDateWording(props);
    return `${wording[0].toUpperCase()}${wording.substring(1)}`
  }

  private static getDateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };

  static Wordings = {
    getRemaining: (props: DateWrapperProps) => `Faltan ${DateHelper.getDifferenceDays(props)} días`,
    getDate: (props: DateWrapperProps) => DateHelper.getDateWordingFormatted(props),
    getName: (props: DateWrapperProps) => props.name
  };

  static isNext = (props: DateWrapperProps) =>
    DateHelper.getDateFromProps(props).getTime() > Date.now();
}

export default DateHelper;
