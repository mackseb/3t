const initialState = {
    messages: [{
            user: 'c-3po',
            text: 'hello my name is C-3PO, human cyborg relations. how may i help you'
        }
    ]
};


const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            state = {
                ...state,
                messages: [...state.messages, action.payload]
            };
            break;

        default:
            break;
    }
    return state;
};

export default conversationReducer;