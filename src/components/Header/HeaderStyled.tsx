import styled from "styled-components";
import imagHeader from "../../images/desktop/image-header.jpg"
import seta from "../../images/icon-arrow-down.svg"

const ContainerHeader = styled.header`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: gray;
    background-image: url(${imagHeader});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    flex-direction: column;
    align-items: center;
`


export const H1header = styled.h1`
    font-family: ${({theme}) => theme.font.familyfraunces.fraunces};
    font-weight: ${({theme, }) =>  theme.font.familyfraunces.fontweights.bold };
    font-size: 50px;
    color: ${props => props.theme.colors.neutral.white};
    margin-top: 40px;
`
export const Seta = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${seta});
    background-repeat: no-repeat;
    height: 120px;
    width: 40px;
    margin-top: 90px;
`

export default ContainerHeader;