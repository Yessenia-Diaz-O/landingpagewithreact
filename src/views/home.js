import React from "react";
import Card from "../components/card";
import Jumbo from "../components/jumbo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
    const cartas = [
        {
            titulo: "Carta 1",
            texto: "Texto 1",
            imagen: "../img/1.jpeg",
        },
        {
            titulo: "Carta 2",
            texto: "Texto 2",
            imagen: "../img/4.png",
        },
        {
            titulo: "Carta 3",
            texto: "Texto 3",
            imagen: "../img/1.jpeg",
        },
        {
            titulo: "Carta 4",
            texto: "Texto 4",
            imagen: "../img/4.png",
        },
    ]
    return (<>

        <Navbar marca= 'Start Bootstrap' central= "Home" acerca='About' servicio='Services' contacto='Contact'/>
        <Jumbo titulo='A Warm Welcome!' contenido='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, nulla nec fringilla suscipit, tellus eros tristique diam, sit amet tincidunt dui nisi quis enim. Aenean faucibus quam id aliquet ultrices.' boton='Call to action!'/>
        {/* card */}
        <Card arreglodecartas= {cartas} />
        
        {/* footer */}
        <Footer piedepagina={"Footer"}/>
        {/* primera letra mayuscula del componente, se importa automatico arriba */}
        
    </>)

}
export default Home;