import React from "react"
import ContainerHeader, { H1header, Seta } from "./HeaderStyled";
import NavBar from "../navBar";


const Header: React.FC = () => {
    return (
        <React.Fragment>
            <ContainerHeader>
                <NavBar />
                <H1header>
                    WE ARE CREATIVES
                </H1header>
                <Seta />
            </ContainerHeader>
        </React.Fragment>
    )
}

export default Header;