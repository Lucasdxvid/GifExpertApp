import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrids />", () => {
  const category = "Warframe";

  test('Debe de mostrar el "loading" inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs", () => {
    const gifs = [
      // el useFetch es nuestro mock / simulacion
      {
        id: "ABC",
        title: "Warframe",
        url: "https://localhost./warframe.jpg",
      },
      {
        id: "XBC",
        title: "Inaros",
        url: "https://localhost./inaros.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
