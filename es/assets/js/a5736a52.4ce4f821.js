"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55490"],{568726:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/current-user","title":"Current user","description":"Current user {( usuario )} : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/current-user.md","sourceDirName":"commands-legacy","slug":"/commands/current-user","permalink":"/docs/es/20-R8/commands/current-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-user.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"current-user","title":"Current user","slug":"/commands/current-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHANGE PASSWORD","permalink":"/docs/es/20-R8/commands/change-password"},"next":{"title":"DELETE USER","permalink":"/docs/es/20-R8/commands/delete-user"}}'),d=s("785893"),t=s("250065");let i={id:"current-user",title:"Current user",slug:"/commands/current-user",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Current user"})," {( ",(0,d.jsx)(n.em,{children:"usuario"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"usuario"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Alias de usuario o cuenta de usuario 4D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Nombre del usuario actual"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"Current user devuelve el alias o el nombre del usuario actual."}),"\n",(0,d.jsxs)(n.p,{children:["De forma predeterminada, si se omite el par\xe1metro ",(0,d.jsx)(n.em,{children:"usuario"}),", si se ha definido un alias para el usuario con ",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-user-alias",children:"SET USER ALIAS"})," durante la sesi\xf3n, el comando devuelve el alias del usuario. De lo contrario, devuelve el nombre de cuenta de usuario 4D."]}),"\n",(0,d.jsxs)(n.p,{children:["En el par\xe1metro ",(0,d.jsx)(n.em,{children:"usuario"})," opcional, puede especificar cu\xe1l de los siguientes desea devolver:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4D user account"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Nombre de cuenta de usuario 4D."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4D user alias"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsxs)(n.td,{children:["Nombre alternativo para la cuenta de usuario 4D si se define con el ",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-user-alias",children:"SET USER ALIAS"}),' o una cadena vac\xeda ("") si no se define un alias para el usuario 4D.']})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4D user alias or account"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsxs)(n.td,{children:["Nombre alternativo para la cuenta de usuario 4D como se define con el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-user-alias",children:"SET USER ALIAS"}),", o nombre de cuenta de usuario regular 4D si no se define un alias."]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/user-in-group",title:"User in group",children:"User in group"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/change-current-user",children:"CHANGE CURRENT USER"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/change-password",children:"CHANGE PASSWORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-user-alias",children:"SET USER ALIAS"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/user-in-group",children:"User in group"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"182"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let d={},t=r.createContext(d);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);