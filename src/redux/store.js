import { configureStore } from "@reduxjs/toolkit";
import accountSlice from '../views/login/accountSlice'
import taskSlice from "../views/calendar/taskSlice";


const store = configureStore({
    reducer: {
        accounts: accountSlice.reducer,
        tasks: taskSlice.reducer,
        
    }
})
export default store