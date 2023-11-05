import { useState } from "react";
import { DesktopNavBar, HeaderStyle, MobileNavBar } from "./header.style";
import imagemMatriz from "../../assets/math-matrix-mathematics-sciecnce-concept-colored-vector-47348687.png";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

export const Header = () => {
  const navigate = useNavigate();
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  const handleNavigation = (endPoint: string) => {
    setDisplayMenu(false);
    navigate(`${endPoint}`);
  };
  return (
    <>
      <HeaderStyle>
        <div>
          <img src={imagemMatriz} alt="logo" />
        </div>
        <div id="web-site-title">
          <h2>PIZZO CALCULATOR</h2>
        </div>
        <div id="hamb-menu">
          {displayMenu ? (
            <TfiClose
              color="white"
              size={48}
              onClick={() => setDisplayMenu(false)}
            />
          ) : (
            <RxHamburgerMenu
              color="white"
              size={48}
              onClick={() => setDisplayMenu(true)}
            />
          )}
        </div>
          <DesktopNavBar>
            <ul>
              <li onClick={() => handleNavigation("/")}>HOME</li>
              <li onClick={() => handleNavigation("/about")}>ABOUT</li>
            </ul>
          </DesktopNavBar>
      </HeaderStyle>
      {displayMenu && (
        <MobileNavBar id="nav-bar">
          <ul>
            <li onClick={() => handleNavigation("/")}>HOME</li>
            <li onClick={() => handleNavigation("/about")}>ABOUT</li>
          </ul>
        </MobileNavBar>
      )}
    </>
  );
};
