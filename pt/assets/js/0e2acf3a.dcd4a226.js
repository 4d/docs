"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44395"],{53232:function(e,n,o){o.r(n),o.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>l,assets:()=>i,toc:()=>m,frontMatter:()=>t});var a=JSON.parse('{"id":"commands-legacy/object-set-help-tip","title":"OBJECT SET HELP TIP","description":"OBJECT SET HELP TIP ( { ;} objeto ; mensagemAjuda* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-help-tip.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-help-tip","permalink":"/docs/pt/commands/object-set-help-tip","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-help-tip.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-help-tip","title":"OBJECT SET HELP TIP","slug":"/commands/object-set-help-tip","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FORMAT","permalink":"/docs/pt/commands/object-set-format"},"next":{"title":"OBJECT SET HORIZONTAL ALIGNMENT","permalink":"/docs/pt/commands/object-set-horizontal-alignment"}}'),s=o("785893"),d=o("250065");let t={id:"object-set-help-tip",title:"OBJECT SET HELP TIP",slug:"/commands/object-set-help-tip",displayed_sidebar:"docs"},r=void 0,i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT SET HELP TIP"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"mensagemAjuda"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mensagemAjuda"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Conte\xfado da mensagem de Ajuda"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"OBJECT SET HELP TIP"})," permite definir ou modificar dinamicamente a mensagem de ajuda associado ao objeto ou aos objetos designados pelos par\xe2metros ",(0,s.jsx)(n.em,{children:"objeto"})," e ",(0,s.jsx)(n.em,{children:"*"})," para o processo atual."]}),"\n",(0,s.jsxs)(n.p,{children:["Passa-se o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, isto indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, se passa uma referencia de vari\xe1vel em lugar de uma cadeia."]}),"\n",(0,s.jsxs)(n.p,{children:["Passe o conte\xfado da mensagem no par\xe2metro ",(0,s.jsx)(n.em,{children:"mensagemAjuda"}),". Pode passar:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'uma cadeia de caracteres, por exemplo "Utilize ele / como separador",'}),"\n",(0,s.jsx)(n.li,{children:'uma cadeia vazia "" para eliminar o mensagem de ajuda,'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Quando o formul\xe1rio executa-se, as mensagens de ajuda aparecem como mensagens de ajuda quando o cursor passa sobre o campo de objeto. Os mensagens de ajuda tamb\xe9m podem definir-se utilizando Tips delay e os seletores do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Quando aparece uma mensagem de ajuda, chamando ao comando ",(0,s.jsx)(n.strong,{children:"OBJECT SET HELP TIP"})," se fecha, abre uma nova mensagem no local do mouse e reinicia o contador Tips duration, permitindo o manejo din\xe2mico das sugest\xf5es."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["O conte\xfado da mensagem de ajuda tamb\xe9m pode ser definida utilizando o editor de formul\xe1rios (ver ",(0,s.jsx)(n.em,{children:"Controles de entrada de dados e ajuda de entrada"}),") e o editor de estrutura (ver ",(0,s.jsx)(n.em,{children:"Propriedades Campo"}),") em modo Desenho."]}),"\n",(0,s.jsxs)(n.li,{children:["Os conselhos de ajuda podem ser desativados globalmente para a aplica\xe7\xe3o utilizando o seletor Tips enabled do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Neste formul\xe1rio, uma mensagem de ajuda se visualiza e muda dinamicamente quando o mouse passar sobre diferentes partes de um bot\xe3o de imagem:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(469059).Z+"",width:"310",height:"308"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9todo objeto "myFlag"\n\xa0\n\xa0var $x;$y;oldX;oldY : Real\n\xa0var $left;$right;$top;$bottom : Real\n\xa0var $b : Integer\n\xa0var $tip : Text\n\xa0var oldTip : Text\n\xa0var $doRefresh : Boolean\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0oldTip:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Tips enabled;1)\xa0//Para ter certeza que os conselhos est\xe3o habilitados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Tips delay;0)\xa0// Sugest\xe3o mostrada imediatamente ao deter o mouse\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Tips duration;60*10)\xa0// 10 segundos m\xe1ximo de visualiza\xe7\xe3o\n\xa0\xa0\xa0\xa0:(FORM Event=On Mouse Move)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MOUSE POSITION($x;$y;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"myFlag";$left;$top;$right;$bottom)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$x:=$x-$left\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$y:=$y-$top\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\xa0//cada parte da bander \xe9 de 76 p\xedxels\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($x<76)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$tip:="Green color"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($x<152)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$tip:="White color"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$tip:="Orange color"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$doRefresh:=($tip#oldtip)\xa0//true se a mensagem for diferente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not($doRefresh))\xa0//os mesmos conte\xfados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$doRefresh:=((Abs($x-oldX)>30)|(Abs($y-oldY)>30))\xa0//true se mover o\xa0 cursor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($doRefresh)\xa0//mostrar outra mensagem\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET HELP TIP(*;"myFlag";$tip)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0oldX:=$x\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0oldY:=$y\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0oldTip:=$tip\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:'Se tiver um list box, "Commands List", que contenha uma lista e quiser definir uma mensagem de ajuda que mostre a descri\xe7\xe3o de cada elemento de lista. A descri\xe7\xe3o se encontra na tabela [Documentation].'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $mouseX;$mouseY;$mouseZ : Real\n\xa0var $col;$row : Integer\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Mouse Enter)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Tips delay;1)\xa0// faz com que a mensagem apare\xe7a rapidamente\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Mouse Move)\n\xa0\n\xa0\xa0//#1 : encontra a fila que se se moveu\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MOUSE POSITION($mouseX;$mouseY;$mouseZ)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL POSITION(*;"Commands List";$mouseX;$mouseY;$col;$row)\n\xa0\n\xa0\xa0//#2 : configure a mensagem de ajuda correspondente\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($row#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Documentation];$row)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET HELP TIP(*;"Commands List";[Documentation]Description)\xa0// A descri\xe7\xe3o completa se utilizar\xe1 como "mensagem de ajuda" quando (se) o mouse deixar de se mover.\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Mouse Leave)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Tips delay;3)\xa0// faz com que a mensagem apare\xe7a normalmente\n\xa0\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.p,{children:"O resultado \xe9..."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(923856).Z+"",width:"798",height:"301"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/object-get-help-tip",children:"OBJECT Get help tip"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},469059:function(e,n,o){o.d(n,{Z:function(){return a}});let a=o.p+"assets/images/pict3351402.en-bc3f26a11a848895948f2a0373a7b802.png"},923856:function(e,n,o){o.d(n,{Z:function(){return a}});let a=o.p+"assets/images/pict3529022.en-d220f22ac9cb14ab7204172fa22b252b.png"},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return t}});var a=o(667294);let s={},d=a.createContext(s);function t(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);