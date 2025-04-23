const input = document.querySelector(".input-game");
const btn = document.querySelector(".btn-game");

const img = document.querySelector(".img-game");
const title = document.querySelector(".game-title");

const normalPrice = document.querySelector(".normal-price");
const salePrice = document.querySelector(".sale-price");
const steamLink = document.querySelector(".steam-link");

const displayLeft = document.querySelector(".box__display--left");
const isOnS = document.querySelector('.sale-price-title')
const boxLeftTitle = document.querySelector('.box__display--left-title')

const API_URL = "https://www.cheapshark.com/api/1.0/games?title=";
const searchGame = () => {
	let gameName = input.value;
	fetch(API_URL + gameName)
		.then((res) => res.json())
		.then((data) => {
            //console.log(data);
			data.forEach((games) => {
				//console.log(games);
                const titleGame = document.createElement("p");
				titleGame.textContent = games.external;
				
                    boxLeftTitle.append(titleGame);
				const gameList = titleGame;
            
                
                
                
            
                console.log(gameList.textContent);
				titleGame.addEventListener("click", () => {
                            //console.log(gameList.textContent);
                                //title.textContent =data[0].external
                               
                                title.textContent = titleGame.textContent
                //console.log(data);
                const clickGame = data.find(
                    (game) => game.external.toLowerCase() === title.textContent.toLowerCase()
                );
                img.setAttribute('src', clickGame.thumb)
                //console.log(clickGame);
                const GAME_URL = 'http://store.steampowered.com/app/'
                const ID_URL = clickGame.steamAppID;
                steamLink.setAttribute('href', GAME_URL + ID_URL)
                console.log(GAME_URL + ID_URL);
                const API = 'https://www.cheapshark.com/api/1.0/deals?title='
                fetch(API + clickGame.external).then(res=>res.json()).then(data=>{
                   
                    const activeGame = data.find((aGame)=> aGame.title.toLowerCase()===clickGame.external.toLowerCase())
                    console.log(activeGame);
                    normalPrice.textContent= activeGame.normalPrice + "€"
                    if(activeGame.isOnSale==0){
                        isOnS.textContent='The game is not on sale'
                    }else if(activeGame.isOnSale==1){
                        salePrice.textContent= activeGame.salePrice + '€'
                    }
                })
               
                            
                        
				});
			});
		});
};

btn.addEventListener("click", searchGame);
