document.addEventListener("keydown", (event) => {
    let audio = document.createElement("AUDIO");
    audio.autoplay = true;
    audio.controls = false;
    document.body.appendChild(audio);
    switch (event.code) {
        case "KeyA":
        case "KeyW":
        case "KeyS":
        case "KeyE":
        case "KeyD":
        case "KeyF":
        case "KeyT":
        case "KeyG":
        case "KeyY":
        case "KeyH":
        case "KeyU":
        case "KeyJ":
            audio.setAttribute("src", `audio/${event.key}.mp3`);
            break;
        default:
            console.log(`Unbound key was pressed.`)
    }
    setTimeout(() => document.body.removeChild(audio), 3000);
});

function play(key) {
    let audio = document.createElement("AUDIO");
    audio.autoplay = true;
    audio.controls = false;
    document.body.appendChild(audio);
    audio.setAttribute("src", `audio/${key}.mp3`);
    setTimeout(() => document.body.removeChild(audio), 3000);
}