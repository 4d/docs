"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30486"],{150008:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>c,assets:()=>o,toc:()=>l,contentTitle:()=>t});var c=JSON.parse('{"id":"commands-legacy/character-code","title":"Character code","description":"Character code ( unCaracter ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/character-code.md","sourceDirName":"commands-legacy","slug":"/commands/character-code","permalink":"/docs/es/commands/character-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcharacter-code.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"character-code","title":"Character code","slug":"/commands/character-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Char","permalink":"/docs/es/commands/char"},"next":{"title":"Compare strings","permalink":"/docs/es/commands/compare-strings"}}'),a=r("785893"),s=r("250065");let d={id:"character-code",title:"Character code",slug:"/commands/character-code",displayed_sidebar:"docs"},t=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Character code"})," ( ",(0,a.jsx)(n.em,{children:"unCaracter"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"unCaracter"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Caracter para el cual obtener el c\xf3digo"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"C\xf3digo del caracter"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"Character code"})," devuelve el c\xf3digo Unicode UTF-16 (inclu\xeddo entre 1 y 65535) de ",(0,a.jsx)(n.em,{children:"unCaracter"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si hay m\xe1s de un car\xe1cter en la cadena, ",(0,a.jsx)(n.strong,{children:"Character code"})," devuelve \xfanicamente el c\xf3digo del primer car\xe1cter."]}),"\n",(0,a.jsxs)(n.p,{children:["La funci\xf3n ",(0,a.jsx)(n.a,{href:"/docs/es/commands/char",children:"Char"})," es la contraparte de ",(0,a.jsx)(n.strong,{children:"Character code"}),". Devuelve el car\xe1cter designado por un c\xf3digo UTF-16."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Los caracteres en may\xfasculas y min\xfasculas se consideran iguales en una comparaci\xf3n. Puede utilizar Character code para diferenciar entre los caracteres en may\xfasculas y en min\xfasculas. Por lo tanto, esta l\xednea devuelve True:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0("A"="a")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Por otra parte, esta l\xednea devuelve False:"}),"\n",(0,a.jsx)(n.p,{children:'(Character code("A")=Character code("a"))'}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsxs)(n.p,{children:["Este ejemplo devuelve el c\xf3digo del primer car\xe1cter de la cadena ",(0,a.jsx)(n.em,{children:'"ABC"'}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0RecupCod:=Character code("ABC")\xa0// RecupCod toma el valor 65, el c\xf3digo del car\xe1cter de A\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsx)(n.p,{children:"El siguiente ejemplo prueba los retornos de carro y los tabuladores:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0For($vlCar;1;Length(vtText))\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(vtText[[$vlCar]]=Char(Carriage return))\n\xa0\xa0// Hacer algo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(vtText[[$vlCar]]=Char(Tab))\n\xa0\xa0// Hacer otra cosa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0End case\n\xa0End for\n"})}),"\n",(0,a.jsx)(n.p,{children:"Cuando se ejecuta muchas veces en textos largos, se ejecutar\xe1 m\xe1s r\xe1pido, una vez compilado, si se escribe de esta forma:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0For($vlCar;1;Length(vtText))\n\xa0\xa0\xa0\xa0$vlCode:=Character code(vtText[[$vlCar]])\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCode=Carriage return)\n\xa0\xa0// Hacer algo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCode=Tab)\n\xa0\xa0// Hacer otra cosa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0End case\n\xa0End for\n"})}),"\n",(0,a.jsx)(n.p,{children:"El segundo c\xf3digo se ejecuta m\xe1s r\xe1pido por dos razones: s\xf3lo referencia un car\xe1cter por iteraci\xf3n y utiliza comparaciones de enteros largos en lugar de comparaciones de cadenas para probar los retornos de carro y las tabulaciones. Utilice esta t\xe9cnica cuando trabaje con c\xf3digos comunes tales como CR y TAB."}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/char",children:"Char"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"S\xedmbolos de referencia de caracteres"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"91"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return d}});var c=r(667294);let a={},s=c.createContext(a);function d(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);