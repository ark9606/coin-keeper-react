import { PropsWithChildren } from "react";
import { Menu } from "../components/Menu";

export const BasePage = (props: PropsWithChildren) => {
  return (
    <div>
      <h1>Coin keeper</h1>
      <Menu/>
      {props.children}
    </div>
  );
};