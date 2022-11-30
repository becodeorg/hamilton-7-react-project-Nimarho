import { useSelector } from "react-redux";

const MainBody = () =>{
    const mainContent = useSelector(state => state.mainContent);
    const altImg = "public/1F3AE.svg";
    console.log(mainContent);
    return (
        <div className="flex flex-col w-full items-center justify-evenly pt-5 gap-y-5">
             {mainContent.map((game) => (
                <div key={game.id} className="relative w-4/5 overflow-hidden">
                    <img className="w-full" src={game.bgImg? game.bgImg : altImg} alt="Game pic" />
                    <span className="absolute bottom-0">{game.name}</span>
                </div>
            ))}
        </div>
    );
}

export default MainBody;