"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10343"],{621317:function(e,o,n){n.r(o),n.d(o,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"Events/onMouseUp","title":"On Mouse Up","description":"| Code | Pode ser chamado por                                                                                       | Defini\xe7\xe3o                                                                |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onMouseUp.md","sourceDirName":"Events","slug":"/Events/onMouseUp","permalink":"/docs/pt/Events/onMouseUp","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseUp.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onMouseUp","title":"On Mouse Up"},"sidebar":"docs","previous":{"title":"On Mouse Move","permalink":"/docs/pt/Events/onMouseMove"},"next":{"title":"On Open Detail","permalink":"/docs/pt/Events/onOpenDetail"}}'),t=n("785893"),r=n("250065");let a={id:"onMouseUp",title:"On Mouse Up"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"2"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/inputOverview",children:"\xc1rea de entrada"})," de ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Tipo"})," ",(0,t.jsx)(o.code,{children:"imagen"})]}),(0,t.jsx)(o.td,{children:"O usu\xe1rio acabou de soltar o bot\xe3o esquerdo do mouse em um objeto Imagem"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["El evento ",(0,t.jsx)(o.code,{children:"On Mouse Up"})," se genera cuando el usuario acaba de soltar el bot\xf3n izquierdo del rat\xf3n mientras arrastra una imagen. This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area."]}),"\n",(0,t.jsxs)(o.p,{children:["Cuando se genera el evento ",(0,t.jsx)(o.code,{children:"On Mouse Up"}),", puede obtener las coordenadas locales donde se solt\xf3 el bot\xf3n del rat\xf3n. Estas coordenadas se devuelven en las variables sistema ",(0,t.jsx)(o.code,{children:"MouseX"})," y ",(0,t.jsx)(o.code,{children:"MouseY"}),". As coordenadas s\xe3o expressas em p\xedxeis em rela\xe7\xe3o ao canto superior esquerdo da imagem (0,0)."]}),"\n",(0,t.jsxs)(o.p,{children:["Cuando se utiliza este evento, tambi\xe9n hay que utilizar el comando ",(0,t.jsx)(o.code,{children:"Is waiting mouse up"}),' para manejar los casos en los que el "gestor de estado" del formulario est\xe1 desincronizado, es decir, cuando el evento ',(0,t.jsx)(o.code,{children:"On Mouse Up"})," no se recibe despu\xe9s de un clic. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. Para m\xe1s informaci\xf3n y un ejemplo de uso del evento ",(0,t.jsx)(o.code,{children:"On Mouse Up"}),", consulte la descripci\xf3n del comando ",(0,t.jsx)(o.code,{children:"Is waiting mouse up"}),"."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:["Si la opci\xf3n ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesAction#draggable",children:"Draggable"})," est\xe1 activada para el objeto imagen, el evento ",(0,t.jsx)(o.code,{children:"On Mouse Up"})," nunca se genera."]}),"\n"]})]})}function u(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return a}});var s=n(667294);let t={},r=s.createContext(t);function a(e){let o=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);