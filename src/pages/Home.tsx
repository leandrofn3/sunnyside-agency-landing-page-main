import React from "react"
import Header from "../components/Header";
import About from "../components/Body";
import Services from "../components/TheServices";
import Testimonials from "../components/Testimonials";
import SectionImages from "../components/SectionImages";
import Footer from "../components/Footer";


const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <About />
            <Services />
            <Testimonials/>
            <SectionImages/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;