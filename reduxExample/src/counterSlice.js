import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter', // Creo un nuevo estado llamado counter
    initialState: {
        value: 0
    },
    reducers: { // Funciones que llamo para modificar el estado
        increment: state => {
            state.value += 1
            // Al asignar en una slice no se modifica directamente el dato value, se copia antes de modificarlo
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += parseInt(action.payload)
            // En el payload se pone cualquier valor que paso para que usen los reducers
            // Pueden ser de cualquier tipo, en este caso int
        },
        decrementByAmount: (state, action) => {
            state.value -= parseInt(action.payload)
        }
    },
    extraReducers: (builder) => { // Aca definimos las async
        builder.addCase(incrementAsync.fulfilled, state => {
            state.value += 1;
        });
        // Contemple solo el caso fulfilled, pero tambien tenemos pending y error
    }
})

// Hacemos tambien una accion async
// Estas debemos nombrarlos a mano, por convencion es nombreSlice/nombreFuncion
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount) => {
        await new Promise ((resolve) => setTimeout(resolve, 1000)); // Simula tardar 1 segundo
        return amount;
    }
)

// Los creadores de acciones de los reducers se crean y nombran automaticamente:
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;