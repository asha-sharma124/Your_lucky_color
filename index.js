const zodiac = document.getElementById("zodiac");
const changebgcolor = () => {
    console.log(zodiac.value);
    const body = document.body;
    switch (zodiac.value) {
        case "ARIES":
            body.style.backgroundColor = "blue";
            break;
        case "TARUS":
            body.style.backgroundColor = "yellow";
            break;
        case "GEMINI":
            body.style.backgroundColor = "pink";
            break;
        case "CANCER":
            body.style.backgroundColor = "red";
            break;
        case "LEO":
            body.style.backgroundColor = "orange";
            break;
        case "VIRGO":
            body.style.backgroundColor = "violet";
            break;
        case "LIBRA":
            body.style.backgroundColor = "pink";
            break;
        case "SCORPIO":
            body.style.backgroundColor = "black";
            break;
        case "PISCES":
            body.style.backgroundColor = "GREEN";
            break;
            default:
                break;
    }
};
