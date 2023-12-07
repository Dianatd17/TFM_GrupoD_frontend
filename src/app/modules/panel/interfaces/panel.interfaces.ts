export type cliente = {
    logopeda_id: number,
    cliente_id: number,
    nombre: string,
    apellidos: string,
    imagen: any,
    fecha_inicio: Date,
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
    experiencia: number,
    infancia_o_adulto: string,
    descripcion: string,
    imagen: any,
    rol: string,
    estado_u: number,
    fecha_inicio: Date,
    status: string
}