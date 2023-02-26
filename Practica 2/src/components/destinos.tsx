//Creo un objeto que representa un destino
export type Destino={
    id:number,
    nombre:String,
    descripcionCorta:String,
    descripcionLarga:String,
    imagenCorta:String,
    imagenLarga:String,
}

//Creo un objeto que que tiene una propiedad que es un objeto de tipo Destino
export type Detalle_Destino = {
    destino: Destino
}

//Creo una funcion que muestra la informacion de un destino en la pagina de index
export const Detalles = (props: Detalle_Destino) => {
    return (
        <>
            <div className={"destino"}>
                <img className={"imagenCorta"} src={props.destino.imagenCorta}></img>
                <div className={"contenido"}>
                    <div className={"nombre"}>{props.destino.nombre}</div>
                    <div className={"descripcionCorta"}>{props.destino.descripcionCorta}</div>
                </div>
            </div>
        </>
    )
}