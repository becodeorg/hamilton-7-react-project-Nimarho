import React from "react";
import styled, { css } from 'styled-components'

const SingleHero = (game) =>{

    const backGroundImg = game.game.bgImg;
    const gameName = game.game.name;
    return(
        <div className="relative w-1/5 overflow-hidden">
            <img src={backGroundImg} alt="Game pic" srcset="" />
            <span className="absolute bottom-0">{gameName.slice(0,9)}</span>
        </div>
    );
    
}

export default SingleHero;