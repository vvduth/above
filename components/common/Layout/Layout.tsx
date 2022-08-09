import { FC } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import CartSideBar from "@components/cart/CartSideBar";
import { useUI } from "@components/ui/context";
import { ApiProvider } from "@framework";
const Layout: FC<any> = (props) => {
  const ui = useUI();
  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar isOpen={ui.isSidebarOpen} onClose={ui.closeSidebar}>
          <CartSideBar />
        </Sidebar>
        <main className="fit">{props.children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};

export default Layout;
