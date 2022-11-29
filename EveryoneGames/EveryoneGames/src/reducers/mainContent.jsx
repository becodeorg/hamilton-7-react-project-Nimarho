

const mainContentReducer = (state =[],action)=>{
    switch(action.type){
        case 'LOAD':
            return ["game", ...state];
        default:
            return state;
    }
}

export default mainContentReducer;