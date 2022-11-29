import axios from "axios";

export const fourHighCrit = async() =>{
    const response = await axios({
        method:"get",
        url:"https://api.rawg.io/api/games?key=d9e71ebfadd443cf87cf12c16f68b087&ordering=-released&metacritic=80,100&page_size=4"
    });
    return response.data.results;
}

export const mainBodyContent = async() =>{
    const response = await axios({
        method:"get",
        url:"https://api.rawg.io/api/games?key=d9e71ebfadd443cf87cf12c16f68b087&ordering=-released&page_size=10"
    });
    return response.data.results;
}