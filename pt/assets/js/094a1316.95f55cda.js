"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86901"],{464544:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>i,frontMatter:()=>d});var a=JSON.parse('{"id":"commands-legacy/change-password","title":"CHANGE PASSWORD","description":"CHANGE PASSWORD ( senha )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/change-password.md","sourceDirName":"commands-legacy","slug":"/commands/change-password","permalink":"/docs/pt/commands/change-password","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-password.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"change-password","title":"CHANGE PASSWORD","slug":"/commands/change-password","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHANGE CURRENT USER","permalink":"/docs/pt/commands/change-current-user"},"next":{"title":"Current user","permalink":"/docs/pt/commands/current-user"}}'),r=s("785893"),t=s("250065");let d={id:"change-password",title:"CHANGE PASSWORD",slug:"/commands/change-password",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CHANGE PASSWORD"})," ( ",(0,r.jsx)(n.em,{children:"senha"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"senha"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nova senha"})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["CHANGE PASSWORD muda a senha do usu\xe1rio atual. Este comando substitui a senha atual com a nova senha que se passa em ",(0,r.jsx)(n.em,{children:"senha"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advert\xeancia"}),": as senhas diferenciam entre caracteres em mai\xfasculas e min\xfasculas."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"O exemplo abaixo permite ao usu\xe1rio mudar sua senha."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CHANGE CURRENT USER\xa0// Mostrar a caixa de di\xe1logo de senhas\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$pw1:=Request("Introduza a nova senha para "+Current user)\n\xa0\xa0// A senha deve ter pelo menos cinco caracteres\n\xa0\xa0\xa0\xa0If(((OK=1)\xa0&\xa0($pw1#""))\xa0&\xa0(Length($pw1)>5))\n\xa0\xa0// Tenha certeza de que a senha tenha sido introduzida corretamente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$pw2:=Request("Introduza de novo a senha")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If((OK=1)\xa0&\xa0($pw1=$pw2))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CHANGE PASSWORD($pw2)\xa0// Mudar a senha\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/change-current-user",children:"CHANGE CURRENT USER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/object-set-font",children:"OBJECT SET FONT"})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var a=s(667294);let r={},t=a.createContext(r);function d(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);