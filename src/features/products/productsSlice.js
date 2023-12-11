import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const getAsyncProcuts = createAsyncThunk('products/getAsyncProcuts', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.message)
    }
})
const procuctsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: [],
        error: null
    },

    extraReducers: builder => {
        builder.addCase(getAsyncProcuts.pending, state => {
            state.isLoading = true
        })

        builder.addCase(getAsyncProcuts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.products = payload
        })

        builder.addCase(getAsyncProcuts.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        })
    }

})

export { getAsyncProcuts };

export default procuctsSlice.reducer