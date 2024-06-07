import React from "react";
import { BodyParagrafyP, ContainerBody, ContainerContentBody, ImgBodyCup, ImgBodyEgg, LearnMore, LearnMore2, ParagrafyBodyP, TitleBodyH2, TitleH2Body } from "./AboutStyled";


const About: React.FC = () => {
    return (
        <React.Fragment>
            <ContainerBody>
                <ContainerContentBody>
                    <TitleBodyH2   >
                        Transform your brand
                    </TitleBodyH2>
                    <ParagrafyBodyP>
                        We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </ParagrafyBodyP>
                    <LearnMore>
                        Learn More
                    </LearnMore>
                </ContainerContentBody>
                <ContainerContentBody>
                    <ImgBodyEgg />
                </ContainerContentBody>
                <ContainerContentBody>
                    <ImgBodyCup/>
                </ContainerContentBody>
                <ContainerContentBody>
                    <TitleH2Body>
                        Stand out to the rigth audience
                    </TitleH2Body>
                    <BodyParagrafyP>
                        Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we´ll 
                        build and extend your brand in digital places.
                    </BodyParagrafyP>
                    <LearnMore2>
                        Learn more
                    </LearnMore2>
                </ContainerContentBody>
            </ContainerBody>
        </React.Fragment>
    )
}

export default About;