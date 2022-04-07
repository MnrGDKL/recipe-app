import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyles";
//  import { ExternalLink } from "react-external-link";
// import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setfirst] = useState("");
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {/* hamburger o anda ne durumdaysa, tıklandığında tersi olacak, false ise true..ve sonra Menu bunu style a props la gönder */}
        {/* <GiHamburgerMenu /> */}
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
        <h3>nnn</h3>>
        {/* hamburger tıklanınca open açılıyor, about a basınca false kapanmalı */}
        <MenuLink
          onClick={() =>
            setfirst(
              (window.location.href =
                "https://github.com/orgs/clarusway/dashboard")
            )
          }
          to={first}
          target="_blank"
        >
          Githubb
        </MenuLink>
        {/* React-router, Tek Sayfalık Uygulama için bir yönlendirme sistemidir. Tüm
        rotaların sayfanızda tanımlanması ve uygulamanızın içinde kapsüllenmesi
        gerekir */}
        {/* <ExtrnlLink href="https://github.com/orgs/clarusway/dashboard">
          Github
        </ExtrnlLink> */}
        {/* <A href="https://github.com" target="_blank">
          Github
        </A> */}
        <MenuLink
          onClick={() => setIsOpen(!isOpen)}
          // onMouseUp= fare düğmesini bırakırken
          onMouseUp={() => sessionStorage.clear()}
          to="/"
        >
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
