"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12851"],{645318:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/blob-to-text","title":"BLOB to text","description":"BLOB to text ( blob ; formatTexte {; offset {; longueurTexte}} )  : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-text","permalink":"/docs/fr/20-R7/commands/blob-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-text","title":"BLOB to text","slug":"/commands/blob-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to real","permalink":"/docs/fr/20-R7/commands/blob-to-real"},"next":{"title":"BLOB TO VARIABLE","permalink":"/docs/fr/20-R7/commands/blob-to-variable"}}'),r=t("785893"),l=t("250065");let d={id:"blob-to-text",title:"BLOB to text",slug:"/commands/blob-to-text",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BLOB to text"})," ( ",(0,r.jsx)(n.em,{children:"blob"})," ; ",(0,r.jsx)(n.em,{children:"formatTexte"})," {; ",(0,r.jsx)(n.em,{children:"offset"})," {; ",(0,r.jsx)(n.em,{children:"longueurTexte"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB duquel extraire le texte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatTexte"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Format et jeu de caract\xe8res du texte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Offset (en octets) dans le BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Nouvel offset apr\xe8s la lecture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"longueurTexte"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de caract\xe8res \xe0 lire"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Texte extrait"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.strong,{children:"BLOB to text"})," retourne une valeur de type Texte lue dans le BLOB ",(0,r.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"formatTexte"})," d\xe9finit le format interne et le jeu de caract\xe8res de la valeur de type Texte \xe0 lire. Dans les bases de donn\xe9es cr\xe9\xe9es \xe0 compter de la version 11, 4D utilise par d\xe9faut le jeu de caract\xe8res Unicode (UTF8) pour la gestion des textes. Par compatibilit\xe9, cette commande permet de \u201Cforcer\u201D l'utilisation du jeu de caract\xe8res Mac Roman (jeu de caract\xe8res utilis\xe9 dans les versions pr\xe9c\xe9dentes de 4D). Le choix du jeu de caract\xe8res s\u2019effectue via le param\xe8tre ",(0,r.jsx)(n.em,{children:"formatTexte"}),". Pour cela, passez dans ",(0,r.jsx)(n.em,{children:"formatTexte"})," une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,r.jsx)(n.em,{children:"BLOB"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac C string"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac Pascal string"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac text with length"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac text without length"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8 C string"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8 text with length"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8 text without length"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Les constantes \u201CUTF8\u201D sont utilisables uniquement lorsque l\u2019application fonctionne en mode Unicode."}),"\n",(0,r.jsx)(n.li,{children:"Les constantes \u201CMac\u201D ne permettent pas de traiter des textes de plus de 32 ko."}),"\n",(0,r.jsxs)(n.li,{children:["Si vous souhaitez manipuler des jeux de caract\xe8res autres que UTF8, utilisez la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/convert-to-text",children:"Convert to text"}),". Pour plus d'informations sur ces constantes et les formats qu'elles repr\xe9sentent, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/text-to-blob",children:"TEXT TO BLOB"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ATTENTION :"})," Le nombre de caract\xe8res \xe0 lire est d\xe9termin\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"formatTexte"}),", SAUF dans le cas des formats Mac Text without length et UTF8 Text without length pour lesquels vous devez sp\xe9cifier le nombre de caract\xe8res \xe0 lire dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"longueurTexte"}),". Pour les autres formats, ",(0,r.jsx)(n.em,{children:"longueurTexte"})," est ignor\xe9 et vous pouvez l'omettre."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous ne passez pas de variable dans le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"offset"}),", les premiers octets de BLOB sont lus, en fonction de la valeur pass\xe9e dans ",(0,r.jsx)(n.em,{children:"formatTexte"}),". Notez que vous devez passer une variable dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"offset"})," lorsque vous lisez une valeur de type Texte sans longueur."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez une variable dans le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"offset"}),", la valeur de type Texte est lue depuis l'offset exprim\xe9 en octets (\xe0 partir de z\xe9ro) du BLOB."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," ",(0,r.jsx)(n.strong,{children:":"})," Vous devez passer un offset compris entre 0 (z\xe9ro) et la taille du BLOB moins la taille du texte \xe0 extraire. Sinon, le r\xe9sultat de la fonction ne sera pas exploitable."]}),"\n",(0,r.jsxs)(n.p,{children:["Apr\xe8s l'ex\xe9cution de la commande, la variable ",(0,r.jsx)(n.em,{children:"offset"})," est incr\xe9ment\xe9e du nombre d'octets qui a \xe9t\xe9 lu. Vous pouvez donc r\xe9utiliser la m\xeame variable avec une autre commande de lecture de BLOBs pour lire une autre valeur plac\xe9e juste apr\xe8s celle que vous venez de lire."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/blob-to-integer",children:"BLOB to integer"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/blob-to-longint",children:"BLOB to longint"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/blob-to-real",children:"BLOB to real"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/convert-to-text",children:"Convert to text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/real-to-blob",children:"REAL TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"555"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);