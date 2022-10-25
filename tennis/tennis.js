export function getScores(playerA, playerB) {
  const scores = [
    ["L-L", "L-15", "L-30", "L-40"],
    ["15-L", "15-15", "15-30", "15-40"],
    ["30-L", "30-15", "30-30", "30-40"],
    ["40-L", "40-15", "40-30", "Deuce"],
  ];

  if (playerA < 4 && playerB < 4) {
    return scores[playerA][playerB];
  }

  if (playerB == 0) {
    switch (playerA) {
      case 4:
        return "A won";
    }
  }

  if (playerB == 1) {
    switch (playerA) {
      case 4:
        return "A won";
    }
  }

  if (playerB == 2) {
    switch (playerA) {
      case 4:
        return "A won";
    }
  }
  if (playerB == 3) {
    switch (playerA) {
      case 4:
        return "Adv A";
      case 5:
        return "A won";
    }
  }
  if (playerB == 4) {
    switch (playerA) {
      case 0:
        return "B won";
      case 1:
        return "B won";
      case 2:
        return "B won";
      case 3:
        return "Adv B";
      case 4: // invalid
        return "Adv B";
      case 5: // invalid
        return "Adv B";
    }
  }

  return "L-L";
}
