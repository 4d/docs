/*! For license information please see 086641ad.ef3fa333.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10865],{652027:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=o(474848),t=o(28453);const r={id:"onMouseUp",title:"On Mouse Up"},a=void 0,d={id:"Events/onMouseUp",title:"On Mouse Up",description:"| Code | Puede ser llamado por                                                                                      | Definici\xf3n                                                                  |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onMouseUp.md",sourceDirName:"Events",slug:"/Events/onMouseUp",permalink:"/docs/es/19/Events/onMouseUp",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseUp.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onMouseUp",title:"On Mouse Up"},sidebar:"docs",previous:{title:"On Mouse Move",permalink:"/docs/es/19/Events/onMouseMove"},next:{title:"On Open Detail",permalink:"/docs/es/19/Events/onOpenDetail"}},i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Puede ser llamado por"}),(0,s.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/docs/es/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," de ",(0,s.jsx)(n.a,{href:"/docs/es/19/FormObjects/propertiesObject#type",children:"Tipo"})," ",(0,s.jsx)(n.code,{children:"imagen"})]}),(0,s.jsx)(n.td,{children:"El usuario acaba de soltar el bot\xf3n izquierdo del rat\xf3n en un objeto Imagen"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El evento ",(0,s.jsx)(n.code,{children:"On Mouse Up"})," se genera cuando el usuario acaba de soltar el bot\xf3n izquierdo del rat\xf3n mientras arrastra una imagen. Este evento es \xfatil, por ejemplo, cuando se desea que el usuario pueda mover, redimensionar o dibujar objetos en un \xe1rea SVG."]}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se genera el evento ",(0,s.jsx)(n.code,{children:"On Mouse Up"}),", puede obtener las coordenadas locales donde se solt\xf3 el bot\xf3n del rat\xf3n. Estas coordenadas se devuelven en las variables sistema ",(0,s.jsx)(n.code,{children:"MouseX"})," y ",(0,s.jsx)(n.code,{children:"MouseY"}),". Las coordenadas se expresan en p\xedxeles con respecto a la esquina superior izquierda de la imagen (0,0)."]}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se utiliza este evento, tambi\xe9n hay que utilizar el comando ",(0,s.jsx)(n.code,{children:"Is waiting mouse up"}),' para manejar los casos en los que el "gestor de estado" del formulario est\xe1 desincronizado, es decir, cuando el evento ',(0,s.jsx)(n.code,{children:"On Mouse Up"})," no se recibe despu\xe9s de un clic. Este es el caso, por ejemplo, cuando se muestra una caja de di\xe1logo de alerta sobre el formulario mientras no se ha soltado el bot\xf3n del rat\xf3n. Para m\xe1s informaci\xf3n y un ejemplo de uso del evento ",(0,s.jsx)(n.code,{children:"On Mouse Up"}),", consulte la descripci\xf3n del comando ",(0,s.jsx)(n.code,{children:"Is waiting mouse up"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Si la opci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/19/FormObjects/propertiesAction#draggable",children:"Draggable"})," est\xe1 activada para el objeto imagen, el evento ",(0,s.jsx)(n.code,{children:"On Mouse Up"})," nunca se genera."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,o)=>{var s=o(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,o){var s,r={},c=null,l=null;for(s in void 0!==o&&(c=""+o),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,s)&&!i.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:l,props:r,_owner:d.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>d});var s=o(296540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);