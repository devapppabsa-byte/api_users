import { data } from 'react-router-dom';
import Nav from '../components/Nav'
import { useEffect, useState } from 'react';

function Clientes(){

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) =>{

            if(!res.ok) throw Error("Error en la respuesta");
            return res.json();

        })

        .then((data) => {
            setClientes(data);
            setLoading(false);
        })

        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });

    }, [])


    if(loading) return <h1>Cargando</h1>
    if(error) return <h1>Error</h1>

    return (
        <>

        <div className="container-fluid bg-primary">

            <div className="row py-3">
                <div className="col-auto">
                    <h1 className='text-white'>Gestionar Clientes</h1>
                </div>
            </div>
            
        </div>

        <Nav/>



        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="row">
                        <table className='table shadow-sm border'>
                            <thead className='bg-light'>
                                <tr>
                                    <th>Nombre Cliente</th>
                                    <th>Dirección</th>
                                    <th>Linea</th>
                                </tr>
                            </thead>
                            <tbody>

                                {clientes.map((cliente) => (
                                    <tr key={cliente.id}>
                                        <td>{cliente.name}</td>
                                        <td>{cliente.address.street}</td>
                                        <td>{cliente.website}</td>
                                    </tr>
                                ) )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>





        </>

    )


}


export default Clientes