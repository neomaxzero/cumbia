// src/_version.ts
var version = "0.0.11";

// src/utils/message.ts
var logPrefix = "\u{1F3BC} Cumbia:";
var error = (msg) => console.error(`${logPrefix}`, msg);
var warn = (msg) => console.warn(`${logPrefix}`, msg);
var info = (msg) => console.info(`${logPrefix}`, msg);
var message_default = { error, warn, info };

// src/actionParser/utils/parseValues.ts
var parseValues = (element) => {
  const dataValueAttr = "data-value";
  const bindedValues = {};
  const values = element.querySelectorAll(`[${dataValueAttr}]`);
  values.forEach((valueElement) => {
    const nameDefined = valueElement.getAttribute(dataValueAttr) || "default_name";
    let value = valueElement.innerHTML;
    if (valueElement.tagName === "INPUT") {
      value = valueElement.value;
    }
    bindedValues[nameDefined] = { el: valueElement, value };
  });
  return bindedValues;
};
var parseValues_default = parseValues;

// src/actionParser/utils/caller.ts
var callFnWithValues = (element, fnActions, actionName, { prevent }) => (e) => {
  const fnTobind = fnActions[actionName];
  if (prevent) {
    e.preventDefault();
  }
  if (!fnTobind) {
    return message_default.warn(`Action -->"${actionName}"<-- not defined in component.`);
  }
  const values = parseValues_default(element);
  fnTobind(values);
};
var caller_default = callFnWithValues;

// src/actionParser/data-action.ts
var parseActions = (element, fnActions) => {
  const dataActionAttr = "data-action";
  const actions = element.querySelectorAll(`[${dataActionAttr}]`);
  actions.forEach((actionElement) => {
    const actionName = actionElement.getAttribute(dataActionAttr) || "default_action_name";
    const actionType = actionElement.getAttribute("type");
    if (actionName === "submit" || actionType === "submit") {
      if (element.tagName !== "FORM") {
        return message_default.error(`Trying to handle submit handler in an element different than a FORM: ${element}`);
      }
      element.addEventListener("submit", caller_default(element, fnActions, actionName, { prevent: true }));
      return;
    }
    if (actionElement.tagName === "INPUT") {
      actionElement.addEventListener("change", caller_default(element, fnActions, actionName, { prevent: false }));
      return;
    }
    actionElement.addEventListener("click", caller_default(element, fnActions, actionName, { prevent: false }));
  });
};
var data_action_default = parseActions;

// src/actionParser/data-key.ts
var parseKey = (element, fnActions) => {
  const dataActionAttr = "data-action-key";
  const actions = element.querySelectorAll(`[${dataActionAttr}]`);
  actions.forEach((actionElement) => {
    const actionName = actionElement.getAttribute(dataActionAttr) || "default_action_name";
    actionElement.addEventListener("keyup", caller_default(element, fnActions, actionName, { prevent: false }));
  });
};
var data_key_default = parseKey;

// src/actionParser/lifecycle.ts
var parseLifecycle = (instance, element) => {
  const values = parseValues_default(element);
  if (instance.init) {
    instance.init(values);
  }
};
var lifecycle_default = parseLifecycle;

// src/core/pubsub.ts
var subscriptions = new Map();
var on = (topic, fn) => {
  const currentSubscriptions = subscriptions.get(topic) || [];
  currentSubscriptions.push(fn);
  subscriptions.set(topic, currentSubscriptions);
};
var emit = (topic, message) => {
  const fns = subscriptions.get(topic) || [];
  fns.forEach((fn) => {
    if (fn) {
      fn(message);
    } else {
      console.warn("Topic not found");
    }
  });
};
var pubsub_default = {
  on,
  emit
};

// src/core/componentExecutor.ts
var componentExecutor = (element, componentFactory2, name) => {
  const cleanName = name.trim();
  if (!componentFactory2.has(cleanName)) {
    return message_default.warn(`Component -->"${cleanName}"<-- was not found.`);
  }
  const fnComponent = componentFactory2.get(cleanName);
  if (!fnComponent) {
    return message_default.error("Undefined component");
  }
  const instanceComponent = fnComponent({ el: element, on: pubsub_default.on, emit: pubsub_default.emit });
  lifecycle_default(instanceComponent, element);
  if (instanceComponent == null ? void 0 : instanceComponent.actions) {
    data_action_default(element, instanceComponent.actions);
    data_key_default(element, instanceComponent.actions);
  }
};
var componentExecutor_default = componentExecutor;

// src/core/createApp.ts
var initialisedComponent = new Map();
var componentFactory = new Map();
var dataComponentAttr = "data-component";
var componentSeparator = ",";
var createApp = (options) => {
  const htmlComponents = document.querySelectorAll(`[${dataComponentAttr}]`);
  htmlComponents.forEach((element) => {
    if (initialisedComponent.has(element)) {
      return;
    } else {
      initialisedComponent.set(element, true);
    }
    const name = element.getAttribute(dataComponentAttr) || "";
    const allComponents = name.split(componentSeparator);
    allComponents.forEach((uniqueComponent) => componentExecutor_default(element, componentFactory, uniqueComponent));
  });
  if ((options == null ? void 0 : options.globalInitialisers) && options.globalInitialisers.length) {
    options.globalInitialisers.forEach((globalFn) => {
      const elements = [...initialisedComponent.keys()];
      globalFn(elements);
    });
  }
};
var createApp_default = createApp;

// src/utils/components/debug.ts
var globalCSS = `
    * {
        transition: outline 1s;
    }
        .debugIcon {
            position: fixed;
            top: 10px;
            right: 10px;
            height: 25px;
            cursor: pointer;
            background-image: url("https://github.com/neomaxzero/cumbia/blob/master/assets/logomin.png?raw=true");
            background-size: contain;
            background-repeat: no-repeat;
            padding-left: 25px;
            padding-top: 2px;
            color: #888;
        }

        .signElement {
            outline: 3px solid deeppink;
        }
`;
var debug = (components) => {
  const css = document.createElement("style");
  css.innerHTML = globalCSS;
  document.head.appendChild(css);
  const debugIcon = document.createElement("div");
  debugIcon.classList.add("debugIcon");
  debugIcon.innerHTML = "DEBUG";
  document.body.appendChild(debugIcon);
  debugIcon.addEventListener("click", () => {
    components.forEach((comp) => {
      comp.classList.add("signElement");
      setTimeout(() => {
        comp.classList.remove("signElement");
      }, 3e3);
    });
  });
};
var debug_default = debug;

// src/cumbia.ts
var addComponents = (components, options) => {
  if (!Object.keys(components).length) {
    return message_default.error("No components passed");
  }
  Object.keys(components).forEach((componentName) => {
    const component = components[componentName];
    if (!componentName) {
      return message_default.error("Component name not defined, please give a name to your component");
    }
    if (componentFactory.has(componentName)) {
      message_default.warn(`Name collision detected. ${componentName} was previously defined`);
    }
    componentFactory.set(componentName, component);
  });
  document.addEventListener("DOMContentLoaded", function() {
    message_default.info(`Initializing ${version}`);
    message_default.info(`daleeeeeeeeeeeeeeeeeee
    `);
    createApp_default(options);
  });
};
var cumbia_default = addComponents;
export {
  debug_default as debug,
  cumbia_default as default
};
//# sourceMappingURL=cumbia.js.map
