import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe retornar el estado inicial ", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs());

    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe retornar un arreglo de imagenes y el loading en false ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One punch man")
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    console.log(data);

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
