const initState = {
    data:""
}

export default function signIn(state = initState,action){
    switch (action.type){
        case 'ACTION':
            return Object.assign({}, state, {
                data:action.data
            })
        default:
            return state
    }
}