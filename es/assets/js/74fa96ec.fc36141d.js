"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29559"],{752672:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/form-get-current-page","title":"FORM Get current page","description":"FORM Get current page {( * )} : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-get-current-page.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-current-page","permalink":"/docs/es/20-R7/commands/form-get-current-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-current-page.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-get-current-page","title":"FORM Get current page","slug":"/commands/form-get-current-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM Get color scheme","permalink":"/docs/es/20-R7/commands/form-get-color-scheme"},"next":{"title":"FORM GET ENTRY ORDER","permalink":"/docs/es/20-R7/commands/form-get-entry-order"}}'),t=r("785893"),o=r("250065");let s={id:"form-get-current-page",title:"FORM Get current page",slug:"/commands/form-get-current-page",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FORM Get current page"})," {( * )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Devuelve el n\xfamero de p\xe1gina de subformulario actual"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de la p\xe1gina del formulario mostrada actualmente"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"FORM Get current page"})," devuelve el n\xfamero de la p\xe1gina actual del formulario mostrada actualmente o del formulario actual cargado v\xeda el comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-load",children:"FORM LOAD"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"*"})," es \xfatil cuando el comando se llama en el contexto de un subformulario en p\xe1gina que contiene varias p\xe1ginas. En este caso, cuando pase este par\xe1metro, el comando cambia la p\xe1gina del subformulario actual (la que llam\xf3 al comando). Por defecto, cuando se omite el par\xe1metro ",(0,t.jsx)(n.em,{children:"*"}),", el comando se aplica siempre al formulario padre."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"In a form, when you select a menu item from the menu bar or when the form receives a call from another process, you can perform different actions depending on the form page currently displayed. In this example, you write:"}),"\n",(0,t.jsx)(n.p,{children:"En un formulario, si selecciona un elemento de men\xfa de la barra de men\xfas o si el formulario recibe una llamada de otro proceso, puede realizar diferentes acciones dependiendo de la p\xe1gina del formulario mostrada actualmente. En este ejemplo, usted escribe:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de formulario [miTabla];"miForm"\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNumeroMenu:=Menu selected>>16\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNumeroCmdo:=Menu selected\xa0&\xa00xFFFF\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumeroMenu=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumeroCmdo=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Efectuar una acci\xf3n apropiada para la p\xe1gina 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Efectuar una acci\xf3n apropiada para la p\xe1gina 2\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlItemNumber=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlMenuNumber=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Outside Call)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Dar una respuesta apropiada para la p\xe1gina 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Dar una respuesta apropiada para la p\xe1gina 2\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0// ...\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-first-page",children:"FORM FIRST PAGE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-goto-page",children:"FORM GOTO PAGE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-last-page",children:"FORM LAST PAGE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-next-page",children:"FORM NEXT PAGE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-previous-page",children:"FORM PREVIOUS PAGE"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"276"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var a=r(667294);let t={},o=a.createContext(t);function s(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);