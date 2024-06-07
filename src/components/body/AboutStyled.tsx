import styled from "styled-components";
import egg from "../../images/desktop/image-transform.jpg"
import cup from "../../images/desktop/image-stand-out.jpg"


export const ContainerBody = styled.section`
    display: flex;
    width: 100%;
    height: 570px;
    flex-wrap: wrap;
    margin-bottom: 570px;
`

export const ContainerContentBody = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TitleBodyH2 = styled.h2`
    font-family: ${({ theme }) => theme.font.familyfraunces.fraunces};
    font-weight: ${({ theme }) => theme.font.familyfraunces.fontweights.extrabold};
    font-size: 40px;
    width: 350px;
    color: ${({theme})=> theme.colors.neutral.verydarkdesaturatedblue};
    margin-right: 160px;
    margin-bottom: 50px;
`

export const ParagrafyBodyP = styled.p`
    font-family: ${({ theme }) => theme.font.familybarlow.barlow};
    font-weight: ${({ theme }) => theme.font.familybarlow.fontweights};
    font-size: 20px;
    color: ${({theme})=> theme.colors.neutral.darkgrayishblue};
    width: 510px;
    line-height: 30px;
    margin-bottom: 50px;
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
export const TitleH2Body = styled(TitleBodyH2)`
width: 430px;
margin-left: 150px;

`

export const BodyParagrafyP = styled(ParagrafyBodyP)`
margin-left: 70px;
`

export const LearnMore2 = styled(LearnMore)`
    text-decoration-color: ${({theme})=> theme.colors.primary.softred};
    margin-left: 72px;
`



