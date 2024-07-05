function Contact() {
    return (
        <>
            <div className="flex flex-col justify-center h-full w-full">
                <h1 className="text-2xl">Contact</h1>
                <p>Feel Free to contact me via my socials or E-Mail.</p>
                <div className="flex items-center space-x-4 flex-row">
                    <a className="text-primary underline hover:text-accent transition-all hover:opacity-90" href="mailto:contact@nilsschlegel.me">E-Mail</a>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <a className="text-primary underline hover:text-accent transition-all hover:opacity-90" href="tel:+41767200209">Phone</a>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <a className="text-primary hover:text-accent transition-all hover:opacity-90">Socials</a>
                </div>
            </div>
        </>
    )
}

export default Contact