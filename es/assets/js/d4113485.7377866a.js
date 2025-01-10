"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55544"],{376:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/method-get-names","title":"METHOD GET NAMES","description":"METHOD GET NAMES ( arrNoms {; filtro}{; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-names.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-names","permalink":"/docs/es/commands/method-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-names.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-names","title":"METHOD GET NAMES","slug":"/commands/method-get-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET MODIFICATION DATE","permalink":"/docs/es/commands/method-get-modification-date"},"next":{"title":"METHOD Get path","permalink":"/docs/es/commands/method-get-path"}}'),t=s("785893"),d=s("250065");let r={id:"method-get-names",title:"METHOD GET NAMES",slug:"/commands/method-get-names",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Propiedades",id:"propiedades",level:4}];function i(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"METHOD GET NAMES"})," ( ",(0,t.jsx)(n.em,{children:"arrNoms"})," {; ",(0,t.jsx)(n.em,{children:"filtro"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrNoms"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array de nombres de m\xe9todos de proyecto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filtro"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Filtros de nombres"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (par\xe1metro ignorado fuera de este contexto)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"METHOD GET NAMES"})," llena el array ",(0,t.jsx)(n.em,{children:"arrNoms"})," con los nombres de los m\xe9todos proyecto creados en la aplicaci\xf3n."]}),"\n",(0,t.jsxs)(n.p,{children:["Por defecto, todos los m\xe9todos se listan. Puede restringir esta lista pasando una cadena de comparaci\xf3n en el par\xe1metro ",(0,t.jsx)(n.em,{children:"filtro"}),', en este caso, el comando s\xf3lo devuelve los m\xe9todos cuyo nombre coincide con el filtro. Debe utilizar el car\xe1cter @ con el fin de definir los filtros de tipo "comienza por", "termina en" o "contiene".']}),"\n",(0,t.jsxs)(n.p,{children:["Si se ejecuta este comando desde un componente, devuelve por defecto los nombres de los m\xe9todos proyecto del componente. Si pasa el par\xe1metro ",(0,t.jsx)(n.em,{children:"*"}),", el array contendr\xe1 los m\xe9todos proyecto de la base local."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": los m\xe9todos ubicados en la papelera no se listan."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Ejemplos de uso:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Lista de todos los m\xe9todos proyecto de la base\n\xa0METHOD GET NAMES(t_Names)\n\xa0\n\xa0\xa0//\xa0 Lista de los m\xe9todos proyecto que comienzan por una cadena espec\xedfica\n\xa0METHOD GET NAMES(t_Names;"web_@")\n\xa0\n\xa0\xa0// Lista de los m\xe9todos proyecto de la base local que comienzan por una cadena espec\xedfica\n\xa0METHOD GET NAMES(t_Names;"web_@";*)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1166"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var o=s(667294);let t={},d=o.createContext(t);function r(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);