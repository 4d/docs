"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28981"],{892676:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>t,toc:()=>l,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/choose","title":"Choose","description":"Choose ( criterio ; valor {; valor2 ; ... ; valorN} )  : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/choose.md","sourceDirName":"commands-legacy","slug":"/commands/choose","permalink":"/docs/pt/20-R8/commands/choose","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchoose.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"choose","title":"Choose","slug":"/commands/choose","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BASE64 ENCODE","permalink":"/docs/pt/20-R8/commands/base64-encode"},"next":{"title":"Generate digest","permalink":"/docs/pt/20-R8/commands/generate-digest"}}'),r=s("785893"),a=s("250065");let d={id:"choose",title:"Choose",slug:"/commands/choose",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let o={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Choose"})," ( ",(0,r.jsx)(o.em,{children:"criterio"})," ; ",(0,r.jsx)(o.em,{children:"valor"})," {; ",(0,r.jsx)(o.em,{children:"valor2"})," ; ... ; ",(0,r.jsx)(o.em,{children:"valorN"}),"} )  : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"criterio"}),(0,r.jsx)(o.td,{children:"Boolean, Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Valor a testar"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"valor"}),(0,r.jsx)(o.td,{children:"Expression"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Valores poss\xedveis"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"any"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Valor do crit\xe9rio"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"Choose"})," retorna um dos valores passados nos par\xe2metros ",(0,r.jsx)(o.em,{children:"valor1, valor2"}),", etc. em fun\xe7\xe3o do valor do par\xe2metro ",(0,r.jsx)(o.em,{children:"criterio"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Pode passar um par\xe2metro ",(0,r.jsx)(o.em,{children:"criterio"})," de tipo booleano ou num\xe9rico:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Se ",(0,r.jsx)(o.em,{children:"criterio"})," for um booleano, Choose retorna ",(0,r.jsx)(o.em,{children:"valor1"})," se o booleano \xe9 igual a True e ",(0,r.jsx)(o.em,{children:"valor2"})," se o booleano \xe9 igual a False. Neste caso, o comando espera exatamente tr\xeas par\xe2metros: ",(0,r.jsx)(o.em,{children:"criterio, valor1"})," e ",(0,r.jsx)(o.em,{children:"valor2"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Se ",(0,r.jsx)(o.em,{children:"criterio"})," for um inteiro, Choose retorna o valor cuja posi\xe7\xe3o corresponde a ",(0,r.jsx)(o.em,{children:"criterio"}),". Aten\xe7\xe3o, a numera\xe7\xe3o dos valores come\xe7a em 0 (a posi\xe7\xe3o de ",(0,r.jsx)(o.em,{children:"valor1"})," \xe9 0). Neste caso, o comando espera ao menos dois par\xe2metros: ",(0,r.jsx)(o.em,{children:"criterio"})," e ",(0,r.jsx)(o.em,{children:"valor1"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["O comando aceita todo os tipos de dados para o/os par\xe2metro(s) ",(0,r.jsx)(o.em,{children:"valor"}),", exceto imagens, ponteiros, BLOBS e arrays. Entretanto, deve ter certeza de que todos os valores passados sejam do mesmo tipo, 4D n\xe3o realizar\xe1 nenhuma verifica\xe7\xe3o neste ponto."]}),"\n",(0,r.jsxs)(o.p,{children:["Se nenhum ",(0,r.jsx)(o.em,{children:"valor"})," corresponde ao crit\xe9rio, Choose retorna um valor \u201Cnulo\u201D relativo ao tipo do par\xe2metro ",(0,r.jsx)(o.em,{children:"valor"})," (por exemplo, 0 para o tipo num\xe9rico, \u201C\u201D para o tipo string, etc.)."]}),"\n",(0,r.jsx)(o.p,{children:"Este comando permite gerar c\xf3digo conciso que substitui os testes de tipo \u201CCase of\u201D que ocupam v\xe1rias linhas (ver exemplo 2). Tamb\xe9m \xe9 muito \xfatil nos lugares onde podem ser executadas f\xf3rmulas: editor de pesquisas, aplicar uma f\xf3rmula, editor de relat\xf3rios r\xe1pidos, coluna calculada de listbox, etc."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Aviso:"})," O comando ",(0,r.jsx)(o.strong,{children:"Choose"})," avalia cada par\xe2metro ",(0,r.jsx)(o.em,{children:"valor"})," antes de sua execu\xe7\xe3o. Isso significa que:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Se ",(0,r.jsx)(o.em,{children:"valor"})," for uma express\xe3o din\xe2mica que causa efeitos colaterais (atualiza\xe7\xe3o de um contador, modifica\xe7\xf5es de qualquer tipo) estes efeitos v\xe3o acotnecer em todos os casos;"]}),"\n",(0,r.jsxs)(o.li,{children:["se um par\xe2metro valor for uma express\xe3o inv\xe1lida, ",(0,r.jsx)(o.strong,{children:"Choose"})," vai retornar um erro em todos os casos. Por exemplo, o c\xf3digo seguinte vai retornar um erro:"]}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0$res:=Choose(True;"red1";"blue"+2)\xa0//error  \n'})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"Este \xe9 um exemplo do uso t\xedpico deste comando com um crit\xe9rio de tipo booleano:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0vTitulo:=Choose([Pessoa]Masculino;"Sr";"Sra")\n'})}),"\n",(0,r.jsx)(o.p,{children:"Este c\xf3digo \xe9 estritamente equivalente a:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0If([Pessoa]Masculino)\n\xa0\xa0\xa0\xa0vTitulo:="Sr"\n\xa0Else\n\xa0\xa0\xa0\xa0vTitulo:="Sra"\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"Este \xe9 um exemplo do uso t\xedpico deste comando com um crit\xe9rio de tipo num\xe9rico:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0vEstado:=Choose([Pessoa]Estado;"Solteiro";"Casado";\'"Vi\xfavo";"Separado")\n'})}),"\n",(0,r.jsx)(o.p,{children:"Este c\xf3digo \xe9 estritamente equivalente a:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:([Pessoa]Estado=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEstado:="Solteiro"\n\xa0\xa0\xa0\xa0:([Pessoa]Estado=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEstado:="Casado"\n\xa0\xa0\xa0\xa0:([Pessoa]Estado=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEstado:="Vi\xfavo"\n\xa0\xa0\xa0\xa0:([Pessoa]Estado=3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEstado:="Separado"\n\xa0End case\n'})}),"\n",(0,r.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"955"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return i},a:function(){return d}});var n=s(667294);let r={},a=n.createContext(r);function d(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);