import { createSlice } from "@reduxjs/toolkit";

export const leftPannelSlice = createSlice({
    name: "visible",
    initialState: {
        showValue:false,
    },
    reducers: {
        setShowValue:(state,action)=>{
            state.showValue=action.payload;

        },
      
    },
});

// Action creators are generated for each case reducer function
export const { setShowValue } = leftPannelSlice.actions;

export default leftPannelSlice.reducer;