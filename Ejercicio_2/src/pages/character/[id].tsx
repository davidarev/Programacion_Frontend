import Image from 'next/image';
import { GetServerSideProps } from 'next';

//Creo un tipo llamado Character que tiene los atributos id, name e image
type Character = {
    id: number;
    name: string;
    image: string;
}

//Creo una pagina que muestra el nombre y la imagen de un personaje
const CharacterPage: (props: Character) => JSX.Element = (props: Character) => {
    return (
        <>
            <main className={"id"}>
                <Image className={"imagen"} src={props.image} alt={props.name} width={100} height={100} />
                <br/>
                <div className={"nombre"}>
                    {props.name}
                </div>
            </main>
        </>
    );
}

//Creo una funcion que me trae los datos de un personaje en especifico
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id; //Guardo el id del personaje que me traigo de la url
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`); //Hago la peticion a la api con el id del personaje
    const json = await res.json();

    //Retorno los datos del personaje
    return {
        props: {
            id: json.id,
            name: json.name,
            image: json.image
        }
    };
}

export default CharacterPage;
