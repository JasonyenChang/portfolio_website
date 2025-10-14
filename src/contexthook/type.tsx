export type CategoryContextState = {
    categories: ICategory[],
    setCategories: (data: ICategory[]) => void
};

export type SearchFactorContextState = {
    city: number,
    cityName: string,
    setCity: (data: number) => void,
    setCityName: (data: string) => void
};