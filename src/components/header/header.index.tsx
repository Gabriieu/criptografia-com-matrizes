import { HeaderStyle } from "./header.style"
import imagemMatriz from "../../assets/math-matrix-mathematics-sciecnce-concept-colored-vector-47348687.png"

export const Header = () => {
    return(
        <HeaderStyle>
            <img src={imagemMatriz} alt="logo" />
            <h2>PIZZO CALCULATOR</h2>
        </HeaderStyle>
    )
}