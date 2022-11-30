import React,{useState, useEffect, useRef} from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import { getNewTrendyGames } from './logic';
import { fourHighCrit } from "../apiCalls";
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { loadMain } from '../actions';
import MainBody from './components/MainBody';


export default function Root(props){
    const [newTrendyGames, setNewTrendyGames] = useState([]);
    const limitApiCalls = useRef(false);



    useEffect( ()=>{
        if(limitApiCalls.current){
            console.log("true");
        }else{
            const fetchData = async() =>{
                const gameList = await fourHighCrit();
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
                setNewTrendyGames(games);
            }
            fetchData();
            limitApiCalls.current = true;
        }
    }, []);

    return(
    <div>
        <NavBar />
        <Hero newTrendyGames={newTrendyGames} />
        <MainBody />
    </div>
    )
}