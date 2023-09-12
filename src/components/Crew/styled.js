import styled from 'styled-components'


const constants = {
    colors: {
        white: '#FFF'
    },
    fontFamiliy: 'Roboto',
}

export const CrewContainer = styled.div`
    height: 100vh;
    background-image: url("https://res.cloudinary.com/dfspkh5oi/image/upload/v1694514539/TechVedika/Marvel%2012-Sep/CrewBG_xaib1h.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 50px 0 50px;
`

export const ChooseCharacterHeading = styled.h1`
    color: ${constants.colors.white};
    font-family: ${constants.fontFamiliy};
    font-weight: 900;
    line-height: 61px;
    margin-bottom: 5px;
    @media (min-width: 992px){
        font-size: 45px;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 32px;
    }
    @media (min-width: 577px) and (max-width:768px){
        font-size: 24px;
    }
    @media (max-width: 576px){
        font-size: 20px;
    }
`

export const AboutCharacterPara = styled.p`
    color: ${constants.colors.white};
    font-family: ${constants.fontFamiliy};
    margin-top: 5px;
    font-weight: 400;
    margin-top: 0;
    @media (min-width: 992px){
        font-size: 23px;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 22px;
    }
    @media (min-width: 577px) and (max-width:768px){
        font-size: 20px;
    }
    @media (max-width: 576px){
        font-size: 18px;
    }
`

export const CharactersUl = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    height: 500px; 
    overflow-y: scroll;
    background-color: #1B1B1B;
    border-radius: 10px;
    filter: drop-shadow(0px 7px 20px rgba(0, 0, 0, 0.30));
    @media (min-width: 992px){
        width: 990px;
    }
    @media (min-width: 769px) and (max-width: 992px){
        width: 760px;
    }
    @media (min-width: 577px) and (max-width:768px){
        width: 570px;
    }
    @media (max-width: 576px){
        width: 320px;
    }
`
