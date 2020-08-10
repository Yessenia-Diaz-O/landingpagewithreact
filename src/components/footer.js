import React from "react";

const Footer = (props) => {
    return (<>

        <div className="container-fluid bg-dark text-white">
            <div className="row">
                <div className="col-12 text-center pt-4 pb-2">
                    {/* <p>Footer, este no, para hacerlo dinamico</p> */}
                    <p>{props.piedepagina}</p>

                </div>

            </div>
        </div>

    </>)

}
export default Footer;