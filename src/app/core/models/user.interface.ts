import { ILogopeda } from "./logopeda.interface";

export interface IUser {
    id: number
    nombre: string
    apellidos: string
    email: string
    password: string
    telefono?: string
    longitud?: number
    latitud?: number
    direccion?: string
    localidad?: string
    provincia?: string
    status: boolean
    rol: string//['admin', 'logopeda','cliente']
    imagen?: string
    precio?: number
    experiencia?: number
    descripcion?: string
    infancia_o_adulto: string

}



