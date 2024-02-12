import React from 'react'

export const Ventana2 = () => {
    return (
        <div>
             <button type="button" className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img className="img-feria_2" src={process.env.PUBLIC_URL + 'imagenes/reinado.png'}></img>
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <img src={process.env.PUBLIC_URL + 'imagenes/tarjeta-reinado.png'} className="modal-body modal-dialog ">
                    </img>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
        </div>
    )
}
