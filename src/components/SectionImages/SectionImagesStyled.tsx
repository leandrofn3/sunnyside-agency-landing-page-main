import styled from "styled-components";
import bottles from "../../images/desktop/image-gallery-milkbottles.jpg"
import orange from "../../images/desktop/image-gallery-orange.jpg"
import cone from "../../images/desktop/image-gallery-cone.jpg"
import sugarcubes from "../../images/desktop/image-gallery-sugarcubes.jpg"

export const ContainerSectionImages = styled.section`
    border: 1px solid blue;
    width: 100%;
    height: 400px;
    display: flex;

    @media (min-width: 768px) and (max-width: 991px) {
        width: 104%;
        
    }
`

export const PlasticBottle = styled.div`
    width: 25%;
    height: 100%;
    background-image: url(${bottles});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const OrangeImage = styled(PlasticBottle)`
    background-image: url(${orange});
`

export const ConeImage = styled(PlasticBottle)`
    background-image: url(${cone});
`

export const SugarCubesImages = styled(PlasticBottle)`
    background-image: url(${sugarcubes});
`