const fs = require('fs');
const path = require('path');
const { color, log, red, green, cyan, cyanBright } = require('console-log-colors');

// Directory where your games are stored
const gamesDirectory = path.join(__dirname, 'games');
const gamesJsonPath = path.join(gamesDirectory, 'games.json');

// Function to get all games (excluding manually added ones like Moto X3M)
const getGamesList = () => {
  const gamesList = [];

  // Read all subdirectories in the 'games' folder
  const gameDirs = fs.readdirSync(gamesDirectory, { withFileTypes: true })
    .filter(item => item.isDirectory()) // Only directories (game folders)
    .map(item => item.name);

  // Iterate through each directory (representing a game)
  gameDirs.forEach(gameDir => {
    // Skip games containing "moto" or "x3m" in their folder names (to prevent overwriting)
    if (gameDir.toLowerCase().includes('moto') || gameDir.toLowerCase().includes('x3m')) {
      return; // Skip this game
    }

    // Get the index.html (or any HTML file) in the game folder
    const gameFiles = fs.readdirSync(path.join(gamesDirectory, gameDir));
    const gameHtmlFile = gameFiles.find(file => file.endsWith('.html'));

    if (gameHtmlFile) {
      // Construct the URL for the game (relative path)
      const gameUrl = `/games/${gameDir}/${gameHtmlFile}`;

      // Look for an image file (e.g., .jpg, .jpeg, .png, .gif, .webp, etc.)
      const imageFile = gameFiles.find(file => /\.(jpg|jpeg|png|gif|webp|bmp|tiff|svg||avif|ico)$/i.test(file));


      // If an image is found, use it; otherwise, use a default placeholder image
      const imageUrl = imageFile ? `/games/${gameDir}/${imageFile}` : '../assets/notfound.png';

      // Create the game object and add it to the list
      gamesList.push({
        name: gameDir,   // Use the folder name as the game name
        url: gameUrl,    // Path to the game's HTML file
        image: imageUrl  // Path to the game's image (or default if none found)
      });
    }
  });

  return gamesList;
};

// Function to update the games.json file
const updateGamesJson = () => {
  // Read the existing games.json if it exists
  let existingGames = [];
  if (fs.existsSync(gamesJsonPath)) {
    existingGames = JSON.parse(fs.readFileSync(gamesJsonPath, 'utf-8'));
  }
 console.log(color.blue("   \u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2584     \u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2584\u2584\u2584\u2584\u2588\u2588\u2588\u2584\u2584\u2584\u2584      \u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2584  \u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2584     \u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588     \r\n  \u2588\u2588\u2588    \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588 \u2584\u2588\u2588\u2580\u2580\u2580\u2588\u2588\u2588\u2580\u2580\u2580\u2588\u2588\u2584   \u2588\u2588\u2588    \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588 \u2588\u2588\u2588    \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588 \u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2584 \r\n  \u2588\u2588\u2588    \u2588\u2580    \u2588\u2588\u2588    \u2588\u2588\u2588 \u2588\u2588\u2588   \u2588\u2588\u2588   \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2580    \u2588\u2588\u2588    \u2588\u2580    \u2588\u2588\u2588    \u2588\u2588\u2588 \u2588\u2588\u2588    \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588    \u2580\u2588\u2588\u2588\u2580\u2580\u2588\u2588 \r\n \u2584\u2588\u2588\u2588          \u2588\u2588\u2588    \u2588\u2588\u2588 \u2588\u2588\u2588   \u2588\u2588\u2588   \u2588\u2588\u2588  \u2584\u2588\u2588\u2588\u2584\u2584\u2584       \u2588\u2588\u2588          \u2588\u2588\u2588    \u2588\u2588\u2588 \u2588\u2588\u2588    \u2588\u2588\u2588  \u2584\u2588\u2588\u2588\u2584\u2584\u2584\u2584\u2588\u2588\u2580     \u2588\u2588\u2588   \u2580 \r\n\u2580\u2580\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2584  \u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588   \u2588\u2588\u2588   \u2588\u2588\u2588 \u2580\u2580\u2588\u2588\u2588\u2580\u2580\u2580     \u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2580  \u2588\u2588\u2588    \u2588\u2588\u2588 \u2580\u2580\u2588\u2588\u2588\u2580\u2580\u2580\u2580\u2580       \u2588\u2588\u2588     \r\n  \u2588\u2588\u2588    \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588 \u2588\u2588\u2588   \u2588\u2588\u2588   \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2584           \u2588\u2588\u2588   \u2588\u2588\u2588        \u2588\u2588\u2588    \u2588\u2588\u2588 \u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588     \r\n  \u2588\u2588\u2588    \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588 \u2588\u2588\u2588   \u2588\u2588\u2588   \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588    \u2584\u2588    \u2588\u2588\u2588   \u2588\u2588\u2588        \u2588\u2588\u2588    \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588     \u2588\u2588\u2588     \r\n  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2580    \u2588\u2588\u2588    \u2588\u2580   \u2580\u2588   \u2588\u2588\u2588   \u2588\u2580    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2580   \u2584\u2588\u2588\u2588\u2588\u2580       \u2580\u2588\u2588\u2588\u2588\u2588\u2588\u2580    \u2588\u2588\u2588    \u2588\u2588\u2588    \u2584\u2588\u2588\u2588\u2588\u2580   \r\n                                                                                              \u2588\u2588\u2588    \u2588\u2588\u2588             "))
  // Extract the existing game names (to check for duplicates)
  const existingGameNames = existingGames.map(game => game.name);
  //console.log("Existing games:", existingGameNames); // Debugging

  // Get the new list of games (excluding Moto X3M games)
  const newGamesList = getGamesList();

  // Filter out any games that are already in the existing list (based on game name)
  const newGamesUnique = newGamesList.filter(game => !existingGameNames.includes(game.name));
  //console.log("New unique games:", newGamesUnique.length);

  // Combine the new games with the existing games, ensuring new ones are at the top
  const combinedGamesList = [...newGamesUnique, ...existingGames];

  // Remove duplicates by checking game names (based on the "name" field)
  const uniqueGamesList = Array.from(new Map(combinedGamesList.map(game => [game.name, game])).values());

  // Save the updated list to games.json
  fs.writeFileSync(gamesJsonPath, JSON.stringify(uniqueGamesList, null, 2), 'utf-8');

 

  console.log(color.green(`✅ games.json has been updated. ${newGamesUnique.length} have been added, there are a total of ${uniqueGamesList.length} games ✅`));
};

// Run the update process
updateGamesJson();

