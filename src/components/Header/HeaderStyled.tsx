import styled from "styled-components";
import imagHeader from "../../images/desktop/image-header.jpg"
import seta from "../../images/icon-arrow-down.svg"

const ContainerHeader = styled.header`
    height: 700px;
    width: 1400px;
    display: flex;
    background-image: url(${imagHeader});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;

    @media (min-width: 768px) and (max-width: 991px) {
        height: 399px;
        width: 103.6%;
    }
`


export const H1header = styled.h1`
    font-family: ${({ theme }) => theme.font.familyfraunces.fraunces};
    font-weight: ${({ theme, }) => theme.font.familyfraunces.fontweights.bold};
    font-size: 50px;
    color: ${props => props.theme.colors.neutral.white};
    margin-top: 40px;

    @media (min-width: 768px) and (max-width: 991px) {
        margin-top: 5px;
        font-size: 27px;
    }
`
export const Seta = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${seta});
    background-repeat: no-repeat;
    height: 120px;
    width: 40px;
    margin-top: 125px;
    /* border: 1px solid; */

    @media (min-width: 768px) and (max-width: 991px) {
        margin-top: 8px;
        height: 121px;
        width: 40px;
    }
`

export default ContainerHeader;