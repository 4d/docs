"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3017"],{363363:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>t,contentTitle:()=>l});var i=JSON.parse('{"id":"Concepts/interpreted-compiled","title":"Modos interpretado y compilado","description":"Las aplicaciones 4D pueden funcionar en modo interpretado o compilado:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Concepts/interpreted.md","sourceDirName":"Concepts","slug":"/Concepts/interpreted-compiled","permalink":"/docs/es/20-R6/Concepts/interpreted-compiled","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Finterpreted.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"interpreted-compiled","title":"Modos interpretado y compilado"},"sidebar":"docs","previous":{"title":"Gesti\xf3n de errores","permalink":"/docs/es/20-R6/Concepts/error-handling"},"next":{"title":"Componentes","permalink":"/docs/es/20-R6/Concepts/components"}}'),r=a("785893"),o=a("250065");let s={id:"interpreted-compiled",title:"Modos interpretado y compilado"},l=void 0,d={},t=[{value:"Diferencias entre el c\xf3digo interpretado y el compilado",id:"diferencias-entre-el-c\xf3digo-interpretado-y-el-compilado",level:2},{value:"Utilizar las directivas del compilador con el int\xe9rprete",id:"utilizar-las-directivas-del-compilador-con-el-int\xe9rprete",level:2},{value:"Utilizaci\xf3n de punteros para evitar la reescritura",id:"utilizaci\xf3n-de-punteros-para-evitar-la-reescritura",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Las aplicaciones 4D pueden funcionar en modo ",(0,r.jsx)(n.strong,{children:"interpretado"})," o ",(0,r.jsx)(n.strong,{children:"compilado"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"en modo interpretado, las declaraciones se leen y se traducen en lenguaje m\xe1quina en el momento de su ejecuci\xf3n. Puede a\xf1adir o modificar el c\xf3digo siempre que lo necesite, la aplicaci\xf3n se actualiza autom\xe1ticamente."}),"\n",(0,r.jsx)(n.li,{children:"en modo compilado, todos los m\xe9todos se leen y traducen una vez, en el paso de compilaci\xf3n. Despu\xe9s, la aplicaci\xf3n s\xf3lo contiene instrucciones a nivel de ensamblaje, ya no es posible editar el c\xf3digo."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Las ventajas de la compilaci\xf3n son:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Velocidad"}),": su base aplicaci\xf3n se ejecuta de 3 a 1.000 veces m\xe1s r\xe1pido."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Verificaci\xf3n del c\xf3digo"}),": su aplicaci\xf3n se analiza para comprobar la consistencia del c\xf3digo. Se detectan tanto los conflictos l\xf3gicos como los sint\xe1cticos."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Protecci\xf3n:"}),": una vez compilada su aplicaci\xf3n, puede eliminar el c\xf3digo interpretado. Entonces, la aplicaci\xf3n compilada es funcionalmente id\xe9ntica a la original, excepto que la estructura y los m\xe9todos no pueden ser vistos o modificados, deliberada o inadvertidamente."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Aplicaciones independientes con doble clic"}),": las aplicaciones compiladas tambi\xe9n pueden transformarse en aplicaciones aut\xf3nomas con su propio icono."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Modo apropiativo"}),": s\xf3lo se puede ejecutar c\xf3digo compilado en procesos apropiativos."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"diferencias-entre-el-c\xf3digo-interpretado-y-el-compilado",children:"Diferencias entre el c\xf3digo interpretado y el compilado"}),"\n",(0,r.jsx)(n.p,{children:"Aunque la aplicaci\xf3n funcionar\xe1 de la misma manera en modo interpretado y compilado, hay algunas diferencias que hay que conocer cuando se escribe c\xf3digo que ser\xe1 compilado. El int\xe9rprete de 4D suele ser m\xe1s flexible que el compilador."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Compilado"}),(0,r.jsx)(n.th,{children:"Interpretado"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No se puede tener un m\xe9todo con el mismo nombre que una variable."}),(0,r.jsx)(n.td,{children:"No se genera ning\xfan error, pero se da prioridad al m\xe9todo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Todas las variables deben estar digitadas, ya sea mediante una declaraci\xf3n (utilizando las palabras claves ",(0,r.jsx)(n.code,{children:"var"}),", ",(0,r.jsx)(n.code,{children:"#Declare"}),", o ",(0,r.jsx)(n.code,{children:"Function"}),"), o por el compilador en tiempo de compilaci\xf3n."]}),(0,r.jsx)(n.td,{children:"Las variables se pueden escribir sobre la marcha (no se recomienda)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No se puede cambiar el tipo de datos de ninguna variable o array."}),(0,r.jsx)(n.td,{children:"Es posible cambiar el tipo de datos de una variable o un array (no se recomienda)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"No se puede cambiar un array unidimensional a uno bidimensional, ni cambiar un array bidimensional a uno unidimensional."}),(0,r.jsx)(n.td,{children:"Posible"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Aunque el compilador escribir\xe1 la variable por usted, debe especificar el tipo de datos de una variable mediante declaraciones en las que el tipo de datos sea ambiguo, como en un formulario."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:"Undefined"})," siempre devuelve False para las variables. Las variables siempre est\xe1n definidas."]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'Si has marcado la propiedad "Puede ser ejecutado en procesos apropiativos" para el m\xe9todo, el c\xf3digo no debe llamar a ning\xfan comando hilo no seguro u otros m\xe9todos hilo no seguro.'}),(0,r.jsx)(n.td,{children:"Se ignoran las propiedades de los procesos preventivos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["El comando ",(0,r.jsx)(n.code,{children:"IDLE"})," es necesario para llamar a 4D en bucles espec\xedficos"]}),(0,r.jsx)(n.td,{children:"Siempre es posible interrumpir 4D"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"utilizar-las-directivas-del-compilador-con-el-int\xe9rprete",children:"Utilizar las directivas del compilador con el int\xe9rprete"}),"\n",(0,r.jsx)(n.p,{children:"Las aplicaciones no compiladas no requieren directivas del compilador. El int\xe9rprete digita autom\xe1ticamente cada variable en funci\xf3n de c\xf3mo se utilice en cada declaraci\xf3n, y una variable puede volver a escribirse libremente en el proyecto de aplicaci\xf3n."}),"\n",(0,r.jsx)(n.p,{children:"Debido a esta flexibilidad, es posible que una aplicaci\xf3n tenga un rendimiento diferente en modo interpretado y compilado."}),"\n",(0,r.jsx)(n.p,{children:"Por ejemplo, si se escribe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"var MyInt : Integer\n"})}),"\n",(0,r.jsx)(n.p,{children:"y en otra parte del proyecto, escribe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"MyInt:=3.1416\n"})}),"\n",(0,r.jsxs)(n.p,{children:["En este ejemplo, ",(0,r.jsx)(n.code,{children:"MyInt"})," se asigna el mismo valor (3) tanto en el modo interpretado como en el compilado, siempre que la directiva del compilador se interprete ",(0,r.jsx)(n.em,{children:"antes"})," de la declaraci\xf3n de asignaci\xf3n."]}),"\n",(0,r.jsx)(n.p,{children:"El int\xe9rprete 4D utiliza directivas de compilador para escribir las variables. Cuando el int\xe9rprete encuentra una directiva de compilador, escribe la variable seg\xfan la directiva. Si una declaraci\xf3n posterior intenta asignar un valor incorrecto (por ejemplo, asignar un valor alfanum\xe9rico a una variable num\xe9rica) la asignaci\xf3n no tendr\xe1 lugar y generar\xe1 un error."}),"\n",(0,r.jsx)(n.p,{children:"El orden en el que aparecen las dos declaraciones es irrelevante para el compilador, porque primero busca en todo el proyecto para las directivas del compilador. El int\xe9rprete, sin embargo, no es sistem\xe1tico. Interpreta las declaraciones en el orden de ejecuci\xf3n. Ese orden, por supuesto, puede cambiar de una sesi\xf3n a otra, dependiendo de lo que haga el usuario. Por esta raz\xf3n, es importante dise\xf1ar su proyecto de manera que las directivas del compilador se ejecuten antes de cualquier declaraci\xf3n que contenga las variables declaradas."}),"\n",(0,r.jsx)(n.h2,{id:"utilizaci\xf3n-de-punteros-para-evitar-la-reescritura",children:"Utilizaci\xf3n de punteros para evitar la reescritura"}),"\n",(0,r.jsx)(n.p,{children:"Una variable no se puede volver a escribir. Sin embargo, es posible utilizar un puntero para referirse a variables de diferentes tipos de datos. Por ejemplo, el siguiente c\xf3digo est\xe1 permitido tanto en modo interpretado como compilado:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $p : Pointer\nvar $name : Text\nvar $age : Integer\n\n$name:="Smith"\n$age:=50\n\n$p:=->$name //texto objetivo para el puntero\n$p->:="Wesson" //asigna un valor texto\n\n$p:=->$age  \n// nuevo objetivo de tipo diferente para el puntero\n$p->:=55 //asigna un valor\n'})}),"\n",(0,r.jsx)(n.p,{children:"Imagine una funci\xf3n que devuelve la longitud (n\xfamero de caracteres) de valores de todo tipo."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  // Calc_Length (cu\xe1ntos caracteres)\n  // $vp = puntero a variable de tipo flexible, num\xe9rico, texto, tiempo, booleano\n\n#DECLARE($vp : Pointer) -> $length : Integer\nvar $result : Text  \n$result:=String($vp->)\n$length:=Length($result)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Entonces se puede llamar a este m\xe9todo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$var1:="my text"\n$var2:=5.3\n$var3:=?10:02:24?\n$var4:=True\n\n$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)\n\nALERT("Total length: "+String($vLength))\n'})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return s}});var i=a(667294);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);