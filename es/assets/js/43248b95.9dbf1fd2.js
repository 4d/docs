"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51465"],{755499:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>t,toc:()=>i,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-application-color-scheme","title":"Get Application color scheme","description":"Get Application color scheme {( * )} : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-application-color-scheme.md","sourceDirName":"commands-legacy","slug":"/commands/get-application-color-scheme","permalink":"/docs/es/commands/get-application-color-scheme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-application-color-scheme.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-application-color-scheme","title":"Get Application color scheme","slug":"/commands/get-application-color-scheme","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Focus object","permalink":"/docs/es/commands/focus-object"},"next":{"title":"GET FIELD TITLES","permalink":"/docs/es/commands/get-field-titles"}}'),c=o("785893"),l=o("250065");let r={id:"get-application-color-scheme",title:"Get Application color scheme",slug:"/commands/get-application-color-scheme",displayed_sidebar:"docs"},d=void 0,t={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Get Application color scheme"})," {( * )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"*"}),(0,c.jsx)(n.td,{children:"Operador"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Devuelve el esquema de color de la base local"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Resultado"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"Esquema de color de la aplicaci\xf3n actual"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.strong,{children:"Get Application color scheme"})," devuelve el nombre del esquema de color real en uso en el nivel de la aplicaci\xf3n."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Nota:"}),' en Windows, este comando siempre devuelve "claro".']}),"\n",(0,c.jsx)(n.p,{children:"El esquema de color real est\xe1 definido por:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["una llamada al comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"}),";"]}),"\n",(0,c.jsxs)(n.li,{children:["si ",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"}),' no fue llamado o llamado con un valor de par\xe1metro "heredado", la Configuraci\xf3n (Configuraci\xf3n de la base local en el caso de un componente);']}),"\n",(0,c.jsx)(n.li,{children:'si la configuraci\xf3n se define como "heredada", las preferencias del usuario del sistema operativo.'}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["El par\xe1metro ",(0,c.jsx)(n.em,{children:"*"})," es \xfatil cuando se llama al comando desde un componente: cuando se pasa, el comando devuelve el esquema de color de la base local."]}),"\n",(0,c.jsxs)(n.p,{children:["Consulte la descripci\xf3n del comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})," para obtener detalles sobre los nombres de los esquemas de color."]}),"\n",(0,c.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0var $colorScheme : Text\n\xa0\n\xa0\xa0// Recuperar el esquema de color de la base local\n\xa0$colorScheme:=Get Application color scheme(*)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/commands/form-get-color-scheme",children:"FORM Get color scheme"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})]}),"\n",(0,c.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"1763"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return r}});var s=o(667294);let c={},l=s.createContext(c);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);