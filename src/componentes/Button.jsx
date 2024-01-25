import React from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../Firebase'; // Asegúrate de importar db desde el archivo correcto



const Button = ()=>{
    const obtenerDocumentos = async () => {
        console.log("entre")
        try {
          const querySnapshot = await getDocs(collection(db, "menu"));
      
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
          });
          console.log("intente")
        } catch (error) {
          console.error("Error al obtener documentos:", error);
        }
        console.log("sali")
      };
    return(
        <button onClick={obtenerDocumentos}>hola</button>
    )
}
export default Button