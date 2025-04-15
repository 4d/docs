"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12866"],{745516:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/blob-properties","title":"BLOB PROPERTIES","description":"BLOB PROPERTIES ( blob ; compress\xe9 {; tailleD\xe9compress\xe9e {; tailleCourante}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/blob-properties.md","sourceDirName":"commands-legacy","slug":"/commands/blob-properties","permalink":"/docs/fr/commands/blob-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-properties","title":"BLOB PROPERTIES","slug":"/commands/blob-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB","permalink":"/docs/fr/commands/theme/BLOB"},"next":{"title":"BLOB size","permalink":"/docs/fr/commands/blob-size"}}'),t=s("785893"),l=s("250065");let i={id:"blob-properties",title:"BLOB PROPERTIES",slug:"/commands/blob-properties",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BLOB PROPERTIES"})," ( ",(0,t.jsx)(n.em,{children:"blob"})," ; ",(0,t.jsx)(n.em,{children:"compress\xe9"})," {; ",(0,t.jsx)(n.em,{children:"tailleD\xe9compress\xe9e"})," {; ",(0,t.jsx)(n.em,{children:"tailleCourante"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB sur lequel vous voulez obtenir des informations"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"compress\xe9"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"0 = pas de compression, 1 = interne compact, 2 = interne rapide, -1 = GZIP compact, -2 = GZIP rapide"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tailleD\xe9compress\xe9e"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Taille du BLOB d\xe9compress\xe9 en octets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tailleCourante"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Taille courante du BLOB en octets"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BLOB PROPERTIES"})," retourne des informations sur le BLOB ",(0,t.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"compress\xe9"})," retourne une valeur indiquant si et comment le BLOB est compress\xe9. Vous pouvez comparer cette valeur aux constantes suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"BLOB"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Compact compression mode"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Compression interne la plus compacte (au d\xe9triment de la vitesse \xe0 laquelle la compression et la d\xe9compression sont effectu\xe9es). M\xe9thode par d\xe9faut."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Fast compression mode"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Compression/d\xe9compression interne la plus rapide au d\xe9triment du taux de compression (une fois compress\xe9, le BLOB prend plus de place)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GZIP best compression mode"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"Compression GZIP la plus compacte (au d\xe9triment de la vitesse \xe0 laquelle la compression et la d\xe9compression sont effectu\xe9es)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GZIP fast compression mode"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"-2"}),(0,t.jsx)(n.td,{children:"Compression/d\xe9compression GZIP la plus rapide (au d\xe9triment du taux de compression)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is not compressed"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Pas de compression"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Quel que soit l'\xe9tat de compression du BLOB, le param\xe8tre ",(0,t.jsx)(n.em,{children:"tailleD\xe9compress\xe9e"})," retourne la taille du BLOB non compress\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"tailleCourante"})," retourne la taille courante du BLOB. Si le BLOB est compress\xe9, ",(0,t.jsx)(n.em,{children:"tailleCourante"})," sera inf\xe9rieur \xe0 ",(0,t.jsx)(n.em,{children:"tailleD\xe9compress\xe9e"}),". Si le BLOB n'est pas compress\xe9, ",(0,t.jsx)(n.em,{children:"tailleCourante"})," sera \xe9gal \xe0 ",(0,t.jsx)(n.em,{children:"tailleD\xe9compress\xe9e"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["R\xe9f\xe9rez-vous aux exemples des commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/compress-blob",children:"COMPRESS BLOB"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/expand-blob",children:"EXPAND BLOB"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Lorsqu'un BLOB est compress\xe9, la m\xe9thode projet suivante vous permet de conna\xeetre le taux de place gagn\xe9e en compressant le BLOB :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet Place gagn\xe9e par compression\n\xa0\xa0// Place gagn\xe9e par compression (Pointeur {; Pointeur } ) -> Entier long\n\xa0\xa0// Place gagn\xe9e par compression ( -> BLOB {; -> octetsGagn\xe9s } ) -> Pourcentage\n\xa0\n\xa0#DECLARE ($blob : Pointer ; $saved : Pointer ) -> $percent : Integer\n\xa0var $vlCompress\xe9;$vlTailleD\xe9compress\xe9e;$vlTailleCourante : Integer\n\xa0\n\xa0BLOB PROPERTIES($blob->;$vlCompress\xe9;$vlTailleD\xe9compress\xe9e;$vlTailleCourante)\n\xa0If($vlTailleD\xe9compress\xe9e=0)\n\xa0\xa0\xa0\xa0$percent:=0\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$saved->:=0\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$percent:=100-(($vlTailleCourante/$vlTailleD\xe9compress\xe9e)*100)\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$saved->:=$vlTailleD\xe9compress\xe9e-$vlTailleCourante\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.p,{children:"Lorsque cette m\xe9thode est plac\xe9e dans votre application, vous pouvez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0COMPRESS BLOB(vxBlob)\n\xa0$vlPourcent:=Place gagn\xe9e par compression(->vxBlob;->vlTailleBlob)\n\xa0ALERT("La compression permet de gagner "+String(vlTailleBlob)+" octets, donc "+Chaine($vlPourcent;"#0%")+" d\'espace.")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/compress-blob",children:"COMPRESS BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/expand-blob",children:"EXPAND BLOB"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"536"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);