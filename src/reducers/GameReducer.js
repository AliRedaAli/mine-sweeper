export default function GameReducer(state,action){
    let newstate = Object.assign({}, state);
        switch (action.type) {
            case 'newGame':
                newstate = action.payload
                break;
            default:
                break;
        }
    return newstate;
}