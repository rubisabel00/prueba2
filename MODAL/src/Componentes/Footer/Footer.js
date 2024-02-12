import React from 'react'
 
const Footer = () => {
    return (
        <div className= "contenedor">
            <footer className="contenedor">           
                <p>&copy; {(new Date().getFullYear())} Fercom, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
            </footer>
        </div>
    )
}
 
export default Footer
