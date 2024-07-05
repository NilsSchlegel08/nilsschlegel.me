export function fadeout(id: string, time: number) {
    const target = document.getElementById(id);
    if (!target) return;
    
    let step = 10;
    let opacityStep = step / time;
    let opacity = 1; 
    
    function decrease() {
        opacity -= opacityStep;
        if (opacity <= 0) {
            (target as HTMLElement).style.opacity = '0';
            (target as HTMLElement).style.display = 'none';
        } else {
            (target as HTMLElement).style.opacity = opacity.toString();
            setTimeout(decrease, step);
        }
    }

    decrease();
}

export function fadein(id: string, time: number) {
    const target = document.getElementById(id);
    if (!target) return;

    (target as HTMLElement).style.display = 'block';
    (target as HTMLElement).style.opacity = '0';
    let step = 10;
    let opacityStep = step / time;
    let opacity = 0;
    
    function increase() {
        opacity += opacityStep;
        if (opacity >= 1) {
            (target as HTMLElement).style.opacity = '1';
        } else {
            (target as HTMLElement).style.opacity = opacity.toString();
            setTimeout(increase, step);
        }
    }

    increase();
}
