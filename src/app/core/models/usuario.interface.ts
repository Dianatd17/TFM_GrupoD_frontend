import { ILogopeda } from "./logopeda.interface";

export interface IUsuario {
    id: number
    nombre: string
    apellidos: string
    email: string
    password: string
    longitud: number
    latitud: number
    direccion: string
    localidad: string
    provincia: string
    status: boolean
    rol: Rol
    imagen: string
    logopeda: ILogopeda[]
}

enum Rol {
    admin,
    logopeda,
    cliente
}