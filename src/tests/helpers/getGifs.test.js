import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs fetch", () => {
  test("Debe traer 10 elementos", async (done) => {
    const response = await getGifs("Naruto");

    expect(response.length).toBe(10);

    done();
  });

  test("Debe traer un array vacio", async (done) => {
    const response = await getGifs("");

    expect(response).toEqual([]);

    done();
  });
});
