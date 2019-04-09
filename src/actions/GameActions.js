export const createNewGame = (mines,size) => {
    return {
        type:"newGame",
        payload: {mines,size}
    }
}