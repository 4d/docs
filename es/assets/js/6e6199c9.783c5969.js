"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2141],{111196:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(474848),d=s(28453);const o={id:"qr-get-command-status",title:"QR Get command status",slug:"/commands/qr-get-command-status",displayed_sidebar:"docs"},r=void 0,c={id:"commands-legacy/qr-get-command-status",title:"QR Get command status",description:"QR Get command status ( area ; comando {; valor} ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-command-status.md",sourceDirName:"commands-legacy",slug:"/commands/qr-get-command-status",permalink:"/docs/es/commands/qr-get-command-status",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-command-status.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-get-command-status",title:"QR Get command status",slug:"/commands/qr-get-command-status",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR GET BORDERS",permalink:"/docs/es/commands/qr-get-borders"},next:{title:"QR GET DESTINATION",permalink:"/docs/es/commands/qr-get-destination"}},a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function i(e){const n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR Get command status"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"comando"})," {; ",(0,t.jsx)(n.em,{children:"valor"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comando"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero del comando"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor del subelemento seleccionado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Estado del comando"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando QR Get command status devuelve 0 si el ",(0,t.jsx)(n.em,{children:"comando"})," est\xe1 inactivo \xf3 1 si est\xe1 activo."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"valor"})," devuelve el valor del subelemento seleccionado, si lo hay. Por ejemplo, si el comando que fue seleccionado es el men\xfa ",(0,t.jsx)(n.strong,{children:"Fuente"})," (1000) y la fuente seleccionada es \u201cArial\u201d, ",(0,t.jsx)(n.em,{children:"valor"})," devuelve \u201cArial\u201d, o si el comando seleccionado es el men\xfa de los color (1002, 1003 o 1004), ",(0,t.jsx)(n.em,{children:"valor"})," devuelve el n\xfamero del color."]}),"\n",(0,t.jsx)(n.p,{children:"Puede utilizar este comando en dos tipos de contextos:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Como una instrucci\xf3n simple para determinar si un comando est\xe1 activo o no."}),"\n",(0,t.jsxs)(n.li,{children:["En un m\xe9todo instalado por ",(0,t.jsx)(n.a,{href:"/docs/es/commands/qr-on-command",title:"QR ON COMMAND",children:"QR ON COMMAND"}),", para permitirle conocer el subelemento seleccionado. En ese m\xe9todo, ",(0,t.jsx)(n.em,{children:"$1"})," es la referencia del \xe1rea y ",(0,t.jsx)(n.em,{children:"$2"})," es el n\xfamero del comando."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"comando"}),", puede pasar un valor o una de las constantes del tema ."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,t.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,t.jsx)(n.em,{children:"comando"})," es incorrecto, se genera el error -9852."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/qr-on-command",children:"QR ON COMMAND"})]})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(296540);const d={},o=t.createContext(d);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);