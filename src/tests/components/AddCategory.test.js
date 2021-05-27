import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el componente <AddCategory />", () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar la caja de texto", () => {
    const value = "Hola Tulio";
    const input = wrapper.find("input");

    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Liliana";

    const input = wrapper.find("input");

    input.simulate("change", { target: { value } });

    const form = wrapper.find("form");

    form.simulate("submit", { preventDefault: () => {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.props().value).toBe("");
  });
});
