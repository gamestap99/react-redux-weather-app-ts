import {configureStore,Action} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {ThunkAction} from "@reduxjs/toolkit";


export const store = configureStore(
    {
        reducer:rootReducer,
    }
)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;