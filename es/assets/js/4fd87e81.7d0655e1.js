"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20855"],{405693:function(e,n,o){o.r(n),o.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/open-font-picker","title":"OPEN FONT PICKER","description":"OPEN FONT PICKER","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-font-picker.md","sourceDirName":"commands-legacy","slug":"/commands/open-font-picker","permalink":"/docs/es/20-R7/commands/open-font-picker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-font-picker.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-font-picker","title":"OPEN FONT PICKER","slug":"/commands/open-font-picker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN COLOR PICKER","permalink":"/docs/es/20-R7/commands/open-color-picker"},"next":{"title":"SCREEN COORDINATES","permalink":"/docs/es/20-R7/commands/screen-coordinates"}}'),t=o("785893"),r=o("250065");let i={id:"open-font-picker",title:"OPEN FONT PICKER",slug:"/commands/open-font-picker",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"OPEN FONT PICKER"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"OPEN FONT PICKER"})," muestra la caja de di\xe1logo de selecci\xf3n de fuente del sistema."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": esta caja de di\xe1logo es modal en Windows pero no en macOS."]}),"\n",(0,t.jsxs)(n.p,{children:['Si el usuario selecciona una fuente y/o un estilo y valida la caja de di\xe1logo, los cambios se aplican a la selecci\xf3n actual de texto en el objeto con el foco, si la propiedad "Aceptar selector color/fuente" est\xe1 seleccionada para este objeto (ver el manual de ',(0,t.jsx)(n.em,{children:"Dise\xf1o"}),"). De lo contrario, el comando no hace nada."]}),"\n",(0,t.jsx)(n.p,{children:"Si se cambia el tipo de fuente, el evento formulario On After Edit se genera para el objeto."}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"En un formulario, usted desea a\xf1adir un bot\xf3n para mostrar el selector de fuente con el fin de permitir a los usuarios modificar la fuente o el estilo de un \xe1rea de variable texto. Aseg\xfarese de que:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'la variable texto tiene la propiedad "Permitir selector fuente/color" seleccionada.'}),"\n",(0,t.jsx)(n.li,{children:'la propiedad "Enfocable" para el bot\xf3n ha sido deseleccionada.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Este es el c\xf3digo del bot\xf3n:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO OBJECT(textVar)\xa0//da el foco a la variable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OPEN FONT PICKER\n\xa0End case\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-color-picker",children:"OPEN COLOR PICKER"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1303"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return i}});var s=o(667294);let t={},r=s.createContext(t);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);