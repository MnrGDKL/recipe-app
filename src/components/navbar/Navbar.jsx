import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {/* hamburger o anda ne durumdaysa, tıklandığında tersi olacak, açıksa kapalı, false ise true.. */}
        <span />
        <span />
        <span />
        {/* boş spanlar verilen stillerle çizgi yapıyor */}
      </Hamburger>

      <Menu osman={isOpen}>
        {/* buradan styles sayfasına true false durumu gidiyor,5. satırda ilk false (kapalı) başlıyor, tıklandıkça setIsOpen ile değişiyor */}
        <MenuLink to="/about">About</MenuLink>
        <MenuLink
          to={{
            pathname:
              "https://github.com/AshleyMiller79/recipe-app/tree/master/src",
          }}
        >
          Github
        </MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
