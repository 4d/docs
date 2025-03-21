"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35245"],{557528:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/listbox-select-break","title":"LISTBOX SELECT BREAK","description":"LISTBOX SELECT BREAK ( { ;} objeto ; fila ; coluna {; a\xe7ao*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-select-break.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-select-break","permalink":"/docs/pt/20-R7/commands/listbox-select-break","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-select-break.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-select-break","title":"LISTBOX SELECT BREAK","slug":"/commands/listbox-select-break","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX MOVED ROW NUMBER","permalink":"/docs/pt/20-R7/commands/listbox-moved-row-number"},"next":{"title":"LISTBOX SELECT ROW","permalink":"/docs/pt/20-R7/commands/listbox-select-row"}}'),o=s("785893"),i=s("250065");let d={id:"listbox-select-break",title:"LISTBOX SELECT BREAK",slug:"/commands/listbox-select-break",displayed_sidebar:"docs"},t=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX SELECT BREAK"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ; ",(0,o.jsx)(n.em,{children:"fila"})," ; ",(0,o.jsx)(n.em,{children:"coluna"})," {; ",(0,o.jsx)(n.em,{children:"a\xe7ao"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome de objeto (se* for especificado) ou vari\xe1vel (se * \xe9 omitido)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"fila"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de quebra de fila"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"coluna"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de quebra de coluna"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"a\xe7ao"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"A\xe7\xe3o de sele\xe7\xe3o"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando LISTBOX SELECT BREAK  se utiliza para selecionar linhas de quebra no objeto list box designado pelos par\xe2metros ",(0,o.jsx)(n.em,{children:"objeto"})," e ",(0,o.jsx)(n.em,{children:"*"}),". O list box deve ser mostrado em modo hier\xe1rquico."]}),"\n",(0,o.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, se passa uma refer\xeancia de vari\xe1vel ao inv\xe9s de uma string."]}),"\n",(0,o.jsxs)(n.p,{children:["As linhas de ruptura s\xe3o adicionadas para representar a hierarquia, pero no correspondem as l\xednhas existentes no array. Para designar uma linha de ruptura a selecionar, deve passarnos par\xe2metros l\xednha e coluna o n\xfamero de linha e de coluna correspondente a primeira ocorr\xeancia no array correspondente. Estes valores s\xe3o devolvidos pelo comando ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/listbox-get-cell-position",children:"LISTBOX GET CELL POSITION"}),' quando o usu\xe1rio for selecionado uma linha de quebra. Este princ\xedpio \xe9 descrito no par\xe1grafo "Gest\xe3o das linhas de quebra" da se\xe7\xe3o ',(0,o.jsx)(n.em,{children:"List box hier\xe1rquicas"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro ",(0,o.jsx)(n.em,{children:"a\xe7\xe3o"}),', se for passada, pode definir a a\xe7\xe3o de sele\xe7\xe3o que devem ser realizadas quando uma sele\xe7\xe3o de linhas de quebra existe no list box. Pode passar um valor ou uma das constantes a seguir, que seja encontrado no tema "',(0,o.jsx)(n.em,{children:"List box"}),'" o tema:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk add to selection"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"A linha selecionada \xe9 adicionada \xe0 sele\xe7\xe3o existente. Se a linha selecionada j\xe1 pertence \xe0 sele\xe7\xe3o existente, o comando n\xe3o faz nada."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk remove from selection"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"A linha selecionada \xe9 removida da sele\xe7\xe3o existente. Se a linha especificada n\xe3o pertence \xe0 sele\xe7\xe3o existente, o comando n\xe3o faz nada."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk replace selection"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsxs)(n.td,{children:["A linha selecionada torna-se a nova sele\xe7\xe3o e substitui a sele\xe7\xe3o existente. O comando tem o mesmo efeito que um clique do usu\xe1rio em uma linha (no entanto, o evento On Clicked n\xe3o \xe9 gerado). Esta \xe9 a a\xe7\xe3o padr\xe3o (se o par\xe2metro ",(0,o.jsx)(n.em,{children:"a\xe7\xe3o"})," \xe9 omitido)."]})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," se tiver selecionado a op\xe7\xe3o ",(0,o.jsx)(n.strong,{children:"Ocultar o ressaltado de sele\xe7\xe3o"})," para um:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["tem que fazer sele\xe7\xf5es de list box vis\xedveis utilizando op\xe7\xf5es de interface dispon\xedveis. Para mas informa\xe7\xe3o sobre como fazer isso, ver ",(0,o.jsx)(n.em,{children:"Personalizar a apar\xeancia"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["n\xe3o pode ressaltar as linhas de ruptura para os list boxes hier\xe1rquicos neste caso (ver ",(0,o.jsx)(n.em,{children:"Limita\xe7\xf5es de list boxes hier\xe1rquicas"}),")."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Dados os arrays a seguir representados num list box:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(930089).Z+"",width:"414",height:"230"})}),"\n",(0,o.jsx)(n.p,{children:'Queremos selecionar a linha de quebra "Normandy" na representa\xe7\xe3o hier\xe1rquica destes arrays:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0$row:=Find in array(T2;"Normandy")\n\xa0$column:=2\n\xa0LISTBOX COLLAPSE(*;"MyListbox")\xa0//contra\xe7\xe3o de todos os n\xedveis\n\xa0LISTBOX SELECT BREAK(*;"MyListbox";$row;$column)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Este \xe9 o resultado:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(961175).Z+"",width:"251",height:"88"})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/listbox-select-row",children:" LISTBOX SELECT ROW "}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/listbox-get-cell-position",children:"LISTBOX GET CELL POSITION"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1117"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},930089:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict185052.en-6abd6f637ccd25c02e71b2ef1052f3ac.png"},961175:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var r=s(667294);let o={},i=r.createContext(o);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);