"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68208"],{3270:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/on-server-close-connection-database-method","title":"On Server Close Connection database method","description":"$1, $2, $3 -> M\xe9todo base On Server Close Connection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-close-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-close-connection-database-method","permalink":"/docs/es/20-R7/commands/on-server-close-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-close-connection-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-close-connection-database-method","title":"On Server Close Connection database method","slug":"/commands/on-server-close-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On REST Authentication database method","permalink":"/docs/es/20-R7/commands/on-rest-authentication-database-method"},"next":{"title":"On Server Open Connection database method","permalink":"/docs/es/20-R7/commands/on-server-open-connection-database-method"}}'),t=o("785893"),s=o("250065");let d={id:"on-server-close-connection-database-method",title:"On Server Close Connection database method",slug:"/commands/on-server-close-connection-database-method",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function l(e){let n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"$1, $2, $3 -> M\xe9todo base On Server Close Connection"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$1"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de usuario utilizado internamente por 4D Server para identificar los usuarios"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$2"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de conexi\xf3n utilizada internamente por 4D Server para identificar una conexi\xf3n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$3"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Obsoleto: devuelve siempre 0 pero debe declararse"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El ",(0,t.jsx)(n.strong,{children:"M\xe9todo base On Server Close Connection"})," se llama en el equipo servidor cada vez que termina un proceso 4D Client."]}),"\n",(0,t.jsxs)(n.p,{children:["Como para el ",(0,t.jsx)(n.a,{href:"metodo-base-on-server-open-connection.md",children:"M\xe9todo base On Server Open Connection"}),", 4D Server pasa tres par\xe1metros de tipo entero largo al ",(0,t.jsx)(n.strong,{children:"M\xe9todo base On Server Close Connection"}),". Por otra parte, 4D Server no espera un resultado en retorno."]}),"\n",(0,t.jsx)(n.p,{children:"El m\xe9todo debe contener la declaraci\xf3n expl\xedcita de tres par\xe1metros Entero largo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $1;$2;$3 : Integer\n"})}),"\n",(0,t.jsx)(n.p,{children:"Esta tabla detalla la informaci\xf3n ofrecida por los tres par\xe1metros pasados al m\xe9todo base:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Par\xe1metro"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$1"}),(0,t.jsx)(n.td,{children:"N\xfamero de usuario utilizado internamente por 4D Server para identificar usuarios"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$2"}),(0,t.jsx)(n.td,{children:"N\xfamero de conexi\xf3n utilizado internamente por 4D Server para identificar una conexi\xf3nn"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$3"}),(0,t.jsx)(n.td,{children:"Obsoleto: devuelve siempre 0 pero debe declararse"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["El ",(0,t.jsx)(n.strong,{children:"M\xe9todo base On Server Close Connection"})," es el inverso exacto del ",(0,t.jsx)(n.a,{href:"metodo-base-on-server-open-connection.md",children:"M\xe9todo base On Server Open Connection"}),". Para mayor informaci\xf3n y una descripci\xf3n de este m\xe9todo base, as\xed como para la descripci\xf3n de los ",(0,t.jsx)(n.strong,{children:"procesos 4D Client"}),", ver la descripci\xf3n de este m\xe9todo base."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Ver el primer ejemplo para ",(0,t.jsx)(n.a,{href:"metodo-base-on-server-open-connection.md",children:"M\xe9todo base On Server Open Connection"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var r=o(667294);let t={},s=r.createContext(t);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);