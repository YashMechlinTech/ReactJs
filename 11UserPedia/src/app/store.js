import {configureStore} from '@reduxjs/toolkit'
import  userDetail  from '../Features/UserDetailsSlice'


export const store=configureStore({
    reducer:{
        app:userDetail,
    },
}
)