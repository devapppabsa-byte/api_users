import {Link} from 'react-router-dom'

function Nav(){

    return (

        <div className="container-fluid p-2" style={{backgroundColor:"#5476ac"}}>
            <div className="row">

                <div className="col-auto">
                    <Link to='/' className='fw-bold text-white'>
                        <i className='fa fa-home mx-2'></i>
                        Inicio
                    </Link>
                </div>

                <div className='col-auto'>
                    <Link to='/departamentos' className='fw-bold text-white'>
                        <i className="fa-solid fa-briefcase mx-2"></i>
                        Departamentos
                    </Link>
                </div>

                <div className='col-auto'>
                    <Link to="/clientes" className='fw-bold text-white'>
                        <i className='fa fa-solid fa-users mx-2'></i>
                        Clientes
                    </Link>
                </div>

                <div className="col-auto">
                    <Link to='/usuarios' className='fw-bold text-white'>
                        <i className='fa fa-users-viewfinder mx-2'></i>
                          Usuarios
                    </Link>
                </div>
                
                <div className="col-auto">
                    <Link to='/encuestas' className='fw-bold text-white'>
                        <i className='fa fa-clipboard mx-2'> </i>
                        Encuestas
                    </Link>
                </div>

                <div className="col-auto">
                    <Link to='/evaluaciones' className='fw-bold text-white'>
                        <i className='fa fa-clipboard-user'></i>
                        Evaluaciones
                    </Link>
                </div>


            </div>
        </div>
    )
    

}


export default Nav