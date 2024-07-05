export function fadeout(id: string, time: number) {
    let target: HTMLElement = document.getElementById(id);
    let step = 10;
    let opacityStep = step / time;

    for (let i = 0; i <= time; i += step) {
        setTimeout(() => {
            let opacity = parseFloat(getComputedStyle(target).opacity);
            if (opacity > 0) {
                target.style.opacity = (opacity - opacityStep).toString();
            } else {
                target.style.display = 'none';
            }
        }, i);
    }
}

export function fadein(id: string, time: number) {
    let target: HTMLElement = document.getElementById(id);
    target.style.display = 'block';
    target.style.opacity = '0';
    let step = 10;
    let opacityStep = step / time;

    for (let i = 0; i <= time; i += step) {
        setTimeout(() => {
            let opacity = parseFloat(getComputedStyle(target).opacity);
            if (opacity < 1) {
                target.style.opacity = (opacity + opacityStep).toString();
            }
        }, i);
    }
}
