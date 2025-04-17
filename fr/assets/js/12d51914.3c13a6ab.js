"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26161"],{342810:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/blob-to-real","title":"BLOB to real","description":"BLOB to real ( blob ; formatR\xe9el {; offset} ) : Real","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/blob-to-real.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-real","permalink":"/docs/fr/commands/blob-to-real","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-real.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"blob-to-real","title":"BLOB to real","slug":"/commands/blob-to-real","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to longint","permalink":"/docs/fr/commands/blob-to-longint"},"next":{"title":"BLOB to text","permalink":"/docs/fr/commands/blob-to-text"}}'),s=r("785893"),l=r("250065");let d={id:"blob-to-real",title:"BLOB to real",slug:"/commands/blob-to-real",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BLOB to real"})," ( ",(0,s.jsx)(n.em,{children:"blob"})," ; ",(0,s.jsx)(n.em,{children:"formatR\xe9el"})," {; ",(0,s.jsx)(n.em,{children:"offset"}),"} ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB duquel extraire la valeur de type R\xe9el"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatR\xe9el"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"0 Format r\xe9el natif 1 Format r\xe9el \xe9tendu 2  Format r\xe9el double Macintosh 3  Format r\xe9el double Windows"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2194"}),(0,s.jsx)(n.td,{children:"Offset (en octets) dans le BLOB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Nouvel offset apr\xe8s lecture"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valeur de type R\xe9el"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La fonction ",(0,s.jsx)(n.strong,{children:"BLOB to real"})," retourne une valeur de type R\xe9el lue dans le BLOB ",(0,s.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"formatR\xe9el"}),' fixe le format interne et l\'ordre des octets ("byte ordering") de la valeur de type R\xe9el \xe0 lire. Vous passez une des constantes fournies par 4D :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Extended real format"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Macintosh double real format"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Native real format"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PC double real format"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note sur l'ind\xe9pendance de plate-forme :"}),' Si vous \xe9changez des BLOBs entre les plates-formes Macintosh et PC, il vous incombe de traiter les conversions d\'octets ("byte swapping") lorsque vous utilisez cette fonction.']}),"\n",(0,s.jsxs)(n.p,{children:["Si vous ne passez pas de variable dans le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"offset"}),", les 8 ou 10 premiers octets de BLOB sont lus."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous passez une variable dans le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"offset"}),", la valeur r\xe9elle est lue depuis l'offset exprim\xe9 en octets (\xe0 partir de z\xe9ro) du BLOB."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Vous devez passer un offset compris entre 0 (z\xe9ro) et la taille du BLOB moins 8 ou 10. Sinon, une erreur -111 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Apr\xe8s l'ex\xe9cution de la commande, la variable ",(0,s.jsx)(n.em,{children:"offset"})," est incr\xe9ment\xe9e du nombre d'octets qui a \xe9t\xe9 lu. Vous pouvez donc r\xe9utiliser la m\xeame variable avec une autre commande de lecture de BLOBs pour lire une autre valeur plac\xe9e juste apr\xe8s celle que vous venez de lire."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"L'exemple suivant lit 20 valeurs r\xe9elles dans un BLOB \xe0 partir de l'offset 0x200 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$vlOffset:=0x200\n\xa0For($viBoucle;0;19)\n\xa0\xa0\xa0\xa0$vrValeur:=BLOB to real(vxUnBlob;PC double real format;$vlOffset)\n\xa0\xa0// Faire quelque chose avec $vrValeur\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/blob-to-integer",children:"BLOB to integer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/blob-to-longint",children:"BLOB to longint"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/blob-to-text",children:"BLOB to text"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/real-to-blob",children:"REAL TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"553"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var t=r(667294);let s={},l=t.createContext(s);function d(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);