var g="0.0.9";var l="\u{1F3BC} Cumbia:",E=e=>console.error(`${l}`,e),L=e=>console.warn(`${l}`,e),v=e=>console.info(`${l}`,e),a={error:E,warn:L,info:v};var A=e=>{let o="data-value",t={};return e.querySelectorAll(`[${o}]`).forEach(r=>{let s=r.getAttribute(o)||"default_name",i=r.innerHTML;r.tagName==="INPUT"&&(i=r.value),t[s]={el:r,value:i}}),t},p=A;var M=(e,o,t,{prevent:n})=>r=>{let s=o[t];if(n&&r.preventDefault(),!s)return a.warn(`Action -->"${t}"<-- not defined in component.`);let i=p(e);s(i)},c=M;var H=(e,o)=>{let t="data-action";e.querySelectorAll(`[${t}]`).forEach(r=>{let s=r.getAttribute(t)||"default_action_name",i=r.getAttribute("type");if(s==="submit"||i==="submit"){if(e.tagName!=="FORM")return a.error("Trying to handle submit handler outside of form");e.addEventListener("submit",c(e,o,s,{prevent:!0}));return}if(r.tagName==="INPUT"){r.addEventListener("change",c(e,o,s,{prevent:!1}));return}r.addEventListener("click",c(e,o,s,{prevent:!1}))})},y=H;var V=(e,o)=>{let t="data-action-key";e.querySelectorAll(`[${t}]`).forEach(r=>{let s=r.getAttribute(t)||"default_action_name";r.addEventListener("keyup",c(e,o,s,{prevent:!1}))})},b=V;var k=(e,o)=>{let t=p(o);e.init&&e.init(t)},T=k;var u=new Map,w=(e,o)=>{let t=u.get(e)||[];t.push(o),u.set(e,t)},F=(e,o)=>{a.info({topic:e,message:o}),(u.get(e)||[]).forEach(n=>{n?n(o):console.warn("Topic not found")})},d={on:w,emit:F};var I=(e,o,t)=>{let n=t.trim();if(!o.has(n))return a.warn(`Component -->"${n}"<-- was not found.`);let r=o.get(n);if(!r)return a.error("Undefined component");let s=r({el:e,on:d.on,emit:d.emit});T(s,e),(s==null?void 0:s.actions)&&(y(e,s.actions),b(e,s.actions))},C=I;var f=new Map,m=new Map,h="data-component",$=",",N=e=>{document.querySelectorAll(`[${h}]`).forEach(t=>{if(f.has(t))return;f.set(t,!0),(t.getAttribute(h)||"").split($).forEach(s=>C(t,m,s))}),(e==null?void 0:e.globalInitialisers)&&e.globalInitialisers.length&&e.globalInitialisers.forEach(t=>{let n=[...f.keys()];t(n)})},x=N;var O=`
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
`,S=e=>{let o=document.createElement("style");o.innerHTML=O,document.head.appendChild(o);let t=document.createElement("div");t.classList.add("debugIcon"),t.innerHTML="DEBUG",document.body.appendChild(t),t.addEventListener("click",()=>{e.forEach(n=>{n.classList.add("signElement"),setTimeout(()=>{n.classList.remove("signElement")},3e3)})})},P=S;var _=(e,o)=>{if(!Object.keys(e).length)return a.error("No components passed");Object.keys(e).forEach(t=>{let n=e[t];if(!n.name)return a.error("Component name not defined, please give a name to your component");m.has(n.name)&&a.warn(`Name collision detected. ${n.name} was previously defined`),m.set(n.name,n)}),document.addEventListener("DOMContentLoaded",function(){a.info(`Initializing ${g}`),x(o)})};var de=_;export{P as debug,de as default};
