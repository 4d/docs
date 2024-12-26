"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45313"],{287839:function(e,s,r){r.r(s),r.d(s,{metadata:()=>o,contentTitle:()=>l,default:()=>x,assets:()=>t,toc:()=>a,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/listbox-get-property","title":"LISTBOX Get property","description":"LISTBOX Get property ( { ;} objeto ; propriedade* ) : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-property.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-property","permalink":"/docs/pt/commands/listbox-get-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-property","title":"LISTBOX Get property","slug":"/commands/listbox-get-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET PRINT INFORMATION","permalink":"/docs/pt/commands/listbox-get-print-information"},"next":{"title":"LISTBOX Get row color","permalink":"/docs/pt/commands/listbox-get-row-color"}}'),n=r("785893"),i=r("250065");let d={id:"listbox-get-property",title:"LISTBOX Get property",slug:"/commands/listbox-get-property",displayed_sidebar:"docs"},l=void 0,t={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"LISTBOX Get property"})," ( {* ;} ",(0,n.jsx)(s.em,{children:"objeto"})," ; ",(0,n.jsx)(s.em,{children:"propriedade"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"*"}),(0,n.jsx)(s.td,{children:"Operador"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"objeto"}),(0,n.jsx)(s.td,{children:"any"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"propriedade"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Informa\xe7\xe3o a obter"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Resultado"}),(0,n.jsx)(s.td,{children:"Integer, Text"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"Valor atual"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(s.p,{children:["O comando ",(0,n.jsx)(s.strong,{children:"LISTBOX Get property"})," devolve diferente informa\xe7\xe3o relacionada com o tamanho e a visibilidade dos t\xedtulos e as barras de rolagem do objeto list box designado usandoos par\xe2metros ",(0,n.jsx)(s.em,{children:"objeto"})," e ",(0,n.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Se passa o par\xe2metro opcional ",(0,n.jsx)(s.em,{children:"*"}),", indica que o par\xe2metro ",(0,n.jsx)(s.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,n.jsx)(s.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,n.jsx)(s.em,{children:"Propriedades dos objetos"})," ."]}),"\n",(0,n.jsx)(s.p,{children:"Nota: se o list box ou coluna especificado utilizando os par\xe2metros objeto e * n\xe3o existir, o comando LISTBOX Get property devolve -1 para as propriedades num\xe9ricas ou uma string vazia."}),"\n",(0,n.jsxs)(s.p,{children:["No par\xe2metro ",(0,n.jsx)(s.em,{children:"propriedade"}),", passe um valor indicando o tipo de informa\xe7\xe3o que queira obter. Pode utilizar um valor ou uma das seguintes constantes do tema ",(0,n.jsx)(s.em,{children:"List box"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Constante"}),(0,n.jsx)(s.th,{children:"Valor"}),(0,n.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk allow wordwrap"}),(0,n.jsx)(s.td,{children:"14"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Retorno de linha"}),(0,n.jsx)(s.br,{}),"Aplica a: Coluna*",(0,n.jsx)(s.br,{}),"Valores poss\xedveis:",(0,n.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk auto row height"}),(0,n.jsx)(s.td,{children:"31"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Altura de fila autom\xe1tica"}),". ",(0,n.jsx)(s.br,{}),"Aplica a: List box ou coluna",(0,n.jsx)(s.br,{}),"Valores poss\xedveis:lk yes lk no",(0,n.jsx)(s.strong,{children:"4D View Pro apenas:"})," esta funcionalidade requer uma licen\xe7a 4D View Pro. Para mais informa\xe7\xe3o, consulte ",(0,n.jsx)(s.em,{children:"4D View Pro"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk background color expression"}),(0,n.jsx)(s.td,{children:"22"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"Propriedade Background Color Expression"})," para list box de tipo sele\xe7\xe3o",(0,n.jsx)(s.br,{}),"Aplica a: List box ou coluna"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk cell horizontal padding"}),(0,n.jsx)(s.td,{children:"36"}),(0,n.jsx)(s.td,{children:"Padding horizontal da c\xe9lula em pixels (mesmo valor para a dist\xe2ncia da borda ao conte\xfado a partir da esquerda ou direita) Se aplica a: list box, coluna, cabe\xe7alho rodap\xe9"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk cell vertical padding"}),(0,n.jsx)(s.td,{children:"37"}),(0,n.jsx)(s.td,{children:"Padding vertical da c\xe9lula em pixels (mesmo valor para a dist\xe2ncia do conte\xfado \xe0 borda superior ou inferior) Se aplica a: list box, coluna, cabe\xe7alho, rodap\xe9"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk column max width"}),(0,n.jsx)(s.td,{children:"26"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Maximum Width"}),(0,n.jsx)(s.br,{}),"Aplica a: Coluna*"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk column min width"}),(0,n.jsx)(s.td,{children:"25"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"Minimum Width"})," propriedade",(0,n.jsx)(s.br,{}),"Aplicada a: Coluna*"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk column resizable"}),(0,n.jsx)(s.td,{children:"15"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Resizable"})," ",(0,n.jsx)(s.br,{}),"Aplica a: Coluna*",(0,n.jsx)(s.br,{}),"Valores poss\xedveis:",(0,n.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk detail form name"}),(0,n.jsx)(s.td,{children:"19"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Detail Form Name"})," para a sele\xe7\xe3o de tipo list box ",(0,n.jsx)(s.br,{}),"Aplica a: List box"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk display footer"}),(0,n.jsx)(s.td,{children:"8"}),(0,n.jsx)(s.td,{children:"0=oculto, 1=mostrado"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk display header"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"0=oculto, 1=mostrado"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk display type"}),(0,n.jsx)(s.td,{children:"21"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Tipo de visualiza\xe7\xe3o"})," para colunas num\xe9ricas ",(0,n.jsx)(s.br,{}),"Aplica a: Coluna*",(0,n.jsx)(s.br,{}),"Valores poss\xedveis:**",(0,n.jsx)(s.br,{}),"**lk numeric format (0): mostra valores em formato num\xe9ricolk three states checkbox (1): mostra valores como caixas de sele\xe7\xe3o de tr\xeas estados"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk double click on row"}),(0,n.jsx)(s.td,{children:"18"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Duplo clique na linha"})," para os list box de tipo sele\xe7\xe3o",(0,n.jsx)(s.br,{}),"Aplica a: List box",(0,n.jsx)(s.br,{}),"Valores poss\xedveis:lk do nothing (0): n\xe3o desencadeia nenhuma a\xe7\xe3o autom\xe1ticalk edit record (1): mostra o registro correspondente em modo leitura-escrituralk display record (2): mostra o registro correspondente em modo de apenas leitura"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk extra rows"}),(0,n.jsx)(s.td,{children:"13"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Ocultar linhas vazias finais"})," ",(0,n.jsx)(s.br,{}),"Aplica a: List box",(0,n.jsx)(s.br,{}),"Valores poss\xedveis:**",(0,n.jsx)(s.br,{}),"**lk display (0)lk hide (1)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk font color expression"}),(0,n.jsx)(s.td,{children:"23"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Express\xe3o cor fonte"}),"para list box de tipo sele\xe7\xe3o",(0,n.jsx)(s.br,{}),"Aplica a: List box ou coluna"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk font style expression"}),(0,n.jsx)(s.td,{children:"24"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Express\xe3o estilo"})," para list boxes de tipo sele\xe7\xe3o e cole\xe7\xe3o",(0,n.jsx)(s.br,{}),"Aplica a: List box ou coluna",(0,n.jsx)(s.br,{})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk hide selection highlight"}),(0,n.jsx)(s.td,{children:"16"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Ocultar ressaltado de sele\xe7\xe3o"}),(0,n.jsx)(s.br,{}),"Aplica a: List box",(0,n.jsx)(s.br,{}),"Valores poss\xedveis:**",(0,n.jsx)(s.br,{}),"**lk no (0)lk yes (1)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk highlight set"}),(0,n.jsx)(s.td,{children:"27"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"Highlight Set"})," propriedade para sele\xe7\xe3o tipo list box",(0,n.jsx)(s.br,{}),"Aplica a: List box"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk hor scrollbar height"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Altura em pixels"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk movable rows"}),(0,n.jsx)(s.td,{children:"35"}),(0,n.jsxs)(s.td,{children:["A propriedade ",(0,n.jsx)(s.strong,{children:"Linhas m\xf3veis"})," para list box de tipo array ",(0,n.jsx)(s.br,{}),"Se aplica a: List box (excluindo o modo hier\xe1rquico) ",(0,n.jsx)(s.br,{}),"Valores poss\xedveis: lk no (0): as linhas n\xe3o podem ser movidas o se pueden mover durante execu\xe7\xe3o lk yes (1): as linhas podem ser movidas durante execu\xe7\xe3o (pr\xe9-determinado)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk multi style"}),(0,n.jsx)(s.td,{children:"30"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"Multi-style"})," propriedade ",(0,n.jsx)(s.br,{}),"Aplica a: Column*",(0,n.jsx)(s.br,{}),"Valores poss\xedveis:",(0,n.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk named selection"}),(0,n.jsx)(s.td,{children:"28"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Named Selection"})," para list box de tipo sele\xe7\xe3o",(0,n.jsx)(s.br,{}),"Aplica a: List box"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk resizing mode"}),(0,n.jsx)(s.td,{children:"11"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"Column Auto-Resizing"})," proriedade ",(0,n.jsx)(s.br,{}),"Aplica a: List box",(0,n.jsx)(s.br,{}),"Poss\xedveis valores:",(0,n.jsx)(s.br,{}),"lk manual (0)lk automatic (2)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk row height unit"}),(0,n.jsx)(s.td,{children:"17"}),(0,n.jsxs)(s.td,{children:["Unidade de propriedade ",(0,n.jsx)(s.strong,{children:"Row Height"})," ",(0,n.jsx)(s.br,{}),"Aplica a: List box",(0,n.jsx)(s.br,{}),"Poss\xedveis valores:**",(0,n.jsx)(s.br,{}),"**lk lines (1)",(0,n.jsx)(s.br,{}),"lk pixels (0)",(0,n.jsx)(s.br,{})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk selection mode"}),(0,n.jsx)(s.td,{children:"10"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Selection Mode"})," ",(0,n.jsx)(s.br,{}),"Aplica a: List box",(0,n.jsx)(s.br,{}),"Valores poss\xedveis: **",(0,n.jsx)(s.br,{}),"**lk none (0)",(0,n.jsx)(s.br,{}),"lk single (1)",(0,n.jsx)(s.br,{}),"lk multiple (2)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk single click edit"}),(0,n.jsx)(s.td,{children:"29"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Single-Click Edit"}),(0,n.jsx)(s.br,{}),"Aplica a: List box",(0,n.jsx)(s.br,{}),"Poss\xedveis valores:",(0,n.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk sortable"}),(0,n.jsx)(s.td,{children:"20"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"Propriedade"})," Sortable ",(0,n.jsx)(s.br,{}),"Aplica a: List box",(0,n.jsx)(s.br,{}),"Valores poss\xedveis:**",(0,n.jsx)(s.br,{}),"**lk no (0)lk yes (1)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk truncate"}),(0,n.jsx)(s.td,{children:"12"}),(0,n.jsxs)(s.td,{children:["Propriedade ",(0,n.jsx)(s.strong,{children:"Truncate with ellipsis"})," ",(0,n.jsx)(s.br,{}),"Aplica a: List box ou coluna",(0,n.jsx)(s.br,{}),"Valores possiveis:**",(0,n.jsx)(s.br,{}),"**lk without ellipsis (0)lk with ellipsis (1)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lk ver scrollbar width"}),(0,n.jsx)(s.td,{children:"5"}),(0,n.jsx)(s.td,{children:"Largura em pixels."})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"*Estas propriedades s\xf3 se aplicam \xe0s colunas list box; se passar um list box como par\xe2metro com uma destas propriedades, LISTBOX Get property devolve -1, ou uma string vazia, dependendo da propriedade passada."}),"\n",(0,n.jsx)(s.p,{children:"Em geral, para indicar um resultado n\xe3o v\xe1lido LISTBOX Get property devolve -1 ao recuperar as propriedades que t\xeam valores num\xe9ricos, ou uma string vazia; Entretanto, n\xe3o s\xe3o gerados erros. Mais espec\xedficamente, isto ocorre nos seguintes casos:"}),"\n",(0,n.jsxs)(s.p,{children:["Se passar uma propriedade que n\xe3o existir",(0,n.jsx)(s.br,{}),"\nSe passar uma propriedade que n\xe3o est\xe1 dispon\xedvel para a list box ou coluna especificada, por exemplo, pode passar a propriedade lk font color expression com um list box de tipo array",(0,n.jsx)(s.br,{}),"\nSe passar uma coluna como par\xe2metro com uma propriedade que se aplique a um list box, e viceversa, se passar um list box como par\xe2metro com uma propriedade que se aplique a uma coluna (ver acima *)"]}),"\n",(0,n.jsx)(s.p,{children:'Al\xe9m disso, n\xe3o \xe9 poss\xedvel devolver valores de mais de uma coluna por vez; se tentar utilizar o s\xedmbolo "@" a parte do nome de coluna para indicar v\xe1rias colunas com nomes similares, LISTBOX Get property devolve o primeiro valor coincidente que encontre; como resultado, o valor devolvido n\xe3o tem verdadeira import\xe2ncia.'}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"As constantes lk display footer e lk display header s\xe3o \xfateis para calcular o tamanho de uma \xe1rea de list box em um formul\xe1rio."}),"\n",(0,n.jsxs)(s.li,{children:["Quando utilize as constantes lk hor scrollbar position ou lk ver scrollbar position, o comando ",(0,n.jsx)(s.strong,{children:"LISTBOX Get property"})," devolve a posi\xe7\xe3o do cursor de rolagem em rela\xe7\xe3o com sua posi\xe7\xe3o original, ou seja, o tamanho da parte oculta da janela, expresso em p\xedxels. Como padr\xe3o, esta posi\xe7\xe3o corresponde a 0. Combinando, por exemplo, com informa\xe7\xe3o relativa \xe0 altura da fila, este valor lhe permite encontrar o conte\xfado mostrado no listbox. Entretanto, estas constantes s\xe3o obsoletas e podem ser substitu\xeddas pelo comando ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/object-get-scroll-position",children:"OBJECT GET SCROLL POSITION"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["A declara\xe7\xe3o ",(0,n.jsx)(s.strong,{children:"LISTBOX Get property"}),"(vLB;lk footer height) retorna o mesmo valor que o comando ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/listbox-get-footers-height",children:"LISTBOX Get footers height"})," quando rodap\xe9s s\xe3o exibidos. No entanto, se rodap\xe9s n\xe3o s\xe3o exibidos, ",(0,n.jsx)(s.strong,{children:"LISTBOX Get property"})," retornas 0 enquanto ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/listbox-get-footers-height",children:"LISTBOX Get footers height"})," ainda retorna a altura, neste caso te\xf3rico, dos rodap\xe9s."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(s.p,{children:'Dado um listbox"MyListbox", \xe9 executada a seguinte instru\xe7\xe3o:'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0$Value:=LISTBOX Get property(*;"MyListbox";lk selection mode)\xa0// o valor devolvido indica o modo de sele\xe7\xe3o\n'})}),"\n",(0,n.jsx)(s.p,{children:"Neste caso, o resultado devolvido indica se v\xe1rias linhas podem ser selecionadas."}),"\n",(0,n.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(s.p,{children:'Dado um list box "MyListbox", \xe9 executada a seguinte instru\xe7\xe3o:'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0$resizable:=LISTBOX Get property(*;"MyListbox";lk column resizable)\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"LISTBOX Get property"})," devolve -1 porque a propriedade lk column resizable aplica a colunas e um list box foi passado como par\xe2metro."]}),"\n",(0,n.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/listbox-set-property",children:"LISTBOX SET PROPERTY"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"})]}),"\n",(0,n.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"N\xfamero do comando"}),(0,n.jsx)(s.td,{children:"917"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Thread-seguro"}),(0,n.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return d}});var o=r(667294);let n={},i=o.createContext(n);function d(e){let s=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);