import { useState } from "react"; //Esto es desesctructurar un objeto de react
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Elder Scrolls"]);

  //Añadimos un nuevo value a nuestra categoria
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; // Si ya existe el nombre que no lo incluya
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Arriba llamamos la funcion que recibe como parametro / prop el setCategories */}

      {/* GIF List */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} /> // Primero la key y luego la PROPERTY
      ))}
    </>
  );
};
