"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64167"],{503073:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/listbox-get-column-width","title":"LISTBOX Get column width","description":"LISTBOX Get column width ( { ;} objeto {; anchoMin {; anchoMax*}} )  : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-get-column-width.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-column-width","permalink":"/docs/es/20-R8/commands/listbox-get-column-width","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-column-width.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-column-width","title":"LISTBOX Get column width","slug":"/commands/listbox-get-column-width","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get column formula","permalink":"/docs/es/20-R8/commands/listbox-get-column-formula"},"next":{"title":"LISTBOX Get footer calculation","permalink":"/docs/es/20-R8/commands/listbox-get-footer-calculation"}}'),o=t("785893"),i=t("250065");let d={id:"listbox-get-column-width",title:"LISTBOX Get column width",slug:"/commands/listbox-get-column-width",displayed_sidebar:"docs"},l=void 0,r={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX Get column width"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," {; ",(0,o.jsx)(n.em,{children:"anchoMin"})," {; ",(0,o.jsx)(n.em,{children:"anchoMax"}),"}} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"anchoMin"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Ancho m\xednimo de la columna (en p\xedxeles)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"anchoMax"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Ancho m\xe1ximo de la columna (en p\xedxeles)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Ancho de la columna (en p\xedxeles)"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando LISTBOX Get column width devuelve el largo (en p\xedxeles) de la columna designada por los par\xe1metros ",(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*."})," Puede pasar indiferentemente una columna o un t\xedtulo de columna de list box en el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ."]}),"\n",(0,o.jsxs)(n.p,{children:["LISTBOX Get column width puede devolver en los par\xe1metros ",(0,o.jsx)(n.em,{children:"anchoMin"})," y ",(0,o.jsx)(n.em,{children:"anchoMax"})," los l\xedmites de redimensionamiento de la columna. Estos l\xedmites pueden definirse utilizando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/listbox-set-column-width",title:"LISTBOX SET COLUMN WIDTH",children:"LISTBOX SET COLUMN WIDTH"}),".",(0,o.jsx)(n.br,{}),"\nSi no se ha definido ning\xfan valor de ancho m\xednimo y/o m\xe1ximo para la columna, el par\xe1metro correspondiente devuelve 0."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/listbox-set-column-width",children:"LISTBOX SET COLUMN WIDTH"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"834"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let o={},i=s.createContext(o);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);