import React from "react"
import Header from "../components/Header";
import About from "../components/body";
import Services from "../components/theServices";


const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <About />
            <Services />
        </React.Fragment>
    )
}

export default Home;