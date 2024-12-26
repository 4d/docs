"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51748"],{884583:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/substring","title":"Substring","description":"Substring ( fuente ; aPartirDe {; numCaracteres} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/substring.md","sourceDirName":"commands-legacy","slug":"/commands/substring","permalink":"/docs/es/commands/substring","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsubstring.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"substring","title":"Substring","slug":"/commands/substring","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"String","permalink":"/docs/es/commands/string"},"next":{"title":"Uppercase","permalink":"/docs/es/commands/uppercase"}}'),t=r("785893"),a=r("250065");let i={id:"substring",title:"Substring",slug:"/commands/substring",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Substring"})," ( ",(0,t.jsx)(n.em,{children:"fuente"})," ; ",(0,t.jsx)(n.em,{children:"aPartirDe"})," {; ",(0,t.jsx)(n.em,{children:"numCaracteres"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fuente"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cadena de la cual obtener una subcadena"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aPartirDe"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posici\xf3n del primer car\xe1cter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numCaracteres"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de caracteres a obtener"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Subcadena de fuente"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"Substring"})," devuelve la parte de ",(0,t.jsx)(n.em,{children:"fuente"})," definida por ",(0,t.jsx)(n.em,{children:"aPartirDe"})," y ",(0,t.jsx)(n.em,{children:"numCars"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"aPartirDe"})," indica el primer car\xe1cter de la cadena a devolver, y ",(0,t.jsx)(n.em,{children:"numCars"})," define el n\xfamero de caracteres a devolver."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"aPartirDe"})," m\xe1s ",(0,t.jsx)(n.em,{children:"numCars"})," es mayor que el n\xfamero de caracteres en la cadena o si ",(0,t.jsx)(n.em,{children:"numCars"})," no est\xe1 especificado, ",(0,t.jsx)(n.strong,{children:"Substring"})," devuelve todos los caracteres de la cadena a partir del car\xe1cter especificado por ",(0,t.jsx)(n.em,{children:"aPartirDe"}),". Si ",(0,t.jsx)(n.em,{children:"aPartirDe"})," es superior al n\xfamero de caracteres en la cadena, ",(0,t.jsx)(n.strong,{children:"Substring"}),' devuelve una cadena vac\xeda ("").']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Atenci\xf3n"}),": cuando se utiliza este comando en un contexto multi-estilo, debe convertir los eventuales caracteres de fin de l\xednea Windows ('\\r\\n') en caracteres de fin de l\xednea simples ('\\r') para que el procesamiento sea v\xe1lido. Esto se debe al mecanismo que normaliza los finales de l\xednea 4D para asegurar la compatibilidad multi-plataforma para los textos. Para obtener m\xe1s informaci\xf3n, consulte ",(0,t.jsx)(n.em,{children:"Normalizaci\xf3n autom\xe1tica de fines de l\xedneas"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsxs)(n.p,{children:["Este ejemplo ilustra la utilizaci\xf3n de Substring. Los resultados se asignan a la variable ",(0,t.jsx)(n.em,{children:"vsResult"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vsResult:=Substring("08/04/62";4;2)\xa0// vsResult toma el valor "04"\n\xa0vsResult:=Substring("Emergencia";1;6)\xa0// vsResult toma el valor "Emerge"\n\xa0vsResult:=Substring(var;2)\xa0// vsResult toma el valor de todos los caracteres excepto el primero\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente m\xe9todo de proyecto a\xf1ade los p\xe1rrafos que se encuentran en el texto (pasado como primer par\xe1metro) a una array de tipo texto o alfa (cuyo puntero se pasa como segundo par\xe1metro):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// EXTRACT PARAGRAPHS\n\xa0\xa0// EXTRACT PARAGRAPHS ( texto ; Puntero )\n\xa0\xa0// EXTRACT PARAGRAPHS ( Texto a analizar ; -> Array de p\xe1rrafos )\n\xa0\n\xa0var $1 : Text\n\xa0var $2 : Pointer\n\xa0\n\xa0$vlElem:=Size of array($2->)\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vlElem:=$vlElem+1\n\xa0\xa0\xa0\xa0INSERT IN ARRAY($2->;$vlElem)\n\xa0\xa0\xa0\xa0$vlPos:=Position(Char(Carriage return);$1)\n\xa0\xa0\xa0\xa0If($vlPos>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2->{$vlElem}:=Substring($1;1;$vlPos-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$1:=Substring($1;$vlPos+1)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2->{$vlElem}:=$1\n\xa0\xa0\xa0\xa0End if\n\xa0Until($1="")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/position",children:"Position"})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"12"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let t={},a=s.createContext(t);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);