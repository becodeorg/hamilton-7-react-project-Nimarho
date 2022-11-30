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

    return(
    <div>
        <NavBar />
        <Hero  />
        <MainBody />
    </div>
    )
}