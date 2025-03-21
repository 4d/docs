"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8367"],{850360:function(e,s,n){n.r(s),n.d(s,{default:()=>x,frontMatter:()=>o,metadata:()=>r,assets:()=>t,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/listbox-set-property","title":"LISTBOX SET PROPERTY","description":"LISTBOX SET PROPERTY ( { ;} objeto ; propriedade ; valor* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-property.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-property","permalink":"/docs/pt/20-R7/commands/listbox-set-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-property","title":"LISTBOX SET PROPERTY","slug":"/commands/listbox-set-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET LOCKED COLUMNS","permalink":"/docs/pt/20-R7/commands/listbox-set-locked-columns"},"next":{"title":"LISTBOX SET ROW COLOR","permalink":"/docs/pt/20-R7/commands/listbox-set-row-color"}}'),d=n("785893"),i=n("250065");let o={id:"listbox-set-property",title:"LISTBOX SET PROPERTY",slug:"/commands/listbox-set-property",displayed_sidebar:"docs"},l=void 0,t={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"LISTBOX SET PROPERTY"})," ( {* ;} ",(0,d.jsx)(s.em,{children:"objeto"})," ; ",(0,d.jsx)(s.em,{children:"propriedade"})," ; ",(0,d.jsx)(s.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe2metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"*"}),(0,d.jsx)(s.td,{children:"Operador"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"objeto"}),(0,d.jsx)(s.td,{children:"any"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Nome de objeto (se * for especificado) ou Vari\xe1vel (se * for omitido)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"propriedade"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Propriedade List box ou coluna"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"valor"}),(0,d.jsx)(s.td,{children:"Integer, Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Valor de propriedade"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(s.p,{children:["O comando ",(0,d.jsx)(s.strong,{children:"LISTBOX SET PROPERTY"})," define o ",(0,d.jsx)(s.em,{children:"valor"})," da ",(0,d.jsx)(s.em,{children:"propriedade"})," da coluna list box ou list box especificada utilizando os par\xe2metros ",(0,d.jsx)(s.em,{children:"objeto"})," e ",(0,d.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Se passar o par\xe2metro opcional ",(0,d.jsx)(s.em,{children:"*"}),", indica que o par\xe2metro ",(0,d.jsx)(s.em,{children:"objeto \xe9"})," um nome de objeto (string). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,d.jsx)(s.em,{children:"objeto"})," for uma vari\xe1vel. Neste caso, se passar uma refer\xeancia vari\xe1vel ao inv\xe9s de uma string."]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Nota:"})," se o list box ou a coluna list box especificada utilizando os par\xe2metros ",(0,d.jsx)(s.em,{children:"objeto"})," e ",(0,d.jsx)(s.em,{children:"*"})," n\xe3o existe, o comando n\xe3o faz nada e n\xe3o se dispara nenhum erro."]}),"\n",(0,d.jsxs)(s.p,{children:["Nos par\xe2metros ",(0,d.jsx)(s.em,{children:"propriedade e valor"}),", se indica, respectivamente, a propriedade a definir utilizando seu novo valor. Pode usar uma das constantes do tema:\u201C",(0,d.jsx)(s.em,{children:"List box"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Constante"}),(0,d.jsx)(s.th,{children:"Valor"}),(0,d.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk allow wordwrap"}),(0,d.jsx)(s.td,{children:"14"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Retorno de linha"}),(0,d.jsx)(s.br,{}),"Aplica a: Coluna*",(0,d.jsx)(s.br,{}),"Valores poss\xedveis:",(0,d.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk auto row height"}),(0,d.jsx)(s.td,{children:"31"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Altura de fila autom\xe1tica"}),". ",(0,d.jsx)(s.br,{}),"Aplica a: List box ou coluna",(0,d.jsx)(s.br,{}),"Valores poss\xedveis:lk yes lk no",(0,d.jsx)(s.strong,{children:"4D View Pro apenas:"})," esta funcionalidade requer uma licen\xe7a 4D View Pro. Para mais informa\xe7\xe3o, consulte ",(0,d.jsx)(s.em,{children:"4D View Pro"}),"."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk background color expression"}),(0,d.jsx)(s.td,{children:"22"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.strong,{children:"Propriedade Background Color Expression"})," para list box de tipo sele\xe7\xe3o",(0,d.jsx)(s.br,{}),"Aplica a: List box ou coluna"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk cell horizontal padding"}),(0,d.jsx)(s.td,{children:"36"}),(0,d.jsx)(s.td,{children:"Padding horizontal da c\xe9lula em pixels (mesmo valor para a dist\xe2ncia da borda ao conte\xfado a partir da esquerda ou direita) Se aplica a: list box, coluna, cabe\xe7alho rodap\xe9"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk cell vertical padding"}),(0,d.jsx)(s.td,{children:"37"}),(0,d.jsx)(s.td,{children:"Padding vertical da c\xe9lula em pixels (mesmo valor para a dist\xe2ncia do conte\xfado \xe0 borda superior ou inferior) Se aplica a: list box, coluna, cabe\xe7alho, rodap\xe9"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk column max width"}),(0,d.jsx)(s.td,{children:"26"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Maximum Width"}),(0,d.jsx)(s.br,{}),"Aplica a: Coluna*"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk column min width"}),(0,d.jsx)(s.td,{children:"25"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.strong,{children:"Minimum Width"})," propriedade",(0,d.jsx)(s.br,{}),"Aplicada a: Coluna*"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk column resizable"}),(0,d.jsx)(s.td,{children:"15"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Resizable"})," ",(0,d.jsx)(s.br,{}),"Aplica a: Coluna*",(0,d.jsx)(s.br,{}),"Valores poss\xedveis:",(0,d.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk detail form name"}),(0,d.jsx)(s.td,{children:"19"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Detail Form Name"})," para a sele\xe7\xe3o de tipo list box ",(0,d.jsx)(s.br,{}),"Aplica a: List box"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk display footer"}),(0,d.jsx)(s.td,{children:"8"}),(0,d.jsx)(s.td,{children:"0=oculto, 1=mostrado"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk display header"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"0=oculto, 1=mostrado"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk display type"}),(0,d.jsx)(s.td,{children:"21"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Tipo de visualiza\xe7\xe3o"})," para colunas num\xe9ricas ",(0,d.jsx)(s.br,{}),"Aplica a: Coluna*",(0,d.jsx)(s.br,{}),"Valores poss\xedveis:**",(0,d.jsx)(s.br,{}),"**lk numeric format (0): mostra valores em formato num\xe9ricolk three states checkbox (1): mostra valores como caixas de sele\xe7\xe3o de tr\xeas estados"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk double click on row"}),(0,d.jsx)(s.td,{children:"18"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Duplo clique na linha"})," para os list box de tipo sele\xe7\xe3o",(0,d.jsx)(s.br,{}),"Aplica a: List box",(0,d.jsx)(s.br,{}),"Valores poss\xedveis:lk do nothing (0): n\xe3o desencadeia nenhuma a\xe7\xe3o autom\xe1ticalk edit record (1): mostra o registro correspondente em modo leitura-escrituralk display record (2): mostra o registro correspondente em modo de apenas leitura"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk extra rows"}),(0,d.jsx)(s.td,{children:"13"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Ocultar linhas vazias finais"})," ",(0,d.jsx)(s.br,{}),"Aplica a: List box",(0,d.jsx)(s.br,{}),"Valores poss\xedveis:**",(0,d.jsx)(s.br,{}),"**lk display (0)lk hide (1)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk font color expression"}),(0,d.jsx)(s.td,{children:"23"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Express\xe3o cor fonte"}),"para list box de tipo sele\xe7\xe3o",(0,d.jsx)(s.br,{}),"Aplica a: List box ou coluna"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk font style expression"}),(0,d.jsx)(s.td,{children:"24"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Express\xe3o estilo"})," para list boxes de tipo sele\xe7\xe3o e cole\xe7\xe3o",(0,d.jsx)(s.br,{}),"Aplica a: List box ou coluna",(0,d.jsx)(s.br,{})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk hide selection highlight"}),(0,d.jsx)(s.td,{children:"16"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Ocultar ressaltado de sele\xe7\xe3o"}),(0,d.jsx)(s.br,{}),"Aplica a: List box",(0,d.jsx)(s.br,{}),"Valores poss\xedveis:**",(0,d.jsx)(s.br,{}),"**lk no (0)lk yes (1)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk highlight set"}),(0,d.jsx)(s.td,{children:"27"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.strong,{children:"Highlight Set"})," propriedade para sele\xe7\xe3o tipo list box",(0,d.jsx)(s.br,{}),"Aplica a: List box"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk hor scrollbar height"}),(0,d.jsx)(s.td,{children:"3"}),(0,d.jsx)(s.td,{children:"Altura em pixels"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk meta expression"}),(0,d.jsx)(s.td,{children:"34"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Expression"})," ",(0,d.jsx)(s.strong,{children:"Meta Info"})," dos list box de tipo cole\xe7\xe3o ou sele\xe7\xe3o de entidades.",(0,d.jsx)(s.br,{}),"Aplica a: List box"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk movable rows"}),(0,d.jsx)(s.td,{children:"35"}),(0,d.jsxs)(s.td,{children:["A propriedade ",(0,d.jsx)(s.strong,{children:"Linhas m\xf3veis"})," para list box de tipo array ",(0,d.jsx)(s.br,{}),"Se aplica a: List box (excluindo o modo hier\xe1rquico) ",(0,d.jsx)(s.br,{}),"Valores poss\xedveis: lk no (0): as linhas n\xe3o podem ser movidas o se pueden mover durante execu\xe7\xe3o lk yes (1): as linhas podem ser movidas durante execu\xe7\xe3o (pr\xe9-determinado)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk multi style"}),(0,d.jsx)(s.td,{children:"30"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.strong,{children:"Multi-style"})," propriedade ",(0,d.jsx)(s.br,{}),"Aplica a: Column*",(0,d.jsx)(s.br,{}),"Valores poss\xedveis:",(0,d.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk named selection"}),(0,d.jsx)(s.td,{children:"28"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Named Selection"})," para list box de tipo sele\xe7\xe3o",(0,d.jsx)(s.br,{}),"Aplica a: List box"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk resizing mode"}),(0,d.jsx)(s.td,{children:"11"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.strong,{children:"Column Auto-Resizing"})," proriedade ",(0,d.jsx)(s.br,{}),"Aplica a: List box",(0,d.jsx)(s.br,{}),"Poss\xedveis valores:",(0,d.jsx)(s.br,{}),"lk manual (0)lk automatic (2)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk row height unit"}),(0,d.jsx)(s.td,{children:"17"}),(0,d.jsxs)(s.td,{children:["Unidade de propriedade ",(0,d.jsx)(s.strong,{children:"Row Height"})," ",(0,d.jsx)(s.br,{}),"Aplica a: List box",(0,d.jsx)(s.br,{}),"Poss\xedveis valores:**",(0,d.jsx)(s.br,{}),"**lk lines (1)",(0,d.jsx)(s.br,{}),"lk pixels (0)",(0,d.jsx)(s.br,{})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk selection mode"}),(0,d.jsx)(s.td,{children:"10"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Selection Mode"})," ",(0,d.jsx)(s.br,{}),"Aplica a: List box",(0,d.jsx)(s.br,{}),"Valores poss\xedveis: **",(0,d.jsx)(s.br,{}),"**lk none (0)",(0,d.jsx)(s.br,{}),"lk single (1)",(0,d.jsx)(s.br,{}),"lk multiple (2)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk single click edit"}),(0,d.jsx)(s.td,{children:"29"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Single-Click Edit"}),(0,d.jsx)(s.br,{}),"Aplica a: List box",(0,d.jsx)(s.br,{}),"Poss\xedveis valores:",(0,d.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk sortable"}),(0,d.jsx)(s.td,{children:"20"}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.strong,{children:"Propriedade"})," Sortable ",(0,d.jsx)(s.br,{}),"Aplica a: List box",(0,d.jsx)(s.br,{}),"Valores poss\xedveis:**",(0,d.jsx)(s.br,{}),"**lk no (0)lk yes (1)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk truncate"}),(0,d.jsx)(s.td,{children:"12"}),(0,d.jsxs)(s.td,{children:["Propriedade ",(0,d.jsx)(s.strong,{children:"Truncate with ellipsis"})," ",(0,d.jsx)(s.br,{}),"Aplica a: List box ou coluna",(0,d.jsx)(s.br,{}),"Valores possiveis:**",(0,d.jsx)(s.br,{}),"**lk without ellipsis (0)lk with ellipsis (1)"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lk ver scrollbar width"}),(0,d.jsx)(s.td,{children:"5"}),(0,d.jsx)(s.td,{children:"Largura em pixels."})]})]})]}),"\n",(0,d.jsxs)(s.p,{children:["*Estas propriedades s\xf3 podem ser aplicadas \xe0 colunas list box; Entretanto, se passar um list box como par\xe2metro, ",(0,d.jsx)(s.strong,{children:"LISTBOX SET PROPERTY"})," aplica a ",(0,d.jsx)(s.em,{children:"propriedade"})," a cada coluna de list box."]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Nota:"})," se passar uma ",(0,d.jsx)(s.em,{children:"propriedade"})," que n\xe3o existir, o que n\xe3o est\xe1 dispon\xedvel para o list box ou coluna especificado, por exemplo lk font style expression no caso de um list box de tipo array, o comando n\xe3o faz nada e n\xe3o se dispara nenhum erro."]}),"\n",(0,d.jsx)(s.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,d.jsx)(s.p,{children:'Se quiser ter certeza de que todas as colunas de list box "MyListbox" sejam redimension\xe1veis:'}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes)\xa0//Todas as colunas de list box "MyListbox" s\xe3o definidas como redimension\xe1veis\n'})}),"\n",(0,d.jsx)(s.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,d.jsx)(s.p,{children:'Se quiser definir a largura m\xe1xima da coluna "ProductNumber":'}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0LISTBOX SET PROPERTY(*;"ProductNumber";lk column max width;200)\xa0//Esta coluna ter\xe1 uma largura m\xe1xima de 200\n'})}),"\n",(0,d.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.em,{children:"List box"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/20-R7/commands/listbox-get-property",children:"LISTBOX Get property"})]}),"\n",(0,d.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"N\xfamero do comando"}),(0,d.jsx)(s.td,{children:"1440"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread-seguro"}),(0,d.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return o}});var r=n(667294);let d={},i=r.createContext(d);function o(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);