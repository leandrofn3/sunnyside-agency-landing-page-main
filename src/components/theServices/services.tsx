import React from "react";
import {
    ContainerContentServicesCherry,
    ContainerContentServicesOrange,
    ContainerService,
    ParagrafyCherry,
    TitleServiceOrangeh2,
    TitleServiceh2
} from "./ServicesStyled";

const Services: React.FC = () => {
    return (
        <React.Fragment>
            <ContainerService>
                <ContainerContentServicesCherry>
                    <TitleServiceh2>
                        Graphic Design
                    </TitleServiceh2>
                    <ParagrafyCherry>
                        Great design makes you memorable. We deliver
                        artwork that underscores your brand message
                        and captures potential clients´attention.
                    </ParagrafyCherry>
                </ContainerContentServicesCherry>
                <ContainerContentServicesOrange>
                    <TitleServiceOrangeh2>
                        Photography
                    </TitleServiceOrangeh2>
                    <ParagrafyCherry>
                        Increase your credibility by getting the most
                        stunning, high-quality photos that improve your bussiness image.
                    </ParagrafyCherry>
                </ContainerContentServicesOrange>
            </ContainerService>
        </React.Fragment>
    )
}

export default Services;