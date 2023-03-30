import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    //el .input es el elemento, el segundo argumento es el evento a recibir
    fireEvent.input(input, { target: { value: "Argonian" } });

    expect(input.value).toBe("Argonian");
    // screen.debug();
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Warframe";
    const onNewCategory = jest.fn(); //una jest function es un mock
    render(<AddCategory onNewCategory={onNewCategory} />); // mandamos como referencia esa funcion simulada

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled(); // Esperamos que la funcion HAYA SIDO LLAMADA
    expect(onNewCategory).toHaveBeenCalledTimes(1); // cuantas veces fue llamado
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); // que haya sido llamada con x valor
    screen.debug();
  });

  test("No debe de llamar el onNewCategory si el input está vacío ", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
