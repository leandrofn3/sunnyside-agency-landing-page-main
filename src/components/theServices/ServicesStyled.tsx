import styled from "styled-components";
import cherry from "../../images/desktop/image-graphic-design.jpg"
import orange from "../../images/desktop/image-photography.jpg"

export const ContainerService = styled.section`
    display: flex;
    width: 100%;
    height: 570px;
    flex-wrap: wrap;

    @media (min-width: 768px) and (max-width: 991px) {
        width: 104%;
        
    }
`

export const ContainerContentServicesCherry = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    background-image: url(${cherry});
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
`

export const TitleServiceh2 = styled.h2`
    font-family: ${({ theme }) => theme.font.familyfraunces.fraunces};
    font-weight: ${({ theme }) => theme.font.familyfraunces.fontweights.extrabold};
    font-size: 25px;
    color: ${({ theme }) => theme.colors.neutral.verydarkdesaturatedblue};
    margin-top: 330px;
    margin-bottom: 30px;

    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 20px;
    }
`

export const ParagrafyCherry = styled.p`
    font-family: ${({ theme }) => theme.font.familybarlow.barlow};
    font-weight: ${({ theme }) => theme.font.familybarlow.fontweights};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.neutral.verydarkgrayishblue};
    width: 350px;
    line-height: 30px;
    text-align: center;
`

export const ContainerContentServicesOrange = styled(ContainerContentServicesCherry)`
    background-image: url(${orange});
`

export const TitleServiceOrangeh2 = styled(TitleServiceh2)`
    margin-top: 320px;
    margin-bottom: 30px;
`