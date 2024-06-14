import { styled } from "styled-components"
import logo from "../../images/logo.svg"

const NavBarContainer = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    gap: 817px;
    margin-top: 10px;
    /* border: 1px solid; */

    @media (min-width: 768px) and (max-width: 991px) {
        height: 75px;
        width: 100%;
        gap: 240px;
    }
`
export const Logo = styled.div`
    background-image: url(${logo});
    background-position: center;
    background-repeat:no-repeat; 
    background-size: 150px;
    width: 160px;
    height: 30px;
    margin-left: 25px;
    /* border: 1px solid red; */

    @media (min-width: 768px) and (max-width: 991px) {
        height: 70px;
        width: 175px;
    }
`

export const ContainerLinks = styled.div`
    width: 330px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
    font-family: ${({ theme }) => theme.font.familybarlow.barlow};
    font-weight: ${({ theme }) => theme.font.familybarlow.fontweights};
    /* border: 1px solid ; */
    > button:hover {
        transform: scale(1.1);
    }

    & a:hover {
    
    cursor: pointer;
    transform: scale(1.1)
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 350px;
        height: 100%;
        margin-right: 18px;
        
    }
`

export const TextHeader = styled.a`
    color: white;
    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 16px;
    }
`

export const ButtonNavBar = styled.button`
    border-radius: 17px;
    height: 46px;
    width: 100px;
    padding: 5px;
    border: none;
    font-family: ${({theme}) => theme.font.familyfraunces.fraunces};
    font-weight: ${({theme, }) =>  theme.font.familyfraunces.fontweights.bold };
    font-size: 16px;
    cursor: pointer;

    @media (min-width: 768px) and (max-width: 991px) {
        height: 60px;
        width: 86px;
        font-size: 14px;
    }
`

export default NavBarContainer