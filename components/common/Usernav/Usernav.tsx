import React, { FC } from "react";
import s from "./Usernav.module.css";
import Link from "next/link";
import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";
import useCart from "@framework/cart/use-cart";
import { LineItem } from "@common/types/cart";

const Usernav: FC = () => {
  const ui = useUI();
  const { data } = useCart();
  const itemCount = data?.lineItems.reduce((count:number, item: LineItem)=> {
    return count + item.quantity ;
  },0) ?? 0
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={ui.openSidebar} />
          {itemCount > 0 && 
          <span className={s.bagCount}>
            {itemCount}  
          </span>}
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
