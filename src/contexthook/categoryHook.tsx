import React, { createContext, useContext, useState } from "react";
import { CategoryContextState } from "./type";

const contextDefaultValues: CategoryContextState = {
    categories: [],
    setCategories: () => { }
};

const CategoryContext = createContext<CategoryContextState>(contextDefaultValues);

export const CategoryContextProvider = ({ children }: any) => {
    const [categories, _setCategories] = useState<ICategory[]>([]);
    const setCategories = (data: ICategory[]) => _setCategories(data.map(d => ({ ...d, selected: d.selected || false })));
    return (
        <CategoryContext.Provider
            value={{ categories, setCategories }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategoryContext = () => useContext(CategoryContext);

export default CategoryContextProvider;