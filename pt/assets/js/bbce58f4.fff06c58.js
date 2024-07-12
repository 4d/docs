/*! For license information please see bbce58f4.fff06c58.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98654],{150556:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var r=a(474848),n=a(28453);const i={id:"interpreted-compiled",title:"Modos interpretado e compilado"},d=void 0,t={id:"Concepts/interpreted-compiled",title:"Modos interpretado e compilado",description:"Las aplicaciones 4D pueden funcionar en modo interpretado o compilado:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Concepts/interpreted.md",sourceDirName:"Concepts",slug:"/Concepts/interpreted-compiled",permalink:"/docs/pt/20-R5/Concepts/interpreted-compiled",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Finterpreted.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"interpreted-compiled",title:"Modos interpretado e compilado"},sidebar:"docs",previous:{title:"Gest\xe3o de erros",permalink:"/docs/pt/20-R5/Concepts/error-handling"},next:{title:"Componentes",permalink:"/docs/pt/20-R5/Concepts/components"}},s={},c=[{value:"Diferen\xe7as entre c\xf3digo interpretado e compilado",id:"diferen\xe7as-entre-c\xf3digo-interpretado-e-compilado",level:2},{value:"Utiliza\xe7\xe3o de directivas de compila\xe7\xe3o com o Int\xe9rprete",id:"utiliza\xe7\xe3o-de-directivas-de-compila\xe7\xe3o-com-o-int\xe9rprete",level:2},{value:"Utilizar ponteiros para evitar redigitar",id:"utilizar-ponteiros-para-evitar-redigitar",level:2}];function l(e){const o={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["Las aplicaciones 4D pueden funcionar en modo ",(0,r.jsx)(o.strong,{children:"interpretado"})," o ",(0,r.jsx)(o.strong,{children:"compilado"}),":"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"no modo interpretado, as declara\xe7\xf5es s\xe3o lidas e traduzidas em linguagem de m\xe1quina no momento da sua execu\xe7\xe3o. Pode adicionar ou modificar o c\xf3digo sempre que precisar, a aplica\xe7\xe3o \xe9 actualizada automaticamente."}),"\n",(0,r.jsx)(o.li,{children:"no modo compilado, todos os m\xe9todos s\xe3o lidos e traduzidos uma vez, na etapa de compila\xe7\xe3o. Posteriormente, a aplica\xe7\xe3o cont\xe9m apenas instru\xe7\xf5es de n\xedvel de montagem, j\xe1 n\xe3o \xe9 poss\xedvel editar o c\xf3digo."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"As vantagens da compila\xe7\xe3o s\xe3o:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Velocidad"}),": su base aplicaci\xf3n se ejecuta de 3 a 1.000 veces m\xe1s r\xe1pido."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Verificaci\xf3n del c\xf3digo"}),": su aplicaci\xf3n se analiza para comprobar la consistencia del c\xf3digo. S\xe3o detectados conflitos tanto l\xf3gicos como sint\xe1cticos."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Protecci\xf3n:"}),": una vez compilada su aplicaci\xf3n, puede eliminar el c\xf3digo interpretado. Ent\xe3o, o banco de dados compilado \xe9 funcionalmente id\xeantico ao original, exceto que a estrutura e m\xe9todos n\xe3o pode ser vista ou modificada, seja de forma deliberada ou por acidente."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Aplicaciones independientes con doble clic"}),": las aplicaciones compiladas tambi\xe9n pueden transformarse en aplicaciones aut\xf3nomas con su propio icono."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Modo apropiativo"}),": s\xf3lo se puede ejecutar c\xf3digo compilado en procesos apropiativos."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"diferen\xe7as-entre-c\xf3digo-interpretado-e-compilado",children:"Diferen\xe7as entre c\xf3digo interpretado e compilado"}),"\n",(0,r.jsx)(o.p,{children:"Apesar de aplica\xe7\xf5es funcionarem da mesma forma em modo compilado e interpretado, h\xe1 diferen\xe7as quando escrever c\xf3digo que ser\xe1 compilado. O 4D interpreter \xe9 mais flex\xedvel que o compilador."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Compilado"}),(0,r.jsx)(o.th,{children:"Interpretado"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xe3o pode ter um m\xe9todo com o mesmo nome que uma vari\xe1vel."}),(0,r.jsx)(o.td,{children:"Nenhum erro \xe9 gerado, mas prioridade \xe9 dada ao m\xe9todo"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsxs)(o.td,{children:["Todas las variables deben estar digitadas, ya sea mediante una declaraci\xf3n (utilizando las palabras claves ",(0,r.jsx)(o.code,{children:"var"}),", ",(0,r.jsx)(o.code,{children:"#Declare"}),", o ",(0,r.jsx)(o.code,{children:"Function"}),"), o por el compilador en tiempo de compilaci\xf3n."]}),(0,r.jsx)(o.td,{children:"As vari\xe1veis podem ser digitadas no momento (mas n\xe3o \xe9 recomendado)"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xe3o \xe9 poss\xedvel alterar o tipo de dados de qualquer vari\xe1vel ou array."}),(0,r.jsx)(o.td,{children:"\xc9 poss\xedvel alterar o tipo de dados de uma vari\xe1vel ou de um array (n\xe3o recomendado)"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xe3o \xe9 poss\xedvel mudar um array unidimensional para um array bidimensional ou mudar um array bidimensional para uma array unidimensional."}),(0,r.jsx)(o.td,{children:"Poss\xedvel"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Embora o compilador v\xe1 digitar a vari\xe1vel por voc\xea, deve especificar o tipo de dados de uma vari\xe1vel utilizando declara\xe7\xf5es quando o tipo de dados \xe9 amb\xedguo, como num formul\xe1rio."}),(0,r.jsx)(o.td,{})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsxs)(o.td,{children:["La funci\xf3n ",(0,r.jsx)(o.code,{children:"Undefined"})," siempre devuelve False para las variables. As vari\xe1veis s\xe3o sempre definidas."]}),(0,r.jsx)(o.td,{})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:'Se tiver marcado a propriedade "Pode ser executado em processos preemptivos" para o m\xe9todo, o c\xf3digo n\xe3o deve chamar quaisquer comandos thread-unsafe ou outros m\xe9todos thread-unsafe.'}),(0,r.jsx)(o.td,{children:"As propriedades do processo preemptivo s\xe3o ignoradas"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsxs)(o.td,{children:["El comando ",(0,r.jsx)(o.code,{children:"IDLE"})," es necesario para llamar a 4D en bucles espec\xedficos"]}),(0,r.jsx)(o.td,{children:"\xc9 sempre poss\xedvel interromper 4D"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"utiliza\xe7\xe3o-de-directivas-de-compila\xe7\xe3o-com-o-int\xe9rprete",children:"Utiliza\xe7\xe3o de directivas de compila\xe7\xe3o com o Int\xe9rprete"}),"\n",(0,r.jsx)(o.p,{children:"Os bancos n\xe3o compilados n\xe3o exigem diretivas de compilador. O int\xe9rprete digita automaticamente cada vari\xe1vel em fun\xe7\xe3o de como \xe9 utilizada em cada declara\xe7\xe3o, e uma vari\xe1vel pode voltar a ser escrita livremente em todo o banco de dados"}),"\n",(0,r.jsx)(o.p,{children:"Por causa da flexibilidade, \xe9 poss\xedvel que um banco de dado possa atuar diretamente em modos interpretado e compilado."}),"\n",(0,r.jsx)(o.p,{children:"Por exemplo, se escrever:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"var MyInt : Integer\n"})}),"\n",(0,r.jsx)(o.p,{children:"e noutra parte do projecto, escreve-se:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"MyInt:=3.1416\n"})}),"\n",(0,r.jsxs)(o.p,{children:["En este ejemplo, ",(0,r.jsx)(o.code,{children:"MyInt"})," se asigna el mismo valor (3) tanto en el modo interpretado como en el compilado, siempre que la directiva del compilador se interprete ",(0,r.jsx)(o.em,{children:"antes"})," de la declaraci\xf3n de asignaci\xf3n."]}),"\n",(0,r.jsx)(o.p,{children:"O interpretador 4D usa as diretivas do compilador para digitar vari\xe1veis. Quando o int\xe9rprete encontra uma diretiva do compilador, digita a vari\xe1vel de acordo com a diretiva. Se uma express\xe3o subsequente tentar atribuir um valor incorreto (por exemplo, atribuir um valor alfanum\xe9rico a uma vari\xe1vel num\xe9rica), a atribui\xe7\xe3o n\xe3o ser\xe1 efectuada e gerar\xe1 um erro."}),"\n",(0,r.jsx)(o.p,{children:"A ordem na qual as duas declara\xe7\xf5es aparecem \xe9 irrelevante para o compilador porque primeiro escaneia o banco inteiro por diretivas de compilador. O int\xe9rprete, por\xe9m, n\xe3o \xe9 sistem\xe1tico. Interpreta as instru\xe7\xf5es pela ordem em que s\xe3o executadas. Esta ordem, como \xe9 \xf3bvio, pode mudar de sess\xe3o para sess\xe3o, dependendo do que o utilizador faz. Por isso, \xe9 importante projetar seu banco de dados de forma que as diretivas de compilador sejam executadas antes de qualquer declara\xe7\xf5es que contenham vari\xe1veis declaradas."}),"\n",(0,r.jsx)(o.h2,{id:"utilizar-ponteiros-para-evitar-redigitar",children:"Utilizar ponteiros para evitar redigitar"}),"\n",(0,r.jsx)(o.p,{children:"Uma vari\xe1vel n\xe3o pode ser redigida de novo. No entanto, \xe9 poss\xedvel utilizar um ponteiro para fazer refer\xeancia a vari\xe1veis de diferentes tipos de dados. Por exemplo, o seguinte c\xf3digo \xe9 permitido nos modos interpretado e compilado:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'var $p : Pointer\nvar $name : Text\nvar $age : Integer\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //texto objetivo para el puntero\n$p->:="Wesson" //asigna un valor texto\n\n$p:=->$age  \n// nuevo objetivo de tipo diferente para el puntero\n$p->:=55 //asigna un valor\n'})}),"\n",(0,r.jsx)(o.p,{children:"Imagine uma fun\xe7\xe3o que devolve o comprimento (n\xfamero de caracteres) de valores que podem ser de qualquer tipo."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"  // Calc_Length (quantos caracteres)\n  // $vp = ponteiro para tipo de vari\xe1vel flex\xedvel, num\xe9rico, texto, tempo, booleano\n\n#DECLARE($vp : Pointer) -> $length : Integer\nvar $result : Text  \n$result:=String($vp->)\n$length:=Length($result)\n"})}),"\n",(0,r.jsx)(o.p,{children:"Em seguida, este m\xe9todo pode ser chamado:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)\n\nALERT("Total length: "+String($vLength))\n'})})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,o,a)=>{var r=a(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,a){var r,i={},c=null,l=null;for(r in void 0!==a&&(c=""+a),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)d.call(o,r)&&!s.hasOwnProperty(r)&&(i[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return{$$typeof:n,type:e,key:c,ref:l,props:i,_owner:t.current}}o.Fragment=i,o.jsx=c,o.jsxs=c},474848:(e,o,a)=>{e.exports=a(221020)},28453:(e,o,a)=>{a.d(o,{R:()=>d,x:()=>t});var r=a(296540);const n={},i=r.createContext(n);function d(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);