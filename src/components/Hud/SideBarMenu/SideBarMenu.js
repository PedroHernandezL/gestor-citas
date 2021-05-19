import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

import './SideBarMenu.css'

const SideBarMenu = props =>{
    let membresia = "Gratis";//aqui se asignara la membresia desde el back
    function seleccionMenu(){
        //Obtenemos todos los items del menu
        let opcionesMenu = document.getElementsByClassName('sideBarItem');

        //Recorremos todos los items para agregar el evento para el "click"
        for (let i = 0; i < opcionesMenu.length; i++){
            opcionesMenu[i].addEventListener('click', activar); //Se coloca el evento en todos los items
        }

        //Funcion para agregar clase 'activo' al item seleccionado y removerla del item anteriormente activo
        function activar(){
            //Se toman todos los items. Ahora para quitar la clase 'activo'
            let opcionesMenu = document.getElementsByClassName('sideBarItem'); 

            //En este recorrido de todos los items buscamos el que este con clase 'activo'
            for (let i = 0; i < opcionesMenu.length; i++){
                if(opcionesMenu[i].classList.contains('activo')) //Con este if reconocemos el item activo
                    opcionesMenu[i].classList.remove('activo'); //Removemos la clase 'activo'
            }

            //Aqui se asigna la nueva clase al item (menu) seleccionado
            this.classList.add('activo');
        }
    }

    window.onload = function() { //para que cargue las funciones aunque se recargue la pagina
        seleccionMenu();
      };

    return(
        <div id ="SideBarMenu">
            <h5 className = "NombreApp" >Citas </h5>
            
            <hr className="lineaTop" />

            <h5 className = "version">{membresia}</h5>
            
            <ListGroup variant="flush">
                <ListGroup.Item className = "sideBarItem activo" action> Citas </ListGroup.Item>
                <ListGroup.Item className = "sideBarItem" action> Cuenta </ListGroup.Item>
                <ListGroup.Item className = "sideBarItem" action> Configuración </ListGroup.Item>
                <ListGroup.Item className = "sideBarItem" action> Ayuda </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
export default SideBarMenu;