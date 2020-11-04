# _Pig Dice_

#### _Allows two players to play a game of pig dice, 04.nov.2020_

#### By _**Jeff Chiu & Austin Schrader**_

## Description

_[This wikipedia article](https://en.wikipedia.org/wiki/Pig_%28dice_game%29) explains the rules of pig dice._ 

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

### Software Requirements
_1. Internet browser of choice._
_2. A code editor like VSCode or Atom to view or edit the codebase._

#### Open by downloading:
_1. Download this repository onto your computer by clicking the 'clone or download button'_
_2. Double click index.html to open it in your web browser_

### Open via Bash/GitBash:
_1. Clone this repository onto your computer:_
`git clone {PUT_REPO_HERE}`
_2. Navigate into the `{NAME_OF_DIRECTORY}` directory, and open in Visual Studio Code or preferred text editor_
`code .`
_3. Open index.html in Chrome or preferred browser_

#### To see my live website go to {GH_PAGES_LINK_HERE}!

## Test Specification

| Test | Input | Output |
| :----------- | :----------------------| :----------- |
| Dice Roll |||
| should return dice roll value | function diceRoll() | '5' |
| Score Tally |||
| should return score of previous turn | tallyScore(5, 3, 6) | '14' |
| Total Score |||
| should return total score after turn ends | player1Score(14,23) | 37 |
| Display Score |||
| should display current score of player | displayScore(player1) | 'player 1 current score 36' |
| Clear score |||
| should clear the score of previous rolls | | |
| Win ||||
| when either player reaches 100 pts will alert them that they've won | | 'player 2 wins' |

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**