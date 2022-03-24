import App from "./app/App";
import data from "./app/data/app-data";
import "./styles.css";

const render = (component: HTMLElement, targetId: string) => {
  const target = document.getElementById(targetId);
  target?.append(component);
};

render(App(data), "app");
