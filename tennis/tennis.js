export function getScores(playerA, playerB) {
  if (playerB == 1) {
    switch (playerA) {
      case 0:
        return "L-15";
      case 1:
        return "15-15";
      case 2:
        return "30-15";
      case 3:
        return "40-15";
      case 4:
        return "A won";
    }
  }

  if (playerB == 2) {
    switch (playerA) {
      case 0:
        return "L-30";
      case 1:
        return "15-30";
      case 2:
        return "30-30";
      case 3:
        return "40-30";
      case 4:
        return "A won";
    }
  }
  if (playerB == 3) {
    switch (playerA) {
      case 0:
        return "L-40";
      case 1:
        return "15-40";
      case 2:
        return "30-40";
      case 3:
        return "Deuce";
      case 4:
        return "Adv A";
      case 5:
        return "A won";
    }
  }

  return "L-L";
}
