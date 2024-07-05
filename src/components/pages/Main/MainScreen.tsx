import NavBar from "../../components/NavBar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Socials from "./sections/Socials";

function MainScreen() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <NavBar />
            <section className="w-1/3 h-full" id="home">
                <Home />
            </section>
            <section className="hidden h-full w-1/3" id="about">
                <AboutMe />
            </section>
            <section className="hidden h-full w-1/3" id="projects">
                <Projects />
            </section>
            <section className="hidden h-full w-1/3" id="socials">
                <Socials />
            </section>
            <section className="hidden h-full w-1/3" id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default MainScreen;
