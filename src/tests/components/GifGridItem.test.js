import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en el componente <GifGridItem />", () => {
  const title = "Este es el titulo";
  const url = "http://localhost:4000/algo.png";

  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un parrafo con el titulo", () => {
    const parrafo = wrapper.find("p");

    expect(parrafo.text().trim()).toBe(title);
  });

  test("Debe tener la imagen igual a url y alt de los props", () => {
    const imagen = wrapper.find("img");

    expect(imagen.props().src).toBe(url);
    expect(imagen.props().alt).toBe(title);
  });

  test("Debe tener animate__fadeIn", () => {
    const imagen = wrapper.find("div");

    expect(imagen.hasClass("animate__fadeIn")).toBe(true);
  });
});
