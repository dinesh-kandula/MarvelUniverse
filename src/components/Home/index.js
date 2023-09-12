import { Outlet, Link } from 'react-router-dom'
import {BsArrowRightCircle} from 'react-icons/bs'

import Header from '../Header'
import './index.css'
import {HomeContainer, TitleDescriptionCard, HomeTitleHeading, 
    HomeDescriptionPara, SeeCrewButton, CrewBtnP} from './styled'

const Home = () => {
    return(
        <>
            <Header />
            <HomeContainer>
                <TitleDescriptionCard>
                    <HomeTitleHeading>MARVEL UNIVERSE</HomeTitleHeading>
                    <HomeDescriptionPara>Explore the exciting Marvel universe with its incredible heroes and villains in epic and captivating stories that appeal to all tastes. Join this exciting journey!</HomeDescriptionPara>
                    <Link to="/crew" className='link'>    
                        <SeeCrewButton type="button">
                            <CrewBtnP>SEE CHARACTERS</CrewBtnP>
                            <BsArrowRightCircle color='#FFF' size={32}/>
                        </SeeCrewButton>
                    </Link>
                </TitleDescriptionCard>
            </HomeContainer>
            <Outlet />
        </>
    )
}

export default Home