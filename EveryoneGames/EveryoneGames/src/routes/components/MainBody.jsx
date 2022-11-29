import { useSelector } from "react-redux";

const MainBody = () =>{
    const mainContent = useSelector(state => state.mainContent);
    console.log(mainContent);
    return (
        <div className="flex flex-col w-full items-center justify-evenly pt-5">
             {/* {mainContent.map((game) => (
                <div key={game.id}>
                    {game.name}
                </div>
            ))} */}
            
        </div>
    );
}

export default MainBody;