import React from "react";
import { ConeImage, ContainerSectionImages, OrangeImage, PlasticBottle, SugarCubesImages } from "./SectionImagesStyled";

const SectionImages: React.FC = () => {
    return (
        <React.Fragment>
            <ContainerSectionImages>
                <PlasticBottle />
                <OrangeImage />
                <ConeImage />
                <SugarCubesImages />
            </ContainerSectionImages>
        </React.Fragment>
    )
}

export default SectionImages;