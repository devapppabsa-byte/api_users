
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'

function Inicio(){

        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);


        useEffect(() => {


            fetch("https://jsonplaceholder.typicode.com/users")
            
            .then((res) =>{

                if(!res.ok) throw new Error("Error en la respuesta");
                return res.json();


            })
            .then((data) => {

                setUsers(data);
                setLoading(false);

            })

            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });


        }, [])

        if(loading) return <p>Cargando . . .</p>
        if(error) return <p>Error: {error}</p>





    return (
        <>
        <div className="container-fluid bg-primary">

            <div className="row py-3">
                <div className="col-auto">
                    <h1 className='text-white'>Inicio</h1>
                </div>
            </div>
            
        </div>
         <Nav/>   


        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-5 text-center">
                    <h2>
                        <i className='fa fa-users mx-2'></i>
                        Usuarios
                    </h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 mt-3">
                    <table className='table border shadow shadow-sm'>
                        <thead className='bg-light'>
                            <tr>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user) => (

                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))
                            }

                            <tr>
                                <td>Nombre completo</td>
                                <td>Numero de telefono</td>
                                <td>resendiz.galleta@gmail.com</td>                                
                            </tr>



                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        </>


    )

}


export default Inicio