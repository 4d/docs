"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18386"],{177997:function(e,s,t){t.r(s),t.d(s,{metadata:()=>o,contentTitle:()=>i,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/object-set-style-sheet","title":"OBJECT SET STYLE SHEET","description":"OBJECT SET STYLE SHEET ( { ;} objeto ; nomFolhaEstilo* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-style-sheet.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-style-sheet","permalink":"/docs/pt/commands/object-set-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-style-sheet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-style-sheet","title":"OBJECT SET STYLE SHEET","slug":"/commands/object-set-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET SHORTCUT","permalink":"/docs/pt/commands/object-set-shortcut"},"next":{"title":"OBJECT SET SUBFORM","permalink":"/docs/pt/commands/object-set-subform"}}'),n=t("785893"),a=t("250065");let d={id:"object-set-style-sheet",title:"OBJECT SET STYLE SHEET",slug:"/commands/object-set-style-sheet",displayed_sidebar:"docs"},i=void 0,r={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Nota de compatibilidade",id:"nota-de-compatibilidade",level:5},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"OBJECT SET STYLE SHEET"})," ( {* ;} ",(0,n.jsx)(s.em,{children:"objeto"})," ; ",(0,n.jsx)(s.em,{children:"nomFolhaEstilo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"*"}),(0,n.jsx)(s.td,{children:"Operador"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"objeto"}),(0,n.jsx)(s.td,{children:"any"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsxs)(s.td,{children:["Nome de objeto (se * for especificado) ou",(0,n.jsx)(s.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nomFolhaEstilo"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Nome da folha de estilo"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(s.p,{children:["O comando ",(0,n.jsx)(s.strong,{children:"OBJECT SET STYLE SHEET"})," modifica, para o processo atual, a folha de estilo associada ao objeto(s) designado(s) pelos par\xe2metros ",(0,n.jsx)(s.em,{children:"objeto"})," e ",(0,n.jsx)(s.em,{children:"*"})," . Uma folha de estilo modifica a fonte, o tamanho de fonte e o estilo de fonte."]}),"\n",(0,n.jsxs)(s.p,{children:["Ao passar o par\xe2metro opcional ",(0,n.jsx)(s.em,{children:"*"})," se indica que o par\xe2metro ",(0,n.jsx)(s.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro objeto \xe9 um campo ou uma vari\xe1vel. Neste caso, passa uma refer\xeancia de campo ou vari\xe1vel no lugar de uma cadeia (campo ou vari\xe1vel objeto unicamente)."]}),"\n",(0,n.jsxs)(s.p,{children:["Passe no par\xe2metro ",(0,n.jsx)(s.em,{children:"nomFolhaEstilo"}),", o nome da folha de estilo a aplicar ao ",(0,n.jsx)(s.em,{children:"objeto"}),". Tamb\xe9m pode passar:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["O nome de uma folha de estilos existente (se a folha de estilo n\xe3o existe, se devolve um erro, que pode interceptar utilizando um m\xe9todo instalado pelo comando ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),")."]}),"\n",(0,n.jsxs)(s.li,{children:['Uma cadeia vazia ("") para n\xe3o aplicar a folha destilo e ao ',(0,n.jsx)(s.em,{children:"objeto."})]}),"\n",(0,n.jsxs)(s.li,{children:['uma das constantes a seguir encontradas no tema "',(0,n.jsx)(s.em,{children:"Estilos de fonte"}),'" para aplicar a folha de estilos autom\xe1tica:']}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Constante"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{children:"Valor"}),(0,n.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Automatic style sheet"}),(0,n.jsx)(s.td,{children:"Cadeia"}),(0,n.jsx)(s.td,{children:"__automatic__"}),(0,n.jsx)(s.td,{children:"Usado como padr\xe3o para todos os objetos"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Automatic style sheet_additional"}),(0,n.jsx)(s.td,{children:"Cadeia"}),(0,n.jsx)(s.td,{children:"__automatic_additional_text__"}),(0,n.jsx)(s.td,{children:"Suportado por texto est\xe1tico, campos e varia\xe1veis somente. Usado para texto adicional em caixas de di\xe1logo"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Automatic style sheet_main"}),(0,n.jsx)(s.td,{children:"Cadeia"}),(0,n.jsx)(s.td,{children:"__automatic_main_text__"}),(0,n.jsx)(s.td,{children:"Suportado apenas para texto est\xe1tico, campos e vari\xe1veis. Usado para texto principal em caixas de di\xe1logo."})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Se uma folha de estilo j\xe1 tinha sido associada ao objeto em modo Desenho, a chamada deste comando a substitui para o processo atual."}),"\n",(0,n.jsxs)(s.p,{children:["Se durante a sess\xe3o, utiliza os comandos ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/st-set-attributes",children:"ST SET ATTRIBUTES"}),", ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/st-set-text",children:"ST SET TEXT"})," ou ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/object-set-font",children:"OBJECT SET FONT"}),", ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/object-set-font-size",children:"OBJECT SET FONT SIZE"})," no ",(0,n.jsx)(s.em,{children:"objeto"})," com o prop\xf3sito de modificar sua fonte ou o tamanho de fonte, a refer\xeancia a folha de estilos se apaga automaticamente do objeto - inclusive se atribui os mesmos atributos que os da folha de estilos. No entanto, se modificar o estilo (negrito, cursiva, etc.), por exemplo com os comandos ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/st-set-attributes",children:"ST SET ATTRIBUTES"})," ou ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"}),", se adicionam estas novas propriedades a folha de estilo pela dura\xe7\xe3o da sess\xe3o."]}),"\n",(0,n.jsx)(s.h5,{id:"nota-de-compatibilidade",children:"Nota de compatibilidade"}),"\n",(0,n.jsxs)(s.p,{children:["Em ",(0,n.jsx)(s.strong,{children:"arquitetura de projeto"}),", s\xf3 as tr\xeas folhas de estilo autom\xe1ticas s\xe3o compat\xedveis com esse comando"]}),"\n",(0,n.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Estilos de fonte"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/get-style-sheet-info",children:"GET STYLE SHEET INFO"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/list-of-style-sheets",children:"LIST OF STYLE SHEETS"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/object-get-style-sheet",children:"OBJECT Get style sheet"})]}),"\n",(0,n.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"N\xfamero do comando"}),(0,n.jsx)(s.td,{children:"1257"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Thread-seguro"}),(0,n.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return i},a:function(){return d}});var o=t(667294);let n={},a=o.createContext(n);function d(e){let s=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);