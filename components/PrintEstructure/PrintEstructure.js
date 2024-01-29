import { randomQuiz } from '../randomQuiz/randomQuiz'
import './PrintEstructure.css'


export let selection = ""
export const PrintEstructure = () => {
   const container = document.querySelector("#app")

   let questions = randomQuiz()

   for (const question of questions) {
    const containerCard = document.createElement("div");
    const divQuestion = document.createElement("div");
    const questionp = document.createElement("p");
    containerCard.className = "containerCard";
    divQuestion.className = "divQuestion"

    questionp.textContent = question.pregunta

    const ul = document.createElement("ul");
    ul.className= "myul"

   
    for (const option of question.opciones) {
        const li = document.createElement("li")
        li.textContent = option
        ul.append(li)
    }

    ul.addEventListener("click", (e) => {
        const targetLi = e.target.closest("li");

        ul.querySelectorAll("li").forEach(li => {
            li.classList.remove("selected");
        });

        if (targetLi && !targetLi.classList.contains("selected")) {
            targetLi.classList.add("selected");
            selection = targetLi.textContent; 
        } else {
            selection = ""; 
        }
    });


    divQuestion.append(questionp);
    containerCard.append(divQuestion);
    containerCard.append(ul)
    container.append(containerCard)
   }
   
}

