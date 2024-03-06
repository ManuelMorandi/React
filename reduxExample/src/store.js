import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'

// Se usa para operar con las slices (se pueden ver como almacenes de estados)

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})