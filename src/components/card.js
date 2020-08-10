import React from "react";

const Card = (props) => {
    console.log(props)
    return (<>


        <div className="container">
            <div className="row">
                {
                    props.arreglodecartas.map((c, i) => {
                        console.log(c)
                        return (
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src="..." alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{c.titulo}</h5>
                                        <p className="card-text">{c.texto}</p>
                                        <a href="#" classNameName="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>




    </>)

}
export default Card;