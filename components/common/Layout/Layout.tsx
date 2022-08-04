import { FC } from "react";
import s from "./Layout.module.css";

const Layout: FC<any> = (props) => {
  return (
    <div className={s.root}>
      <main className="fit">{props.children}</main>
    </div>
  );
};

export default Layout;
