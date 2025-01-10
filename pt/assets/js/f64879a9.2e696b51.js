"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21116"],{848480:function(e,o,d){d.r(o),d.d(o,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>c,toc:()=>i,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/is-compiled-mode","title":"Is compiled mode","description":"Is compiled mode {( * )} : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-compiled-mode.md","sourceDirName":"commands-legacy","slug":"/commands/is-compiled-mode","permalink":"/docs/pt/commands/is-compiled-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-compiled-mode.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-compiled-mode","title":"Is compiled mode","slug":"/commands/is-compiled-mode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get last update log path","permalink":"/docs/pt/commands/get-last-update-log-path"},"next":{"title":"Is data file locked","permalink":"/docs/pt/commands/is-data-file-locked"}}'),s=d("785893"),r=d("250065");let t={id:"is-compiled-mode",title:"Is compiled mode",slug:"/commands/is-compiled-mode",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Is compiled mode"})," {( * )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Retorna a informa\xe7\xe3o do banco local"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Boolean"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Compilado (True), Interpretado (False)"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"Is compiled mode testa se voc\xea est\xe1 executando no modo compilado (True) ou no modo interpretado (False)."}),"\n",(0,s.jsx)(o.p,{children:"O par\xe2metro * \xe9 opcional e \xfatil no caso de uma arquitetura usando componentes: pode ser usado para determinar o banco de dados (host ou componente) para o qual voc\xea quer descobrir o modo de execu\xe7\xe3o."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Quando o comando \xe9 chamado a partir de um componente:\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Se o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"})," for passado, o comando retorna ",(0,s.jsx)(o.em,{children:"True"})," ou ",(0,s.jsx)(o.em,{children:"False"}),", dependendo do modo em que o banco de dados est\xe1 correndo,"]}),"\n",(0,s.jsxs)(o.li,{children:["Se o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"})," n\xe3o for passado, o comando retorna ",(0,s.jsx)(o.em,{children:"True"})," ou ",(0,s.jsx)(o.em,{children:"False"}),", dependendo do modo em que o componente est\xe1 sendo executado."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["Quando o comando \xe9 chamado a partir de um m\xe9todo de banco de dados do host, ele retorna ",(0,s.jsx)(o.em,{children:"True"})," ou ",(0,s.jsx)(o.em,{children:"False"}),", dependendo do modo em que o banco de dados host est\xe1 executando."]}),"\n"]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"Em uma de suas rotinas, voc\xea inclui a depura\xe7\xe3o do c\xf3digo apenas quando voc\xea est\xe1 executando no modo interpretado, desta forma rodear este c\xf3digo de depura\xe7\xe3o com um teste que chama Is compiled mode:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// ...\n\xa0If(Not(Is compiled mode))\n\xa0\xa0// Inclua o c\xf3digo para depurar seu banco aqui\n\xa0End if\n\xa0\xa0// ...\n"})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/idle",children:"IDLE"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/undefined",children:"Undefined"})]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"492"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,d){d.d(o,{Z:function(){return a},a:function(){return t}});var n=d(667294);let s={},r=n.createContext(s);function t(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);