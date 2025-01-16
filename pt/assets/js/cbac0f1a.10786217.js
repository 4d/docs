"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40674"],{13027:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/st-get-expression","title":"ST Get expression","description":"ST Get expression ( { ;} objeto {; inicioSel {; fimSel*}} )  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-get-expression.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-expression","permalink":"/docs/pt/commands/st-get-expression","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-expression.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-get-expression","title":"ST Get expression","slug":"/commands/st-get-expression","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST Get content type","permalink":"/docs/pt/commands/st-get-content-type"},"next":{"title":"ST GET OPTIONS","permalink":"/docs/pt/commands/st-get-options"}}'),t=o("785893"),r=o("250065");let i={id:"st-get-expression",title:"ST Get expression",slug:"/commands/st-get-expression",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ST Get expression"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," {; ",(0,t.jsx)(n.em,{children:"inicioSel"})," {; ",(0,t.jsx)(n.em,{children:"fimSel"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nome de objeto (se * for especificado) ou",(0,t.jsx)(n.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"inicioSel"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Inicio da sele\xe7\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fimSel"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Fim da sele\xe7\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Etiqueta da express\xe3o"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"ST Get expression"})," devolve a primeira express\xe3o que se encontra na sele\xe7\xe3o atual do campo ou da vari\xe1vel de texto com estilo designada pelo par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'O comando devolve a etiqueta da express\xe3o, como foi inserida no objeto (por exemplo, "mymethod" ou "[tabela1]campo1"). N\xe3o se devolve o valor atual da express\xe3o.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),': este comando devolve nomes "reais" para os campos e as tabelas, mesmo se tiver sido definida uma estrutura "virtual" utilizando os comandos ',(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-table-titles",children:"SET TABLE TITLES"})," e ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/set-field-titles",children:"SET FIELD TITLES"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Durante a execu\xe7\xe3o, se o objeto tem o foco, o comando devolve a informa\xe7\xe3o do objeto que se est\xe1 editando, e se o objeto n\xe3o tem o foco, o comando devolve a informa\xe7\xe3o da fonte de dados do objeto (vari\xe1vel ou campo).",(0,t.jsx)(n.br,{}),"\nSe omitir o par\xe2metro ",(0,t.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel no lugar de uma cadeia. Durante a execu\xe7\xe3o, o comando devolve a informa\xe7\xe3o da vari\xe1vel ou do campo."]}),"\n",(0,t.jsxs)(n.p,{children:["Os par\xe2metros opcionais ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"})," designam uma sele\xe7\xe3o de texto em ",(0,t.jsx)(n.em,{children:"objeto"}),". Os valores ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"})," expressam uma sele\xe7\xe3o de texto plano, sem ter em conta etiquetas de estilo que podem estar presentes no texto."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Se passar ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"}),", ",(0,t.jsx)(n.strong,{children:"ST Get expression"})," procura a express\xe3o ao interior desta sele\xe7\xe3o."]}),"\n",(0,t.jsxs)(n.li,{children:["Se passar unicamente ",(0,t.jsx)(n.em,{children:"inicioSel"})," ou se o valor de ",(0,t.jsx)(n.em,{children:"fimSel"})," \xe9 maior que o n\xfamero total de caracteres no ",(0,t.jsx)(n.em,{children:"objeto"}),", o comando busca a express\xe3o entre ",(0,t.jsx)(n.em,{children:"inicioSel"})," e o final do texto ."]}),"\n",(0,t.jsxs)(n.li,{children:["Se omitir ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"}),", o comando busca a express\xe3o dentro da sele\xe7\xe3o de texto atual."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["4D oferece constantes pr\xe9 definidas para que possa designar automaticamente os limites de sele\xe7\xe3o nos par\xe2metros ",(0,t.jsx)(n.em,{children:"inicioSel"})," e ",(0,t.jsx)(n.em,{children:"fimSel"}),'. Estas constantes se encontram no tema "',(0,t.jsx)(n.em,{children:"Texto multi estilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST End highlight"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"-1001"}),(0,t.jsx)(n.td,{children:"Designa o \xfaltimo caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST End text"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Designa o \xfaltimo caractere do texto contido no objeto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST Start highlight"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"-1000"}),(0,t.jsx)(n.td,{children:"Designa o primeiro caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST Start text"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Designa o primeiro caractere do texto contido no objeto"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(*) Deve passar um nome de objeto em ",(0,t.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Se passar uma refer\xeancia a um campo ou vari\xe1vel, o comando se aplica a todo o texto do objeto."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": Se ",(0,t.jsx)(n.em,{children:"inicioSel"})," \xe9 maior que ",(0,t.jsx)(n.em,{children:"fimSel"})," (exceto quando ",(0,t.jsx)(n.em,{children:"fimSel"})," \xe9 0) , o comando n\xe3o faz nada e a vari\xe1vel OK toma o valor 0."]}),"\n",(0,t.jsx)(n.p,{children:"Se n\xe3o se encontra uma express\xe3o na sele\xe7\xe3o, o comando devolve uma cadeia vazia."}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Quando h\xe1 um evento clique duplo, voc\xea comprova que existe uma express\xe3o, e assim \xe9 mostrado um di\xe1logo no qual recuperaram seus valores para que o usu\xe1rio possa modificar eles:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Double Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST Expression type)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vExpression:=ST Get expression(*;"StyledText_t";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$winRef:=Open form window("Dial_InsertExpr";Movable form dialog box;Horizontally centered;Vertically centered;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DIALOG("Dial_InsertExpr")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ST INSERT EXPRESSION(*;"StyledText_t";vExpression;startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIGHLIGHT TEXT(*;"StyledText_t";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Voc\xea quer executar um m\xe9todo 4D quando \xe9 feito clique em um link de um usu\xe1rio:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0//recuperamos a sele\xe7\xe3o\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIGHLIGHT TEXT(*;"myText";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(startSel#endSel)\xa0//h\xe1 conte\xfado selecionado\n\xa0\xa0//obtemos o tipo do conte\xfado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$CT_type:=ST Get content\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Type(*;"myText";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($CT_type=ST User type)\xa0//this is a user link\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MyMethod\xa0//executamos um m\xe9todo 4D\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1287"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return i}});var s=o(667294);let t={},r=s.createContext(t);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);