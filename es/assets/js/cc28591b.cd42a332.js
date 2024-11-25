"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16764"],{292993:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>a,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/object-get-subform-container-size","title":"OBJECT GET SUBFORM CONTAINER SIZE","description":"OBJECT GET SUBFORM CONTAINER SIZE ( ancho ; alto )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-subform-container-size.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-subform-container-size","permalink":"/docs/es/commands/object-get-subform-container-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-subform-container-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-subform-container-size","title":"OBJECT GET SUBFORM CONTAINER SIZE","slug":"/commands/object-get-subform-container-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SUBFORM","permalink":"/docs/es/commands/object-get-subform"},"next":{"title":"OBJECT Get subform container value","permalink":"/docs/es/commands/object-get-subform-container-value"}}'),s=o("785893"),t=o("250065");let i={id:"object-get-subform-container-size",title:"OBJECT GET SUBFORM CONTAINER SIZE",slug:"/commands/object-get-subform-container-size",displayed_sidebar:"docs"},l=void 0,a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT GET SUBFORM CONTAINER SIZE"})," ( ",(0,s.jsx)(n.em,{children:"ancho"})," ; ",(0,s.jsx)(n.em,{children:"alto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ancho"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Ancho del objeto subformulario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"alto"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Alto del objeto subformulario"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OBJECT GET SUBFORM CONTAINER SIZE"})," devuelve el ",(0,s.jsx)(n.em,{children:"ancho"})," y el ",(0,s.jsx)(n.em,{children:"alto"}),' (en p\xedxeles) de un objeto subformulario "actual", mostrado en el formulario padre.']}),"\n",(0,s.jsxs)(n.p,{children:["Este comando debe llamarse desde el m\xe9todo de un formulario utilizado como subformulario y mostrado en un objeto subformulario. Devuelve el ",(0,s.jsx)(n.em,{children:"ancho"})," y el ",(0,s.jsx)(n.em,{children:"alto"})," del objeto que contiene el subformulario. Devuelve el ",(0,s.jsx)(n.em,{children:"ancho"})," y el ",(0,s.jsx)(n.em,{children:"alto"})," del objeto que contiene el subformulario."]}),"\n",(0,s.jsx)(n.p,{children:"Este comando es \xfatil, por ejemplo, en el caso de objetos de subformulario que deben redimensionarse en funci\xf3n de las caracter\xedsticas del objeto subformulario mismo. En el evento formulario On Load, el subformulario puede llamar a este comando para calcular el espacio a su disposici\xf3n con el fin de mostrar su contenido."}),"\n",(0,s.jsx)(n.p,{children:"El evento On Resize se genera en el m\xe9todo formulario del subformulario si el objeto subformulario se redimensiona en el objeto formulario padre (por ejemplo si el objeto subformulario tiene una propiedad de agrandamiento horizontal/vertical y si el formulario padre se redimensiona)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si el comando se llama desde un formulario que no se est\xe1 utilizando como un subformulario, devuelve el tama\xf1o actual de la ventana del formulario."}),"\n",(0,s.jsxs)(n.li,{children:["Si el comando se llama fuera del contexto de la visualizaci\xf3n de la pantalla (por ejemplo, durante la impresi\xf3n del formulario), devuelve 0 en ",(0,s.jsx)(n.em,{children:"ancho"})," y ",(0,s.jsx)(n.em,{children:"alto"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/object-get-subform",children:"OBJECT GET SUBFORM"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-subform",children:"OBJECT SET SUBFORM"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return i}});var r=o(667294);let s={},t=r.createContext(s);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);