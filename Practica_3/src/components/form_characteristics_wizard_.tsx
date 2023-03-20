import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const Form_Characteristics_Wizard = () => {
    const [wizard, setWizard] = useState<any>({});
    //const [error, setError] = useState(false);
    const router = useRouter(); //Creo un router para poder acceder a la url

    const fetchData = async () => {
        try {
            const wizardId = router.query.id; //Accedo a la url y cojo el id
            const wizards = await fetch(`https://wizard-world-api.herokuapp.com/Wizards/${wizardId}`); //Hago la peticion a la api
            const json = await wizards.json(); //Parseo la respuesta
            setWizard(json); //Guardo el mago en el estado
        } catch (e) {
            setWizard({ name: "Error bajandome el elixir" });
            //setError(true);
        }
    };

    useEffect(() => {
        /*
            const timeoutId = setTimeout(() => {
                if (!wizard.id) {
                    setError(true);
                }
            }, 5000);
        */
        fetchData();
        //return () => clearTimeout(timeoutId);
    }, [router.query.id]);

    /*
        if (error) {
            return (
              <div>
                <h2>Error bajándome el elixir</h2>
                <Link legacyBehavior href="/">
                  <button>Ir a la página de inicio</button>
                </Link>
              </div>
            );
        }
     */

    if (!wizard.id) {
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
            <title>Practica 3 - {wizard.firstName} {wizard.lastName}</title>
            <body>
                <div className={"formulario_characteristics_wizards"}>
                    <div className={"wizard"}>
                        <h1>{wizard.firstName} {wizard.lastName}</h1>
                        Elixiris
                        <ul>
                            {wizard.elixirs && wizard.elixirs.map((elixir: any) => (
                                <Link className={"elixiris"} href={`/elixir/${elixir.id}`}>
                                    <li>{elixir.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link legacyBehavior href={`/`}>
                    <button className={"boton"}>HOUSES</button>
                </Link>
                <Link legacyBehavior href={`/wizard`}>
                    <button className={"boton"}>WIZARDS</button>
                </Link>
            </body>
        </>
    );
};

export default Form_Characteristics_Wizard;