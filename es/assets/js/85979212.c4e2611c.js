"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89010"],{801505:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>t,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/clear-variable","title":"CLEAR VARIABLE","description":"CLEAR VARIABLE ( variable )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/clear-variable.md","sourceDirName":"commands-legacy","slug":"/commands/clear-variable","permalink":"/docs/es/commands/clear-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-variable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"clear-variable","title":"CLEAR VARIABLE","slug":"/commands/clear-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Variables","permalink":"/docs/es/category/variables"},"next":{"title":"LOAD VARIABLES","permalink":"/docs/es/commands/load-variables"}}'),s=a("785893"),i=a("250065");let l={id:"clear-variable",title:"CLEAR VARIABLE",slug:"/commands/clear-variable",displayed_sidebar:"docs"},o=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CLEAR VARIABLE"})," ( ",(0,s.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"variable"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Variable a borrar"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["CLEAR VARIABLE reinicia ",(0,s.jsx)(n.em,{children:"variable"})," en el valor por defecto de su tipo (por ejemplo, cadena vac\xeda para los tipos Alfa y Texto, ",(0,s.jsx)(n.em,{children:"0"})," para las variables num\xe9ricas, ning\xfan elemento para un array, etc.). La variable contin\xfaa existiendo en memoria."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," para m\xe1s informaci\xf3n sobre los valores de tipo predeterminados, consulte el p\xe1rrafo ",(0,s.jsx)(n.em,{children:"Valores por defecto"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["La variable que se pasa en ",(0,s.jsx)(n.em,{children:"variable"})," puede ser una variable local, proceso o interproceso."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," no es necesario borrar las variables proceso al terminar un proceso; 4D las borra autom\xe1ticamente. De forma similar cada variable local se borra autom\xe1ticamente cuando el m\xe9todo donde se ubica termina su ejecuci\xf3n."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.p,{children:["En un formulario, utilice una lista desplegable llamada ",(0,s.jsx)(n.em,{children:"asMiListaDesplegable"})," cuyo \xfanico prop\xf3sito es la interfaz del usuario. En otras palabras, utilice este array durante la entrada de datos, pero una vez cierre el formulario, no utilice m\xe1s este array. Por lo tanto, durante el evento On Unload, borre el array:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9todo de objeto lista desplegable asMyDropDown\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0//Inicializar el array de una manera u otra\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asMyDropDown;...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0//No necesita m\xe1s el array\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asMyDropDown)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/undefined",children:"Undefined"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"89"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return l}});var r=a(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);