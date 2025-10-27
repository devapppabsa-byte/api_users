import Nav from '../components/Nav'
import {useState, useEffect} from 'react'

function Departamentos(){

    const [departamentos, setDepartamento] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {

            if(!res.ok) throw Error("Error en la respuesta");
            return  res.json();

        } )

        .then((data) => {

            setDepartamento(data)
            setLoading(false)
        
        })
        .catch((err) => {

            setError(err.message);
            setLoading(false);

        })


    }, [])


    if(loading) return <h1>Cargando</h1>
    if(error) return <h>Error</h>



    return (

        <>
        <div className="container-fluid bg-primary">
            <div className="row p-3">

                <div className="col-auto">
                    <h1 className="text-white">
                        Gestión de Departamentos
                    </h1>
                </div>

            </div>
        </div>

        <Nav/>


        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-8 mt-4">
                    <table className='table shadow-sm border'>
                        <thead className='bg-info'>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Dirección</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                            departamentos.map((departamento)=>(
                                <tr key={departamentos.id}>
                                    <td>{departamento.name}</td>
                                    <td>{departamento.address.street}</td>
                                    <td>{departamento.address.city}</td>
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


export default Departamentos