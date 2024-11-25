"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53099"],{952238:function(e,o,a){a.r(o),a.d(o,{metadata:()=>r,contentTitle:()=>t,default:()=>p,assets:()=>s,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"Concepts/interpreted-compiled","title":"Modos interpretado e compilado","description":"As aplica\xe7\xf5es 4D podem funcionar no modo interpretado ou compilado:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/interpreted.md","sourceDirName":"Concepts","slug":"/Concepts/interpreted-compiled","permalink":"/docs/pt/19/Concepts/interpreted-compiled","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Finterpreted.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"interpreted-compiled","title":"Modos interpretado e compilado"},"sidebar":"docs","previous":{"title":"Gest\xe3o de erros","permalink":"/docs/pt/19/Concepts/error-handling"},"next":{"title":"Componentes","permalink":"/docs/pt/19/Concepts/components"}}'),n=a("785893"),i=a("250065");let d={id:"interpreted-compiled",title:"Modos interpretado e compilado"},t=void 0,s={},c=[{value:"Diferen\xe7as entre c\xf3digo interpretado e compilado",id:"diferen\xe7as-entre-c\xf3digo-interpretado-e-compilado",level:2},{value:"Utiliza\xe7\xe3o de directivas de compila\xe7\xe3o com o Int\xe9rprete",id:"utiliza\xe7\xe3o-de-directivas-de-compila\xe7\xe3o-com-o-int\xe9rprete",level:2},{value:"Utilizar ponteiros para evitar redigitar",id:"utilizar-ponteiros-para-evitar-redigitar",level:2}];function l(e){let o={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["As aplica\xe7\xf5es 4D podem funcionar no modo ",(0,n.jsx)(o.strong,{children:"interpretado"})," ou ",(0,n.jsx)(o.strong,{children:"compilado"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"no modo interpretado, as declara\xe7\xf5es s\xe3o lidas e traduzidas em linguagem de m\xe1quina no momento da sua execu\xe7\xe3o. Pode adicionar ou modificar o c\xf3digo sempre que precisar, a aplica\xe7\xe3o \xe9 actualizada automaticamente."}),"\n",(0,n.jsx)(o.li,{children:"no modo compilado, todos os m\xe9todos s\xe3o lidos e traduzidos uma vez, na etapa de compila\xe7\xe3o. Posteriormente, a aplica\xe7\xe3o cont\xe9m apenas instru\xe7\xf5es de n\xedvel de montagem, j\xe1 n\xe3o \xe9 poss\xedvel editar o c\xf3digo."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"As vantagens da compila\xe7\xe3o s\xe3o:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Velocidade"}),": seu banco de dados \xe9 executa de 3 a 1.000 vezes mais r\xe1pido."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Verifica\xe7\xe3o de c\xf3digo"}),": sua aplica\xe7\xe3o de banco de dados se analisa para comprovar a coer\xeancia do c\xf3digo. S\xe3o detectados conflitos tanto l\xf3gicos como sint\xe1cticos."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Prote\xe7\xe3o:"}),": quando seu banco de dados for compilado, pode eliminar o c\xf3digo interpretado. Ent\xe3o, o banco de dados compilado \xe9 funcionalmente id\xeantico ao original, exceto que a estrutura e m\xe9todos n\xe3o pode ser vista ou modificada, seja de forma deliberada ou por acidente."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Aplica\xe7\xf5es independentes/stand alone com duplo clique"}),": os bancos compilados tamb\xe9m podem se transformar em aplica\xe7\xf5es independentes (arquivos.EXE) com seu proprio icone."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Modo preemptivo"}),": s\xf3 codigo compilado pode ser executado em processos preemptivos."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"diferen\xe7as-entre-c\xf3digo-interpretado-e-compilado",children:"Diferen\xe7as entre c\xf3digo interpretado e compilado"}),"\n",(0,n.jsx)(o.p,{children:"Apesar de aplica\xe7\xf5es funcionarem da mesma forma em modo compilado e interpretado, h\xe1 diferen\xe7as quando escrever c\xf3digo que ser\xe1 compilado. O 4D interpreter \xe9 mais flex\xedvel que o compilador."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Compilado"}),(0,n.jsx)(o.th,{children:"Interpretado"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xe3o pode ter um m\xe9todo com o mesmo nome que uma vari\xe1vel."}),(0,n.jsx)(o.td,{children:"Nenhum erro \xe9 gerado, mas prioridade \xe9 dada ao m\xe9todo"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:["Todas as vari\xe1veis devem ser digitadas, seja atrav\xe9s de uma diretiva do compilador (ex: ",(0,n.jsx)(o.code,{children:"C_LONGINT"}),"), ou pelo compilador no momento da compila\xe7\xe3o."]}),(0,n.jsx)(o.td,{children:"As vari\xe1veis podem ser digitadas no momento (mas n\xe3o \xe9 recomendado)"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xe3o \xe9 poss\xedvel alterar o tipo de dados de qualquer vari\xe1vel ou array."}),(0,n.jsx)(o.td,{children:"\xc9 poss\xedvel alterar o tipo de dados de uma vari\xe1vel ou de um array (n\xe3o recomendado)"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xe3o \xe9 poss\xedvel mudar um array unidimensional para um array bidimensional ou mudar um array bidimensional para uma array unidimensional."}),(0,n.jsx)(o.td,{children:"Poss\xedvel"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Embora o compilador v\xe1 digitar a vari\xe1vel por voc\xea, deve especificar o tipo de dados de uma vari\xe1vel utilizando as directivas do compilador quando o tipo de dados for amb\xedguo, como num formul\xe1rio."}),(0,n.jsx)(o.td,{})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:["A fun\xe7\xe3o ",(0,n.jsx)(o.code,{children:"Undefined"})," retorna sempre False para vari\xe1veis. As vari\xe1veis s\xe3o sempre definidas."]}),(0,n.jsx)(o.td,{})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:'Se tiver marcado a propriedade "Pode ser executado em processos preemptivos" para o m\xe9todo, o c\xf3digo n\xe3o deve chamar quaisquer comandos thread-unsafe ou outros m\xe9todos thread-unsafe.'}),(0,n.jsx)(o.td,{children:"As propriedades do processo preemptivo s\xe3o ignoradas"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsxs)(o.td,{children:["O comando ",(0,n.jsx)(o.code,{children:"IDLE"})," \xe9 necess\xe1rio para chamar 4D em loops espec\xedficos"]}),(0,n.jsx)(o.td,{children:"\xc9 sempre poss\xedvel interromper 4D"})]})]})]}),"\n",(0,n.jsx)(o.h2,{id:"utiliza\xe7\xe3o-de-directivas-de-compila\xe7\xe3o-com-o-int\xe9rprete",children:"Utiliza\xe7\xe3o de directivas de compila\xe7\xe3o com o Int\xe9rprete"}),"\n",(0,n.jsx)(o.p,{children:"Os bancos n\xe3o compilados n\xe3o exigem diretivas de compilador. O int\xe9rprete digita automaticamente cada vari\xe1vel em fun\xe7\xe3o de como \xe9 utilizada em cada declara\xe7\xe3o, e uma vari\xe1vel pode voltar a ser escrita livremente em todo o banco de dados"}),"\n",(0,n.jsx)(o.p,{children:"Por causa da flexibilidade, \xe9 poss\xedvel que um banco de dado possa atuar diretamente em modos interpretado e compilado."}),"\n",(0,n.jsx)(o.p,{children:"Por exemplo, se escrever:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"C_LONGINT(MyInt)\n"})}),"\n",(0,n.jsx)(o.p,{children:"e noutra parte do projecto, escreve-se:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"MyInt:=3.1416\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Neste exemplo, ",(0,n.jsx)(o.code,{children:"MyInt"})," \xe9 atribu\xeddo ao mesmo valor (3) nos modos interpretado e compilado, desde que a diretiva do compilador seja interpretada ",(0,n.jsx)(o.em,{children:"antes"})," da instru\xe7\xe3o de atribui\xe7\xe3o."]}),"\n",(0,n.jsx)(o.p,{children:"O interpretador 4D usa as diretivas do compilador para digitar vari\xe1veis. Quando o int\xe9rprete encontra uma diretiva do compilador, digita a vari\xe1vel de acordo com a diretiva. Se uma express\xe3o subsequente tentar atribuir um valor incorreto (por exemplo, atribuir um valor alfanum\xe9rico a uma vari\xe1vel num\xe9rica), a atribui\xe7\xe3o n\xe3o ser\xe1 efectuada e gerar\xe1 um erro."}),"\n",(0,n.jsx)(o.p,{children:"A ordem na qual as duas declara\xe7\xf5es aparecem \xe9 irrelevante para o compilador porque primeiro escaneia o banco inteiro por diretivas de compilador. O int\xe9rprete, por\xe9m, n\xe3o \xe9 sistem\xe1tico. Interpreta as instru\xe7\xf5es pela ordem em que s\xe3o executadas. Esta ordem, como \xe9 \xf3bvio, pode mudar de sess\xe3o para sess\xe3o, dependendo do que o utilizador faz. Por isso, \xe9 importante projetar seu banco de dados de forma que as diretivas de compilador sejam executadas antes de qualquer declara\xe7\xf5es que contenham vari\xe1veis declaradas."}),"\n",(0,n.jsx)(o.h2,{id:"utilizar-ponteiros-para-evitar-redigitar",children:"Utilizar ponteiros para evitar redigitar"}),"\n",(0,n.jsx)(o.p,{children:"Uma vari\xe1vel n\xe3o pode ser redigida de novo. No entanto, \xe9 poss\xedvel utilizar um ponteiro para fazer refer\xeancia a vari\xe1veis de diferentes tipos de dados. Por exemplo, o seguinte c\xf3digo \xe9 permitido nos modos interpretado e compilado:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'C_POINTER($p)\nC_TEXT($name)\nC_LONGINT($age)\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //alvo de texto para o ponteiro\n$p->:="Wesson" //atribui um valor de texto\n\n$p:=->$age  \n//novo alvo de tipo diferente para o ponteiro\n$p->:=55 //atribui um valor num\xe9rico\n'})}),"\n",(0,n.jsx)(o.p,{children:"Imagine uma fun\xe7\xe3o que devolve o comprimento (n\xfamero de caracteres) de valores que podem ser de qualquer tipo."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"  // Calc_Length (how many characters)\n  // $1 = pointer to flexible variable type, numeric, text, time, boolean C_POINTER($1)\nC_TEXT($result) C_LONGINT($0)\n$result:=String($1->)\n$0:=Length($result)\n"})}),"\n",(0,n.jsx)(o.p,{children:"Em seguida, este m\xe9todo pode ser chamado:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4) ALERT("Total length: "+String($vLength))\n'})})]})}function p(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return t},a:function(){return d}});var r=a(667294);let n={},i=r.createContext(n);function d(e){let o=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);