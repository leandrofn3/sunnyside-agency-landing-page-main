import styled from "styled-components";
import egg from "../../images/desktop/image-transform.jpg"
import cup from "../../images/desktop/image-stand-out.jpg"


export const ContainerAbout = styled.section`
    display: flex;
    width: 100%;
    height: 570px;
    flex-wrap: wrap;
    margin-bottom: 568px;
    border: 1px solid red;

    @media (min-width: 768px) and (max-width: 991px) {
        width: 794px;
    }
`

export const ContainerContentAbout = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TitleAboutH2 = styled.h2`
    font-family: ${({ theme }) => theme.font.familyfraunces.fraunces};
    font-weight: ${({ theme }) => theme.font.familyfraunces.fontweights.extrabold};
    font-size: 40px;
    width: 350px;
    color: ${({theme})=> theme.colors.neutral.verydarkdesaturatedblue};
    margin-right: 160px;
    margin-bottom: 50px;

    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 28px;
        margin-left: 160px;
        /* border: 1px solid; */
    }
`

export const ParagrafyAboutP = styled.p`
    font-family: ${({ theme }) => theme.font.familybarlow.barlow};
    font-weight: ${({ theme }) => theme.font.familybarlow.fontweights};
    font-size: 20px;
    color: ${({theme})=> theme.colors.neutral.darkgrayishblue};
    width: 510px;
    line-height: 30px;
    margin-bottom: 50px;
    /* border: 1px solid; */

    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 14px;
        width: 350px;
    }
`
export const LearnMore = styled.a`
    font-family: ${({ theme }) => theme.font.familyfraunces.fraunces};
    font-weight: ${({ theme }) => theme.font.familyfraunces.fontweights.bold};
    font-size: 19px;
    text-decoration-line: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: ${({theme})=> theme.colors.primary.yellow};
    margin-right: 400px;
    color: ${({theme})=> theme.colors.neutral.verydarkdesaturatedblue};
    cursor: pointer;

    @media (min-width: 768px) and (max-width: 991px) {
        /* border: 1px solid; */
        margin-left: 250px;
        width: 200px;
        font-size: 13px;
    }
`

export const ImgBodyEgg = styled.div`
    background-image: url(${egg});
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
`

export const ImgBodyCup = styled(ImgBodyEgg)`
background-image: url(${cup});
`
export const TitleH2Body = styled(TitleAboutH2)`
    width: 309px;
    margin-left: 30px;

    @media (min-width: 768px) and (max-width: 991px) {
    margin-right: 10px;
    }

`

export const BodyParagrafyP = styled(ParagrafyAboutP)`
    margin-left: 70px;
    
    @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 60px;
    font-size: 14px;
    }
`

export const LearnMore2 = styled(LearnMore)`
    text-decoration-color: ${({theme})=> theme.colors.primary.softred};
    margin-left: 72px;

    @media (min-width: 768px) and (max-width: 991px) {
        margin-left: 200px;
        width: 85px;
    }
`



