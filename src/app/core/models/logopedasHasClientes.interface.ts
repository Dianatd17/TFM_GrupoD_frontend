
export interface IlogopedaHasClientes {
    id: number
    logopeda_id: number
    cliente_id: number
    comentarios?: string
    puntuacion?: number
    fecha_inicio: string
    fecha_fin?: string
    status?: string
}