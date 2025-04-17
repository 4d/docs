"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68920"],{611241:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"commands-legacy/choose","title":"Choose","description":"Choose ( criterio ; valor {; valor2 ; ... ; valorN} )  : any","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/choose.md","sourceDirName":"commands-legacy","slug":"/commands/choose","permalink":"/docs/es/20-R8/commands/choose","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchoose.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"choose","title":"Choose","slug":"/commands/choose","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BASE64 ENCODE","permalink":"/docs/es/20-R8/commands/base64-encode"},"next":{"title":"Generate digest","permalink":"/docs/es/20-R8/commands/generate-digest"}}'),r=s("785893"),i=s("250065");let d={id:"choose",title:"Choose",slug:"/commands/choose",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Choose"})," ( ",(0,r.jsx)(n.em,{children:"criterio"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," {; ",(0,r.jsx)(n.em,{children:"valor2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"valorN"}),"} )  : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"criterio"}),(0,r.jsx)(n.td,{children:"Boolean, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor a probar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valores posibles"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor de criterio"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"Choose"})," devuelve uno de los valores pasados en los par\xe1metros ",(0,r.jsx)(n.em,{children:"valor1"}),", ",(0,r.jsx)(n.em,{children:"valor2"}),", etc. en funci\xf3n del valor del par\xe1metro ",(0,r.jsx)(n.em,{children:"criterio"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede pasar un par\xe1metro ",(0,r.jsx)(n.em,{children:"criterio"})," de tipo booleano o num\xe9rico:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"criterio"})," es un booleano, ",(0,r.jsx)(n.strong,{children:"Choose"})," devuelve ",(0,r.jsx)(n.em,{children:"valor1"})," si el booleano es igual a True y ",(0,r.jsx)(n.em,{children:"valor2"})," si el booleano es igual a False. En este caso, el comando espera exactamente tres par\xe1metros: ",(0,r.jsx)(n.em,{children:"criterio"}),", ",(0,r.jsx)(n.em,{children:"valor1"})," y ",(0,r.jsx)(n.em,{children:"valor2"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"criterio"})," es un entero, ",(0,r.jsx)(n.strong,{children:"Choose"})," devuelve el valor cuya posici\xf3n corresponde a ",(0,r.jsx)(n.em,{children:"criterio"}),". Atenci\xf3n, la numeraci\xf3n de los valores comienza en 0 (la posici\xf3n de ",(0,r.jsx)(n.em,{children:"valor1"})," es 0). En este caso, el comando espera al menos dos par\xe1metros: ",(0,r.jsx)(n.em,{children:"criterio"})," y ",(0,r.jsx)(n.em,{children:"valor1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["El comando acepta todo los tipos de datos para el/los par\xe1metro(s) ",(0,r.jsx)(n.em,{children:"valor"}),", excepto im\xe1genes, punteros, BLOBS y arrays. Sin embargo, debe asegurarse de que todos los valores pasados sean del mismo tipo, 4D no efectuar\xe1 ninguna verificaci\xf3n en este punto."]}),"\n",(0,r.jsxs)(n.p,{children:["Si ning\xfan ",(0,r.jsx)(n.em,{children:"valor"})," corresponde a ",(0,r.jsx)(n.em,{children:"criterio"}),", ",(0,r.jsx)(n.strong,{children:"Choose"})," devuelve un valor \u201Cnulo\u201D con respecto al tipo del par\xe1metro ",(0,r.jsx)(n.em,{children:"valor"})," (por ejemplo, 0 para el tipo num\xe9rico, \u201C\u201D para el tipo cadena, etc.)."]}),"\n",(0,r.jsx)(n.p,{children:"Este comando permite generar c\xf3digo conciso que reemplaza las pruebas de tipo \u201CCase of\u201D que toman varias l\xedneas (ver ejemplo 2). Tambi\xe9n es muy \xfatil en los lugares donde pueden ejecutarse f\xf3rmulas: editor de b\xfasquedas, aplicar una f\xf3rmula, editor de informes r\xe1pidos, columna calculada de listbox, etc."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Atenci\xf3n:"})," el comando ",(0,r.jsx)(n.strong,{children:"Choose"})," eval\xfaa cada par\xe1metro ",(0,r.jsx)(n.em,{children:"valor"})," antes de su ejecuci\xf3n. Esto significa que:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"valor"})," es una expresi\xf3n din\xe1mica que causa efectos secundarios (actualizaci\xf3n de un contador, modificaci\xf3n de cualquier tipo), estos efectos ocurrir\xe1n en todos los casos;"]}),"\n",(0,r.jsxs)(n.li,{children:["Si un par\xe1metro ",(0,r.jsx)(n.em,{children:"valor"})," es una expresi\xf3n no v\xe1lida, ",(0,r.jsx)(n.strong,{children:"Choose"})," devolver\xe1 un error en todos los casos. Por ejemplo, el siguiente c\xf3digo devolver\xe1 un error:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$res:=Choose(True;"red1";"blue"+2)\xa0//error  \n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Este es un ejemplo del uso t\xedpico de este comando con un criterio de tipo booleano:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vTitulo:=Choose([Persona]Masculino;"Sr";"Sra")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Este c\xf3digo es estrictamente equivalente a:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0If([Persona]Masculino)\n\xa0\xa0\xa0\xa0vTitulo:="Sr"\n\xa0Else\n\xa0\xa0\xa0\xa0vTitulo:="Sra"\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Este es un ejemplo del uso t\xedpico de este comando con un criterio de tipo num\xe9rico:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vEstado:=Choose([Persona]Estado;"Soltero";"Casado";\'"Viudo";"Separado")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Este c\xf3digo es estrictamente equivalente a:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:([Persona]Estado=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEstado:="Soltero"\n\xa0\xa0\xa0\xa0:([Persona]Estado=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEstado:="Casado"\n\xa0\xa0\xa0\xa0:([Persona]Estado=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEstado:="Viudo"\n\xa0\xa0\xa0\xa0:([Persona]Estado=3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEstado:="Separado"\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"955"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var o=s(667294);let r={},i=o.createContext(r);function d(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);