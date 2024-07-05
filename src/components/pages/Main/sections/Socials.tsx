function Socials() {
    return (
        <>
            <div className="flex flex-col justify-center h-full w-full">
                <h1 className="text-2xl">Socials</h1>
                <p>I'm not a person that uploads videos or creates content but if you still want to follow me on my platforms, here are my links.</p>
                <div className="flex flex-row space-x-3">
                    <a target="_blank" href="https://github.com/NilsSchlegel08"><i className="hover:text-primary hover:scale-110 transition-all fa-brands fa-github text-2xl"></i></a>
                    <a target="_blank" href="https://x.com/NilsSchlegel_me"><i className="hover:text-primary hover:scale-110 transition-all fa-brands fa-x-twitter text-2xl"></i></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCZh0OBxV-5Gh--3wan6lNiA"><i className="hover:text-primary hover:scale-110 transition-all fa-brands fa-youtube text-2xl"></i></a>
                </div>
            </div>
        </>
    )
}

export default Socials