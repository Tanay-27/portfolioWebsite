export const changeMode = (mode) => {
    return (dispatch) =>{
        dispatch({
            type:'modeSelect',
            payload:mode
        })
    }
}