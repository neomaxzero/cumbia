var y="0.0.8";var l="\u{1F3BC} Cumbia:",E=e=>console.error(`${l}`,e),A=e=>console.warn(`${l}`,e),L=e=>console.info(`${l}`,e),a={error:E,warn:A,info:L};var v=e=>{let o="data-value",t={};return e.querySelectorAll(`[${o}]`).forEach(n=>{let r=n.getAttribute(o)||"default_name",i=n.innerHTML;n.tagName==="INPUT"&&(i=n.value),t[r]={el:n,value:i}}),t},p=v;var M=(e,o,t,{prevent:s})=>n=>{let r=o[t];if(s&&n.preventDefault(),!r)return a.warn(`Action -->"${t}"<-- not defined in component.`);let i=p(e);r(i)},c=M;var H=(e,o)=>{let t="data-action";e.querySelectorAll(`[${t}]`).forEach(n=>{let r=n.getAttribute(t)||"default_action_name",i=n.getAttribute("type");if(r==="submit"||i==="submit"){if(e.tagName!=="FORM")return a.error("Trying to handle submit handler outside of form");e.addEventListener("submit",c(e,o,r,{prevent:!0}));return}if(n.tagName==="INPUT"){n.addEventListener("change",c(e,o,r,{prevent:!1}));return}n.addEventListener("click",c(e,o,r,{prevent:!1}))})},g=H;var V=(e,o)=>{let t="data-action-key";e.querySelectorAll(`[${t}]`).forEach(n=>{let r=n.getAttribute(t)||"default_action_name";n.addEventListener("keyup",c(e,o,r,{prevent:!1}))})},b=V;var w=(e,o)=>{let t=p(o);e.init&&e.init(t)},T=w;var u=new Map,F=(e,o)=>{let t=u.get(e)||[];t.push(o),u.set(e,t)},I=(e,o)=>{a.info({topic:e,message:o}),(u.get(e)||[]).forEach(s=>{s?s(o):console.warn("Topic not found")})},d={on:F,emit:I};var $=(e,o,t)=>{let s=t.trim();if(!o.has(s))return a.warn(`Component -->"${s}"<-- was not found.`);let n=o.get(s);if(!n)return a.error("Undefined component");let r=n({el:e,on:d.on,emit:d.emit});T(r,e),(r==null?void 0:r.actions)&&(g(e,r.actions),b(e,r.actions))},C=$;var f=new Map,m=new Map,h="data-component",k=",",N=e=>{document.querySelectorAll(`[${h}]`).forEach(t=>{if(f.has(t))return;f.set(t,!0),(t.getAttribute(h)||"").split(k).forEach(r=>C(t,m,r))}),(e==null?void 0:e.globalInitialisers)&&e.globalInitialisers.length&&e.globalInitialisers.forEach(t=>{let s=[...f.keys()];t(s)})},x=N;var S=`
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
`,O=e=>{let o=document.createElement("style");o.innerHTML=S,document.head.appendChild(o);let t=document.createElement("div");t.classList.add("debugIcon"),t.innerHTML="DEBUG",document.body.appendChild(t),t.addEventListener("click",()=>{e.forEach(s=>{s.classList.add("signElement"),setTimeout(()=>{s.classList.remove("signElement")},3e3)})})},P=O;var _=(e,o)=>{e.length||a.error("No components passed"),e.forEach(t=>{if(!t.name)return a.error("Component name not defined, please give a name to your component");m.has(t.name)&&a.warn(`Name collision detected. ${t.name} was previously defined`),m.set(t.name,t)}),document.addEventListener("DOMContentLoaded",function(){a.info(`Initializing ${y}`),x(o)})};var de=_;export{P as debug,de as default};
