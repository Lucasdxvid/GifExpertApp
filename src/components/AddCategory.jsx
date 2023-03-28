import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  // En vez de poner .Event lo desestructuramos con target
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  //Evitamos que reinicie
  const onSubmit = (event) => {
    event.preventDefault(); 
    if (inputValue.trim().length < 1) return; //trim evita espacio y si es menor a 1 no retorna el vacio
    setInputValue(""); // Al presionar enter nuestro setInputValue se hace un STRING VACIO
    onNewCategory(inputValue.trim());
  };

  return (
    // Al devolver un solo elemento no es necesario utilizar fragments </>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Busca el GIf que necesites"
        value={inputValue} //Esto es conocido como una PROPERTY VALUE
        onChange={onInputChange}
      />
    </form>
  );
};
