
import React, {useState} from 'react'
import { Logo, Nav,Hamburger,Menu,MenuLink } from './NavbarStyles'

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
 <Nav>
<Logo to="/home" >
<i>{"<Clarusway>"}</i>
<span>recipe</span>
</Logo>
<Hamburger onClick={()=>setIsOpen(!isOpen)} >
  <span/>
  <span/>
  <span/>
</Hamburger>

<Menu osman={isOpen}>
<MenuLink to="/about">About</MenuLink>
<MenuLink to="/github">Github</MenuLink>
<MenuLink to="/">Logout</MenuLink>

</Menu>


 </Nav>
  )
}

export default Navbar