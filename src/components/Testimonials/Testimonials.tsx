import React from "react"
import { CardClient, ContainerTestimonialsContent, ImgClient1, ImgClient2, ImgClient3, NameAndPosition, NameTestimonial, ParagraphTestimonial, PositionP, TestimonialsContainer, TitleH2 } from "./TestimonialsStyled";

const Testimonials: React.FC = () => {
    return (
        <React.Fragment>
            <TestimonialsContainer>
                <ContainerTestimonialsContent>
                    <TitleH2>
                        CLIENT TESTIMONIALS
                    </TitleH2>
                    <CardClient>
                        <ImgClient1 />
                        <ParagraphTestimonial>
                            We put our trust in Sunnyside and they
                            delivered, making sure our needs were met
                            and deadlines were always hit.
                        </ParagraphTestimonial>
                        <NameAndPosition>
                            <NameTestimonial>
                                Emily R.
                            </NameTestimonial>
                            <PositionP>
                                Markenting Director
                            </PositionP>
                        </NameAndPosition>
                    </CardClient>

                    <CardClient>
                        <ImgClient2 />
                        <ParagraphTestimonial>
                            Sunnyside´s enthusiasm coupled with their
                            Keen interest in our brand´s success made it
                            a satisfying and enjoyable experience.
                        </ParagraphTestimonial>
                        <NameAndPosition>
                            <NameTestimonial>
                                Thomas S.
                            </NameTestimonial>
                            <PositionP>
                                Chief Operating Officer
                            </PositionP>
                        </NameAndPosition>
                    </CardClient>

                    <CardClient>
                        <ImgClient3 />
                        <ParagraphTestimonial>
                            Incredible end result! Our increased
                            over 400% when we worked with Sunnyside.
                            Highly recommended!
                        </ParagraphTestimonial>
                        <NameAndPosition>
                            <NameTestimonial>
                                Jennie F.
                            </NameTestimonial>
                            <PositionP>
                                Business Owner
                            </PositionP>
                        </NameAndPosition>
                    </CardClient>
                </ContainerTestimonialsContent>
            </TestimonialsContainer>
        </React.Fragment>
    )
}

export default Testimonials;