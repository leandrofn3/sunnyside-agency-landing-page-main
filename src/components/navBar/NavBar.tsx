import React from "react"
import NavBarContainer, { ButtonNavBar, ContainerLinks, Logo, TextHeader } from "./NavBarStyled";

const NavBar: React.FC = () => {
    return (
        <React.Fragment>
            <NavBarContainer>
                <Logo />
                <ContainerLinks>
                    <TextHeader>
                        About
                    </TextHeader>
                    <TextHeader>
                        Services
                    </TextHeader>
                    <TextHeader>
                        Projects
                    </TextHeader>
                    <ButtonNavBar>
                        contact
                    </ButtonNavBar>
                </ContainerLinks>
            </NavBarContainer>
        </React.Fragment>
    )
}

export default NavBar;