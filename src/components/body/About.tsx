import React from "react";
import { BodyParagrafyP, ContainerAbout, ContainerContentAbout, ImgBodyCup, ImgBodyEgg, LearnMore, LearnMore2, ParagrafyAboutP, TitleH2Body } from "./AboutStyled";


const About: React.FC = () => {
    return (
        <React.Fragment>
            <ContainerAbout>
                <ContainerContentAbout>
                    <TitleH2Body   >
                        Transform your brand
                    </TitleH2Body>
                    <ParagrafyAboutP>
                        We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </ParagrafyAboutP>
                    <LearnMore>
                        Learn More
                    </LearnMore>
                </ContainerContentAbout>
                <ContainerContentAbout>
                    <ImgBodyEgg />
                </ContainerContentAbout>
                <ContainerContentAbout>
                    <ImgBodyCup/>
                </ContainerContentAbout>
                <ContainerContentAbout>
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
                </ContainerContentAbout>
            </ContainerAbout>
        </React.Fragment>
    )
}

export default About;