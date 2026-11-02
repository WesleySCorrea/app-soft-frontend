export type Pagina<T> = {
    content: T[]
    number: number
    totalPages: number
    totalElements: number
}