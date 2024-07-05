import NavBar from "../../components/NavBar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Socials from "./sections/Socials";

function MainScreen() {
    return (
        <div className="h-screen w-screen lg:space-x-10 flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:w-1/2 w-screen h-fit flex flex-col items-end">
                <NavBar />
            </div>
            <div className="flex flex-col w-screen lg:w-1/2">
                <section className="w-2/3 h-full" id="home">
                    <Home />
                </section>
                <section className="hidden h-full w-2/3" id="about">
                    <AboutMe />
                </section>
                <section className="hidden h-full w-2/3" id="projects">
                    <Projects />
                </section>
                <section className="hidden h-full w-2/3" id="socials">
                    <Socials />
                </section>
                <section className="hidden h-full w-2/3" id="contact">
                    <Contact />
                </section>
            </div>
        </div>
    );
}

export default MainScreen;
