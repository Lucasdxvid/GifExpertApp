import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  //Manteneremos el estado de las imagenes (category)
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Aqyu decimos que nuestra carga este en true y cuando ya carge todas los GIFS estara en false

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(); //primero recibe el efecto
  }, []); //luego la dependencia o condicion, el [] significa que solo se ejecuta la primera vez que se renderiza el componente

  return {
    images: images,
    isLoading: isLoading,
  };
};
