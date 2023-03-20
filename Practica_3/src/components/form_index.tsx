import { useEffect, useState } from "react";
import Link from "next/link";

const Form_Index = () => {
    const [data, setData] = useState<any[]>([]); //Creo un estado para guardar los datos de la API
    const [id] = useState<number>(0); //Creo un estado para guardar el id de la casa

    const fetchData = async () => {
        try {
            const houses = await fetch(`https://wizard-world-api.herokuapp.com/Houses/?id=${id}`); //Hago la petición a la API
            const json = await houses.json(); //Guardo los datos en formato JSON
            setData(json); //Guardo los datos en el estado
        } catch (e) {
            setData([{ name: "Error bajandome los personajes" }]);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    //Si no hay datos, muestro el símbolo de loading
    if (data?.length === 0) {
        return (
            <>
                <div id="wifi-loader">
                    <svg className="circle-outer" viewBox="0 0 86 86">
                        <circle className="back" cx="43" cy="43" r="40"></circle>
                        <circle className="front" cx="43" cy="43" r="40"></circle>
                        <circle className="new" cx="43" cy="43" r="40"></circle>
                    </svg>
                    <svg className="circle-middle" viewBox="0 0 60 60">
                        <circle className="back" cx="30" cy="30" r="27"></circle>
                        <circle className="front" cx="30" cy="30" r="27"></circle>
                    </svg>
                    <svg className="circle-inner" viewBox="0 0 34 34">
                        <circle className="back" cx="17" cy="17" r="14"></circle>
                        <circle className="front" cx="17" cy="17" r="14"></circle>
                    </svg>
                    <div className="text" data-text="Searching"></div>
                </div>
            </>
        );
    }

    return (
        <>
            <title>Practica 3 - Houses</title>
            <body>
                {/* Muestro los datos de la casa */}
                <div className={"formulario_index"}>
                    {data && data.map((house: any) => (
                        <div className={"casa"}>
                            <h1 className={"nombre"}>{house.name}</h1>
                            <div className={"caracteristicas"}>
                                Founder: {house.founder} <br/>
                                Common Room: {house.commonRoom} <br/>
                                Heads of House:
                                <ul>
                                    {house.heads && house.heads.map((head: any) => (
                                        <li>{head.firstName} {head.lastName}</li>
                                    ))}
                                </ul>
                                Traits:
                                <ul>
                                    {house.traits && house.traits.map((trait: any) => (
                                        <li>{trait.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Botón para ir a la página wizards */}
                <Link legacyBehavior href={`/wizard`}>
                    <button className={"boton"}>WIZARDS</button>
                </Link>
            </body>
        </>
    );
};

export default Form_Index;
