import { mainBodyContent } from "../apiCalls/index";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const mainContentReducer = (state =[],action)=>{
    switch(action.type){
        case 'LOAD':{
            return action.payload;
        }
        default:
            return state;
    }
}

export async function fetchMain(dispatch, getState) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const yearMOne = year-1;
    const request = `${yearMOne}-${month}-${day},${year}-${month}-${day}`;
    console.log(request);
    const gameList = await mainBodyContent(request);
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
    console.log("API call for maincontent");
    dispatch({ type: 'LOAD', payload: games })
  }

export default mainContentReducer;