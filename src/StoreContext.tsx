import React from "react";
import store, {StoreType} from "./Redux/ReduxStore";

export const StoreContext =React.createContext(store)

type ProviderType={
    store:StoreType
    children:any
}

export const Provider =(props:ProviderType)=>{
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext