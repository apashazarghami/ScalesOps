import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getAsyncProcuts = createAsyncThunk('products/getAsyncProcuts', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        return data;
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: [],
        error: null,
        totalOrders: 0
    },
    reducers: {
        addProduct: (state, { payload }) => {
            state.products.forEach(product => {
                if (product.id === Number(payload)) {
                    product.count = 1;
                    state.totalOrders += 1;
                }
            });
        },

        incrementProduct: (state, { payload }) => {
            state.products.forEach(product => {
                if (product.id === Number(payload)) {
                    product.count = product.count + 1;
                    state.totalOrders += 1;
                }
            });
        },

        decrementProduct: (state, { payload }) => {
            state.products.forEach(product => {
                if (product.id === Number(payload)) {
                    product.count = product.count - 1;
                    state.totalOrders = Math.max(0, state.totalOrders - 1);
                }
            });
        },
    },

    extraReducers: builder => {
        builder.addCase(getAsyncProcuts.pending, state => {
            state.isLoading = true;
        });

        builder.addCase(getAsyncProcuts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.products = payload;
        });

        builder.addCase(getAsyncProcuts.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });
    },
});

export { getAsyncProcuts };

export const { addProduct, incrementProduct, decrementProduct } = productsSlice.actions;

export default productsSlice.reducer;
