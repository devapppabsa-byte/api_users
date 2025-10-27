import Nav from '../components/Nav'

function Evaluaciones(){



    return (

        <>
            <div className="container-fluid">
                <div className="row bg-primary py-4">
                    <div className="col-auto">
                        <h1 className='text-white'>Evaluaciones a Proveedores</h1>
                    </div>
                </div>
            </div>

            <Nav/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center mt-4 ">
                        <h2>
                            <i className='fa fa-clipboard-user'></i>
                            Evaluaciones de los Proveedores
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8 mt-4">
                        <table className='table shadow-sm border'>
                            <thead className='bg-info'>
                                <tr>
                                    <th>Nombre Proveedor</th>
                                    <th>Descripción Proveedor</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Nombre del proveedor</td>
                                    <td>Descripción de los proveedores</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </>

    )


}


export default Evaluaciones