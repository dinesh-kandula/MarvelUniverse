import styled from 'styled-components'


const constants = {
  colors: {
      white: '#FFF'
  },
  fontFamiliy: 'Montserrat',
}

export const HeaderContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: transparent;
  z-index: 100;
  top: 0;
  @media (min-width: 992px){
    padding: 10px 80px 0 80px;
  }
  @media (min-width: 769px) and (max-width: 992px){
    padding: 10px 60px 0 60px;
  }
  @media (min-width: 577px) and (max-width:768px){
    padding: 10px 40px 0 40px;
  }
  @media (max-width: 576px){
    padding: 10px 20px 0 20px;
  }
`

export const MarvelLogoImage = styled.img`
  @media (min-width: 992px){
    width:150px;
  }
  @media (min-width: 769px) and (max-width: 992px){
    width:130px;
  }
  @media (min-width: 577px) and (max-width:768px){
    width:100px;
  }
  @media (max-width: 576px){
    width:90px;
  }
`

export const HomeCrewUl = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`

export const HomeCrewLi = styled.li`
  @media (min-width: 992px){
    margin: 0 30px 0 30px;
  }
  @media (min-width: 769px) and (max-width: 992px){
    margin: 0 25px 0 25px;
  }
  @media (min-width: 577px) and (max-width:768px){
    margin: 0 20px 0 20px;
  }
  @media (max-width: 576px){
    margin: 0 10px 0 10px;
  }
`

export const HomeCrewButton = styled.button`
  background-color: transparent;
  border: 0; 
  color: ${constants.colors.white};
  font-family: ${constants.fontFamiliy};
  font-style: normal;
  font-weight: 900;
  line-height: 61px;
  cursor: pointer;
  @media (min-width: 992px){
    font-size: 26px;
    &:hover{
      text-shadow: 2px 2px 20px #FFF;
      font-size: 28px;
    }
  }
  @media (min-width: 769px) and (max-width: 992px){
    font-size: 24px;
    &:hover{
      text-shadow: 2px 2px 20px #FFF;
      font-size: 28px;
    }
  }
  @media (min-width: 577px) and (max-width:768px){
    font-size: 20px;
    &:hover{
      text-shadow: 2px 2px 20px #FFF;
      font-size: 26px;
    }
  }
  @media (max-width: 576px){
    font-size: 18px;
    &:hover{
      text-shadow: 2px 2px 20px #FFF;
      font-size: 22px;
    }
  }
`



