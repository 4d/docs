"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63305"],{291547:function(e,s,o){o.r(s),o.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>r,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/object-set-list-by-name","title":"OBJECT SET LIST BY NAME","description":"OBJECT SET LIST BY NAME ( { ;} objeto {; tipoLista}; lista* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-list-by-name.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-list-by-name","permalink":"/docs/pt/commands/object-set-list-by-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-list-by-name.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-list-by-name","title":"OBJECT SET LIST BY NAME","slug":"/commands/object-set-list-by-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET KEYBOARD LAYOUT","permalink":"/docs/pt/commands/object-set-keyboard-layout"},"next":{"title":"OBJECT SET LIST BY REFERENCE","permalink":"/docs/pt/commands/object-set-list-by-reference"}}'),i=o("785893"),a=o("250065");let t={id:"object-set-list-by-name",title:"OBJECT SET LIST BY NAME",slug:"/commands/object-set-list-by-name",displayed_sidebar:"docs"},d=void 0,r={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"OBJECT SET LIST BY NAME"})," ( {* ;} ",(0,i.jsx)(s.em,{children:"objeto"})," {; ",(0,i.jsx)(s.em,{children:"tipoLista"}),"}; ",(0,i.jsx)(s.em,{children:"lista"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe2metro"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Operador"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"objeto"}),(0,i.jsx)(s.td,{children:"any"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Nome de objeto (se* \xe9 especificado) ou Campo ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"tipoLista"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Tipo de lista: lista de sele\xe7\xe3o, lista de obrigat\xf3rios ou lista de exclu\xeddos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lista"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Nome da lista a ser usada como Lista de Escolha (definida no ambiente Desenho)"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(s.p,{children:["O comando OBJECT SET LIST BY NAME define ou substitui a lista associada ao objeto o grupo de objetos designado por ",(0,i.jsx)(s.em,{children:"objeto"})," A lista cujo nome \xe9 passado no par\xe2metro ",(0,i.jsx)(s.em,{children:"lista"})," deve ter sido criada no editor de listas, em modo Desenho*.*"]}),"\n",(0,i.jsx)(s.p,{children:"Este comando pode ser aplicado a um formul\xe1rio de entrada ou di\xe1logo, a campos e vari\xe1veis edit\xe1veis cujos valores podem ser introduzidos como texto."}),"\n",(0,i.jsxs)(s.p,{children:["Se passa o par\xe2metro opcional ",(0,i.jsx)(s.em,{children:"*"}),", indica que o par\xe2metro ",(0,i.jsx)(s.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se for omitido o par\xe2metro ",(0,i.jsx)(s.em,{children:"*"}),", indica que o par\xe2metro ",(0,i.jsx)(s.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, voc\xea especifica uma refer\xeancia de um campo ou de uma vari\xe1vel (campo ou vari\xe1vel de tipo objeto unicamente) ao inv\xe9s de uma cadeia."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Nota:"})," Este comando n\xe3o pode ser utilizado com campos localizados em um formul\xe1rio listado de um subformul\xe1rio."]}),"\n",(0,i.jsxs)(s.p,{children:["O comando ",(0,i.jsx)(s.strong,{children:"OBJECT SET LIST BY NAME"})," lhe permite definir ou substituir todos os tipos de listas associadas aos objetos designados pelos par\xe2metros ",(0,i.jsx)(s.em,{children:"objeto"})," e ",(0,i.jsx)(s.em,{children:"*"}),": listas de sele\xe7\xe3o, lista de valores obrigat\xf3rios e listas de valores exclu\xeddos. Para isso, no par\xe2metro ",(0,i.jsx)(s.em,{children:"tipoLista"}),' passe uma das seguintes constantes, que se encontra no tema "',(0,i.jsx)(s.em,{children:"Propriedades dos objetos"}),' ":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Constante"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{children:"Valor"}),(0,i.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Choice list"}),(0,i.jsx)(s.td,{children:"Inteiro longo"}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:'Lista simples de sele\xe7\xe3o de valores (op\xe7\xe3o "Lista" na Lista de Propriedades) (por padr\xe3o)'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Excluded list"}),(0,i.jsx)(s.td,{children:"Inteiro longo"}),(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:'Lista de valores n\xe3o aceitos para a entrada (Op\xe7\xe3o "Exclus\xf5es" na lista de propriedades)'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Required list"}),(0,i.jsx)(s.td,{children:"Inteiro longo"}),(0,i.jsx)(s.td,{children:"1"}),(0,i.jsx)(s.td,{children:'Lista s\xf3 os valores aceitos para a entrada (Op\xe7\xe3o "Obrigat\xf3ria" na Lista de Propriedades)'})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"Se omite este par\xe2metro, o valor 0 (lista de sele\xe7\xe3o) se utiliza por padr\xe3o."}),"\n",(0,i.jsxs)(s.p,{children:["No processo atual, para desvincular uma lista que se associou ao ",(0,i.jsx)(s.em,{children:"objeto"}),', passe uma cadeia vazia ("") no par\xe2metro ',(0,i.jsx)(s.em,{children:"lista"})," para o tipo de lista concernente."]}),"\n",(0,i.jsx)(s.p,{children:"Lista de valores existentes s\xe3o substituidas dependendo de como a lista \xe9 associada ao objeto formul\xe1rio:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"usar uma lista de escolha: a lista mesma \xe9 substituida."}),"\n",(0,i.jsx)(s.li,{children:"usar um array: a lista \xe9 copiada em elementos array."}),"\n",(0,i.jsx)(s.li,{children:"usar um objeto (n\xe3o compat\xedvel com bancos de dados bin\xe1rios): a lista \xe9 copiada como elementos cole\xe7\xe3o na propriedade valores do objeto."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,i.jsx)(s.p,{children:"O exemplo a seguir define uma lista associada a um campo Envio. Se o envio deve ser realizado na noite, ent\xe3o a lista mostra as empresas que realizam envios na noite. Caso contr\xe1rio, s\xe3o atribu\xeddas as empresas de envios comum:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0If([Envios]Overnight)\n\xa0\xa0\xa0\xa0\nOBJECT SET LIST BY NAME([Envios]Empresa;"Envios de noite")\n\xa0Else\n\xa0\xa0\xa0\xa0OBJECT SET LIST BY NAME([Envios]Empresa;"Envios comum")\n\xa0End if\n\n\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,i.jsx)(s.p,{children:'Associa a lista "color_choice" como uma lista desloc\xe1vel simples chamada "DoorColor":'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"color_choice")\n\xa0\xa0// neste caso, o terceiro par\xe2metro (constante) pode ser omitido\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,i.jsx)(s.p,{children:'Voc\xea deseja associar a lista "color_choice" ao combo box "WallColor". Como este combo box \xe9 edit\xe1vel, voc\xea deseja que n\xe3o seja poss\xedvel usar certas cores como o "preto", "morado", etc. Estas cores se colocam na lista "excl_colors":'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0OBJECT SET LIST BY NAME(*;"WallColor";Choice list;"color_choice")\n\xa0OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"excl_colors")\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,i.jsx)(s.p,{children:"Voc\xea quer eliminar a lista de associa\xe7\xf5es:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// elimina\xe7\xe3o de uma lista de sele\xe7\xe3o\n\xa0OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"")\n\xa0\xa0// elimina\xe7\xe3o de uma lista de valores que n\xe3o s\xe3o permitidos\n\xa0OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"")\n'})}),"\n",(0,i.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/pt/commands/object-get-list-name",children:"OBJECT Get list name"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/pt/commands/object-set-list-by-reference",children:"OBJECT SET LIST BY REFERENCE"})]}),"\n",(0,i.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"N\xfamero do comando"}),(0,i.jsx)(s.td,{children:"237"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread-seguro"}),(0,i.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return d},a:function(){return t}});var n=o(667294);let i={},a=n.createContext(i);function t(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);