function LoginAdmin(){



    return (

    <>
            <div className="container-fluid bg-primary py-3">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-white">Login Administrador </h1>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row justify-content-center mt-5">
                    <div className="col-11 col-sm-8 col-md-8  col-lg-8 shadow p-5 border">
                        
                        <h2>Login Administrador</h2>

                        <div className="form-group">
                            <label htmlFor="">Correo: </label>
                            <input type="text" className="form-control" placeholder="correo" />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="">Contraseña: </label>
                            <input type="password" placeholder="*****" className="form-control"/>
                        </div>

                        <div className="form-group mt-4">
                            <button className="btn btn-primary w-100">
                                Entrar
                            </button>
                        </div>

                    </div>
                </div>
            </div>

    </>

    )


}

export default LoginAdmin