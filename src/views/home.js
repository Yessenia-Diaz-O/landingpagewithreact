import React from "react";
import Card from "../components/card";



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

        {/* navbar */}
        {/* jumbo */}
        {/* card */}
        <Card arreglodecartas= {cartas} />
        
        {/* footer */}
        
    </>)

}
export default Home;