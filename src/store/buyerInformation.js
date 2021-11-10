import { createSlice } from "@reduxjs/toolkit";


const buyerSlice = createSlice({
    name: 'buyerInformation',
    initialState: {
        buyerData: {
            name : "", 
            phone: "", 
            country: "",
            address: "",
            additionalInformation: "",
            city: "",
            state: "",
            zipCode: ""
        }
    },
    reducers: {
        addClientInformation: (state, { payload }) => {
            state.buyerData = {...payload};
        }
    }
})

export { buyerSlice, }