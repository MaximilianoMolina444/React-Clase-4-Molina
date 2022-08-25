import React, { useState, useEffect} from "react";
import Button from "react-bootstrap/Button";

export default function Contador() {
    const [contador, setContador] = useState(0);
      useEffect(() => {
        console.log("se inicio el componente");
      }, []);

    //   useEffect(() => {
    //     console.log("click en contador1");
    //   }, [contador]);

    //   useEffect(() => { //se activa ante cualquier cambio, no lleva corchetes al final
    //     console.log("cada vez que se renderiza");
    //   });

    return (
        <div>
            <h1>Contador: {contador}</h1>
      <Button
        variant="danger"
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        +
      </Button>{" "}
      <Button
        variant="warning"
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        -
      </Button>{" "}
      <Button
        variant="primary"
        onClick={() => {
          alert("Productos agregados al carrito")
        }}
      >
        Agregar al carrito
      </Button>{" "}
        </div>
        
    )
    
}
