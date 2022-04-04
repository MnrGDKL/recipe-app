import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu,ExtrnlLink,A } from "./NavbarStyles";
//  import { ExternalLink } from "react-external-link";
// import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {/* hamburger o anda ne durumdaysa, tıklandığında tersi olacak, false ise true.. */}
        <span />
        <span />
        <span />
        {/* XHTML= HTML ile hazırlanmış sayfaların tüm cihazlarda düzgün çalışması için geliştirilmiştir. Bu yüzden <span></span> şeklinde yazım (HTML), dinamik stillerin düzgün bir şekilde oluşturulmamasına,
        yeniden düzenleme işlemi sırasında hatalara, eksik bir tema desteğine
        neden olabilir ve uygulamanızı iyi bir sebep olmadan daha büyük hale
        getirebilir. */}
        {/* boş spanlar verilen stillerle çizgi yapıyor */}
      </Hamburger>

      <Menu osman={isOpen}>
        {/* buradan styles sayfasına true false durumu gidiyor,5. satırda ilk false (kapalı) başlıyor, tıklandıkça setIsOpen ile değişiyor */}
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/about">
          About
        </MenuLink>

        <MenuLink
          to={{ pathname: "https://github.com/orgs/clarusway/dashboard" }}
        >
          Github
        </MenuLink>

        <ExtrnlLink href="https://github.com/orgs/clarusway/dashboard">
          gg
        </ExtrnlLink>
        <A href="https://github.com">Link</A>
        <MenuLink onClick={() => setIsOpen(!isOpen)} to="/login">
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
