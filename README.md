# TicTacToe
A simple TicTacToe game for people to enjoy.

## :computer: [Click here](https://amarynn.github.io/TicTacToe/) to see my live project!

## :page_facing_up: About
- A TicTacToe game where you take turns clicking in the game interface to try and get 3 in a row to win

## :pencil2: Planning & Problem Solving
- Initially make pseudocode to work through the app functionality and plan how to make it work
![pseudocode picture](./TicTacToePseudoCode.png)
- Set up a baseplate page for it to work on with a simple playing grid without having it display as a single line across the top of the page.
- Struggled to code in a way to prevent the user/s from adding more X's or O's after one player had won, initially thought to remove the on-click functionality, but ended up resolving the issue by implementing code that prevented the on-click from running if a player had won.
- Had an issue where I wasn't able to clear the classes or remove the content from the playing grid, I was checking through the source pages on the browser to see if my code had an error, and found that the variables for the playing grid weren't global variables, so I had to simply move them out of a function and my reset buttons started working as intended.
- Checking for a player win was running many repetitive checks to test every possible solution, I struggled to find a way that I could rewrite the check so that it would be less repetitive. I eventually found a way to write it so it only performs most of the checks if a certain prerequisite is met beforehand.

## :rocket: Cool tech
- Created with html, css and javascript
- Once a player wins it is announced on the page
- Counters for player X and player O to display how many times each has won
- Displays which player's turn it is
- Buttons to reset the scores and/or the game board

## :beetle: Bugs to fix
- While mid-game, if you click and hold, then drag your cursor over a different playing box instead of just clicking, parts of the playing field disappears

## :notebook: Lessons learnt
- Instead of trying to remove a class from an object to fix it running when its not supposed to, I learned to instead find a way to make it not run

## :white_check_mark: Future Features
- Background Music 