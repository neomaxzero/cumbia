var g="0.0.11";var l="\u{1F3BC} Cumbia:",E=t=>console.error(`${l}`,t),L=t=>console.warn(`${l}`,t),v=t=>console.info(`${l}`,t),a={error:E,warn:L,info:v};var A=t=>{let o="data-value",e={};return t.querySelectorAll(`[${o}]`).forEach(n=>{let r=n.getAttribute(o)||"default_name",i=n.innerHTML;n.tagName==="INPUT"&&(i=n.value),e[r]={el:n,value:i}}),e},p=A;var M=(t,o,e,{prevent:s})=>n=>{let r=o[e];if(s&&n.preventDefault(),!r)return a.warn(`Action -->"${e}"<-- not defined in component.`);let i=p(t);r(i)},c=M;var H=(t,o)=>{let e="data-action";t.querySelectorAll(`[${e}]`).forEach(n=>{let r=n.getAttribute(e)||"default_action_name",i=n.getAttribute("type");if(r==="submit"||i==="submit"){if(t.tagName!=="FORM")return a.error("Trying to handle submit handler outside of form");t.addEventListener("submit",c(t,o,r,{prevent:!0}));return}if(n.tagName==="INPUT"){n.addEventListener("change",c(t,o,r,{prevent:!1}));return}n.addEventListener("click",c(t,o,r,{prevent:!1}))})},y=H;var V=(t,o)=>{let e="data-action-key";t.querySelectorAll(`[${e}]`).forEach(n=>{let r=n.getAttribute(e)||"default_action_name";n.addEventListener("keyup",c(t,o,r,{prevent:!1}))})},b=V;var k=(t,o)=>{let e=p(o);t.init&&t.init(e)},T=k;var u=new Map,w=(t,o)=>{let e=u.get(t)||[];e.push(o),u.set(t,e)},F=(t,o)=>{(u.get(t)||[]).forEach(s=>{s?s(o):console.warn("Topic not found")})},d={on:w,emit:F};var I=(t,o,e)=>{let s=e.trim();if(!o.has(s))return a.warn(`Component -->"${s}"<-- was not found.`);let n=o.get(s);if(!n)return a.error("Undefined component");let r=n({el:t,on:d.on,emit:d.emit});T(r,t),(r==null?void 0:r.actions)&&(y(t,r.actions),b(t,r.actions))},C=I;var f=new Map,m=new Map,h="data-component",$=",",O=t=>{document.querySelectorAll(`[${h}]`).forEach(e=>{if(f.has(e))return;f.set(e,!0),(e.getAttribute(h)||"").split($).forEach(r=>C(e,m,r))}),(t==null?void 0:t.globalInitialisers)&&t.globalInitialisers.length&&t.globalInitialisers.forEach(e=>{let s=[...f.keys()];e(s)})},x=O;var S=`
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
`,P=t=>{let o=document.createElement("style");o.innerHTML=S,document.head.appendChild(o);let e=document.createElement("div");e.classList.add("debugIcon"),e.innerHTML="DEBUG",document.body.appendChild(e),e.addEventListener("click",()=>{t.forEach(s=>{s.classList.add("signElement"),setTimeout(()=>{s.classList.remove("signElement")},3e3)})})},_=P;var N=(t,o)=>{if(!Object.keys(t).length)return a.error("No components passed");Object.keys(t).forEach(e=>{let s=t[e];if(!e)return a.error("Component name not defined, please give a name to your component");m.has(e)&&a.warn(`Name collision detected. ${e} was previously defined`),m.set(e,s)}),document.addEventListener("DOMContentLoaded",function(){a.info(`Initializing ${g}`),x(o)})};var ut=N;export{_ as debug,ut as default};
