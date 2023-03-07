import { useEffect, useState } from "react";
import Link from "next/link";

const Formulario = () => {
    const [data, setData] = useState<any[]>([]); //Creo un estado para guardar los datos que me traigo de la api
    const [name, setName] = useState<string>(""); //Creo un estado para guardar el nombre que me traigo del input
    const [page, setPage] = useState<number>(1); //Creo un estado para guardar la pagina en la que estoy

    const fetchData = async () => {
        try {
            //Hago la peticion a la api con el nombre y la pagina que me traigo de los estados anteriores
            const chars = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`);
            const json = await chars.json();
            setData(json.results); //Guardo los datos en el estado
        } catch (e) {
            setData([{ name: "Error bajandome los personajes" }]);
        }
    };

    //Hago la peticion a la api cuando se renderiza la pagina
    useEffect(() => {
        fetchData();
    }, [page]);

    //Si el estado esta vacio muestro un mensaje de loading
    if (data.length === 0) {
        return <>Loading...</>;
    }

    /*
        - Recorro el array de datos y muestro los nombres de los personajes
        - Creo un link para cada personaje para que me lleve a la pagina de ese personaje para que me muestre su nombre y su imagen
        - Uso legacyBehavior es para que no me de error
        - Creo un input para que me buscar los personajes
        - Creo un boton para que me traiga los personajes que coincidan con el nombre que busco
        - Creo dos botones para que me traiga la pagina anterior o la siguiente
    */
    return (
        <>
            <main className={"formulario"}>
                {data.map((character: any) => (
                        <Link href={`/character/${character.id}`}>
                            <div key={character.id} className={"nombre"}>
                                {character.name}
                            </div>
                        </Link>
                ))}
                <input type="text" className={"barra_busqueda"} placeholder="Nombre a buscar" onChange={(e) => setName(e.target.value)}></input>
                <button className={"boton"} id={"busqueda"} onClick={() => {
                        setPage(1);
                        fetchData();
                }}> Buscar </button>
                <button className={"boton"} id={"anterior"} onClick={() => setPage(page - 1)}>Anterior Pagina</button>
                <button className={"boton"} id={"siguiente"} onClick={() => setPage(page + 1)}>Siguiente Pagina</button>
            </main>
        </>
    );
};

export default Formulario;
