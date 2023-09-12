import styled from 'styled-components'

const constants = {
    colors: {
        white: '#FFF'
    },
    fontFamiliy: 'Montserrat',
}

export const HomeContainer = styled.div`
    height: 100vh;
    background-image: url("https://res.cloudinary.com/dfspkh5oi/image/upload/v1694513751/TechVedika/Marvel%2012-Sep/Enhanced2_wwu4rd.jpg");
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 0 50px 0 50px;
`

export const TitleDescriptionCard = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const HomeTitleHeading = styled.h1`
    color: ${constants.colors.white};
    font-family: Montserrat;
    font-weight: 900;
    text-align: left;
    margin-bottom: 10px;
    @media (min-width: 992px){
        font-size: 129px;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 100px;
    }
    @media (min-width: 577px) and (max-width:768px){
        font-size: 80px;
    }
    @media (max-width: 576px){
        font-size: 60px;
    }
`

export const HomeDescriptionPara = styled.p`
    color: ${constants.colors.white};
    font-family: ${constants.fontFamiliy};
    font-weight: 500;
    text-align: left;

    @media (min-width: 992px){
        font-size: 23px;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 20px;
    }
    @media (min-width: 577px) and (max-width:768px){
        font-size:18px;
    }
    @media (max-width: 576px){
        font-size: 16px;
    }
`

export const SeeCrewButton = styled.button`
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media (min-width: 992px){
        font-size: 20px;
        width: 400px;
        &:hover{
            text-shadow: 2px 2px 30px #FFF;
            font-size: 24px;
        }
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 20px;
        width: 400px;
        &:hover{
            text-shadow: 2px 2px 30px #FFF;
            font-size: 24px;
        }
    }
    @media (min-width: 577px) and (max-width:768px){
        font-size: 18px;
        width: 250px;
        &:hover{
            text-shadow: 2px 2px 30px #FFF;
            font-size: 22px;
        }
    }
    @media (max-width: 576px){
        font-size: 16px;
        width: 250px;
        &:hover{
            text-shadow: 2px 2px 30px #FFF;
            font-size: 20px;
        }
    }
`

export const CrewBtnP = styled.p`
    color: ${constants.colors.white};
    font-family: ${constants.fontFamiliy};
    font-weight: 900;
    line-height: 61px;
    margin: 0;
`


