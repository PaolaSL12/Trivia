
import { randomQuiz } from '../randomQuiz/randomQuiz';
import './ComprobationButton.css'

export const ComprobationButton = () => {
    const containerButton = document.querySelector(".containerButton");
    const comprobationButton = document.createElement("button");

    comprobationButton.textContent = "COMPROBAR"

    let score = 0;

    const quiz = randomQuiz()

    const myuls = document.querySelectorAll(".myul");

    comprobationButton.addEventListener("click", () => {
        for (let i = 0; i < myuls.length; i++) {
            const ul = myuls[i];
            const selectedLi = ul.querySelector("li.selected");
            if (selectedLi) {
                if (selectedLi.textContent === quiz[i].respuestaCorrecta) {
                    score++;
                };
        };
    
    };
    alert(`Tu puntuación es de:${score} puntos`)
}
)

    
    containerButton.append(comprobationButton)

}