#  📚 Wordle

Hi,
I'm Yoann, I'm currently deepening my knowledge in web development. I'm specialized in React frontend development.
I had fun coding all these projects!
Don't hesitate if you have any questions, and have a look at my other projects ;)
Have fun coding!

## ✍️ Description 

The objective of this challenge is to reproduce the Wordle game. You can either use the provided frontend or build your own application with your own rules. In both cases, you need to develop a backend and link it to a MongoDB database.

Configure the connection to your database. Create a Game model in a models/games.js file that will contain each played word and the date of the game in the database. In the routes/games.js file, create an array of ten words of your choice that you will assign to the variable "words". These words will have to be guessed by the players of your Wordle.

Create a GET /new route that randomly selects a word, capitalizes it, saves it in the Game collection with the creation date, and returns the following information: word, result, gameId, and wordLength (the length of the word).

When the New Game button (#newGame) is clicked, the previously created route should be launched, and a new game should start by displaying the game board (#game-board). Your game board will include 6 horizontal rows that should have the "letter-row" class, and the number of vertical boxes should correspond to the number of letters in your word. The style is already integrated into the style.css file.

The player tries to guess the word using the keys on their keyboard. As soon as they release the key of a letter, it should be displayed in a box on the game board. The class will then change from ".letter-box" to ".letter-box filled-box". Note: you must use the "keyup" event that is triggered as soon as the key is released.

When the enter key is clicked, the code evaluates the entered word, and the following behaviors occur depending on the situation:

- If the number of letters is not enough, the #result div displays "Not enough letters!"
- If the number of letters is correct, the code evaluates each letter. If the letter is in the correct position, its background becomes green. If it is in the word but in the wrong position, it becomes yellow, and if it is not in the word at all, the background becomes gray.

If the player guesses the correct word, the #result div displays "YOU WON!". However, if they use up their six "lives," it will display "GAME OVER."

For a bonus challenge, you can further develop your Wordle by adding the following features:

- Generating random words from a third-party service (NodeJS module or webservice)
- Adding a timer (client-side)
- Modifying the application behavior so that the word is the same for everyone and changes every day.

[data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2730%27%20height=%2730%27/%3e)

Additional Features:

- Implement a scoring system to keep track of the player's progress and rank them on a leaderboard.
- Add a hint system that provides clues to help the player guess the word.
- Create a multiplayer version of the game where players can compete in real-time.
- Add a feature to allow players to create and share their own custom word lists.
- Implement an AI system that learns from the player's past guesses and improves its word selection based on the player's performance.
- Enable voice recognition to allow players to say the letters instead of typing them.
- Integrate a chat system to allow players to communicate with each other during the game.
- Add sound effects and music to enhance the gameplay experience.

These additional features will make your Wordle game more engaging and exciting for your users. However, they also require more advanced development skills and may take longer to implement. As with any software development project, it's important to prioritize features based on user needs and allocate your resources accordingly.

## 🎬 Getting Started : Dependencies and Other

!! Be careful, all my projects have a separate backend and frontend, you will find them here on my github.

```

yarn install

```

## ⚛️ Tech and Stuff

- HTML
- CSS
- JavaScript
- Node.JS
- MongoDB
- Vercel
- …

## 🚀 Deploy 

⇒ 

Vercel : [https://vercel.com/](https://vercel.com/)

## 🧑‍💻 Authors

Yoann Drx, Paris, France 

## 🌐 Network

LinkedIn : [https://www.linkedin.com/in/yoann-andrieux/](https://www.linkedin.com/in/yoann-andrieux/)