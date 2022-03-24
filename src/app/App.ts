import HomePage, { HomePageProps } from "./layout/HomePage";
import Widget from "../lib/Widget";

export interface AppProps {
  home: HomePageProps;
}

const App = (props: AppProps) =>
  Widget({
    tag: "div",
    children: [HomePage(props.home)]
  });

export default App;
