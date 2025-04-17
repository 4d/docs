"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59782"],{32058:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>d,assets:()=>l,toc:()=>i,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/qr-get-command-status","title":"QR Get command status","description":"QR Get command status ( area ; comando {; valor} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/qr-get-command-status.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-command-status","permalink":"/docs/es/commands/qr-get-command-status","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-command-status.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"qr-get-command-status","title":"QR Get command status","slug":"/commands/qr-get-command-status","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET BORDERS","permalink":"/docs/es/commands/qr-get-borders"},"next":{"title":"QR GET DESTINATION","permalink":"/docs/es/commands/qr-get-destination"}}'),t=s("785893"),r=s("250065");let o={id:"qr-get-command-status",title:"QR Get command status",slug:"/commands/qr-get-command-status",displayed_sidebar:"docs"},c=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR Get command status"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"comando"})," {; ",(0,t.jsx)(n.em,{children:"valor"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comando"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero del comando"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor del subelemento seleccionado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Estado del comando"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando QR Get command status devuelve 0 si el ",(0,t.jsx)(n.em,{children:"comando"})," est\xe1 inactivo \xf3 1 si est\xe1 activo."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"valor"})," devuelve el valor del subelemento seleccionado, si lo hay. Por ejemplo, si el comando que fue seleccionado es el men\xfa ",(0,t.jsx)(n.strong,{children:"Fuente"})," (1000) y la fuente seleccionada es \u201CArial\u201D, ",(0,t.jsx)(n.em,{children:"valor"})," devuelve \u201CArial\u201D, o si el comando seleccionado es el men\xfa de los color (1002, 1003 o 1004), ",(0,t.jsx)(n.em,{children:"valor"})," devuelve el n\xfamero del color."]}),"\n",(0,t.jsx)(n.p,{children:"Puede utilizar este comando en dos tipos de contextos:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Como una instrucci\xf3n simple para determinar si un comando est\xe1 activo o no."}),"\n",(0,t.jsxs)(n.li,{children:["En un m\xe9todo instalado por ",(0,t.jsx)(n.a,{href:"/docs/es/commands/qr-on-command",title:"QR ON COMMAND",children:"QR ON COMMAND"}),", para permitirle conocer el subelemento seleccionado. En ese m\xe9todo, ",(0,t.jsx)(n.em,{children:"$1"})," es la referencia del \xe1rea y ",(0,t.jsx)(n.em,{children:"$2"})," es el n\xfamero del comando."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"comando"}),", puede pasar un valor o una de las constantes del tema ."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,t.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,t.jsx)(n.em,{children:"comando"})," es incorrecto, se genera el error -9852."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/qr-on-command",children:"QR ON COMMAND"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"792"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var d=s(667294);let t={},r=d.createContext(t);function o(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);