export type cliente = {
    id: number,
    logopeda_id: number,
    cliente_id: number,
    nombre: string,
    apellidos: string,
    imagen: any,
    fecha_inicio: string,
    rol: string,
    estado_u: number,
    status: string
}

export type logopedas = {
    nombre: string,
    apellidos: string,
    email: string,
    localidad: string,
    precio: string,
    puntuacion: string,
    experiencia: number,
    infancia_o_adulto: string,
    descripcion: string,
    imagen: any,
    rol: string,
    estado_u: number,
    fecha_inicio: Date,
    status: string
}

export type clase = {
    
        id: number,
        logopeda_id: number,
        cliente_id: number,
        comentarios: string,
        puntuacion: string,
        fecha_inicio: string,
        fecha_fin: any,
        status: string
      
}