
function LoginUsuario(){

    return (
    
        <>
            <div className="container-fluid">
                <div className="row bg-primary p-2">
                    <div className="col-12">
                        <h1 className="text-white">Login Usuario</h1>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row mt-2 justify-content-center">
                    
                    <div className="col-11 col-sm-8 col-md-7 col-lg-5 p-5 shadow-sm border">
                        <h4>Login</h4>

                            <div className="form-group" data-mdb-input-init>
                                <label htmlFor="nombre">Nombre: </label>
                                <input type="text" className="form-control form-control" id="nombre" placeholder="Nombre" />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" placeholder="********"  className="form-control form-control" />
                            </div>

                            <div className="form-group mt-5 text-center">
                                <button className="btn btn-primary py-3 w-100">
                                    Entrar
                                </button>
                            </div>

                    </div>
                </div>
            </div>
        </>




    )




}


export default LoginUsuario

