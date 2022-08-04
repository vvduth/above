import {FC, ReactNode} from 'react'
import s from "./Grid.module.css"
interface PropType {
    children: ReactNode 
}
const Grid: FC<PropType> = (props:PropType) => {
  return (
    <div className={s.root}>
        {props.children}
    </div>
  )
}

export default Grid