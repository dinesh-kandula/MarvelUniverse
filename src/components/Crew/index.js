
import Header from '../Header'
import CrewCard from '../CrewCard'

import {CrewContainer, ChooseCharacterHeading, AboutCharacterPara, CharactersUl} from './styled'

const CrewData = [
    {
      id:1,
      name: 'Captian Marvel',
      actorName: 'Brie Larson',
      thumbnailURL: 'https://res.cloudinary.com/dfspkh5oi/image/upload/v1694515224/TechVedika/Marvel%2012-Sep/Thumbnails/CaptianMarvelThumbnail_wfnmty.jpg'
    },
    {
      id:2,
      name: 'Spider-Man',
      actorName: 'Tom Holland',
      thumbnailURL: 'https://res.cloudinary.com/dfspkh5oi/image/upload/v1694515223/TechVedika/Marvel%2012-Sep/Thumbnails/SpidermanThumbnail_xgokcc.jpg'
    },
    {
      id:3,
      name: 'Iron Man',
      actorName: 'Robert Downey Jr',
      thumbnailURL: 'https://res.cloudinary.com/dfspkh5oi/image/upload/v1694515222/TechVedika/Marvel%2012-Sep/Thumbnails/IronmanThumbnail_hiac8g.jpg'
    },
    {
      id:4,
      name: 'Captian America',
      actorName: 'Chris Evans',
      thumbnailURL: 'https://res.cloudinary.com/dfspkh5oi/image/upload/v1694515223/TechVedika/Marvel%2012-Sep/Thumbnails/CaptianAmericaThumbnail_py7fo7.jpg'
    },
    {
      id:5,
      name: 'Thor',
      actorName: 'Chris Hemsworth',
      thumbnailURL: 'https://res.cloudinary.com/dfspkh5oi/image/upload/v1694515223/TechVedika/Marvel%2012-Sep/Thumbnails/ThorThumbnail_ai42i2.jpg'
    },
    {
      id:6,
      name: 'Wanda',
      actorName: 'Elizabeth Olsen',
      thumbnailURL: 'https://res.cloudinary.com/dfspkh5oi/image/upload/v1694515224/TechVedika/Marvel%2012-Sep/Thumbnails/WandaThumbanil_zik7dc.jpg'
    },
  ]


const Crew = () => {
    return(
        <>
            <Header />
            <CrewContainer>
                <ChooseCharacterHeading>CHOOSE YOUR CHARACTER</ChooseCharacterHeading>
                <AboutCharacterPara>Choose and see about the characters</AboutCharacterPara>
                <CharactersUl>
                    {
                        CrewData.map(eachCrew => (
                            <CrewCard key={eachCrew.id} eachCrew={eachCrew} />
                        ))
                    }
                </CharactersUl>
            </CrewContainer>
        </>
    )
}

export default Crew