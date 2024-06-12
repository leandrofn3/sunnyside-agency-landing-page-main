import styled from "styled-components";
import emily from "../../images/image-emily.jpg"
import thomas from "../../images/image-thomas.jpg"
import jennie from "../../images/image-jennie.jpg"

export const TestimonialsContainer = styled.section`
    border: 1px solid brown;
    width: 100%;
    height: 680px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerTestimonialsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 500px;
    width: 1200px;
    flex-wrap: wrap;
    margin-top: 70px;
`

export const CardClient = styled.div`
    display: flex;
    height: 380px;
    width: 320px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

export const ImgClient1 = styled.div`
    border-radius: 50% ;
    height: 90px;
    width: 90px;
    background-image: url(${emily});
    background-position: center;
    background-size: 100% 100%;
`

export const ImgClient2 = styled(ImgClient1)`
    background-image: url(${thomas});
`
export const ImgClient3 = styled(ImgClient1)`
    background-image: url(${jennie});
`

export const NameAndPosition = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const TitleH2 = styled.h2`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) => theme.font.familyfraunces.fraunces};
    font-weight: ${({ theme }) => theme.font.familyfraunces.fontweights.bold};
    color: ${({ theme }) => theme.colors.neutral.grayishblue};
    letter-spacing: 5px;
`

export const ParagraphTestimonial = styled.p`
    font-family: ${({ theme }) => theme.font.familybarlow.barlow};
    font-weight: ${({ theme }) => theme.font.familybarlow.fontweights};
    color: ${({ theme }) => theme.colors.neutral.verydarkgrayishblue};
    text-align: center;
`

export const NameTestimonial = styled.h4`
    font-family: ${({ theme }) => theme.font.familyfraunces.fraunces};
    font-weight: ${({ theme }) => theme.font.familyfraunces.fontweights.extrabold};
    color: ${({ theme }) => theme.colors.neutral.verydarkdesaturatedblue};
`

export const PositionP = styled.p`
    font-family: ${({ theme }) => theme.font.familybarlow.barlow};
    font-weight: ${({ theme }) => theme.font.familybarlow.fontweights};
    color: ${({ theme }) => theme.colors.neutral.grayishblue};
`