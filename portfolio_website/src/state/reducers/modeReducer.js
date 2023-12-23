const reducer = (state='dark',action) => {
    if(action==='light') state= 'light';
    return state;
}
export default reducer