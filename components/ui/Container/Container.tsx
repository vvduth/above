import React, { FC, ReactNode , ComponentType, HTMLAttributes} from "react";

interface Props {
  children: ReactNode[] | ReactNode;
  el?: ComponentType<HTMLAttributes<HTMLElement>> ;
}

const Container: FC<Props> = ({ children, el: Component="div" as unknown as ComponentType<HTMLAttributes<HTMLElement>> }: Props) => {
  return (
    <Component style={{ maxWidth: "1920px" }} className="px-6 mx-auto max-w-8xl">
      {children}
    </Component>
  );
};

export default Container;
