
function calculateScore(correct, total){
    return Math.floor((correct / total) * 100);
}

function calculateBonus(score, timeSeconds){
   if (timeSeconds < 30) {
    return score + 10;
   } 
 
  else if (timeSeconds < 60) {
    return score + 5;
   } 
  
  else {
    return score;
   }
}

function calculateLevel(score){
  if (score >= 90) {
    return "Gold";
  } else if (score >= 70) {
    return "Silver";
  } else if (score >= 50) {
    return "Bronze";
  } else {
    return "Starter";
  }
}

function calculateRank(level){
    if (level === "Gold") {
    return "Champion";
  } else if (level === "Silver") {
    return "Expert";
  } else if (level === "Bronze") {
    return "Advanced";
  } else {
    return "Novice";
  }
}

const player = {
    name: "Shahruk",
    correctAnswer: 8,
    totalQuestion: 10,
    timeSeconds: 40,

}

const baseScore = calculateScore(player.correctAnswer, player.totalQuestion);
const bonus = calculateBonus(baseScore, player.timeSeconds);
const level = calculateLevel(baseScore);
const rank = calculateRank(level);


console.log("Player:", player.name);
console.log("Base Score:", baseScore);
console.log("Final Score:", bonus);
console.log("Level:", level);
console.log("Rank:", rank);