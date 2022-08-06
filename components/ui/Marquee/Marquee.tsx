import React, { FC, ReactNode } from "react";
import s from "./Marquee.module.css";
import ReactFastMarquee from "react-fast-marquee";
import cn from "classnames";
interface Props {
  children: ReactNode[];
  direction?: "left" | "right";
  variant?: "primary" | "secondary";
  gradient?: boolean;
}

const Marquee: FC<Props> = ({
  children,
  direction = "left",
  variant = "primary",
  gradient,
}) => {
  const rootClassName = cn(s.root, {
    [s.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      {/* and this  */}
      <ReactFastMarquee
        speed={50}
        gradient={gradient}
        direction={direction}
        loop={0}
        play={true}
      >
        <div className={s.container}>{children}</div>
      </ReactFastMarquee>
    </div>
  );
};

export default Marquee;
