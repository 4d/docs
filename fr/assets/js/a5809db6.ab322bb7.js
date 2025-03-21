"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28293"],{254445:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/real-to-blob","title":"REAL TO BLOB","description":"REAL TO BLOB ( r\xe9el ; blob ; formatR\xe9el {; offset | *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/real-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/real-to-blob","permalink":"/docs/fr/commands/real-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freal-to-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"real-to-blob","title":"REAL TO BLOB","slug":"/commands/real-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LONGINT TO BLOB","permalink":"/docs/fr/commands/longint-to-blob"},"next":{"title":"SET BLOB SIZE","permalink":"/docs/fr/commands/set-blob-size"}}'),r=l("785893"),t=l("250065");let d={id:"real-to-blob",title:"REAL TO BLOB",slug:"/commands/real-to-blob",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Note",id:"note",level:3},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Exemple 5",id:"exemple-5",level:2},{value:"Exemple 6",id:"exemple-6",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REAL TO BLOB"})," ( ",(0,r.jsx)(n.em,{children:"r\xe9el"})," ; ",(0,r.jsx)(n.em,{children:"blob"})," ; ",(0,r.jsx)(n.em,{children:"formatR\xe9el"})," {; offset | *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"r\xe9el"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valeur de type R\xe9el \xe0 \xe9crire dans le BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB devant recevoir la valeur R\xe9el"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatR\xe9el"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0=Format r\xe9el natif, 1=Format r\xe9el \xe9tendu, 2=Format r\xe9el double Macintosh, 3=Format r\xe9el double Windows"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset | *"}),(0,r.jsx)(n.td,{children:"Variable, Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Offset (en octets) dans le BLOB ou  * pour ajouter la valeur \xe0 la fin du BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Nouvel offset apr\xe8s l'\xe9criture si * omis"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"REAL TO BLOB"})," \xe9crit la valeur de type R\xe9el ",(0,r.jsx)(n.em,{children:"r\xe9el"})," dans le BLOB ",(0,r.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"formatR\xe9el"}),' fixe le format interne et l\'ordre des octets ("byte ordering") de la valeur de type R\xe9el \xe0 \xe9crire. Vous passez une des constantes fournies par 4D :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Extended real format"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Macintosh double real format"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Native real format"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PC double real format"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note sur l'ind\xe9pendance de plate-forme :"}),' Si vous \xe9changez des BLOBs entre les plates-formes Macintosh et PC, il vous incombe de traiter les conversions d\'octets ("byte swapping") lorsque vous utilisez cette fonction.']}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel *, la valeur r\xe9elle est ajout\xe9e \xe0 la fin du BLOB et la taille de ",(0,r.jsx)(n.em,{children:"blob"})," est modifi\xe9e en cons\xe9quence. Ainsi, \xe0 l'aide du param\xe8tre optionnel *, vous pouvez stocker les unes derri\xe8re les autres autant de valeurs de type Entier, Entier long, Num\xe9rique ou Texte (r\xe9f\xe9rez-vous aux autres commandes sur les BLOBs) que vous voulez dans un BLOB, la seule limite \xe9tant celle de la m\xe9moire disponible."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre optionnel * ni de variable dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"offset"}),", la valeur r\xe9elle est stock\xe9e au d\xe9but de ",(0,r.jsx)(n.em,{children:"blob"})," en rempla\xe7ant son contenu pr\xe9c\xe9dent, et la taille du BLOB est modifi\xe9e en cons\xe9quence."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez une variable dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"offset"}),", le r\xe9el est \xe9crit \xe0 partir de l'offset ",(0,r.jsx)(n.em,{children:"offset"}),", exprim\xe9 en octets (\xe0 partir de z\xe9ro), du BLOB. Quel que soit l'endroit o\xf9 vous placez la valeur, la taille du BLOB sera augment\xe9e si n\xe9cessaire en fonction de l'emplacement que vous avez d\xe9fini (plus jusqu'\xe0 8 ou 10 octets le cas \xe9ch\xe9ant). Les octets red\xe9finis (autres que ceux que vous venez d'\xe9crire) sont initialis\xe9s \xe0 la valeur z\xe9ro."]}),"\n",(0,r.jsxs)(n.p,{children:["Apr\xe8s l'ex\xe9cution de la commande, la variable du param\xe8tre ",(0,r.jsx)(n.em,{children:"offset"})," est incr\xe9ment\xe9e du nombre d'octets ayant \xe9t\xe9 \xe9crits. Vous pouvez par cons\xe9quent r\xe9utiliser la m\xeame variable avec une autre commande d'\xe9criture de BLOB afin de placer une autre valeur juste apr\xe8s celle que vous venez d'\xe9crire."]}),"\n",(0,r.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," Etant donn\xe9 que cette commande modifie le blob pass\xe9 comme param\xe8tre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous \xe0 la page ",(0,r.jsx)(n.em,{children:"Passer des blobs et objets blobs \xe0 des commandes 4D"})," sur developer.4d.com."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vrValeur : Real\n\xa0vrValeur:=...\n\xa0REAL TO BLOB(vrValeur;vxBlob;Extended real format)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sur toutes les plates-formes, la taille de ",(0,r.jsx)(n.em,{children:"vxBlob"})," est 10 octets"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vrValeur : Real\n\xa0vrValeur:=...\n\xa0REAL TO BLOB(vrValeur;vxBlob;Native real format)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sur toutes les plates-formes, la taille de ",(0,r.jsx)(n.em,{children:"vxBlob"})," est 8 octets"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0var vrValeur : Real\n\xa0vrValeur:=...\n\xa0REAL TO BLOB(vrValeur;vxBlob;PC double real format)\xa0// ou Format r\xe9el double Macintosh\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sur toutes les plates-formes, la taille de ",(0,r.jsx)(n.em,{children:"vxBlob"})," est 8 octets"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,r.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0var vrValeur : Real\n\xa0vrValeur:=...\n\xa0vlOffset:=50\n\xa0REAL TO BLOB(vrValeur;vxBlob;PC double real format;vlOffset)\xa0// ou Format r\xe9el double Macintosh\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sur toutes les plates-formes, la taille de ",(0,r.jsx)(n.em,{children:"vxBlob"})," est 100 octets"]}),"\n",(0,r.jsx)(n.li,{children:"Sur toutes les plates-formes, la valeur num\xe9rique est stock\xe9e dans les octets #50 \xe0 #57"}),"\n",(0,r.jsx)(n.li,{children:"Les autres octets du BLOB restent inchang\xe9s"}),"\n",(0,r.jsxs)(n.li,{children:["La variable ",(0,r.jsx)(n.em,{children:"vlOffset"})," est incr\xe9ment\xe9e de 8 (et est alors \xe9gale \xe0 58)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,r.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vrValeur : Real\n\xa0vrValeur:=...\n\xa0REAL TO BLOB(vrValeur;vxBlob;Macintosh double real format)\xa0// ou Format r\xe9el double PC\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sur toutes les plates-formes, la taille de ",(0,r.jsx)(n.em,{children:"vxBlob"})," est 8 octets"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,r.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0REAL TO BLOB(vrValeur;vxBlob;Extended real format;*)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sur toutes les plates-formes, la taille de ",(0,r.jsx)(n.em,{children:"vxBlob"})," est 110 octets"]}),"\n",(0,r.jsx)(n.li,{children:"Sur toutes les plates-formes, la valeur num\xe9rique est stock\xe9e dans les octets #100 \xe0 #109"}),"\n",(0,r.jsx)(n.li,{children:"Les autres octets du BLOB restent inchang\xe9s"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/blob-to-integer",children:"BLOB to integer"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/blob-to-longint",children:"BLOB to longint"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/blob-to-real",children:"BLOB to real"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/blob-to-text",children:"BLOB to text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"552"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return d}});var s=l(667294);let r={},t=s.createContext(r);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);