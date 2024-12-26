"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21597"],{284549:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>m,assets:()=>c,toc:()=>i,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/qr-get-command-status","title":"QR Get command status","description":"QR Get command status ( area ; comando {; valor} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-command-status.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-command-status","permalink":"/docs/pt/commands/qr-get-command-status","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-command-status.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-command-status","title":"QR Get command status","slug":"/commands/qr-get-command-status","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET BORDERS","permalink":"/docs/pt/commands/qr-get-borders"},"next":{"title":"QR GET DESTINATION","permalink":"/docs/pt/commands/qr-get-destination"}}'),t=s("785893"),o=s("250065");let d={id:"qr-get-command-status",title:"QR Get command status",slug:"/commands/qr-get-command-status",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR Get command status"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"comando"})," {; ",(0,t.jsx)(n.em,{children:"valor"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comando"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de comando"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor do subelemento selecionado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Estado do comando"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando QR Get command status devolve 0 se o ",(0,t.jsx)(n.em,{children:"comando"})," estiver inativo ou 1 se estiver ativo."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"valor"})," devolve o valor do subelemento selecionado, se houver. Por exemplo, se o comando que foi selecionado for o menu ",(0,t.jsx)(n.strong,{children:"Fonte"})," (1000) e a fonte selecionada \xe9 \u201CArial\u201D, ",(0,t.jsx)(n.em,{children:"valor"})," devolve \u201CArial\u201D, ou se o comando selecionado for o menu de cores (1002, 1003 ou 1004), ",(0,t.jsx)(n.em,{children:"valor"})," devolve o n\xfamero da cor."]}),"\n",(0,t.jsx)(n.p,{children:"Pode utilizar este comando em dois tipos de contextos:"}),"\n",(0,t.jsxs)(n.p,{children:["* Como uma instru\xe7\xe3o simples para determinar se um comando est\xe1 ativo o no.",(0,t.jsx)(n.br,{}),"\n* Em um m\xe9todo instalado por ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/qr-on-command",title:"QR ON COMMAND",children:"QR ON COMMAND"}),", para permitir-lhe conhecer o subelemento selecionado. Nesse m\xe9todo, ",(0,t.jsx)(n.em,{children:"$1"})," \xe9 a refer\xeancia da \xe1rea e ",(0,t.jsx)(n.em,{children:"$2"})," \xe9 o n\xfamero do comando."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"comando"}),", pode passar um valor o uma das constantes do tema ",(0,t.jsx)(n.em,{children:"QR Comandos"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se passa um n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," inv\xe1lido, se gera o erro -9850.",(0,t.jsx)(n.br,{}),"\nSe o par\xe2metro ",(0,t.jsx)(n.em,{children:"comando"})," for incorreto, se gera o erro -9852."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/qr-on-command",children:"QR ON COMMAND"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"792"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let t={},o=r.createContext(t);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);