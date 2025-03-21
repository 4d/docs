"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93751"],{564826:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>t});var o=JSON.parse('{"id":"commands-legacy/get-field-relation","title":"GET FIELD RELATION","description":"GET FIELD RELATION ( campoN ; um ; muitos {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-relation.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-relation","permalink":"/docs/pt/20-R7/commands/get-field-relation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-relation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-relation","title":"GET FIELD RELATION","slug":"/commands/get-field-relation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET AUTOMATIC RELATIONS","permalink":"/docs/pt/20-R7/commands/get-automatic-relations"},"next":{"title":"OLD RELATED MANY","permalink":"/docs/pt/20-R7/commands/old-related-many"}}'),a=n("785893"),r=n("250065");let d={id:"get-field-relation",title:"GET FIELD RELATION",slug:"/commands/get-field-relation",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"GET FIELD RELATION"})," ( ",(0,a.jsx)(s.em,{children:"campoN"})," ; ",(0,a.jsx)(s.em,{children:"um"})," ; ",(0,a.jsx)(s.em,{children:"muitos"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe2metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"campoN"}),(0,a.jsx)(s.td,{children:"Field"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Iniciar campo da rela\xe7\xe3o"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"um"}),(0,a.jsx)(s.td,{children:"Integer"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Estado das rela\xe7\xf5es Muitos a Um"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"muitos"}),(0,a.jsx)(s.td,{children:"Integer"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Estado da rela\xe7\xe3o Um a Muitos"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"*"}),(0,a.jsx)(s.td,{children:"Operador"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Se passado: um e muitos retorna o estado atual da rela\xe7\xe3o (valores 2 ou 3 apenas) * se omitido (padr\xe3o): um e muitos podem retornar o valor 1 se a rela\xe7\xe3o n\xe3o foi modificada atrav\xe9s de programa\xe7\xe3o"})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(s.p,{children:["O comando GET FIELD RELATION permite conhecer o estado autom\xe1tico/manual da rela\xe7\xe3o come\xe7ando desde o ",(0,a.jsx)(s.em,{children:"campoN"})," para o processo atual. Todas as rela\xe7\xf5es podem ser consultadas, incluindo as rela\xe7\xf5es autom\xe1ticas na janela de Estrutura."]}),"\n",(0,a.jsxs)(s.p,{children:["Passe em ",(0,a.jsx)(s.em,{children:"campoN"}),", o nome do campo da tabela N desde onde come\xe7a a rela\xe7\xe3o cujo estado queira conhecer. Se nenhuma rela\xe7\xe3o se origina desde o campo ",(0,a.jsx)(s.em,{children:"campoN"}),", os par\xe2metros ",(0,a.jsx)(s.em,{children:"um"})," e ",(0,a.jsx)(s.em,{children:"muitos"})," devolvem 0, se gera um erro e a vari\xe1vel sistema OK toma o valor 0 (ver a continua\xe7\xe3o)."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Depois da execu\xe7\xe3o do comando, a vari\xe1vel ",(0,a.jsx)(s.em,{children:"um"})," cont\xe9m um valor indicando se a rela\xe7\xe3o Muitos a Um especificada est\xe1 definida como autom\xe1tica:"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["0 = n\xe3o h\xe1 rela\xe7\xe3o desde ",(0,a.jsx)(s.em,{children:"campoN"}),". Se gera o erro de sintaxe No. 16 (\u201CO campo n\xe3o tem rela\xe7\xe3o\u201D) e a vari\xe1vel sistema OK toma o valor 0.",(0,a.jsx)(s.br,{}),"\n1 = o estado autom\xe1tico/manual da rela\xe7\xe3o Muitos a Um especificado est\xe1 definido pela op\xe7\xe3o ",(0,a.jsx)(s.strong,{children:"Rela\xe7\xe3o Muitos a Um"})," ",(0,a.jsx)(s.strong,{children:"autom\xe1tica"})," nas propriedades da rela\xe7\xe3o no ambiente Desenho (n\xe3o foi modificado por programa\xe7\xe3o).",(0,a.jsx)(s.br,{}),"\n2 = a rela\xe7\xe3o Muitos a Um \xe9 manual para o processo.",(0,a.jsx)(s.br,{}),"\n3 = a rela\xe7\xe3o Muitos a Um \xe9 autom\xe1tica para o processo."]}),"\n",(0,a.jsxs)(s.p,{children:["Depois da execu\xe7\xe3o do comando, o par\xe2metro ",(0,a.jsx)(s.em,{children:"muitos"})," cont\xe9m um valor indicando se a rela\xe7\xe3o Um a Muitos especificada est\xe1 definida como autom\xe1tica:",(0,a.jsx)(s.br,{}),"\n0 = n\xe3o h\xe1 rela\xe7\xe3o desde ",(0,a.jsx)(s.em,{children:"campoN"}),". Se gera o erro de sintaxe No. 16 (\u201CO campo n\xe3o tem rela\xe7\xe3o\u201D) e a vari\xe1vel sistema OK toma o valor 0.",(0,a.jsx)(s.br,{}),"\n1 = o estado autom\xe1tico/manual da rela\xe7\xe3o Um a Muitos especificada est\xe1 definido pela op\xe7\xe3o ",(0,a.jsx)(s.strong,{children:"Rela\xe7\xe3o Um a Muitos autom\xe1tica"}),(0,a.jsx)(s.br,{}),"\n2 = a rela\xe7\xe3o Um a Muitos \xe9 manual para o processo.",(0,a.jsx)(s.br,{}),"\n3 = a rela\xe7\xe3o Um a Muitos \xe9 autom\xe1tica para o processo."]}),"\n",(0,a.jsxs)(s.p,{children:["Pode comparar os valores recebidos nos par\xe2metros ",(0,a.jsx)(s.em,{children:"um"})," e ",(0,a.jsx)(s.em,{children:"muitos"})," com as constantes do tema \u201C",(0,a.jsx)(s.em,{children:"Rela\xe7\xf5es"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Constante"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{children:"Valor"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Automatic"}),(0,a.jsx)(s.td,{children:"Inteiro longo"}),(0,a.jsx)(s.td,{children:"3"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Manual"}),(0,a.jsx)(s.td,{children:"Inteiro longo"}),(0,a.jsx)(s.td,{children:"2"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"No relation"}),(0,a.jsx)(s.td,{children:"Inteiro longo"}),(0,a.jsx)(s.td,{children:"0"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Structure configuration"}),(0,a.jsx)(s.td,{children:"Inteiro longo"}),(0,a.jsx)(s.td,{children:"1"})]})]})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["O par\xe2metro opcional ",(0,a.jsx)(s.em,{children:"*"})," permite \u201Cfor\xe7ar\u201D a leitura do estado atual da rela\xe7\xe3o, inclusive se n\xe3o foi modificado por programa\xe7\xe3o. Em outras palavras, quando passa o par\xe2metro opcional *, s\xf3 podem ser devolvidos os valores 2 ou 3 nos par\xe2metros ",(0,a.jsx)(s.em,{children:"um"})," e ",(0,a.jsx)(s.em,{children:"muitos"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(s.p,{children:"Dada a seguinte estrutura:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(175507).Z+"",width:"365",height:"256"})}),"\n",(0,a.jsx)(s.p,{children:"As propriedades da rela\xe7\xe3o que une o campo [Empregados]Empresa com o campo[Empresas]Nome s\xe3o as seguintes:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(531169).Z+"",width:"269",height:"650"})}),"\n",(0,a.jsxs)(s.p,{children:["O c\xf3digo a seguir ilustra as diferentes possibilidades oferecidas pelos comandos GET FIELD RELATION, ",(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"})," e ",(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-field-relation",children:"SET FIELD RELATION"}),", ",(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," assim como seus efeitos:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0GET AUTOMATIC RELATIONS(um;muitos)\xa0//devolve False, False\n\xa0GET FIELD RELATION([Empregados]Empresa;um;muitos)\xa0//devolve 1,1\n\xa0GET FIELD RELATION([Empregados]Empresa;um;muitos;*)\xa0//devolve 3,2\n\xa0\n\xa0SET FIELD RELATION([Empregados]Empresa;2;0)\xa0//muda a rela\xe7\xe3o Muitos a Um a manual\n\xa0\n\xa0GET FIELD RELATION([Empregados]Empresa;um;muitos)\xa0//devolve 2,1\n\xa0GET FIELD RELATION([Empregados]Empresa;um;muitos;*)\xa0//devolve 2, 2\n\xa0\n\xa0SET FIELD RELATION([Empregados]Empresa;1;0)\xa0//restabelece os par\xe2metros definidos no ambiente Desenho para a rela\xe7\xe3o Muitos a Um\n\xa0\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0GET FIELD RELATION([Empregados]Empresa;um;muitos)\xa0//devolve 1,1\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0GET FIELD RELATION([Empregados]Empresa;um;muitos;*)\xa0//devolve 3,2\n\xa0\n\xa0SET AUTOMATIC RELATIONS(True;True)\xa0//muda todas as rela\xe7\xf5es de todas as tabelas a autom\xe1ticas\n\xa0\n\xa0GET AUTOMATIC RELATIONS(um;muitos)\xa0//devolve True, True\n\xa0GET FIELD RELATION([Empregados]Empresa;um;muitos)\xa0//devolve 1,1\n\xa0GET FIELD RELATION([Empregados]Empresa;um;muitos;*)\xa0//devolve 3,3\n"})}),"\n",(0,a.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-field-relation",children:"SET FIELD RELATION"})]}),"\n",(0,a.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"N\xfamero do comando"}),(0,a.jsx)(s.td,{children:"920"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread-seguro"}),(0,a.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},175507:function(e,s,n){n.d(s,{Z:function(){return o}});let o=n.p+"assets/images/pict31607.en-1360d05d6566c3b5cd0b5eda86448a8b.png"},531169:function(e,s,n){n.d(s,{Z:function(){return o}});let o=n.p+"assets/images/pict31608.en-5f4ef41e11c8cc0ea518a455bfee8781.png"},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return d}});var o=n(667294);let a={},r=o.createContext(a);function d(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);