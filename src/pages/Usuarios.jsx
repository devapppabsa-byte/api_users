import Nav from '../components/Nav'
import { useEffect, useState } from 'react';


function Usuarios(){

    const [users, setUsers] = useState([]); //estado para los datos
    const [loading, setLoading] = useState(true); //Estado de la carga
    const [error, setError] = useState(null); //estado del error


    useEffect(() => {

        //se llama a la API
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {

            if(!res.ok) throw new Error("Error en la respuesta");
            return res.json();

        })

        .then((data) =>{

            setUsers(data);
            setLoading(false);

        })

        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });


    }, []) //Los corchetes significan que solo se ejecuta una vez


    if(loading) return <p>Cargando ...</p>;
    if(error) return <p>Error: {error}</p>


    return(
        <>

            <div className="container-fluid bg-primary">
                <div className="row py-3">
                    <div className="col-auto">
                        <h1 className="text-white">Usuarios </h1>
                    </div>
                </div>
            </div>

            <Nav/>

            <div className="container-fluid">
                <div className="row mt-4 justify-content-center">
                    <div className="col-11 table-responsive">
                        <table className="table align-middle mb-0 bg-white shadow shadow-sm border">
                        <thead className="bg-light">
                            <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Dirección</th>
                            <th>Telefono</th>
                            <th>Sitio Web</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map((user) => (
                                <tr key={user.id}>

                                    <td key={user.id}>
                                        <div className="d-flex align-items-center">
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1"  >
                                                    {user.name}
                                                </p>
                                                <p className="text-muted mb-0">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <p className="fw-normal mb-1">{user.email}</p>
                                    </td>

                                    <td>
                                        <p className='fw-bold'>{user.address.street}</p>
                                    </td>

                                    <td>
                                        <p className='fw-bold'> {user.phone} </p>
                                    </td>

                                    <td>
                                        <p className='fw-bold'> {user.website} </p>
                                    </td>

                                </tr>

                            ))}

                        </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )

}


export default Usuarios