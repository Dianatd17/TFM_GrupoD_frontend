export interface ILogopeda {
    id: number
    nombre: string
    apellidos: string
    email: string
    telefono: string
    longitud?: number
    latitud?: number
    precio?: number
    experiencia?: number
    descripcion?: string
    imagen?: string
    infancia_o_adulto: string//['infancia', 'adulto', 'ambos']
    puntuacion?: number
    comentarios?: string[]
    especialidades?: string[]

}

