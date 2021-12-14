import { createSlice } from '@reduxjs/toolkit'

export const activateSlice = createSlice({
    name: 'activate',
    initialState: {
        name: "",
        username: '',
        avatar: ""
    },

    reducers: {
        setName: (state, action) => {
            state.name = action.payload

        },
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload
        },

    },
})

export const { setName, setUsername, setAvatar } = activateSlice.actions

export default activateSlice.reducer