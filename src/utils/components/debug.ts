const globalCSS = `
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

const debug = (components: Array<HTMLElement>) => {  
  const css = document.createElement("style");
  css.innerHTML = globalCSS;
  document.head.appendChild(css);

  const debugIcon = document.createElement("div");
  debugIcon.classList.add("debugIcon");

  debugIcon.innerHTML = 'DEBUG';
  document.body.appendChild(debugIcon);

  debugIcon.addEventListener("click", () => {
    components.forEach((comp) => {
        comp.classList.add('signElement');

      setTimeout(() => {
        comp.classList.remove('signElement');
      }, 3000);
    });
  });
};

export default debug;
