import React,{useState, useEffect, useRef} from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import { getNewTrendyGames } from './logic';

export default function Root(props){
    const [newTrendyGames, setNewTrendyGames] = useState([]);
    const limitApiCalls = useRef(false);


    useEffect(()=>{
        if(limitApiCalls.current){
            console.log("true");
        }else{
            const trendyGameList =  getNewTrendyGames();
            console.log(trendyGameList);
            setNewTrendyGames(trendyGameList);
            limitApiCalls.current = true;
        }
    }, []);

    return(
    <div>
        <NavBar />
        <Hero newTrendyGames={newTrendyGames} />
        
    </div>
    )
}