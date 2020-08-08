import React from "react";
import Jumbo from "../components/jumbo";
import Navbar from "../components/navbar";

const Home = () => {
    return (<>

        <Navbar marca= 'Start Bootstrap' central= "Home" acerca='About' servicio='Services' contacto='Contact'/>
        <Jumbo titulo='A Warm Welcome!' contenido='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, nulla nec fringilla suscipit, tellus eros tristique diam, sit amet tincidunt dui nisi quis enim. Aenean faucibus quam id aliquet ultrices.' boton='Call to action!'/>
        {/* card */}
        {/* footer */}
        
    </>)

}
export default Home;