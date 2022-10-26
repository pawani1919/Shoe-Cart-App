const initialState = [
    {
        id: 0,
        name: "Sneakers",
        brand: "Nike",
        price: 3000,
        size: 7
    },
    {
        id: 1,
        name: "Ballet shoe",
        brand: "Adidas",
        price: 11000,
        size: 8
    },
    {
        id: 2,
        name: "Clog",
        brand: "Puma",
        price: 7000,
        size: 9
    }
];

const shoeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SHOE":
            state = [...state, action.payload];
            return state;
        case "UPDATE_SHOE":
            const updateState = state.map((shoe) => shoe.id === action.payload.id ? action.payload : shoe);
            state = updateState;
            return state;
        case "DELETE_SHOE":
            const filterShoeDetails = state.filter((shoe) => shoe.id !== action.payload ? shoe : null);
            state = filterShoeDetails;
            return state;
        default:
            return state;
    }
};

export default shoeReducer;
