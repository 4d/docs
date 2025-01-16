"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72715"],{520300:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>t,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/undefined","title":"Undefined","description":"Undefined ( variavel ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/undefined.md","sourceDirName":"commands-legacy","slug":"/commands/undefined","permalink":"/docs/pt/20-R7/commands/undefined","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fundefined.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"undefined","title":"Undefined","slug":"/commands/undefined","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Type","permalink":"/docs/pt/20-R7/commands/type"},"next":{"title":"Value type","permalink":"/docs/pt/20-R7/commands/value-type"}}'),i=d("785893"),r=d("250065");let a={id:"undefined",title:"Undefined",slug:"/commands/undefined",displayed_sidebar:"docs"},l=void 0,t={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Undefined"})," ( ",(0,i.jsx)(n.em,{children:"variavel"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"variavel"}),(0,i.jsx)(n.td,{children:"Expression"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Vari\xe1vel a testar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"TRUE=Vari\xe1vel \xe9 atualmente indefinida; FALSE= Vari\xe1vel \xe9 atualmente definida"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["Undefined retorna True se n\xe3o for definida ",(0,i.jsx)(n.em,{children:"variavel"})," e False se ",(0,i.jsx)(n.em,{children:"variavel"})," n\xe3o for definida."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Uma vari\xe1vel est\xe1 definida se tiver sido criada atrav\xe9s de uma diretiva de compila\xe7\xe3o ou se lhe atribui um valor. Est\xe1 indefinida em todos os demais casos. Se o banco tiver sido compilado, a fun\xe7\xe3o Undefined retorna False para todas as vari\xe1veis"}),"\n",(0,i.jsx)(n.li,{children:"Uma propriedade de objeto \xe9 indefinida se n\xe3o existir no objeto"}),"\n",(0,i.jsx)(n.li,{children:"A fun\xe7\xe3o Undefined sempre retorna False para refer\xeancias de campo."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," lembre que ",(0,i.jsx)(n.strong,{children:"Undefined"})," avalia a ",(0,i.jsx)(n.em,{children:"express\xe3o"}),". As declara\xe7\xf5es abaixo s\xe3o equivalentes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0$result:=Undefined($exp)\n\xa0\xa0// mesmo resultado:\n\xa0$result:=(Value type($exp)=Is undefined)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Em alguns casos, \xe9 poss\xedvel que n\xe3o queira que o par\xe2metro seja avaliado (por exemplo, quando utilizar um ponteiro a uma vari\xe1vel para verificar se a vari\xe1vel est\xe1 definida). Ent\xe3o, deve escrever:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0$result:=(Type($ptr->)=Is undefined)\xa0//true se a vari\xe1vel apontada n\xe3o existir (sem erro)\n"})}),"\n",(0,i.jsx)(n.p,{children:"."}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsxs)(n.p,{children:["Abaixo os diferentes resultados do comando ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/undefined",children:"Undefined"})," assim como do comando ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/null",children:"Null"})," com propriedades de objeto, dependendo do contexto:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var vEmp : Object\n\xa0vEmp:=New object\n\xa0vEmp.name:="Smith"\n\xa0vEmp.children:=Null\n\xa0\n\xa0$undefined:=Undefined(vEmp.name)\xa0// False\n\xa0$null:=(vEmp.name=Null)\xa0//False\n\xa0\n\xa0$undefined:=Undefined(vEmp.children)\xa0// False\n\xa0$null:=(vEmp.children=Null)\xa0//True\n\xa0\n\xa0$undefined:=Undefined(vEmp.parent)\xa0// True\n\xa0$null:=(vEmp.parent=Null)\xa0//True\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/clear-variable",children:"CLEAR VARIABLE"})}),"\n",(0,i.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"82"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return a}});var s=d(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);