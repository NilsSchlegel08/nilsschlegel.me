import StartButton from "../../components/StartButton"

function StartScreen() {
    return (
        <>
            <div className="lg:block hidden">
                <h1 className="text-3xl text-primary">Nils Schlegel</h1>
                <StartButton />
            </div>
            <div className="block lg:hidden">
                <p>This website does not support mobile devices.</p>
            </div>
        </>
    )
}

export default StartScreen