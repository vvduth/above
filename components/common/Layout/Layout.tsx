import { FC } from 'react'

const Layout:FC<any> = (props) => {
  return (
    <div className='layout'>{props.children}</div>
  )
}

export default Layout