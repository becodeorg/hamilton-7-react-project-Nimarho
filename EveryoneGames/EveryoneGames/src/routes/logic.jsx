import { fourHighCrit } from "../apiCalls";
import { v4 as uuidv4 } from 'uuid';

export const getNewTrendyGames = async() =>{
        
        
    const gameList = await fourHighCrit();
    console.log("gameList : ");
    console.log(gameList);
    const games = [];
    for (const iterator of gameList) {
        const game = {
            id : uuidv4(),
            name : iterator.name,
            date : iterator.released,
            rating : iterator.rating,
            platforms : iterator.platforms,
            genres : iterator.genres,
            bgImg : iterator.background_image,
            screeshots : iterator.short_screenshots
        };
        games.push(game);
        
    }
    console.log("API call");
    console.log(games);
    return(games);
    
}