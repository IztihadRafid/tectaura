import { createContext } from "react";
import { accessories_list } from "../assets/icons/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = {
        accessories_list
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider