import React, { FC, ReactNode } from 'react'
import s from  "./ProductSlider.module.css"
interface Props {
    children: ReactNode | ReactNode[] ;
}

const ProductSlider:FC<Props> = ({children} : Props) => {
  return (
    <div className={s.root}>
        <div className="h-full transition-opacity">
            {children}
        </div>
    </div>
  )
}

export default ProductSlider