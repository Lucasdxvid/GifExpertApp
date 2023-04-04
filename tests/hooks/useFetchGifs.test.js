import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de regresar el estado inicial", () => {
    //Nuestro estado inicial seria las images como array vacio [] y isLoading True
    //Desestructuramos el renderHook
    const { result } = renderHook(() => useFetchGifs("Elder Scrolls"));
    //Si hacemos un console.log del result vemos que el retorna los esatados images y isloading por lo que desestructuramos
    const { images, isLoading } = result.current; //saber el valor actual con current

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y el isLoading en false", async () => {
    //Aqui hay que esperar que cuando cargen las imagenes evaluarlas, para eso usamos waitFor
    // waitFor esperamos a que algo suceda
    const { result } = renderHook(() => useFetchGifs("Elder Scrolls"));
    //Con esto decimos que espera a que el result.current.images sea mayor a 0
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
