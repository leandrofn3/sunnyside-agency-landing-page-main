import React from "react"
import { ContainerFooter, LogoFooter, ContainerContendFooter, LinksFooter, ContainerIcons, Facebook, Instagram, Twitter, Pinterest } from "./FooterStyled";

const Footer: React.FC = () => {
    return (
        <React.Fragment>
            <ContainerFooter>
                <LogoFooter />
                <ContainerContendFooter>
                    <LinksFooter>
                        About
                    </LinksFooter>
                    <LinksFooter>
                        Sevices
                    </LinksFooter>
                    <LinksFooter>
                        Projects
                    </LinksFooter>
                </ContainerContendFooter>
                    <ContainerIcons>
                        <Facebook/>
                        <Instagram/>
                        <Twitter/>
                        <Pinterest/>
                    </ContainerIcons>
            </ContainerFooter>
        </React.Fragment>
    )
}
export default Footer;