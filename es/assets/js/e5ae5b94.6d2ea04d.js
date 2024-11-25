"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46182"],{454764:function(e,n,d){d.r(n),d.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>m,assets:()=>i,toc:()=>a,frontMatter:()=>c});var r=JSON.parse('{"id":"commands-legacy/qr-execute-command","title":"QR EXECUTE COMMAND","description":"QR EXECUTE COMMAND ( area ; comando )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-execute-command.md","sourceDirName":"commands-legacy","slug":"/commands/qr-execute-command","permalink":"/docs/es/commands/qr-execute-command","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-execute-command.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-execute-command","title":"QR EXECUTE COMMAND","slug":"/commands/qr-execute-command","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR DELETE OFFSCREEN AREA","permalink":"/docs/es/commands/qr-delete-offscreen-area"},"next":{"title":"QR Find column","permalink":"/docs/es/commands/qr-find-column"}}'),s=d("785893"),t=d("250065");let c={id:"qr-execute-command",title:"QR EXECUTE COMMAND",slug:"/commands/qr-execute-command",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR EXECUTE COMMAND"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"comando"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"comando"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Comando de men\xfa a ejecutar"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"QR EXECUTE COMMAND"})," ejecuta el comando de bot\xf3n de la barra de herramientas cuya referencia se pasa en ",(0,s.jsx)(n.em,{children:"comando"}),". Este comando se utiliza por lo general para ejecutar un comando seleccionado por el usuario e interceptado en su c\xf3digo a trav\xe9s del comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-on-command",children:"QR ON COMMAND"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"comando"}),", puede pasar una de las constantes del tema ",(0,s.jsx)(n.em,{children:"QR Comandos"})," (solo se soportan eventos listados):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd generate"}),(0,s.jsx)(n.td,{children:"2008"}),(0,s.jsxs)(n.td,{children:["Compatible editor 64 bits (uso del comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-run",children:"QR RUN"})," recomendado)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd open"}),(0,s.jsx)(n.td,{children:"2001"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd page setup"}),(0,s.jsx)(n.td,{children:"2006"}),(0,s.jsx)(n.td,{children:"Compatible editor 64 bits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd print preview"}),(0,s.jsx)(n.td,{children:"2007"}),(0,s.jsx)(n.td,{children:"Compatible editor 64 bits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd save"}),(0,s.jsx)(n.td,{children:"2002"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cmd save as"}),(0,s.jsx)(n.td,{children:"2003"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,s.jsx)(n.em,{children:"comando"})," incorrecto, se genera el error -9852."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-get-command-status",children:"QR Get command status"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-on-command",children:"QR ON COMMAND"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return c}});var r=d(667294);let s={},t=r.createContext(s);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);