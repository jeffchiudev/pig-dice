// Describe: functionName
// Test: the thing that we are testing
// Code: the code we need to run to complete the test, if any
// Expect: theCodeWeRun.toEqual(SomeValue)

Describe: rollDice()

//Test: should correctly return a dice roll value 
//Code: roll1 = roll();
//Expect: roll1.toequal("6")

Describe tallyScore()

//Test: should correctly save one score
//Code: tallScore(rollDice());
//Expect: scoreCard = [5]

//Test: should correctly tally the score of a turn
//Code: roll1 = 5, 4, 3
//Expect: roll1total.toequal(12)

//Test: should correctly tally a score of 0 if a 1 is rolled
//Code: roll1 = 5, 4, 3, 1
//Expect: roll1total.toequal(0)

Describe totalScore()

Test: should correctly add a final score to a players total score 
Code: player1Total = totalScore(roll1, roll2, roll3)
Expect: player1Total = 36

Describe displayScore()

Test: should correctly display each players score correctly in the UI/DOM
Code: player1Total = 36; player2Total = 55;
Expect: "Player 1 Score is 36" "Player 2 Score is 55"

Describe clearScore()
Test: should correctly clear out the score values in BL before next turn 
Code: 
Expect: 

Describe checkWon()

Test: should correctly indicate which player has won if they reach 100+ pts
Code: player1Total = 105;
Expect: "Player 1 is the winner"