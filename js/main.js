const input = document.querySelector(".input-game");
const btn = document.querySelector(".btn-game");

const img = document.querySelector(".img-game");
const title = document.querySelector(".game-title");

const normalPrice = document.querySelector(".normal-price");
const salePrice = document.querySelector(".sale-price");
const steamLink = document.querySelector(".steam-link");

const displayLeft = document.querySelector(".box__display--left");

const API_URL = "https://www.cheapshark.com/api/1.0/games?title=";
const searchGame = () => {
	let gameName = input.value;
	fetch(API_URL + gameName)
		.then((res) => res.json())
		.then((data) => {
            console.log(data);
			data.forEach((games) => {
				//console.log(games);
				const titleGame = document.createElement("p");
				titleGame.textContent = games.external;
				displayLeft.append(titleGame);
				const gameList = titleGame;
                //console.log(gameList.textContent);
				gameList.addEventListener("click", () => {
                            //console.log(gameList.textContent);
                                //title.textContent =data[0].external
                                title.textContent = gameList.textContent
                //console.log(data);
                const clickGame = data.find(
                    (game) => game.external.toLowerCase() === title.textContent.toLowerCase()
                );
                img.setAttribute('src', clickGame.thumb)
                            
                        
				});
			});
		});
};

btn.addEventListener("click", searchGame);
