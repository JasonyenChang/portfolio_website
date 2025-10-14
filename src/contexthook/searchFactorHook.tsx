import React, { createContext, useContext, useState } from "react";
import { SearchFactorContextState } from "./type";

const contextDefaultValues: SearchFactorContextState = {
    city: 0,
    cityName: "",
    setCity: () => { },
    setCityName: () => { },
};

const SearchFactorContext = createContext<SearchFactorContextState>(contextDefaultValues);

export const SearchFactorContextProvider = ({ children }: any) => {
    const [city, _setCity] = useState(0);
    const [cityName, _setCityName] = useState("");
    const setCity = (data: number) => _setCity(data);
    const setCityName = (data: string) => _setCityName(data);
    return (
        <SearchFactorContext.Provider
            value={{ city, setCity, cityName, setCityName }}
        >
            {children}
        </SearchFactorContext.Provider>
    )
}

export const useSearchFactorContext = () => useContext(SearchFactorContext);

export default SearchFactorContextProvider;