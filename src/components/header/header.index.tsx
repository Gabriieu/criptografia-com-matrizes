import { HeaderStyle } from "./header.style";
import imagemMatriz from "../../assets/math-matrix-mathematics-sciecnce-concept-colored-vector-47348687.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <img src={imagemMatriz} alt="logo" />
      <nav>
        <ul>
          <li onClick={() => navigate("/")}>HOME</li>
          <li onClick={() => navigate("/about")}>ABOUT</li>
        </ul>
      </nav>
      <h2>PIZZO CALCULATOR</h2>
    </HeaderStyle>
  );
};
