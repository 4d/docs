"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85899"],{915620:function(e,s,t){t.r(s),t.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>l,contentTitle:()=>r});var n=JSON.parse('{"id":"commands-legacy/list-of-style-sheets","title":"LIST OF STYLE SHEETS","description":"LIST OF STYLE SHEETS ( arrFolhasEstilo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/list-of-style-sheets.md","sourceDirName":"commands-legacy","slug":"/commands/list-of-style-sheets","permalink":"/docs/pt/commands/list-of-style-sheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-of-style-sheets.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"list-of-style-sheets","title":"LIST OF STYLE SHEETS","slug":"/commands/list-of-style-sheets","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET STYLE SHEET INFO","permalink":"/docs/pt/commands/get-style-sheet-info"},"next":{"title":"OBJECT DUPLICATE","permalink":"/docs/pt/commands/object-duplicate"}}'),o=t("785893"),d=t("250065");let i={id:"list-of-style-sheets",title:"LIST OF STYLE SHEETS",slug:"/commands/list-of-style-sheets",displayed_sidebar:"docs"},r=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Nota de compatibilidade",id:"nota-de-compatibilidade",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"LIST OF STYLE SHEETS"})," ( ",(0,o.jsx)(s.em,{children:"arrFolhasEstilo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"arrFolhasEstilo"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Nomes das folhas de estilo definidas na aplica\xe7\xe3o"})]})})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"LIST OF STYLE SHEETS"})," devolve a lista de folhas de estilo da aplica\xe7\xe3o no array ",(0,o.jsx)(s.em,{children:"arrFolhasEstilo"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Se n\xe3o tivesse sido previamente definido, o array ",(0,o.jsx)(s.em,{children:"arrFolhasEstilo"})," \xe9 criado pelo comando. Se dimensiona automaticamente de acordo com o n\xfamero de folhas de estilo definidas."]}),"\n",(0,o.jsx)(s.p,{children:'Depois de executar o comando, cada elemento do array cont\xe9m o nome de uma folha de estilos. Estes nomes se ordenam alfabeticamente, como no editor de folhas de estilo. O primeiro elemento do array cont\xe9m sempre "__automatic__", que representa a folha de estilo "Autom\xe1tica".'}),"\n",(0,o.jsx)(s.p,{children:'Nota: por raz\xf5es de compatibilidade, a folha de estilo autom\xe1tico "__automatic_main_text__" and "__automatic_additional_text__" n\xe3o s\xe3o retornadas por esse comando. Entretanto, eles est\xe3o dispon\xedveis nos formul\xe1rios.'}),"\n",(0,o.jsx)(s.h5,{id:"nota-de-compatibilidade",children:"Nota de compatibilidade"}),"\n",(0,o.jsxs)(s.p,{children:["Esse comando pode ser usado somente em ",(0,o.jsx)(s.strong,{children:"bancos de dados bin\xe1rios"}),". Em ",(0,o.jsx)(s.strong,{children:"arquitetura de projetos"}),", o array n\xe3o \xe9 preenchido."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:"Em sua aplica\xe7\xe3o, se definem as seguintes folhas de estilo:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:t(627022).Z+"",width:"776",height:"198"})}),"\n",(0,o.jsx)(s.p,{children:"Se executa o seguinte c\xf3digo:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0LIST OF STYLE SHEETS($arrStyles)\n\xa0\xa0// $arrStyles{1} cont\xe9m "__automatic__"\n\xa0\xa0// $arrStyles{2} cont\xe9m "Buttons"\n\xa0\xa0// $arrStyles{3} cont\xe9m "default"\n\xa0\xa0// $arrStyles{4} cont\xe9m "Input_fields"\n\xa0\xa0// $arrStyles{5} cont\xe9m "Labels"\n\xa0\xa0// $arrStyles{6} cont\xe9m "Variables"\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-style-sheet-info",children:"GET STYLE SHEET INFO"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"1255"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},627022:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/pict1206954.pt-0823619a30c45252286dd61278ca63ff.png"},250065:function(e,s,t){t.d(s,{Z:function(){return r},a:function(){return i}});var n=t(667294);let o={},d=n.createContext(o);function i(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);