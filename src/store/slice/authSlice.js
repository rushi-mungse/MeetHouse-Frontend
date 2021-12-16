import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: null,
        otp: {
            phone: '',
            hash: ''
        }
    },

    reducers: {
        setAuth: (state, action) => {
            const { data } = action.payload
            state.user = data.user
            if (state.user === null) {
                state.isAuth = false
            } else {
                state.isAuth = true
            }
        },
        setOtp: (state, action) => {
            const { phone, hash } = action.payload
            state.otp.phone = phone
            state.otp.hash = hash
        },
    },
})

export const { setAuth, setOtp } = authSlice.actions

export default authSlice.reducer