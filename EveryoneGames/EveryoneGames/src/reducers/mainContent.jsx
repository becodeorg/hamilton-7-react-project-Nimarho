import { mainBodyContent } from "../apiCalls/index";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const mainContentReducer = (state =[],action)=>{
    switch(action.type){
        case 'LOAD':{
            // const fetchData = async() =>{
            //     const gameList = await mainBodyContent();
            //     console.log("gameList : ");
            //     console.log(gameList);
            //     const games = [];
            //     for (const iterator of gameList) {
            //         const game = {
            //             "id" : uuidv4(),
            //             "name" : iterator.name,
            //             "date" : iterator.released,
            //             "rating" : iterator.rating,
            //             "platforms" : iterator.platforms,
            //             "genres" : iterator.genres,
            //             "bgImg" : iterator.background_image,
            //             "screeshots" : iterator.short_screenshots
            //         };
            //         games.push(game);
                    
            //     }
            //     console.log("API call mainbodycontent");
            //     console.log(games);
            //     return(games);
            // }
            // const gameList = fetchData();
            // console.log("mainContent gamelist");
            // //console.log(gameList);
            console.log(action.payload);
            return {...action.payload};
        }
        default:
            return state;
    }
}

export async function fetchMain(dispatch, getState) {
    const gameList = await mainBodyContent();
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
    console.log(games);
    dispatch({ type: 'LOAD', payload: games })
  }

export default mainContentReducer;