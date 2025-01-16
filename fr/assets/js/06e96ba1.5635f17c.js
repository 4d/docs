"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74573"],{341005:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/integer-to-blob","title":"INTEGER TO BLOB","description":"INTEGER TO BLOB ( entier ; blob ; ordreOctet {; offset\xa0|\xa0*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/integer-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/integer-to-blob","permalink":"/docs/fr/commands/integer-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finteger-to-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"integer-to-blob","title":"INTEGER TO BLOB","slug":"/commands/integer-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INSERT IN BLOB","permalink":"/docs/fr/commands/insert-in-blob"},"next":{"title":"LIST TO BLOB","permalink":"/docs/fr/commands/list-to-blob"}}'),l=s("785893"),t=s("250065");let i={id:"integer-to-blob",title:"INTEGER TO BLOB",slug:"/commands/integer-to-blob",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Note",id:"note",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"INTEGER TO BLOB"})," ( ",(0,l.jsx)(n.em,{children:"entier"})," ; ",(0,l.jsx)(n.em,{children:"blob"})," ; ",(0,l.jsx)(n.em,{children:"ordreOctet"})," {; offset\xa0|\xa0*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"entier"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Valeur enti\xe8re \xe0 \xe9crire dans le BLOB"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"blob"}),(0,l.jsx)(n.td,{children:"Blob"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"BLOB devant recevoir la valeur enti\xe8re"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ordreOctet"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"0=Ordre des octets en mode natif, 1=Ordre des octets Macintosh, 2=Ordre des octets PC"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"offset\xa0|\xa0*"}),(0,l.jsx)(n.td,{children:"Variable, Op\xe9rateur"}),(0,l.jsx)(n.td,{children:"\u2194"}),(0,l.jsx)(n.td,{children:"Offset (en octets) de l'entier dans le BLOB ou * pour ajouter la valeur \xe0 la fin du BLOB"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"Nouvel offset apr\xe8s \xe9criture si * omis"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"INTEGER TO BLOB"})," \xe9crit la valeur enti\xe8re (2 octets) ",(0,l.jsx)(n.em,{children:"entier"})," dans le BLOB ",(0,l.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Le param\xe8tre ",(0,l.jsx)(n.em,{children:"ordreOctet"}),' fixe l\'ordre des octets ("byte ordering") de la valeur enti\xe8re \xe0 \xe9crire. Vous pouvez passer une des constantes fournies par 4D :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Valeur"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Macintosh byte ordering"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Native byte ordering"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"0"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"PC byte ordering"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note sur l'ind\xe9pendance de plate-forme :"}),' Si vous \xe9changez des BLOBs entre les plates-formes Macintosh et PC, il vous incombe de traiter les conversions d\'octets ("byte swapping") lorsque vous utilisez cette commande.']}),"\n",(0,l.jsx)(n.p,{children:"Si vous passez le param\xe8tre optionnel *, la valeur enti\xe8re sur 2 octets est ajout\xe9e \xe0 la fin du BLOB et sa taille est modifi\xe9e en cons\xe9quence. Ainsi, \xe0 l'aide du param\xe8tre optionnel *, vous pouvez stocker les unes derri\xe8re les autres autant de valeurs de type Entier, Entier long, Num\xe9rique ou Texte (r\xe9f\xe9rez-vous aux autres commandes sur les BLOBs) que vous voulez dans un BLOB, la seule limite \xe9tant celle de la m\xe9moire disponible."}),"\n",(0,l.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre optionnel * ni de variable dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"offset"}),", la valeur enti\xe8re est stock\xe9e au d\xe9but de ",(0,l.jsx)(n.em,{children:"blob"})," en rempla\xe7ant son contenu pr\xe9c\xe9dent, et la taille du BLOB est modifi\xe9e en cons\xe9quence."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous passez une variable dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"offset"}),", la valeur enti\xe8re est \xe9crite \xe0 partir de l'offset ",(0,l.jsx)(n.em,{children:"offset"}),", exprim\xe9 en octets (\xe0 partir de z\xe9ro), du BLOB. Quel que soit l'endroit o\xf9 vous placez l'entier, la taille du BLOB sera augment\xe9e si n\xe9cessaire en fonction de l'emplacement que vous avez d\xe9fini (plus jusqu'\xe0 2 octets le cas \xe9ch\xe9ant). Les octets red\xe9finis (autres que ceux que vous venez d'\xe9crire) sont initialis\xe9s \xe0 la valeur z\xe9ro."]}),"\n",(0,l.jsxs)(n.p,{children:["Apr\xe8s l'ex\xe9cution de la commande, la variable du param\xe8tre ",(0,l.jsx)(n.em,{children:"offset"})," est incr\xe9ment\xe9e du nombre d'octets ayant \xe9t\xe9 \xe9crits. Vous pouvez par cons\xe9quent r\xe9utiliser la m\xeame variable avec une autre commande d'\xe9criture de BLOB afin de placer une autre valeur juste apr\xe8s celle que vous venez d'\xe9crire."]}),"\n",(0,l.jsx)(n.h5,{id:"note",children:"Note"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," Etant donn\xe9 que cette commande modifie le blob pass\xe9 comme param\xe8tre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous \xe0 la page ",(0,l.jsx)(n.em,{children:"Passer des blobs et objets blobs \xe0 des commandes 4D"})," sur developer.4d.com."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0vlOffset:=50\n\xa0INTEGER TO BLOB(518;vxBlob;Macintosh byte ordering;vlOffset)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["La taille de ",(0,l.jsx)(n.em,{children:"vxBlob"})," est 100 octets"]}),"\n",(0,l.jsxs)(n.li,{children:["Sur toutes les plates-formes ",(0,l.jsx)(n.em,{children:"vxBLOB{50}"})," = ",(0,l.jsx)(n.em,{children:"$02"})," et ",(0,l.jsx)(n.em,{children:"vxBLOB{51}"})," = ",(0,l.jsx)(n.em,{children:"$06"})]}),"\n",(0,l.jsx)(n.li,{children:"Les autres octets du BLOB restent inchang\xe9s"}),"\n",(0,l.jsxs)(n.li,{children:["La variable ",(0,l.jsx)(n.em,{children:"vlOffset"})," est incr\xe9ment\xe9e de 2 (et est alors \xe9gale \xe0 52)"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["La taille de ",(0,l.jsx)(n.em,{children:"vxBlob"})," est 2 octets"]}),"\n",(0,l.jsxs)(n.li,{children:["Sur toutes les plates-formes ",(0,l.jsx)(n.em,{children:"vxBLOB{0}"})," = ",(0,l.jsx)(n.em,{children:"$06"})," et ",(0,l.jsx)(n.em,{children:"vxBLOB{1}"})," = ",(0,l.jsx)(n.em,{children:"$02"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering;*)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["La taille de ",(0,l.jsx)(n.em,{children:"vxBlob"})," est 102 octets"]}),"\n",(0,l.jsxs)(n.li,{children:["Sur toutes les plates-formes ",(0,l.jsx)(n.em,{children:"vxBLOB{100}"})," = ",(0,l.jsx)(n.em,{children:"$06"})," et ",(0,l.jsx)(n.em,{children:"vxBLOB{101}"})," = ",(0,l.jsx)(n.em,{children:"$02"})]}),"\n",(0,l.jsx)(n.li,{children:"Les autres octets du BLOB restent inchang\xe9s"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,l.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0INTEGER TO BLOB(0x0206;vxBlob;Native byte ordering)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["La taille de ",(0,l.jsx)(n.em,{children:"vxBlob"})," est 2 octets"]}),"\n",(0,l.jsxs)(n.li,{children:["Sur plate-forme PowerPC ",(0,l.jsx)(n.em,{children:"vxBLOB{0}"})," = ",(0,l.jsx)(n.em,{children:"$02"})," et ",(0,l.jsx)(n.em,{children:"vxBLOB{1}"})," = ",(0,l.jsx)(n.em,{children:"$06"})]}),"\n",(0,l.jsxs)(n.li,{children:["Sur plate-forme Intel ",(0,l.jsx)(n.em,{children:"vxBLOB{0}"})," = ",(0,l.jsx)(n.em,{children:"$06"})," et ",(0,l.jsx)(n.em,{children:"vxBLOB{1}"})," = ",(0,l.jsx)(n.em,{children:"$02"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,l.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0INTEGER TO BLOB(0x0206;vxBlob;Macintosh byte ordering)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["La taille de ",(0,l.jsx)(n.em,{children:"vxBlob"})," est 2 octets"]}),"\n",(0,l.jsxs)(n.li,{children:["Sur toutes les plates-formes ",(0,l.jsx)(n.em,{children:"vxBLOB{0}"})," = ",(0,l.jsx)(n.em,{children:"$02"})," et ",(0,l.jsx)(n.em,{children:"vxBLOB{1}"})," = ",(0,l.jsx)(n.em,{children:"$06"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/commands/blob-to-integer",children:"BLOB to integer"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/blob-to-longint",children:"BLOB to longint"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/blob-to-real",children:"BLOB to real"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/blob-to-text",children:"BLOB to text"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/real-to-blob",children:"REAL TO BLOB"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,l.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"548"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let l={},t=r.createContext(l);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);