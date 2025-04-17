"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29380"],{813953:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>l,toc:()=>c,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/ob-entries","title":"OB Entries","description":"OB Entries ( objeto ) : Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-entries.md","sourceDirName":"commands-legacy","slug":"/commands/ob-entries","permalink":"/docs/es/20-R8/commands/ob-entries","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-entries.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-entries","title":"OB Entries","slug":"/commands/ob-entries","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Copy","permalink":"/docs/es/20-R8/commands/ob-copy"},"next":{"title":"OB Get","permalink":"/docs/es/20-R8/commands/ob-get"}}'),r=s("785893"),o=s("250065");let t={id:"ob-entries",title:"OB Entries",slug:"/commands/ob-entries",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OB Entries"})," ( ",(0,r.jsx)(n.em,{children:"objeto"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Objeto para devolver contenidos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de objetos con propiedades llave/valor"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"OB Entries"})," devuelve una colecci\xf3n de objetos que contienen el contenido del ",(0,r.jsx)(n.em,{children:"objeto"})," como pares de propiedades llave/valor."]}),"\n",(0,r.jsx)(n.p,{children:"Cada objeto devuelto contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Propiedad"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Tipo"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"key"}),(0,r.jsx)(n.td,{children:"cadena"}),(0,r.jsx)(n.td,{children:"nombre de propiedad enumerable del objeto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"variante"}),(0,r.jsx)(n.td,{children:"valor de propiedad enumerable del objeto"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Solo se devuelven los nombres de propiedad de primer nivel (no se devuelven los nombres de propiedad de los subobjetos). El orden de las propiedades dentro de la colecci\xf3n devuelta sigue el orden de definici\xf3n de las propiedades."}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:'El uso de un objeto como un mapa hash (sistema llave/valor) ofrece un acceso r\xe1pido y directo a los datos, al igual que cuando se utiliza un \xedndice (por ejemplo, si necesitamos la edad de Mary, podemos escribir: $persons["Mary"])'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $individual;$persons : Object\n\xa0var $names;$ages : Collection\n\xa0\n\xa0$persons:=New object\n\xa0$persons["John"]:=42\n\xa0$persons["Andy"]:=24\n\xa0$persons["Mary"]:=30\n\xa0$persons["Paul"]:=50\n\xa0\n\xa0ALERT("La edad promedio es "+String(OB Values($persons).average()))\n\xa0ALERT("Hay "+String(OB Keys($persons).length)+" personas")\n\xa0\n\xa0$ages:=OB Entries($persons).query("value>:1";25)\n\xa0ALERT("Hay "+String($ages.length)+" personas de m\xe1s de 25")\n\xa0\n\xa0ALERT("Sus nombres son: "+$ages.extract("key").join("-"))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/ob-keys",children:"OB Keys"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/ob-values",children:"OB Values"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1720"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var d=s(667294);let r={},o=d.createContext(r);function t(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);