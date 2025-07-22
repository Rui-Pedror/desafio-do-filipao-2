rankings();

function rankings(playerNumberOfWins, playerNumberOfLosses) {
  let level = [
    "Iron",
    "Bronze",
    "Silver",
    "Gold",
    "Diamond",
    "Legendary",
    "Immortal",
  ];

  let playerWins = 101;
  if (playerWins < 10) {
    console.log(
      `The hero has the balance ${playerWins} and, he is at level ${level[0]}`
    );
  } else if (playerWins <= 11 || playerWins === 20) {
    console.log(
      `The hero has the balance ${playerWins} and, he is at level ${level[1]}`
    );
  } else if (playerWins <= 21 || playerWins === 50) {
    console.log(
      `The hero has the balance ${playerWins} and, he is at level ${level[2]}`
    );
  } else if (playerWins <= 51 || playerWins === 80) {
    console.log(
      `The hero has the balance ${playerWins} and, he is at level ${level[3]}`
    );
  } else if (playerWins <= 81 || playerWins === 90) {
    console.log(
      `The hero has the balance ${playerWins} and, he is at level ${level[4]}`
    );
  } else if (playerWins <= 91 || playerWins === 100) {
    console.log(
      `The hero has the balance ${playerWins} and, he is at level ${level[5]}`
    );
  } else if (playerWins >= 101);
  console.log(
    `The hero has the balance ${playerWins} and, he is at level ${level[6]}`
  );
}
