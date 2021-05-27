import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifExpertApp } from "./GifExpertApp";

describe("Pruebas en el componente <GifExpertApp />", () => {
  test("Debe mostrar le componente correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar una lista de categorias", () => {
    const categories = ["One punch man", "Naruto shippuden"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
