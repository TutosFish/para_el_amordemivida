const intro = document.getElementById("intro");
const chapter1 = document.getElementById("chapter1");
const chapter2 = document.getElementById("chapter2");
const chapter3 = document.getElementById("chapter3");
const chapter4 = document.getElementById("chapter4");

const startButton =
    document.getElementById("startButton");

const nextButton =
    document.getElementById("nextButton");

const professionalButton =
    document.getElementById("professionalButton");

const messageButton =
    document.getElementById("messageButton");

const messages =
    document.querySelectorAll(".message");

const believeMessage =
    document.getElementById("believeMessage");

const believeButton =
    document.getElementById("believeButton");

const letterButton =
    document.getElementById("letterButton");
    /* =========================
   CAPÍTULO 4 → CARTA
========================= */

letterButton.addEventListener("click", () => {

    alert("Aquí comenzará la carta ❤️");

});


/* =========================
   CAMBIAR DE ESCENA
========================= */

function changeScene(currentScene, nextScene) {

    currentScene.classList.remove("active");

    setTimeout(() => {

        nextScene.classList.add("active");

    }, 500);

}


/* =========================
   INTRO → CAPÍTULO 1
========================= */

startButton.addEventListener("click", () => {

    changeScene(intro, chapter1);

});


/* =========================
   CAPÍTULO 1 → CAPÍTULO 2
========================= */

nextButton.addEventListener("click", () => {

    changeScene(chapter1, chapter2);

});


/* =========================
   CAPÍTULO 2 → CAPÍTULO 3
========================= */

professionalButton.addEventListener("click", () => {

    changeScene(chapter2, chapter3);

});


/* =========================
   MENSAJES DEL CAPÍTULO 3
========================= */

let currentMessage = 0;

messageButton.addEventListener("click", () => {

    messages[currentMessage].classList.remove(
        "active-message"
    );

    currentMessage++;


    if (currentMessage < messages.length) {

        messages[currentMessage].classList.add(
            "active-message"
        );

    }


    if (currentMessage === messages.length - 1) {

        messageButton.textContent =
            "Hay algo que quiero decirte ❤️";

    }


    if (currentMessage >= messages.length) {

        messageButton.style.display = "none";

        believeMessage.classList.add("show");

    }

});


/* =========================
   CAPÍTULO 3 → CAPÍTULO 4
========================= */

believeButton.addEventListener("click", () => {

    changeScene(chapter3, chapter4);

});

/* =========================
   CAPÍTULO 4 → CARTA
========================= */

const letterSection =
    document.getElementById("letterSection");

const photosSection =
    document.getElementById("photosSection");

const photosButton =
    document.getElementById("photosButton");


letterButton.addEventListener("click", () => {

    changeScene(chapter4, letterSection);

});


/* =========================
   CARTA → FOTOS
========================= */

photosButton.addEventListener("click", () => {

    changeScene(letterSection, photosSection);

});