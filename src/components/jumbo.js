import React from 'react';

const Jumbo = (props) => {
    console.log(props)
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron">
                        <h1 className="display-4">{props.titulo}</h1>
                        <p className="lead">{props.contenido}</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">{props.boton}</a>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Jumbo;