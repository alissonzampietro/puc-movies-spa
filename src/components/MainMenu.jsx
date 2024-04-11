import { Link } from "react-router-dom";
import { MainMenuStyledContainer } from "../styles/MainMenuStyledContainer";

export const MainMenu = () => (
    <MainMenuStyledContainer>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
    </MainMenuStyledContainer>
)