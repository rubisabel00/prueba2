import React from 'react'

const Tercercontenedor = () => {
    return (



        <div className="bordesito">
            <div className="container d-flex">

                <button type="button" className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img className="img-feria_2" src={process.env.PUBLIC_URL + 'imagenes/desfile _de_bienvenidad.png'}></img>
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <img src={process.env.PUBLIC_URL + 'imagenes/tarjeta-desfile.png'} className="modal-body modal-dialog antonio">
                    </img>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <button type="button" className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img className="img-feria_2" src={process.env.PUBLIC_URL + 'imagenes/reinado.png'}></img>
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <img src={process.env.PUBLIC_URL + 'imagenes/tarjeta-reinado.png'} className="modal-body modal-dialog antonio">
                    </img>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <button type="button" className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img className="img-feria_2" src={process.env.PUBLIC_URL + 'imagenes/temporada.png'}></img>
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <img src={process.env.PUBLIC_URL + 'imagenes/feria_a.png'} className="modal-body modal-dialog antonio">
                    </img>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <button type="button" className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img className="img-feria_2" src={process.env.PUBLIC_URL + 'imagenes/feria_a.png'}></img>
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <img src={process.env.PUBLIC_URL + 'imagenes/tarjeta-desfile.png'} className="modal-body modal-dialog antonio">
                    </img>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            </div>
        </div>
    )
}






export default Tercercontenedor
