import Head from 'next/head';
import Link from 'next/link';
import { Detalles, Destino } from '@/src/components/destinos';
import { info } from '@/src/data/info';

//Creo una pagina que muestra todos los destinos, con sus respectivas nombres, imagenes y descripciones cortas
export default function Index() {
    return (
        <>
            <Head>
                <title>Practica 2 - Index</title>
            </Head>
            <main>
                {/*Recorro todos los destinos del array y los muestro en la pagina*/}
                {info.map((destino: Destino) => (
                    /* Creo un link para cada destino para que me lleve a la pagina de ese destino y me muestre su informacion detallada
                    Uso legacyBehavior es para que no me de error */
                    <Link legacyBehavior href={`/destino/${destino.id}`}>
                        <div key={destino.id} className={"pagina_indice"}>
                            <Detalles destino={destino} /> {/*Muestro el destino con su informacion*/}
                        </div>
                    </Link>
                ))}
            </main>
        </>
    );
}