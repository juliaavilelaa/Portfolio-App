export interface HistoryEntry {
  guess: string;
  bulls: number;
  cows: number;
}

export function generatePassword(): string {
  let digits: string[] = [];
  while (digits.length < 4) {
    const n = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(n)) digits.push(n);
  }
  return digits.join("");
}

export function checkGuess(password: string, guess: string) {
  let correctPosition = 0;
  let correctDigit = 0;
  const passwordArr = password.split("");
  const guessArr = guess.split("");
  const usedPassword = Array(4).fill(false);
  const usedGuess = Array(4).fill(false);

  for (let i = 0; i < 4; i++) {
    if (guessArr[i] === passwordArr[i]) {
      correctPosition++;
      usedPassword[i] = true;
      usedGuess[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (usedGuess[i]) continue;
    for (let j = 0; j < 4; j++) {
      if (!usedPassword[j] && guessArr[i] === passwordArr[j]) {
        correctDigit++;
        usedPassword[j] = true;
        break;
      }
    }
  }

  return { correctPosition, correctDigit };
}