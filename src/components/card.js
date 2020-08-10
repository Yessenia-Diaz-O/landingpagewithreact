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
                            <div key={i} className="col-md-3">
                                {/* colocar key en el primer elemento */}
                                <div className="card">
                                    <img className="card-img-top" src={c.imagen} alt="Card image cap" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{c.titulo}</h5>
                                        <p className="card-text">{c.texto}</p>
                                        <button type="button" class="btn btn-primary">Find out more!</button>
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