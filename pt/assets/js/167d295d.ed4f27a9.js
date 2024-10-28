"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48903],{642738:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(474848),t=s(28453);const r={id:"onMouseUp",title:"On Mouse Up"},d=void 0,a={id:"Events/onMouseUp",title:"On Mouse Up",description:"| Code | Pode ser chamado por                                                                                       | Defini\xe7\xe3o                                                                |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Events/onMouseUp.md",sourceDirName:"Events",slug:"/Events/onMouseUp",permalink:"/docs/pt/20-R6/Events/onMouseUp",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseUp.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onMouseUp",title:"On Mouse Up"},sidebar:"docs",previous:{title:"On Mouse Move",permalink:"/docs/pt/20-R6/Events/onMouseMove"},next:{title:"On Open Detail",permalink:"/docs/pt/20-R6/Events/onOpenDetail"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Code"}),(0,n.jsx)(o.th,{children:"Pode ser chamado por"}),(0,n.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"2"}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/inputOverview",children:"\xc1rea de entrada"})," de ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#type",children:"Tipo"})," ",(0,n.jsx)(o.code,{children:"imagen"})]}),(0,n.jsx)(o.td,{children:"O usu\xe1rio acabou de soltar o bot\xe3o esquerdo do mouse em um objeto Imagem"})]})})]}),"\n",(0,n.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["El evento ",(0,n.jsx)(o.code,{children:"On Mouse Up"})," se genera cuando el usuario acaba de soltar el bot\xf3n izquierdo del rat\xf3n mientras arrastra una imagen. This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area."]}),"\n",(0,n.jsxs)(o.p,{children:["Cuando se genera el evento ",(0,n.jsx)(o.code,{children:"On Mouse Up"}),", puede obtener las coordenadas locales donde se solt\xf3 el bot\xf3n del rat\xf3n. Estas coordenadas se devuelven en las variables sistema ",(0,n.jsx)(o.code,{children:"MouseX"})," y ",(0,n.jsx)(o.code,{children:"MouseY"}),". As coordenadas s\xe3o expressas em p\xedxeis em rela\xe7\xe3o ao canto superior esquerdo da imagem (0,0)."]}),"\n",(0,n.jsxs)(o.p,{children:["Cuando se utiliza este evento, tambi\xe9n hay que utilizar el comando ",(0,n.jsx)(o.code,{children:"Is waiting mouse up"}),' para manejar los casos en los que el "gestor de estado" del formulario est\xe1 desincronizado, es decir, cuando el evento ',(0,n.jsx)(o.code,{children:"On Mouse Up"})," no se recibe despu\xe9s de un clic. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. Para m\xe1s informaci\xf3n y un ejemplo de uso del evento ",(0,n.jsx)(o.code,{children:"On Mouse Up"}),", consulte la descripci\xf3n del comando ",(0,n.jsx)(o.code,{children:"Is waiting mouse up"}),"."]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Si la opci\xf3n ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesAction#draggable",children:"Draggable"})," est\xe1 activada para el objeto imagen, el evento ",(0,n.jsx)(o.code,{children:"On Mouse Up"})," nunca se genera."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>d,x:()=>a});var n=s(296540);const t={},r=n.createContext(t);function d(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);