
import { useEffect, useState } from 'react';
import Nav from '../components/Nav'

function Encuestas(){

    const [count, setCount] = useState(0);

    const [encuestas, setEncuesta] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] =  useState(null);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")

        .then((res) => {

            if(!res.ok) throw Error("Error en la respuesta");
            return res.json();

        })

        .then((data) => {
            
            setEncuesta(data)
            setLoading(false)

        })

        .catch((err) =>{

            setError(err.message);
            setLoading(false);

        })

    }, [])

    if(loading) return <h1>Cargando</h1>
    if(error) return <h1>Error</h1>




    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="row p-3">
                    <div className="col-auto">
                        <h1 className='text-white'>
                            Gestionar Encuestas
                        </h1>
                    </div>
                </div>
            </div>

            <Nav/>

            <div className="container-fluid">
                <div className="row  mt-4">
                    <div className="col-12 text-center">
                        <h2>
                            <i className='fa fa-clipboard'></i>
                            Encuestas
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-11 col-md-10 col-lg-8">
                        <table className='table border shadow-sm'>
                            <thead className='bg-primary text-white fw-bold'>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Observaciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    encuestas.map((encuesta) => (
                                        <tr key={encuesta.id}>
                                            <td>{encuesta.name}</td>
                                            <td>{encuesta.address.street}</td>
                                            <td>{encuesta.company.catchPhrase}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>


    )

    
}


export default Encuestas