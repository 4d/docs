"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20767"],{214509:function(e,o,n){n.r(o),n.d(o,{default:()=>l,frontMatter:()=>t,metadata:()=>A,assets:()=>d,toc:()=>r,contentTitle:()=>a});var A=JSON.parse('{"id":"commands-legacy/edit-item","title":"EDIT ITEM","description":"EDIT ITEM ( { ;} objeto {; item*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/edit-item.md","sourceDirName":"commands-legacy","slug":"/commands/edit-item","permalink":"/docs/pt/commands/edit-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fedit-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"edit-item","title":"EDIT ITEM","slug":"/commands/edit-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Entry Control","permalink":"/docs/pt/category/entry-control"},"next":{"title":"FILTER KEYSTROKE","permalink":"/docs/pt/commands/filter-keystroke"}}'),i=n("785893"),s=n("250065");let t={id:"edit-item",title:"EDIT ITEM",slug:"/commands/edit-item",displayed_sidebar:"docs"},a=void 0,d={},r=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"EDIT ITEM"})," ( {* ;} ",(0,i.jsx)(o.em,{children:"objeto"})," {; ",(0,i.jsx)(o.em,{children:"item"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Par\xe2metro"}),(0,i.jsx)(o.th,{children:"Tipo"}),(0,i.jsx)(o.th,{}),(0,i.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"*"}),(0,i.jsx)(o.td,{children:"Operador"}),(0,i.jsx)(o.td,{children:"\u2192"}),(0,i.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"objeto"}),(0,i.jsx)(o.td,{children:"any"}),(0,i.jsx)(o.td,{children:"\u2192"}),(0,i.jsx)(o.td,{children:"Nome de objeto (se * \xe9 especificado) ou Tabela ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"item"}),(0,i.jsx)(o.td,{children:"Integer"}),(0,i.jsx)(o.td,{children:"\u2192"}),(0,i.jsx)(o.td,{children:"N\xfamero do item"})]})]})]}),"\n",(0,i.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(o.p,{children:["O comando ",(0,i.jsx)(o.strong,{children:"EDIT ITEM"})," lhe permite editar o elemento atual ou o elemento de n\xfamero ",(0,i.jsx)(o.em,{children:"item"})," do array ou a lista designada pelo par\xe2metro ",(0,i.jsx)(o.em,{children:"objeto"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"Isto significa que o elemento selecionado pode ser modificado; a entrada de um caractere substituir\xe1 totalmente o conte\xfado do elemento."}),"\n",(0,i.jsxs)(o.p,{children:["Se passar o par\xe2metro opcional ",(0,i.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,i.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (neste caso, passe uma string em ",(0,i.jsx)(o.em,{children:"objeto"}),"). Se n\xe3o passa o par\xe2metro, indica que o par\xe2metro ",(0,i.jsx)(o.em,{children:"objeto"})," \xe9 uma tabela ou uma vari\xe1vel. Neste caso, n\xe3o passa uma string sem uma refer\xeancia de uma tabela ou vari\xe1vel."]}),"\n",(0,i.jsx)(o.p,{children:"Este comando aplica aos seguintes objetos edit\xe1veis:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Listas hier\xe1rquicas"}),"\n",(0,i.jsx)(o.li,{children:"Colunas de List boxes"}),"\n",(0,i.jsxs)(o.li,{children:["Subformul\xe1rios (neste caso, s\xf3 um nome de objeto, ou subformul\xe1rio, pode ser passada em ",(0,i.jsx)(o.em,{children:"objeto"}),"),"]}),"\n",(0,i.jsxs)(o.li,{children:["Formul\xe1rios listados mostrados utilizando os comandos ",(0,i.jsx)(o.a,{href:"/docs/pt/commands/display-selection",children:"DISPLAY SELECTION"})," ou ",(0,i.jsx)(o.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Se o comando \xe9 utilizado com um objeto edit\xe1vel que n\xe3o estiver na lista, age da mesma forma que o comando ",(0,i.jsx)(o.a,{href:"/docs/pt/commands/goto-object",children:"GOTO OBJECT"}),".",(0,i.jsx)(o.br,{}),"\nO comando n\xe3o faze nada se a lista ou o array est\xe3o vazios ou s\xe3o invis\xedveis. Igualmente, se a lista ou o array n\xe3o s\xe3o edit\xe1veis, ou comando s\xf3 seleciona o elemento especificado sem mudar ao modo edi\xe7\xe3o. No caso das list boxes, se a coluna n\xe3o permite a entrada de texto (entrada por caixas de sele\xe7\xe3o ou por listas suspensas unicamente), o elemento especificado toma o foco."]}),"\n",(0,i.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,i.jsx)(o.em,{children:"item"})," lhe permite designar a posi\xe7\xe3o do elemento (lista hier\xe1rquica) ou o n\xfamero de linha (list box, formul\xe1rios listados e subformul\xe1rio em modo \u201Csele\xe7\xe3o m\xfaltipla\u201D) para mudar a modo de edi\xe7\xe3o. Se n\xe3o passar este par\xe2metro, o comando \xe9 aplicado ao elemento atual de ",(0,i.jsx)(o.em,{children:"objeto"}),". Se n\xe3o houver um elemento atual, o primeiro elemento de ",(0,i.jsx)(o.em,{children:"objeto"})," modifica a modo edi\xe7\xe3o."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Em subformul\xe1rios e formul\xe1rios listados, o comando passa a modo edi\xe7\xe3o o primeiro campo da fila especificada, na ordem de entrada."}),"\n",(0,i.jsx)(o.li,{children:"Em listboxes mostrados em modo hier\xe1rquico, se o elemento objetivo pertence a um n\xedvel hier\xe1rquico colapsado, este n\xedvel (como tamb\xe9m os poss\xedveis n\xedveis pais) s\xe3o suspensos automaticamente para que a linha seja vis\xedvel."}),"\n"]}),"\n",(0,i.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,i.jsx)(o.p,{children:"Este comando pode ser particularmente \xfatil quando cria um novo elemento em uma lista hier\xe1rquica. Quando sechama o comando, o \xfaltimo elemento adicionado ou inserido na lista se converte automaticamente em edit\xe1vel, sem que o usu\xe1rio tenha que realizar alguma a\xe7\xe3o espec\xedfica."}),"\n",(0,i.jsx)(o.p,{children:"O seguinte c\xf3digo pode ser o m\xe9todo de um bot\xe3o que lhe permite inserir um novo elemento nuna lista existente. O texto automaticamente \u201CNovo_elemento\u201D est\xe1 pronto automaticamente para ser modificado:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-4d",children:'\xa0vlUniqueRef:=vlUniqueRef+1\n\xa0INSERT LIST ITEM(hList;*;"Novo_elemento";vlUniqueRef)\n\xa0EDIT ITEM(*;"MinhaLista")\n'})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:n(91789).Z+"",width:"617",height:"174"})}),"\n",(0,i.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,i.jsx)(o.p,{children:"Dadas duas colunas em una list box onde os nomes das vari\xe1veis s\xe3o \u201CArray1\u201D e \u201CArray2\u201D respectivamente. O seguinte exemplo insere um novo elemento em dois arrays e passa o novo elemento de Array2 a modo edi\xe7\xe3o:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-4d",children:'\xa0$vlRowNum:=Size of array(Array1)+1\n\xa0LISTBOX INSERT ROWS(*;"MyListBox";$vlRowNum)\n\xa0Array1{$vlRowNum}:="New value 1"\n\xa0Array2{$vlRowNum}:="New value 2"\n\xa0EDIT ITEM(Array2;$vlRowNum)\n'})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:n(646338).Z+"",width:"705",height:"205"})}),"\n",(0,i.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"/docs/pt/commands/goto-object",children:"GOTO OBJECT"}),(0,i.jsx)(o.br,{}),"\n",(0,i.jsx)(o.a,{href:"/docs/pt/commands/insert-in-list",children:"INSERT IN LIST"}),(0,i.jsx)(o.br,{}),"\n",(0,i.jsx)(o.a,{href:"/docs/pt/commands/set-list-item",children:"SET LIST ITEM"})]}),"\n",(0,i.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{}),(0,i.jsx)(o.th,{})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"N\xfamero do comando"}),(0,i.jsx)(o.td,{children:"870"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Thread-seguro"}),(0,i.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},91789:function(e,o,n){n.d(o,{Z:function(){return A}});let A=n.p+"assets/images/pict21419.pt-2b88219c04b2e0b4c57a3671976db65c.png"},646338:function(e,o,n){n.d(o,{Z:function(){return A}});let A="data:image/png;base64,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"},250065:function(e,o,n){n.d(o,{Z:function(){return a},a:function(){return t}});var A=n(667294);let i={},s=A.createContext(i);function t(e){let o=A.useContext(s);return A.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),A.createElement(s.Provider,{value:o},e.children)}}}]);