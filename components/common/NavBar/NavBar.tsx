import { Container } from '@components/ui'
import React, {FC} from 'react'
import Link from 'next/link'
import s from "./NavBar.module.css"
import Usernav from '../Usernav'
const NavBar: FC = () => {
  return (
    <Container>
        <div className={s.root}>
            <div className='flex flex-1 items-center'>
            <Link href="/">
                <a className={s.logo}>
                        ABOVE_BEYOND
                </a>
            </Link>
            <nav className='ml-6 space-x-6'>
                <Link href="/">
                    <a className={s.link}>All</a>
                </Link>
                <Link href="/">
                    <a className={s.link}>Clothes</a>
                </Link>
                <Link href="/">
                    <a className={s.link}>Accessories</a>
                </Link>
                <Link href="/">
                    <a className={s.link}>Shoes</a>
                </Link>
            </nav>
                <div className='flex flex-1 justify-end space-x-8'>
                    <Usernav />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default NavBar