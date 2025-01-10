"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83571"],{762780:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/spell-add-to-user-dictionary","title":"SPELL ADD TO USER DICTIONARY","description":"SPELL ADD TO USER DICTIONARY ( palabras )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/spell-add-to-user-dictionary.md","sourceDirName":"commands-legacy","slug":"/commands/spell-add-to-user-dictionary","permalink":"/docs/es/commands/spell-add-to-user-dictionary","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-add-to-user-dictionary.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"spell-add-to-user-dictionary","title":"SPELL ADD TO USER DICTIONARY","slug":"/commands/spell-add-to-user-dictionary","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Spell Checker","permalink":"/docs/es/category/spell-checker"},"next":{"title":"SPELL CHECK TEXT","permalink":"/docs/es/commands/spell-check-text"}}'),s=a("785893"),d=a("250065");let i={id:"spell-add-to-user-dictionary",title:"SPELL ADD TO USER DICTIONARY",slug:"/commands/spell-add-to-user-dictionary",displayed_sidebar:"docs"},t=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SPELL ADD TO USER DICTIONARY"})," ( ",(0,s.jsx)(n.em,{children:"palabras"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"palabras"}),(0,s.jsx)(n.td,{children:"Text, Text array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Palabra o lista de palabras para agregar al diccionario del usuario"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"SPELL ADD TO USER DICTIONARY"})," a\xf1ade una o m\xe1s palabras al diccionario usuario actual."]}),"\n",(0,s.jsxs)(n.p,{children:["El diccionario usuario es un dicccionario que contiene palabras a\xf1adidas por el usuario al diccionario actual. Este diccionario es un archivo llamado ",(0,s.jsx)(n.em,{children:"UserDictionaryxxx.dic"})," (donde ",(0,s.jsx)(n.em,{children:"xxx"})," representa el ID del diccionario actual) que se crea autom\xe1ticamente en la carpeta 4D actual. Hay un diccionario usuario por cada diccionario actual utilizado."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede pasar en ",(0,s.jsx)(n.em,{children:"palabras"})," una cadena texto o un array texto con las palabras a a\xf1adir al diccionario usuario. Si una de las palabras ya est\xe1 en el diccionario, es ignorada por el comando."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Adici\xf3n de nombres propios al diccionario de usuario:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrTwords;0)\n\xa0APPEND TO ARRAY($arrTwords;"4D")\n\xa0APPEND TO ARRAY($arrTwords;"Wakanda")\n\xa0APPEND TO ARRAY($arrTwords;"Clichy")\n\xa0SPELL ADD TO USER DICTIONARY($arrTwords)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/spell-check-text",children:"SPELL CHECK TEXT"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1214"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return i}});var r=a(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);