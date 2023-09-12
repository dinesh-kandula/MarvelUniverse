import styled from 'styled-components'

const constants = {
  colors: {
      white: '#FFF'
  },
  fontFamiliy: 'Montserrat',
}

export const CrewList = styled.li`
    border-radius: 10px;
    background-color: #282828;
    cursor: pointer;
    @media (min-width: 992px){
        margin: 25px;
    }
    @media (min-width: 769px) and (max-width: 992px){
        margin: 22px;
    }
    @media (min-width: 577px) and (max-width:768px){
        margin: 18px;
    }
    @media (max-width: 576px){
        margin: 15px;
    }
`

export const CrewImage = styled.img`
    border-radius: 10px 10px 0 0;
    @media (min-width: 992px){
        width: 300px;
    }
    @media (min-width: 769px) and (max-width: 992px){
        width: 260px;
    }
    @media (min-width: 577px) and (max-width:768px){
        width: 180px;
    }
    @media (max-width: 576px){
        width: 100px;
    }
`

export const CrewName = styled.h1`
    color: ${constants.colors.white};
    font-family: ${constants.fontFamiliy};
    font-weight: 900;
    line-height: 29px;
    margin-bottom: 5px;
    margin-top: 0;
    text-align: center;
    @media (min-width: 992px){
        font-size: 26px;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 20px;
    }
    @media (min-width: 577px) and (max-width:768px){
        font-size: 18px;
    }
    @media (max-width: 576px){
        font-size: 16px;
    }
`
export const CrewActorName = styled.p`
    color: ${constants.colors.white};
    font-family: ${constants.fontFamiliy};
    font-weight: 400;
    text-align: center;
    line-height: 29px;
    margin-top: 0;
    @media (min-width: 992px){
        font-size: 18px;
    }
    @media (min-width: 769px) and (max-width: 992px){
        font-size: 18px;
    }
    @media (min-width: 577px) and (max-width:768px){
        font-size: 16px;
    }
    @media (max-width: 576px){
        font-size: 14px;
    }
`