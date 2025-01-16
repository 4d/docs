"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20459"],{323198:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/method-get-code","title":"METHOD GET CODE","description":"METHOD GET CODE ( ruta ; codigo {; opcion} {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-code.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-code","permalink":"/docs/es/20-R7/commands/method-get-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-code.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-code","title":"METHOD GET CODE","slug":"/commands/method-get-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET ATTRIBUTES","permalink":"/docs/es/20-R7/commands/method-get-attributes"},"next":{"title":"METHOD GET COMMENTS","permalink":"/docs/es/20-R7/commands/method-get-comments"}}'),d=s("785893"),t=s("250065");let r={id:"method-get-code",title:"METHOD GET CODE",slug:"/commands/method-get-code",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD GET CODE"})," ( ",(0,d.jsx)(n.em,{children:"ruta"})," ; ",(0,d.jsx)(n.em,{children:"codigo"})," {; ",(0,d.jsx)(n.em,{children:"opcion"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ruta"}),(0,d.jsx)(n.td,{children:"Text, Text array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Texto o array de texto que contiene una o varias rutas de m\xe9todo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"codigo"}),(0,d.jsx)(n.td,{children:"Text, Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"C\xf3digo de los m\xe9todos designados"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"opcion"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"0 o si se omite = exportaci\xf3n simple (sin tokens), 1 = exportaci\xf3n con tokens"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si se pasa = comando se aplica a la base de datos de host cuando se ejecuta desde un componente (par\xe1metro ignorado fuera de este contexto)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"METHOD GET CODE"})," devuelve en el par\xe1metro ",(0,d.jsx)(n.em,{children:"codigo"}),", el contenido de los m\xe9todos designados por el par\xe1metro ",(0,d.jsx)(n.em,{children:"ruta"}),". Este comando puede devolver el c\xf3digo de todos los tipos de m\xe9todos: m\xe9todos base, definiciones de clases, triggers, m\xe9todos proyecto, m\xe9todos formulario y m\xe9todos objeto."]}),"\n",(0,d.jsx)(n.p,{children:"Puede utilizar dos tipos de sintaxis, basadas en arrays texto o variables texto:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var tVpath : Text\xa0// variables texto\n\xa0var tVcode : Text\n\xa0METHOD GET CODE(tVpath;tVcode)\xa0// c\xf3digo de un solo m\xe9todo\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrPaths;0)\xa0// arrays texto\n\xa0ARRAY TEXT(arrCodes;0)\n\xa0METHOD GET CODE(arrPaths;arrCodes)\xa0// c\xf3digos de varios m\xe9todos\n"})}),"\n",(0,d.jsx)(n.p,{children:"No se pueden combinar las dos sintaxis."}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa una ruta de acceso no v\xe1lida, el par\xe1metro ",(0,d.jsx)(n.em,{children:"codigo"})," se deja vac\xedo y se genera un error."]}),"\n",(0,d.jsxs)(n.p,{children:["En el texto del ",(0,d.jsx)(n.em,{children:"codigo"})," generado por este comando:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:['Los nombres de los comandos se escriben en ingl\xe9s, excepto si utiliza una versi\xf3n francesa de 4D y si tiene seleccionada la preferencia "Utilizar lenguaje franc\xe9s y par\xe1metros regionales sistema" (ver ',(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/is-a-list",children:"Is a list"}),"). Cuando se utiliza el par\xe1metro ",(0,d.jsx)(n.em,{children:"opcion"}),", el c\xf3digo puede contener tokens del lenguaje con el fin de que sea independiente del lenguaje de programaci\xf3n 4D y de la versi\xf3n  (ver m\xe1s adelante)."]}),"\n",(0,d.jsx)(n.li,{children:"Para aumentar la legibilidad del c\xf3digo, el texto es indentado con los caracteres de tabulaci\xf3n en funci\xf3n de las estructuras de programaci\xf3n, al igual que en el editor de m\xe9todos."}),"\n",(0,d.jsx)(n.li,{children:"Una l\xednea se a\xf1ade en el encabezado del c\xf3digo generado que contiene los metadatos utilizados para la importaci\xf3n del c\xf3digo, por ejemplo:"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// %attributes = {"lang":"fr","invisible":true,"folder":"Web3"}  \n'})}),"\n",(0,d.jsxs)(n.p,{children:['Durante una importaci\xf3n, esta l\xednea no se importa, se utiliza para definir los atributos correspondientes (los atributos no especificados se reinicializan a su valor por defecto). El atributo "lang" define el lenguaje de exportaci\xf3n e impide una importaci\xf3n en una aplicaci\xf3n en lenguaje diferente (en este caso, se genera un error). El atributo "folder" contiene el nombre de la carpeta padre del m\xe9todo; no se muestra cuando el m\xe9todo no tiene una carpeta padre.',(0,d.jsx)(n.br,{}),"\nPueden definirse atributos adicionales. Para mayor informaci\xf3n, consulte la descripci\xf3n del comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"opcion"})," le permite seleccionar el modo de exportaci\xf3n del c\xf3digo con respecto a los elementos del lenguaje tokenizados de los m\xe9todos:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Si pasa 0 u omite el par\xe1metro ",(0,d.jsx)(n.em,{children:"opcion"}),", el c\xf3digo del m\xe9todo se exporta sin tokens, es decir, al igual que se muestra en el editor de m\xe9todos."]}),"\n",(0,d.jsxs)(n.li,{children:["Si pasa 1 o la constante Code with tokens, el c\xf3digo del m\xe9todo se exporta con tokens, es decir, los elementos tokenizados son seguidos por su referencia interna en el contenido del ",(0,d.jsx)(n.em,{children:"c\xf3digo"}),' exportado. Por ejemplo, la expresi\xf3n "',(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/string",children:"String"}),'(a)" se exporta "',(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/string",children:"String"}),':C10(a)",  donde "C10" es la referencia interna del comando ',(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/string",children:"String"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Los elementos tokenizados del lenguaje incluyen:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"los comandos y constantes 4D,"}),"\n",(0,d.jsx)(n.li,{children:"los nombres de tablas y campos,"}),"\n",(0,d.jsx)(n.li,{children:"los comandos de plug-ins 4D."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["El c\xf3digo exportado con sus tokens es independiente de todo cambio de nombre posterior de los elementos del lenguaje. Gracias a los tokens, el c\xf3digo suministrado en forma de texto siempre ser\xe1 interpretado correctamente por 4D, por ejemplo utilizando el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/method-set-code",children:"METHOD SET CODE"})," o copiar/pegar. Para m\xe1s informaci\xf3n sobre la sintaxis tokens 4D, consulte la secci\xf3n ",(0,d.jsx)(n.em,{children:"Utilizar tokens en f\xf3rmulas"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Si el comando se ejecuta desde un componente, se aplica por defecto a los m\xe9todos del componente. Si pasa el par\xe1metro ",(0,d.jsx)(n.em,{children:"*"}),", accede a los m\xe9todos de la base local."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,d.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/method-set-code",children:"METHOD SET CODE"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,d.jsxs)(n.p,{children:["Este ejemplo ilustra el efecto del par\xe1metro ",(0,d.jsx)(n.em,{children:"opcion"}),"."]}),"\n",(0,d.jsx)(n.p,{children:'Usted desea exportar el siguiente m\xe9todo "simple_init":'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALL RECORDS([Customer])\n\xa0End case\n"})}),"\n",(0,d.jsx)(n.p,{children:"Si se ejecuta el siguiente c\xf3digo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0var $contents : Text\n\xa0$path:=METHOD Get path(Path project method;"simple_init")\n\xa0METHOD GET CODE($path;$contents;0)\xa0//sin tokens\n\xa0TEXT TO DOCUMENT("simple_init.txt";$contents)\n'})}),"\n",(0,d.jsx)(n.p,{children:"El documento resultante contendr\xe1:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-RAW",children:'\xa0 //%attributes = {"lang":"en"} comentario a\xf1adido y reservado por 4DCase of\xa0\xa0\xa0 : (Form event code=On Load)\xa0\xa0\xa0 \xa0\xa0\xa0 ALL RECORDS([Customer])End case\n'})}),"\n",(0,d.jsx)(n.p,{children:"Si se ejecuta el siguiente c\xf3digo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0var $contents : Text\n\xa0$path:=METHOD Get path(Path project method;"simple_init")\n\xa0METHOD GET CODE($path;$contents;Code with tokens)\xa0//usa tokens\n\xa0TEXT TO DOCUMENT("simple_init.txt";$contents)\n'})}),"\n",(0,d.jsx)(n.p,{children:"El documento resultante contendr\xe1:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-RAW",children:'\xa0 //%attributes = {"lang":"en"} comentario a\xf1adido y reservado por 4DCase of\xa0\xa0\xa0 : (Form event code:C388=On Load:K2:1)\xa0\xa0\xa0 \xa0\xa0\xa0 ALL RECORDS:C47([Customer:1])End case\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/method-set-code",children:"METHOD SET CODE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Utilizar tokens en f\xf3rmulas"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1190"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var o=s(667294);let d={},t=o.createContext(d);function r(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);