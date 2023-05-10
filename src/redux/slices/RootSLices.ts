import {createSlice} from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name:'root',
    initialState:{
        brand:'Brand',
        flavor:'Flavor',
        size:'Size on Record',
        diet:'Diet',
        cost: 'Cost',

    },
    reducers:{
        // action is submitted esle where - writen to state.name
        chooseBrand: (state, action) => {state.brand=action.payload}, //all we are doing is setting input to the state.name
        chooseFlavor:(state, action ) => {state.flavor=action.payload},
        chooseSize:(state, action) => {state.size=action.payload},
        chooseDiet:(state, action) => {state.diet=action.payload},
        chooseCost:(state, action) =>{state.cost=action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseBrand, chooseFlavor, chooseSize, chooseDiet, chooseCost}= rootSlice.actions