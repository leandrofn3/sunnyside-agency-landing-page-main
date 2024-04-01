import { styled } from "styled-components"
import logo from "../../images/logo.svg"

const NavBarContainer = styled.div`

    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    gap: 817px;
    margin-top: 10px;
`
export const Logo = styled.div`
    background-image: url(${logo});
    background-position: center;
    background-repeat:no-repeat; 
    background-size: 150px;
    width: 160px;
    height: 30px;
    margin-left: 25px;
`

export const ContainerLinks = styled.div`
    width: 330px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
    font-family: Barlow;
    font-weight: 600;
    > button:hover {
        transform: scale(1.2);
    }
`

export const TextHeader = styled.a`
    color: white;
    cursor: pointer;
`

export const ButtonNavBar = styled.button`
    border-radius: 17px;
    height: 46px;
    width: 100px;
    padding: 5px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    font-family: Barlow;
    cursor: pointer;
`

export default NavBarContainer