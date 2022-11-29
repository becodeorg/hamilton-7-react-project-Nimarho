import SingleHero from "./SingleHero";

const Hero = ({newTrendyGames}) =>{
    console.log(newTrendyGames);
    return (
        <div className="flex flex-row w-full justify-evenly pt-5">
            
            {newTrendyGames.map((game) => (
                <SingleHero key={game.id} game={game} />
            ))}
        
        </div>
    );
}

export default Hero;