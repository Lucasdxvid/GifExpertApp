import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Pruebas en <GifGridItem.jsx />", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("Debe de hacer match con el snapshot", () => {
    //del render extraemos el container
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con el "Url" indicado y el "Alt" indicado', () => {
    render(<GifGridItem title={title} url={url} />);
    // screen.debug(); //Podemos hacer consoleLog de la img para ver sus propiedades / atributos como el src con: console.log(screen.getByRole("img"))
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
