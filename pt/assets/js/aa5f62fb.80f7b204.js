"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55649"],{40044:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/get-style-sheet-info","title":"GET STYLE SHEET INFO","description":"GET STYLE SHEET INFO ( nomeFolhaEstilo ; fonte ; tam ; estilos )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-style-sheet-info.md","sourceDirName":"commands-legacy","slug":"/commands/get-style-sheet-info","permalink":"/docs/pt/20-R7/commands/get-style-sheet-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-style-sheet-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-style-sheet-info","title":"GET STYLE SHEET INFO","slug":"/commands/get-style-sheet-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Objects (Forms)","permalink":"/docs/pt/20-R7/category/objects-forms"},"next":{"title":"LIST OF STYLE SHEETS","permalink":"/docs/pt/20-R7/commands/list-of-style-sheets"}}'),d=t("785893"),o=t("250065");let i={id:"get-style-sheet-info",title:"GET STYLE SHEET INFO",slug:"/commands/get-style-sheet-info",displayed_sidebar:"docs"},r=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Nota de compatibilidade",id:"nota-de-compatibilidade",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET STYLE SHEET INFO"})," ( ",(0,d.jsx)(n.em,{children:"nomeFolhaEstilo"})," ; ",(0,d.jsx)(n.em,{children:"fonte"})," ; ",(0,d.jsx)(n.em,{children:"tam"})," ; ",(0,d.jsx)(n.em,{children:"estilos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomeFolhaEstilo"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome da folha de estilo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fonte"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Tipo de fonte"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tam"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Tamanho de fonte"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"estilos"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Valor do estilo"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"GET STYLE SHEET INFO"})," devolve a configura\xe7\xe3o atual da folha de estilo ",(0,d.jsx)(n.em,{children:"nomeFolhaEstilo"})," ."]}),"\n",(0,d.jsxs)(n.p,{children:["Passe em ",(0,d.jsx)(n.em,{children:"nomeFolhaEstilo"}),', o nome da folha de estilo definida em modo Desenho. Para designar a folha de estilo "Autom\xe1tica", pode usar as constantes do tema "',(0,d.jsx)(n.em,{children:"Estilos de fonte"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Automatic style sheet"}),(0,d.jsx)(n.td,{children:"Cadeia"}),(0,d.jsx)(n.td,{children:"__automatic__"}),(0,d.jsx)(n.td,{children:"Usado como padr\xe3o para todos os objetos"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Automatic style sheet_additional"}),(0,d.jsx)(n.td,{children:"Cadeia"}),(0,d.jsx)(n.td,{children:"__automatic_additional_text__"}),(0,d.jsx)(n.td,{children:"Suportado por texto est\xe1tico, campos e varia\xe1veis somente. Usado para texto adicional em caixas de di\xe1logo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Automatic style sheet_main"}),(0,d.jsx)(n.td,{children:"Cadeia"}),(0,d.jsx)(n.td,{children:"__automatic_main_text__"}),(0,d.jsx)(n.td,{children:"Suportado apenas para texto est\xe1tico, campos e vari\xe1veis. Usado para texto principal em caixas de di\xe1logo."})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["O comando devolve em ",(0,d.jsx)(n.em,{children:"fonte"}),", o nome da fonte de caracteres associada a folha de estilo para a plataforma atual."]}),"\n",(0,d.jsxs)(n.p,{children:["O comando devolve em ",(0,d.jsx)(n.em,{children:"tam"}),", o tamanho em pontos da fonte associado a folha de estilo para a plataforma atual."]}),"\n",(0,d.jsxs)(n.p,{children:["O comando devolve em ",(0,d.jsx)(n.em,{children:"estilos"}),', um valor que corresponde ao estilo(s) associado(s) a folha de estilo para a plataforma atual. Pode comparar o valor recebido com as seguintes constantes, que se encontram no tema "',(0,d.jsx)(n.em,{children:"Estilos de fonte"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold and Italic"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold and Underline"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Italic"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Italic and Underline"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Plain"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Underline"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Se o comando se executa corretamente, a vari\xe1vel sistema OK toma o valor 1. Caso contr\xe1rio (por exemplo, se ",(0,d.jsx)(n.em,{children:"nomeFolhaEstilo"})," n\xe3o existe), toma o valor 0."]}),"\n",(0,d.jsx)(n.h5,{id:"nota-de-compatibilidade",children:"Nota de compatibilidade"}),"\n",(0,d.jsxs)(n.p,{children:["Em ",(0,d.jsx)(n.strong,{children:"arquitetura de projeto"}),", s\xf3 as tr\xeas folhas de estilo autom\xe1ticas s\xe3o compat\xedveis com esse comando"]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:'Se quiser conhecer a configura\xe7\xe3o atual da folha de estilo "Automatic"'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var $size;$style : Integer\n\xa0var $font : Text\n\xa0GET STYLE SHEET INFO(Automatic style sheet;$font;$size;$style)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/list-of-style-sheets",children:"LIST OF STYLE SHEETS"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1256"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let d={},o=s.createContext(d);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);