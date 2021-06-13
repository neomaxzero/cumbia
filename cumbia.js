(() => {
  // src/index.js
  var componentFactory = new Map();
  var dataComponentAttr = "data-component";
  var createApp = () => {
    const htmlComponents = document.querySelectorAll(`[${dataComponentAttr}]`);
    htmlComponents.forEach((element) => {
      const name = element.getAttribute(dataComponentAttr);
      if (!componentFactory.has(name)) {
        return console.warn("Component", name, " not found.");
      }
      const fn = componentFactory.get(name);
      fn(element);
    });
  };
  var src_default = createApp;
})();
//# sourceMappingURL=cumbia.js.map
