import { FC } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
const Layout: FC<any> = (props) => {
  return (
    <div className={s.root}>
      <Navbar />
      <main className="fit">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
