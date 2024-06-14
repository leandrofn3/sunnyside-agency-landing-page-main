import styled from "styled-components";
import logo from "../../images/logo2.svg"
import facebook from "../../images/icon-facebook.svg"
import instagram from "../../images/icon-instagram.svg"
import twitter from "../../images/icon-twitter.svg"
import pinterest from "../../images/icon-pinterest.svg"


export const ContainerFooter = styled.footer`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary.darkmoderatecyan};

    @media (min-width: 768px) and (max-width: 991px) {
        width: 104%;
        
    }
`
export const LogoFooter = styled.svg`
    background-image: url(${logo});
    background-position: center;
    background-repeat:no-repeat; 
    background-size: 170px;
    width: 300px;
    height: 45px;
    flex-wrap: wrap;
    margin-bottom: 40px;
`
export const ContainerContendFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 380px;
`

export const LinksFooter = styled.a`
    font-family: ${({ theme }) => theme.font.familybarlow.barlow};
    font-weight: ${({ theme }) => theme.font.familybarlow.fontweights};
    font-size: 19px;
    color: ${({ theme }) => theme.colors.primary.darkdesaturatedcyan};
    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`
export const ContainerIcons = styled.div`
    display: flex;
    width: 250px;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
`
export const Facebook = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${facebook});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 23px;
`

export const Instagram = styled(Facebook)`
    background-image: url(${instagram});
`

export const Twitter = styled(Facebook)`
    background-image: url(${twitter});
`

export const Pinterest = styled(Facebook)`
    background-image: url(${pinterest});
`