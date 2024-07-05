import { fadein, fadeout } from "../animation/Animations";

function StartButton() {
    return (
        <>
            <button id="startButton" onClick={performTransform} className=" flex justify-center items-center bg-accent w-32 h-10 py-2 px-10 rounded-lg m-4 hover:scale-95 transition-all hover:opacity-90">
                Start
            </button>
        </>
    );
}

function performTransform() {
    let startButton: HTMLButtonElement | null = document.getElementById("startButton") as HTMLButtonElement;
    if (!startButton) {
        return;
    }

    startButton.innerHTML = '<span class="loading loading-infinity loading-xs"></span>';
    fadeout("startSection", 1000);
    fadeout("navbar", 0);

    setTimeout(() => {
        fadein("tempSection", 1000);

        setTimeout(() => {
            fadeout("tempSection", 1000);

            setTimeout(() => {
                fadein("mainSection", 1000);
                fadein("navbar", 500)
                document.getElementById("navbar")?.classList.toggle("hidden")
            }, 1000);
        }, 1000); 
    }, 1000);
}

export default StartButton;
