import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null,
        isEditing: false
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        signout: (state) => {
            state.token = null,
                state.user = null
        },
        setIsEditing: (state, action) => {
            state.isEditing = action.payload
        }
    },
})


// Action creators are generated for each case reducer function
export const { setToken, setUser, signout, setIsEditing } = counterSlice.actions

export default counterSlice.reducer

export const selectToken = state => state.auth.token
export const selectUser = state => state.auth.user
export const selectIsEditing = state => state.auth.isEditing