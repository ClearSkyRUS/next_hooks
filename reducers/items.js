const items = (state, action) => {
    switch (action.type) {
        case 'SET':
            for (let key in action.payload)
                if (state[key] && typeof action.payload[key] === 'object')
                    state[key] = { ...state[key], ...action.payload[key] }
                else
                    state[key] = action.payload[key]
            return state;
        case 'ADD':
            return { count: state.count - 1 };
        case 'UPDATE':
            return { count: state.count - 1 };
        case 'REMOVE':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default items