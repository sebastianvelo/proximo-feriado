import Button from "../../../lib/widgets/Button";

export interface CarouselControlProps {
  carousel: string;
  left?: boolean;
}

const style = (props: CarouselControlProps) => ({
  position: "absolute",
  width: "75px",
  height: "100%",
  background: "rgba(0, 0, 0, 0.9)",
  fontWeight: "bold",
  fontSize: "32px",
  color: "white",
  border: "0",
  borderRadius: "5px",
  [props.left ? "left" : "right"]: "0",
  top: "0"
})

const CarouselControl = (props: CarouselControlProps) =>
  Button({
    text: props.left ? "<" : ">",
    style: style(props),
    events: {
      click: () => {
        const carousel = document.getElementById(props.carousel);
        const children = carousel!.children;
        const active: string = carousel!.getAttribute("active") ?? "";
        const newActive = props.left ? +active - 1 : +active + 1;
        if (newActive < 0 || newActive >= children.length) return;
        children[newActive].scrollIntoView({
          block: "end",
          behavior: "smooth"
        });
        carousel!.setAttribute("active", `${newActive}`);
      }
    }
  });

export default CarouselControl;
