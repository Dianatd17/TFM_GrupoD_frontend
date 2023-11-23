import { ILogopeda } from "./logopeda.interface";

export interface IUser {
    id: number
    nombre: string
    apellidos: string
    email: string
    password: string
    longitud?: number
    latitud?: number
    direccion?: string
    localidad?: string
    provincia?: string
    status: boolean
    rol: string//['admin', 'logopeda','cliente']
    imagen: string
    logopeda?: ILogopeda[]
}

