
export let initialState = {
    search: 'test',
    notifications: []

};

export const myReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SEARCH': 
            return { ...state, search: action.payload };
        default: throw new Error('Unexpected action');
    }
};