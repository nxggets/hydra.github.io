<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hydra Games</title>
  <script src="antiwindows.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <link rel="stylesheet" href="style/style.css" />
  <link rel="stylesheet" href="style/welcome.css" />
  <link rel="stylesheet" href="style/games.css" />
</head>
<body>



  <nav>
    <div class="logo">
      <img src="assets/iconbetter.png" alt="logo" />
    </div>
    <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="#">Games</a></li>
      <li><a href="#">More Games</a></li>
      <li><a href="#">Games again lol</a></li>
    </ul>
  </nav>

  <div class="menubar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>

  <br>
  <footer>
    <br>
    <h1> TOTAL GAMES:</h1>
  </footer>
  <!-- START POPUP FOR WELCOME -->
  <div class="modal" id="popup">
    <article class="modal-container">
        <header class="modal-container-header">
            <h1 class="modal-container-title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path fill="currentColor" d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z" />
                </svg>
                HYDRA
            </h1>
        </header>
        <section class="modal-container-body rtf">
            <h2>Welcome to HYDRA!</h2>
            <p>I've rebranded and remade the classic <strong>OPAL98</strong>. I’ve been REALLY inactive in making OPAL98 better, so I decided to make a new games website that <strong>will be getting frequent updates.</strong><br> i hope you enjoy <strong>since this took almost 3 days,</strong> i know that aint much, <strong>but this took a while because i needed to code scripts, add A LOT of games</strong></p>
            <h2>Enjoy the new <strong>OPAL98!</strong></h2>
        </section>
        <footer class="modal-container-footer">
            <button class="button is-primary" onclick="close1()">Okay!</button>
        </footer>
    </article>
</div>
  <!-- END POPUP FOR WELCOME -->
  <div id="search-container">
    <input type="text" id="search-box" placeholder="Search for a game..." />
  </div>
  
  <!-- Game Links will be dynamically added here -->
  <div id="game-link">
    <div id="game-links">
      <!-- Dynamic Game Links will be inserted here -->
    </div>
  </div>
  <div id="version-info"><img src="assets/3dgifmaker42575.gif" height="170px" width="170px"></div>
  <div id="version-tooltip">v1</div>

  <script>
fetch('/games/games.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch game list');
    }
    return response.json(); // Parse the JSON response
  })
  .then(games => {
    const gameLinksContainer = document.getElementById('game-links');
    const totalGamesElement = document.querySelector('footer h1');
    const searchBox = document.getElementById('search-box'); // Get the search box element

    // Function to display games
    function displayGames(filteredGames) {
      gameLinksContainer.innerHTML = ''; // Clear current game links

      filteredGames.forEach(game => {
        // Create the <a> element for each game
        const gameLink = document.createElement('a');
        gameLink.id = 'game-cover';
        gameLink.href = `games.html?game=${encodeURIComponent(game.url)}`; // Append game URL to games.html
        gameLink.classList.add('game-link');

        // Create an <img> element for the game's cover image
        const gameImage = document.createElement('img');
        gameImage.src = game.image; // The image URL (from games.json)
        gameImage.alt = game.name;  // Set alt text to the game's name
        gameImage.classList.add('game-image');

        // Create a <span> for the game name
        const gameName = document.createElement('span');
        gameName.textContent = game.name;
        gameLink.appendChild(gameImage);
        gameLink.appendChild(gameName);

        // Append the game link to the game links container
        gameLinksContainer.appendChild(gameLink);
      });

      // Update the total games count in the footer
      totalGamesElement.textContent = `TOTAL GAMES: ${filteredGames.length}!`;
    }

    // Display all games initially
    displayGames(games);

    // Search functionality
    searchBox.addEventListener('input', function() {
      const searchTerm = searchBox.value.toLowerCase(); // Get the search term
      const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm) // Match game name with search term
      );
      displayGames(filteredGames); // Display filtered games
    });
  })
  .catch(error => {
    console.error('Error fetching game list:', error);
    const gameLinksContainer = document.getElementById('game-links');
    gameLinksContainer.innerHTML = '<p>Failed to load game list. Please try again later.</p>';
    const totalGamesElement = document.querySelector('footer h1');
    totalGamesElement.textContent = 'TOTAL GAMES: Error loading games';
  });

  if (!localStorage.getItem('popupShown')) {
    window.onload = function() {
      const modal = document.getElementById('popup');
      modal.style.display = 'flex'; // Show the modal
      modal.style.animation = 'fadeIn 1s ease-out forwards'; // Show fade-in animation
      document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
    };

    // Set the flag in localStorage after the modal has been shown
    localStorage.setItem('popupShown', 'true');  // Set the flag to prevent future modals
  }

  // Function to close the modal with fade-out animation
  function close1() {
    const modal = document.getElementById('popup');
    
    // Apply the fade-out animation
    modal.style.animation = 'fadeOut 1s ease-out forwards';

    // Wait for the animation to finish before hiding the modal
    setTimeout(() => {
      modal.style.display = 'none'; // Hide the modal after animation ends
      document.body.style.overflow = 'auto'; // Enable scrolling again
    }, 1000); // Timeout should match the duration of the fadeOut animation
  }
  </script>
</body>
</html>
