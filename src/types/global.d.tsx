export {};

declare global {
    interface ICategory {
        id: number,
        short_name: string,
        selected: boolean
    }
}