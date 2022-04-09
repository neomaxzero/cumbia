import { ComponentFactory } from "types/cumbiaTypes";
import { dispatchContentLoaded } from "../utils/tests/dispatch";

const counterComponent =
  (fnInit: any, fnActions: any): ComponentFactory =>
  () => {
    return {
      name: "counter",
      init: fnInit as any,
      actions: fnActions as any,
    };
  };

const html = () => {
  document.body.innerHTML = `
        <div data-component="counter">
        </div>    
    `;
};

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe("cumbia 🎶 ", () => {
  test("Should not initialise if DOM is not ready", () => {
    const cumbia = require("../cumbia").default;

    const init = jest.fn();
    const actions = jest.fn();
    html();
    cumbia({ counter: counterComponent(init, actions) });

    expect(init).not.toHaveBeenCalled();
  });

  describe("Should Initialise", () => {
    test("component after DOMContentLoaded event", () => {
      const cumbia = require("../cumbia").default;
      const init = jest.fn();
      const actions = jest.fn();
      html();
      cumbia({ counter: counterComponent(init, actions) });

      dispatchContentLoaded();

      expect(init).toHaveBeenCalled();
    });
  });

  describe("Messages", () => {
    test("If no components are passed", () => {
      const errorSpy = jest.spyOn(console, "error");

      const cumbia = require("../cumbia").default;

      html();
      cumbia({});

      expect(errorSpy).toHaveBeenCalled();
    });

    test("if component is not found: HTML/Config mismatch", () => {
      const errorSpy = jest.spyOn(console, "warn");

      const cumbia = require("../cumbia").default;
      const init = jest.fn();
      const actions = jest.fn();
      html();
      cumbia({ noCounter: counterComponent(init, actions) });

      dispatchContentLoaded();

      expect(errorSpy).toHaveBeenCalled();
    });
    test("if same component name is declared multiple times", () => {
      const errorSpy = jest.spyOn(console, "warn");

      const cumbia = require("../cumbia").default;
      const init = jest.fn();
      const actions = jest.fn();
      html();

      cumbia({
        counter: counterComponent(init, actions),
      });

      cumbia({
        counter: counterComponent(init, actions),
      });

      dispatchContentLoaded();

      expect(errorSpy).toHaveBeenCalled();
    });
  });
});
