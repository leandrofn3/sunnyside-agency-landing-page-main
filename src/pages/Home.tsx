import React from "react"
import Header from "../components/Header";
import About from "../components/body";
import Services from "../components/theServices";
import Testimonials from "../components/Testimonials";
import SectionImages from "../components/SectionImages";


const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <About />
            <Services />
            <Testimonials/>
            <SectionImages/>
        </React.Fragment>
    )
}

export default Home;