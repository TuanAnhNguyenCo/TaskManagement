import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const init = {
    'accounts': [
        {
            'id': 1,
            'name': 'Tuấn Anh',
            'email': 'anh@gmail.com',
            'password': '123'
        },
        {
            'id': 2,
            'name': 'Tuấn',
            'email': 'anhkhongyeuem@gmail.com',
            'password': '123'
        },
        {
            'id': 3,
            'name': 'Cơ Anh',
            'email': 'tun@gmail.com',
            'password': '123'
        }, {
            'id': 4,
            'name': 'Thảo Linh',
            'email': 'linh@gmail.com',
            'password': '123'
        },
        {
            'id': 5,
            'name': 'Ngọc Hiền',
            'email': 'hien@gmail.com',
            'password': '123'
        },
        {
            'id': 6,
            'name': 'Quân Lê',
            'email': 'quan@gmail.com',
            'password': '123'
        }
    ],
}


const accountSlice = createSlice({
    name: 'accounts',
    initialState: init,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addAccount.fulfilled, (state, action) => {
            const { id, name, email, password } = action.payload;
            state.accounts.push({
                id: id,
                name: name,
                email: email,
                password: password
            })
        })
    }
}
)



export const getAccountList = (state) => state.accounts.accounts;

export const addAccount = createAsyncThunk('account/add', async (data, { getState }) => {
    const acclist = getState().accounts.accounts;
    const id = acclist.length + 1;
    const name = data[0]
    const email = data[1];
    const password = data[2];
    return { id, name, email, password };
});



export default accountSlice