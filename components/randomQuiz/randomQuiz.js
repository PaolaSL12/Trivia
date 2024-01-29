import { preguntasCulturaGeneral } from "../data/data";
import { randomNumbers } from "../data/randomNumbers";



export const randomQuiz = () => {

    let ramdomQuestions = [];

    for (let i = 0; i < randomNumbers.length; i++) {
        const number = randomNumbers[i];
        
        ramdomQuestions.push(preguntasCulturaGeneral[number])
    
      }

    return ramdomQuestions
    
}

console.log(randomQuiz());