"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16281"],{247544:function(e,n,s){s.r(n),s.d(n,{default:()=>l,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>t});var o=JSON.parse('{"id":"commands-legacy/append-menu-item","title":"APPEND MENU ITEM","description":"APPEND MENU ITEM ( menu ; itemTexto {; subMenu {; processo {; *}}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/append-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/append-menu-item","permalink":"/docs/pt/20-R7/commands/append-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"append-menu-item","title":"APPEND MENU ITEM","slug":"/commands/append-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Menus","permalink":"/docs/pt/20-R7/commands/theme/Menus"},"next":{"title":"Count menu items","permalink":"/docs/pt/20-R7/commands/count-menu-items"}}'),r=s("785893"),a=s("250065");let d={id:"append-menu-item",title:"APPEND MENU ITEM",slug:"/commands/append-menu-item",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",previous:"previous",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"APPEND MENU ITEM"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"itemTexto"})," {; ",(0,r.jsx)(n.em,{children:"subMenu"})," {; ",(0,r.jsx)(n.em,{children:"processo"})," {; *}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"itemText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Texto para os novos itens de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subMenu"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Refer\xeancia do submenu associado com o item"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"processo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de refer\xeancia de processo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se passado: considerar metacaracteres como caracteres comuns"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando APPEND MENU ITEM  adiciona nova linhas de menu ao menu cujo n\xfamero ou refer\xeancia se passa em ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Se omite o par\xe2metro ",(0,r.jsx)(n.em,{children:"processo"}),", APPEND MENU ITEM  se aplica a barra de menus do processo atual. Do contr\xe1rio, APPEND MENU ITEM \xe9 aplicado a barra de menus do processo atual cujo n\xfamero de refer\xeancia se passa em ",(0,r.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," se passa um ",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," em ",(0,r.jsx)(n.em,{children:"menu"}),", o par\xe2metro ",(0,r.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e ser\xe1 ignorado."]}),"\n",(0,r.jsx)(n.p,{children:"Se n\xe3o passar o par\xe2metro *, APPEND MENU ITEM  lhe permite adicionar uma ou v\xe1rias linhas de menu em uma s\xf3 chamada."}),"\n",(0,r.jsxs)(n.p,{children:["As linhas a adicionar s\xe3o definidas com o par\xe2metro ",(0,r.jsx)(n.em,{children:"itemText"})," da seguinte maneira:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Separe cada elemento da seguinte com um ponto e v\xedrgula (",(0,r.jsx)(n.em,{children:";"}),"). Por exemplo,",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:'"ItemText1;ItemText2;ItemText3".'})]}),"\n",(0,r.jsxs)(n.li,{children:["Para desativar uma linha: Coloque um par\xeanteses aberto (",(0,r.jsx)(n.em,{children:"("}),") no texto da linha."]}),"\n",(0,r.jsx)(n.li,{children:'Para definir uma linha de separa\xe7\xe3o: Passe "-" ou "(-" como texto da linha.'}),"\n",(0,r.jsxs)(n.li,{children:["Para especificar um estilo de fonte para uma linha: no texto da linha, ponha um sinal menor que (",(0,r.jsx)(n.em,{children:"<"}),") seguido por um dos seguintes caracteres:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"<B"}),(0,r.jsx)(n.th,{children:"Negrito"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"<I"}),(0,r.jsx)(n.td,{children:"Cursiva"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"<U"}),(0,r.jsx)(n.td,{children:"Sublinhado"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Para adicionar uma marca de sele\xe7\xe3o a uma linha: no texto da linha, ponha um sinal de exclama\xe7\xe3o (",(0,r.jsx)(n.em,{children:"!"}),") seguido pelo caractere que deseja como marca de sele\xe7\xe3o. Em Macintosh, o caractere \xe9 mostrado; em Windows, \xe9 mostrada uma marca de sele\xe7\xe3o sem importar que caractere passe."]}),"\n",(0,r.jsx)(n.li,{children:"Para adicionar um \xedcone a uma linha: no texto da linha, ponha um acento circunflejo (^) seguido por um car\xe1cter cujo c\xf3digo mais 208 \xe9 o n\xfamero do recurso do \xedcone Mac OS."}),"\n",(0,r.jsxs)(n.li,{children:["Para adicionar um atalho a uma linha: no texto da linha, ponha uma barra obliqua (",(0,r.jsx)(n.em,{children:"/"}),") seguida pelo caractere de atalho para o elemento."]}),"\n",(0,r.jsxs)(n.li,{children:['(A partir de 4D v16 R3) se o elemento estiver associado com uma a\xe7\xe3o padr\xe3o, passe a constante ak standard action title em itemText para utilizar automaticamente o nome da a\xe7\xe3o localizada e a informa\xe7\xe3o de contexto (se houver), por exemplo "Undo ',(0,r.jsx)(n.previous,{action:"",children:'".'})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," utilize menus que tenham um n\xfamero razo\xe1vel de linhas. Por exemplo, se quer mostrar mais de 50 elementos, considere utilizar uma \xe1rea de rolagem em um formul\xe1rio em lugar de um menu."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passa o par\xe2metro ",(0,r.jsx)(n.em,{children:"*"}),', os caracteres "especiais" (',(0,r.jsx)(n.em,{children:"; ( !"}),'...) inclu\xeddos no texto do elemento ser\xe3o considerados como caracteres padr\xe3o e n\xe3o como meta caracteres. Isto permite criar elementos de menu tais como "Copiar (especial)..." ou "Pesquisar/Substituir...". Note que quando se passa o par\xe2metro ',(0,r.jsx)(n.em,{children:"*"}),', n\xe3o pode criar v\xe1rios elementos em uma s\xf3 chamada j\xe1 que o caractere ";" \xe9 considerado como um caracter padr\xe3o.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," os comandos ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-menu-items",children:"GET MENU ITEMS"})," e ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-menu-item",children:"Get menu item"})," devolver\xe3o ou n\xe3o os meta caracteres no texto de um elemento de menu dependendo de como foi criado: se foi criado com a op\xe7\xe3o ",(0,r.jsx)(n.em,{children:"*"}),", os meta caracteres ser\xe3o devolvidos como caracteres padr\xe3o."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"subMenu"})," permite designar um menu como elemento adicionado e portanto definir um submenu hier\xe1rquico. Deve passar neste par\xe2metro uma refer\xeancia de menu (cadeia de tipo ",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") especificando um menu criado por exemplo, utilizando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/create-menu",children:"Create menu"}),". Se o comando adiciona mais de um elemento de menu, o submenu \xe9 associado a primeira linha."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Importante:"})," as novas linhas n\xe3o t\xeam m\xe9todos ou a\xe7\xf5es associados. Estes devem ser associados com os elementos utilizando os comandos ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})," ou ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"}),", ou os elementos tamb\xe9m podem ser administradas por um m\xe9todo de formul\xe1rio utilizando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/menu-selected",children:"Menu selected"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo adiciona os nomes das fontes dispon\xedveis num menu Fontes, o qual neste exemplo \xe9 o sexto menu da barra de menus atual:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// No m\xe9todo base On Startup\n\xa0\xa0// A lista de fontes \xe9 carregada e o texto da linha de menu \xe9 constru\xedda\n\xa0FONT LIST(\u25CAasFonteDisp)\n\xa0\u25CAatFonteMenuItens:=""\n\xa0For($vlFont;1;Size of array(\u25CAasFonteDisp))\n\xa0\xa0\xa0\xa0\u25CAatFonteMenuItens:=\u25CAatFonteMenuItens+";"+\u25CAasFonteDisp{$vlFont}\n\xa0End for\n'})}),"\n",(0,r.jsx)(n.p,{children:"Ent\xe3o, em todo m\xe9todo de formul\xe1rio ou de projeto, pode escrever:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0APPEND MENU ITEM(6;\u25CAatFonteMenuItens)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/delete-menu-item",children:"DELETE MENU ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/insert-menu-item",children:"INSERT MENU ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"411"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Proibido no servidor"}),(0,r.jsx)(n.td,{})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var o=s(667294);let r={},a=o.createContext(r);function d(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);