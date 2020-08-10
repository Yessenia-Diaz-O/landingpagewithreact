import React from "react";
import Card from "../components/card";
import Jumbo from "../components/jumbo";
import Navbar from "../components/navbar";

const Home = () => {
    const cartas = [
        {
            titulo: "Andrea cartas 1",
            texto: "andrea texto 1",
        },
        {
            titulo: "Andrea cartas 2",
            texto: "andrea texto 2",
        },
        {
            titulo: "Andrea cartas 3",
            texto: "andrea texto 3",
        },
        {
            titulo: "Andrea cartas 4",
            texto: "andrea texto 4",
        },
    ]
    return (<>

        <Navbar marca= 'Start Bootstrap' central= "Home" acerca='About' servicio='Services' contacto='Contact'/>
        <Jumbo titulo='A Warm Welcome!' contenido='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, nulla nec fringilla suscipit, tellus eros tristique diam, sit amet tincidunt dui nisi quis enim. Aenean faucibus quam id aliquet ultrices.' boton='Call to action!'/>
        {/* card */}
        <Card arreglodecartas= {cartas} />
        
        {/* footer */}
        
    </>)

}
export default Home;