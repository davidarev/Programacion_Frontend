import { useRouter } from 'next/router';
import { info } from '@/src/data/info';
import {Destino} from '@/src/components/destinos';
import Link from "next/link";
import Head from "next/head";

//Creo una pagina que muestra la informacion detallada de un destino, con su nombre, (otra) imagen y descripcion larga
export default function PaginaDestino() {
    //Obtengo el id del destino que quiero mostrar
    const router = useRouter();
    const { id } = router.query; //router.query me devuelve un objeto con todos los parametros que recibe la pagina
    //Busco el destino con el id que obtuve y lo guardo en la variable destino (si no lo encuentra, destino es undefined)
    const destino: Destino | undefined = info.find((d) => d.id === (typeof id === 'string' ? parseInt(id, 10) : id));

    //Si no encontro el destino, muestro un mensaje de error
    if (!destino) {
        return (
            <>
                <main>
                    <div className={"error"}>
                        <p className={"mensaje1"}>ERROR</p>
                        <p className={"mensaje2"}>No se encontró el destino con el id {id}</p>
                        <Link legacyBehavior href={`/`}>
                            <button className={"boton"}>INDEX</button>
                        </Link>
                    </div>
                </main>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Practica 2 - {destino.nombre}</title>
            </Head>
            <main className={"pagina_destino"}>
                <div className={"destino"}>
                    <img className={"imagenLarga"} src={destino.imagenLarga} />
                    <div className={"contenido"}>
                        <div className={"nombre"}>{destino.nombre}</div>
                        <div className={"descripcionLarga"}>{destino.descripcionLarga}</div>
                    </div>
                </div>
                {/* Creo un boton para volver a la pagina de index */}
                <Link legacyBehavior href={`/`}>
                    <button className={"boton"}>INDEX</button>
                </Link>
            </main>
        </>
    );
}