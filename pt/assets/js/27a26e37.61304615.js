"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89872"],{399919:function(e,o,n){n.r(o),n.d(o,{metadata:()=>r,contentTitle:()=>a,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/print-object","title":"Print object","description":"Print object ( { ;} objeto {; posX {; posY {; largura {; alto*}}}} ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/print-object.md","sourceDirName":"commands-legacy","slug":"/commands/print-object","permalink":"/docs/pt/commands/print-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-object","title":"Print object","slug":"/commands/print-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT LABEL","permalink":"/docs/pt/commands/print-label"},"next":{"title":"PRINT OPTION VALUES","permalink":"/docs/pt/commands/print-option-values"}}'),s=n("785893"),t=n("250065");let d={id:"print-object",title:"Print object",slug:"/commands/print-object",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Print object"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," {; ",(0,s.jsx)(o.em,{children:"posX"})," {; ",(0,s.jsx)(o.em,{children:"posY"})," {; ",(0,s.jsx)(o.em,{children:"largura"})," {; ",(0,s.jsx)(o.em,{children:"alto"}),"}}}} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se* for especificado) ou vari\xe1vel (se * \xe9 omitido)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"posX"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Localiza\xe7\xe3o horizontal do objeto"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"posY"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Localiza\xe7\xe3o Vertical do objeto"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"largura"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Largura do objeto (pixels)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"alto"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Altura do objeto (pixels)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Boolean"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Verdade = objeto impresso completamente; de outro modo False"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"Print object"})," permite imprimir ele ou os objetos de formul\xe1rio designado(s) pelos par\xe2metros ",(0,s.jsx)(o.em,{children:"objeto"})," e ",(0,s.jsx)(o.em,{children:"*"}),", na localiza\xe7\xe3o definida pelos par\xe2metros ",(0,s.jsx)(o.em,{children:"posX"})," e ",(0,s.jsx)(o.em,{children:"posY"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Antes de chamar o comando ",(0,s.jsx)(o.strong,{children:"Print object"}),", deve designar o formul\xe1rio tabela ou projeto que cont\xe9m os objetos a imprimir utilizando o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/form-load",children:"FORM LOAD"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," for um nome de objeto (cadeia de caracteres). Se n\xe3o passa o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"}),", est\xe1 indicando que ",(0,s.jsx)(o.em,{children:"objeto \xe9"})," uma vari\xe1vel. Neste caso, se passa uma refer\xeancia de vari\xe1vel (tipo de objeto unicamente) ao inv\xe9s de uma cadeia."]}),"\n",(0,s.jsxs)(o.p,{children:["Os par\xe2metros ",(0,s.jsx)(o.em,{children:"posX"})," e ",(0,s.jsx)(o.em,{children:"posY"})," especificam o ponto de partida para a impress\xe3o dele ou dos objeto(s). Estes valores devem ser expressos em p\xedxels. Se estes par\xe2metros se omitem, o objeto se imprime de acordo com sua localiza\xe7\xe3o no formul\xe1rio."]}),"\n",(0,s.jsxs)(o.p,{children:["Os par\xe2metros ",(0,s.jsx)(o.em,{children:"largura"})," e ",(0,s.jsx)(o.em,{children:"alto"})," se utilizam para especificar a largura e a altura do objeto de formul\xe1rio. O comando Print object n\xe3o trata objetos de tamanho vari\xe1vel. Deve utilizar o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-get-best-size",children:"OBJECT GET BEST SIZE"})," para manejar o tamanho dos objetos. Tamb\xe9m pode utilizar o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-get-best-size",children:"OBJECT GET BEST SIZE"})," para determinar o tamanho mais adequado para os objetos que contenham texto. Do mesmo modo, ",(0,s.jsx)(o.strong,{children:"Print object"})," n\xe3o provoca saltos de p\xe1gina autom\xe1ticos. Deve manej\xe1-los de acordo a suas necessidades."]}),"\n",(0,s.jsx)(o.p,{children:"Pode utilizar os comandos de 4D para modificar rapidamente as propriedades do objeto (cor, tamanho, etc)."}),"\n",(0,s.jsxs)(o.p,{children:["O comando devolve True se o objeto for impresso completamente e False se este n\xe3o for o caso, em outras palavras, se n\xe3o puder imprimir todos os dados associados com o objeto dentro do marco estabelecido. Normalmente, o comando devolve False quando se imprime um list box se todas as linhas do list box n\xe3o pode ser impressa. Neste caso, basta com chamar ao comando ",(0,s.jsx)(o.strong,{children:"Print object"})," v\xe1rias vezes at\xe9 que devolva True: um mecanismo espec\xedfico provoca de forma autom\xe1tica o deslocamento do conte\xfado do objeto depois de cada chamada. Se o usu\xe1rio cancelar a opera\xe7\xe3o de impress\xe3o, um erro \xe9 gerado -128, que pode interceptar utilizando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Notas"}),":"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"na vers\xe3o atual de 4D, s\xf3 os objetos de tipo list box tem este mecanismo (o comando sempre devolve True para qualquer outro tipo de objeto). Nas pr\xf3ximas vers\xf5es de 4D, este funcionamento se ampliar\xe1 a outros objetos com conte\xfados vari\xe1veis."}),"\n",(0,s.jsxs)(o.li,{children:["O comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/listbox-get-print-information",children:"LISTBOX GET PRINT INFORMATION"})," permite controlar o estado da impress\xe3o durante a opera\xe7\xe3o.\nO comando ",(0,s.jsx)(o.strong,{children:"Print object"})," s\xf3 pode ser utilizado no contexto de um trabalho de impress\xe3o aberto previamente com o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/open-printing-job",children:"OPEN PRINTING JOB"}),". Se n\xe3o se chama neste contexto, o comando n\xe3o faz nada. V\xe1rios comandos ",(0,s.jsx)(o.strong,{children:"Print object"})," podem chamar-se no mesmo trabalho de impress\xe3o."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),": as listas hier\xe1rquicas, os sub formul\xe1rios e as \xe1reas web n\xe3o podem ser impressas."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"Exemplo de impress\xe3o de dez objetos em um formul\xe1rio:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0PRINT SETTINGS\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OPEN PRINTING JOB\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM LOAD("PrintForm")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0x:=100\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0y:=50\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PRINTABLE AREA(hpaper;wpaper)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($i;1;10)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET BEST SIZE(*;"Obj"+String($i);bestwidth;bestheight)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$end:=Print object(*;"Obj"+String($i))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0y:=y+bestheight+15\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(y>hpaper)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0PAGE BREAK(>)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0y:=50\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0CLOSE PRINTING JOB\n\xa0End if\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Exemplo de impress\xe3o de um list box completo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0OPEN PRINTING JOB\n\xa0FORM LOAD("myForm")\n\xa0$Over:=False\n\xa0gError:=0\n\xa0ON ERR CALL("err")\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"List_Box")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"List_Box";lk printing is over;$Over)\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0\xa0\xa0\xa0If(gError=-128)\xa0//o usu\xe1rio cancelou a opera\xe7\xe3o\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$Over:=True\n\xa0\xa0\xa0\xa0End if\n\xa0Until($Over)\n\xa0CLOSE PRINTING JOB\n\xa0ON ERR CALL("")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/form-load",children:"FORM LOAD"})}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1095"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return a},a:function(){return d}});var r=n(667294);let s={},t=r.createContext(s);function d(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);