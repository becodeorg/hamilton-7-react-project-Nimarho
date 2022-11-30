import { fourHighCrit } from "../apiCalls";

const heroContentReducer = (state = [], action) =>{
    switch(action.type){
        case 'LOADHERO':{
            return action.payload;
        }
        default:
            return state;
    }
}

export async function fetchHero(dispatch, getState){
    const gameList = await fourHighCrit();
    const games = [];
    for (const iterator of gameList) {
        const game = {
            id : iterator.id,
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
    console.log("API call Hero");
    console.log(games);
    dispatch({type:'LOADHERO', payload:games});
}

export default heroContentReducer;