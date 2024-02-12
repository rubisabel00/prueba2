 import React from 'react'

const Primercontenedor = () => {
    return (
        <div className="  border border-primary"> 
        <div className="container row d-flex justify-content-center mx-auto my-auto">
            <div className="txt-feria justify-content-center col-8 ">
                <h1>Feria de manizales</h1>
                <p>La Feria de Manizales es la primera y la feria más grande, importante y emblemática de la ciudad colombiana de Manizales y del continente americano. Alrededor de la Fiesta Taurina que atrae grandes figuras nacionales e internacionales con espectáculos propios de la auténtica Fiesta Brava, la Feria de Manizales reconocida por su temporada taurina, sus eventos, conciertos, exposiciones y por el Reinado Internacional del Café, desfiles, espectáculos musicales del folclor nacional entre muchas otras cosas que ofrece esta épica feria en su extensa programación llena de grandes eventos. Cabe resaltar que esta celebración anual es considerada la mejor, la única y la gran primera Feria de todo América. </p>
            </div>
            <div className=" col-4 cont-img-feria rounded mx-auto d-block">
                <img className="img-feria" src={process.env.PUBLIC_URL + 'imagenes/logo_feria.png'}/>
            </div>
        
        </div>
        </div>
    )
}

export default Primercontenedor
