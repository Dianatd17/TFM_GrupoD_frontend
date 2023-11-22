export interface ILogopeda {
    usuario_id: number
    telefono: string
    conocimiento: string
    precio: number
    experiencia: number
    descripcion: string
    infancia_o_adulto: Infancia_o_adulto

}
enum Infancia_o_adulto {
    infancia,
    adulto,
    ambos
}