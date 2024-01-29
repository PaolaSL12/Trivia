
export let generateRandomNumbers = (numbers) => {
    const randomNumbers = [];
    for (let i = 0; i < numbers; i++) {
        const randomNumber = Math.floor(Math.random() * 20);
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        } else {
            let newRandomNumber;
            do {
                newRandomNumber = Math.floor(Math.random() * 20);
            } while (randomNumbers.includes(newRandomNumber));

            randomNumbers.push(newRandomNumber);
        }
      }
    return randomNumbers
}


export const randomNumbers =  generateRandomNumbers(10);
