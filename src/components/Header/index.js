import { Outlet, Link } from "react-router-dom";
import MarvelLogo from '../../Assests/Images/imagesURLs'
import {HeaderContainer, MarvelLogoImage, HomeCrewUl, HomeCrewLi, HomeCrewButton} from './styled'
import './index.css'

const Header = () =>(
    <>
        <HeaderContainer>
            <Link to="/" className="link">
                <MarvelLogoImage src={MarvelLogo} alt="Marvel Logo" />
            </Link>
            <HomeCrewUl>
                <HomeCrewLi>
                    <Link to="/" className="link">
                        <HomeCrewButton>HOME</HomeCrewButton>
                    </Link>
                </HomeCrewLi>
                <HomeCrewLi>
                    <Link to="/crew" className="link">
                        <HomeCrewButton>CHARACTERS</HomeCrewButton>
                    </Link>
                </HomeCrewLi>
            </HomeCrewUl>
        </HeaderContainer>
        <Outlet />
    </>
    )

export default Header