"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91533"],{886333:function(e,s,n){n.r(s),n.d(s,{metadata:()=>o,contentTitle:()=>r,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>i});var o=JSON.parse('{"id":"commands-legacy/font-list","title":"FONT LIST","description":"FONT LIST ( fontes {; listType | *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/font-list.md","sourceDirName":"commands-legacy","slug":"/commands/font-list","permalink":"/docs/pt/commands/font-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"font-list","title":"FONT LIST","slug":"/commands/font-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Font file","permalink":"/docs/pt/commands/font-file"},"next":{"title":"FONT STYLE LIST","permalink":"/docs/pt/commands/font-style-list"}}'),t=n("785893"),a=n("250065");let i={id:"font-list",title:"FONT LIST",slug:"/commands/font-list",displayed_sidebar:"docs"},r=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Sobre fontes escal\xe1veis",id:"sobre-fontes-escal\xe1veis",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"FONT LIST"})," ( ",(0,t.jsx)(s.em,{children:"fontes"})," {; listType | *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fontes"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Array de nomes de fontes dispon\xedveis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"listType | *"}),(0,t.jsx)(s.td,{children:"Inteiro longo, Operador"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Tipo de lista de fonte a devolver ou * para devolver os nomes de fonte em OS X"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["O comando FONT LIST enche o array ",(0,t.jsx)(s.em,{children:"fontes"}),", de tipo alfa ou texto, com os nomes das fontes dispon\xedveis em seu sistema."]}),"\n",(0,t.jsxs)(s.p,{children:["O par\xe2metro ",(0,t.jsx)(s.em,{children:"tipoLista"})," permite designar o tipo da lista de fonte a obter. Para fazer isso, pode passar uma das seguintes constantes no par\xe2metro ",(0,t.jsx)(s.em,{children:"tipoLista"}),', dispon\xedvel no tema "',(0,t.jsx)(s.em,{children:"Tipo de lista das fontes"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constante"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{children:"Valor"}),(0,t.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Favorite fonts"}),(0,t.jsx)(s.td,{children:"Inteiro longo"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"fontes"})," cont\xe9m a lista de fontes favoritas",(0,t.jsx)(s.br,{}),"- Em Windows: lista de nomes de fam\xedlias de fontes ativas no painel de controle de Windows.",(0,t.jsx)(s.br,{}),'- Em OS X: lista de nomes de fam\xedlias de fontes da cole\xe7\xe3o "com.apple.Favorites" que se encontra no painel de controle, chamada "Favorites" em Ingl\xeas, "Favoris" em franc\xeas, "Favoriten" em alem\xe3o, etc. Esta cole\xe7\xe3o pode estar em branco se o usu\xe1rio n\xe3o adicionou fontes favoritas.']})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Recent fonts"}),(0,t.jsx)(s.td,{children:"Inteiro longo"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"fontes"})," cont\xe9m a lista de fontes recentes (lista de fontes utilizadas durante a sess\xe3o 4D). Esta lista \xe9 utilizada particularmente pelas \xe1reas de texto multiestilo"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"System fonts"}),(0,t.jsx)(s.td,{children:"Inteiro longo"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"fontes"})," cont\xe9m a lista de todas as fontes do sistema. Op\xe7\xe3o por padr\xe3o se omitido ",(0,t.jsx)(s.em,{children:"tipoLista"}),"."]})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Sob Mac OS X, quando passar o par\xe2metro opcional ",(0,t.jsx)(s.em,{children:"*"}),", o comando enche o array ",(0,t.jsx)(s.em,{children:"fontes"})," com os nomes das fontes e n\xe3o com os nomes das fam\xedlias de fontes. A opera\xe7\xe3o por padr\xe3o simplifica a gest\xe3o programada de \xe1reas de texto enriquecidas, que utilizam fam\xedlias de fonte. Se passar o par\xe2metro ",(0,t.jsx)(s.em,{children:"*"}),', os nomes de fonte, por exemplo "Arial bold", "Arial italic", "Arial narrow italic," s\xe3o devolvidos em lugar das fam\xedlias, tais como "Arial", "Arial black" ou "Arial narrow".']}),"\n",(0,t.jsxs)(s.p,{children:["Sob Windows, o par\xe2metro ",(0,t.jsx)(s.em,{children:"*"})," n\xe3o tem efeito. O comando devolve sempre as fam\xedlias de fontes."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Nota:"})," Sob Mac OS, se utiliza o resultado deste comando com o comando ",(0,t.jsx)(s.a,{href:"/docs/pt/commands/st-set-attributes",children:"ST SET ATTRIBUTES"}),", em uma \xe1rea de texto multiestilo, n\xe3o deve passar o par\xe2metro ",(0,t.jsx)(s.em,{children:"*"})," (s\xf3 fam\xedlias de fonte s\xe3o compat\xedveis como Attribute font name). Essa limita\xe7\xe3o n\xe3o aplica a \xe1reas 4D Write Pro, que aceita tanto fontes quanto nomes de fam\xedlias de fonte."]}),"\n",(0,t.jsx)(s.h5,{id:"sobre-fontes-escal\xe1veis",children:"Sobre fontes escal\xe1veis"}),"\n",(0,t.jsx)(s.p,{children:"Este comando devolve s\xf3 as fontes escal\xe1veis. N\xe3o se recomenda o uso de fontes n\xe3o vetoriais (ou seja, fontes de mapa de bits) para o desenho de interfaces, j\xe1 que se baseiam em uma tecnologia obsoleta e sofrem de limita\xe7\xf5es em quanto as varia\xe7\xf5es de tamanho. N\xe3o s\xe3o compat\xedveis com as funcionalidades mais recentes de 4D como as \xe1reas 4D Write Pro."}),"\n",(0,t.jsx)(s.p,{children:"Em OS X, este principio aplica desde OS X 10.4 (as fontes de mapa de bits QuickDraw s\xe3o obsoletas a partir desta vers\xe3o)."}),"\n",(0,t.jsx)(s.p,{children:'Em Windows, este principio se aplica come\xe7ando com 4D v15 R4. Com o fim de ajudar aos desenvolvedores a selecionar s\xf3 fontes modernas para suas interfaces, s\xf3 as fontes vetoriais "TrueType" ou "OpenType" s\xe3o listados. Por exemplo, "ASI_Mono", "MS Sans Serif" e "Syistem" j\xe1 n\xe3o est\xe3o dispon\xedveis. Al\xe9m disso, tamb\xe9m s\xe3o ignorados os nomes GDI; s\xf3 os nomes de familias de fonte DirectWrite s\xe3o suportados. Por exemplo, as fontes "Arial Black" ou "Segoe UI Black" n\xe3o est\xe3o na lista; S\xf3 "Arial" e "Segoe" s\xe3o devolvidos.'}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Notas de compatibilidade para Windows:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"As fontes de mapa de bits podem ser seguidas utilizando em seus formul\xe1rios 4D (exceto nas \xe1reas 4D Write Pro). Simplesmente se eliminam da lista devolvida por este comando. Entretanto, para assegurar a compatibilidade com futuras vers\xf5es de 4D e Windows, se recomenda utilizar s\xf3 as fam\xedlias de fontes DirectWrite."}),"\n",(0,t.jsxs)(s.li,{children:["Dado que as fontes de mapa de bits se filtran desde o par\xe2metro ",(0,t.jsx)(s.em,{children:"fontes"})," em Windows, a lista resultante \xe9 diferente em aplica\xe7\xf5es 4D v15 R4 e superiores, em compara\xe7\xe3o com vers\xf5es anteriores. Lembre de adaptar seu c\xf3digo se usar este comando para selecionar um tipo de letra n\xe3o vetorial."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(s.p,{children:"Em um formul\xe1rio, voc\xea quer obter uma lista para baixo que mostre as fontes dispon\xedveis no sistema. O m\xe9todo da lista para baixo \xe9 a seguinte:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asFonte;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FONT LIST(asFonte)\n\xa0\xa0// ...\n\xa0\n\xa0End case\n"})}),"\n",(0,t.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(s.p,{children:"Voc\xea quer obter uma lista de fontes recentes:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0FONT LIST($arrFonts;Recent fonts)\n"})}),"\n",(0,t.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/pt/commands/font-style-list",children:"FONT STYLE LIST"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/object-set-font",children:"OBJECT SET FONT"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/set-recent-fonts",children:"SET RECENT FONTS"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/st-set-attributes",children:"ST SET ATTRIBUTES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.em,{children:"Tipo de lista das fontes"})]}),"\n",(0,t.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"N\xfamero do comando"}),(0,t.jsx)(s.td,{children:"460"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread-seguro"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return i}});var o=n(667294);let t={},a=o.createContext(t);function i(e){let s=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);