import { fadein, fadeout } from "../animation/Animations";

let currentString: string = "home";

function NavBar() {
    const fadeTo = (sectionString: string) => {
        const currentSection = document.getElementById(currentString);
        const newSection = document.getElementById(sectionString);

        fadeout(currentString, 500);
        setTimeout(() => {
            fadein(sectionString, 500);
            currentSection?.classList.add("h-0")
            currentSection?.classList.remove("h-full")
            currentSection?.classList.add('hidden');
            newSection?.classList.remove('hidden');
        }, 500);

        currentString = sectionString;
    };

    return (
        <nav id="navbar" className="fixed lg:relative top-0 left-0 lg:flex w-screen lg:w-1/3 hidden h-full flex-col justify-start items-start">
            <div className="flex lg:h-full justify-center items-center">
                <ul className="list-none mt-4 pb-4 w-full h-full border-l-accent pl-5 border-r-0 border-t-0 border-b-0 border">
                    <li
                        className="bg-none hover:bg-base-300 w-full pr-28 pl-4 rounded-lg py-2 cursor-pointer"
                        onClick={() => fadeTo("home")}
                    >
                        Home
                    </li>
                    <li
                        className="bg-none hover:bg-base-300 w-full pr-28 pl-4 rounded-lg py-2 cursor-pointer"
                        onClick={() => fadeTo("about")}
                    >
                        About Me
                    </li>
                    <li
                        className="bg-none hover:bg-base-300 w-full pr-28 pl-4 rounded-lg py-2 cursor-pointer"
                        onClick={() => fadeTo("projects")}
                    >
                        Projects
                    </li>
                    <li
                        className="bg-none hover:bg-base-300 w-full pr-28 pl-4 rounded-lg py-2 cursor-pointer"
                        onClick={() => fadeTo("socials")}
                    >
                        Socials
                    </li>
                    <li
                        className="bg-none hover:bg-base-300 w-full pr-28 pl-4 rounded-lg py-2 cursor-pointer"
                        onClick={() => fadeTo("contact")}
                    >
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
