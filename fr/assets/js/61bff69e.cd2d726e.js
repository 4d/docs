"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71679"],{539176:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/compress-blob","title":"COMPRESS BLOB","description":"COMPRESS BLOB ( blob {; compression} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/compress-blob.md","sourceDirName":"commands-legacy","slug":"/commands/compress-blob","permalink":"/docs/fr/commands/compress-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompress-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"compress-blob","title":"COMPRESS BLOB","slug":"/commands/compress-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB TO VARIABLE","permalink":"/docs/fr/commands/blob-to-variable"},"next":{"title":"COPY BLOB","permalink":"/docs/fr/commands/copy-blob"}}'),l=s("785893"),o=s("250065");let t={id:"compress-blob",title:"COMPRESS BLOB",slug:"/commands/compress-blob",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"COMPRESS BLOB"})," ( ",(0,l.jsx)(n.em,{children:"blob"})," {; ",(0,l.jsx)(n.em,{children:"compression"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"blob"}),(0,l.jsx)(n.td,{children:"Blob"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"BLOB \xe0 compresser"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"compression"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Si ce param\xe8tre est pass\xe9 : 1= taux de compression maximum 2 = vitesse de compression maximum"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"COMPRESS BLOB"})," compresse le BLOB ",(0,l.jsx)(n.em,{children:"blob"})," \xe0 l'aide d'un algorithme de compression."]}),"\n",(0,l.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,l.jsx)(n.em,{children:"compression"})," vous permet de fixer la fa\xe7on dont le BLOB sera compress\xe9. Passez dans ce param\xe8tre une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,l.jsx)(n.em,{children:"BLOB"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Valeur"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Compact compression mode"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"Compression interne la plus compacte (au d\xe9triment de la vitesse \xe0 laquelle la compression et la d\xe9compression sont effectu\xe9es). M\xe9thode par d\xe9faut."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Fast compression mode"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"Compression/d\xe9compression interne la plus rapide au d\xe9triment du taux de compression (une fois compress\xe9, le BLOB prend plus de place)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"GZIP best compression mode"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"-1"}),(0,l.jsx)(n.td,{children:"Compression GZIP la plus compacte (au d\xe9triment de la vitesse \xe0 laquelle la compression et la d\xe9compression sont effectu\xe9es)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"GZIP fast compression mode"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"-2"}),(0,l.jsx)(n.td,{children:"Compression/d\xe9compression GZIP la plus rapide (au d\xe9triment du taux de compression)"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous passez une autre valeur ou si vous omettez le param\xe8tre ",(0,l.jsx)(n.em,{children:"compression"}),", la m\xe9thode de compression 1 est utilis\xe9e (algorithme interne compact)."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," La commande compresse uniquement les BLOBs de taille sup\xe9rieure ou \xe9gale \xe0 255 octets."]}),"\n",(0,l.jsxs)(n.p,{children:["Apr\xe8s que cette commande ait \xe9t\xe9 appel\xe9e, la variable syst\xe8me OK prend la valeur 1 si le BLOB a \xe9t\xe9 correctement compress\xe9.",(0,l.jsx)(n.br,{}),"\nSi la compression n'a pu \xeatre effectu\xe9e, OK prend la valeur 0. Dans ce cas, si l'erreur provient du fait que la taille du BLOB est inf\xe9rieure \xe0 255 octets ou que la m\xe9moire disponible est insuffisante pour effectuer l'op\xe9ration, aucune erreur n'est g\xe9n\xe9r\xe9e, la m\xe9thode poursuit son ex\xe9cution.",(0,l.jsx)(n.br,{}),"\nEn revanche, si l'erreur est caus\xe9e par un probl\xe8me plus important (le BLOB est endommag\xe9), l'erreur -10600 est g\xe9n\xe9r\xe9e. Cette erreur, relativement rare, peut \xeatre intercept\xe9e \xe0 l'aide d'une m\xe9thode install\xe9e par la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Lorsqu'un BLOB a \xe9t\xe9 compress\xe9, vous pouvez le d\xe9compresser \xe0 l'aide de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/expand-blob",children:"EXPAND BLOB"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Pour savoir si un BLOB a \xe9t\xe9 compress\xe9, utilisez la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/blob-properties",children:"BLOB PROPERTIES"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"ATTENTION :"})," Un BLOB compress\xe9 est toujours un BLOB, rien ne vous emp\xeache donc de modifier son contenu. Cependant, si vous le modifiez, la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/expand-blob",children:"EXPAND BLOB"})," ne pourra plus d\xe9compresser correctement le BLOB."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsxs)(n.p,{children:["L'exemple suivant teste si le BLOB ",(0,l.jsx)(n.em,{children:"vxMonBlob"})," est compress\xe9 et, sinon, le compresse :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0BLOB PROPERTIES(vxMonBlob;$vlCompress\xe9;$vlTailleD\xe9compress\xe9e;$vlTailleCourante)\n\xa0If($vlCompress\xe9=Is not compressed)\n\xa0\xa0\xa0\xa0COMPRESS BLOB(vxMonBlob)\n\xa0End if\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Notez que si vous appliquez ",(0,l.jsx)(n.strong,{children:"COMPRESS BLOB"})," \xe0 un BLOB d\xe9j\xe0 compress\xe9, la commande le d\xe9tecte et ne fait rien."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant vous permet de s\xe9lectionner un document puis de le compresser :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;vxBlob)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0COMPRESS BLOB(vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsx)(n.p,{children:"Envoi de donn\xe9es HTTP brutes compress\xe9es en GZIP :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0COMPRESS BLOB($blob;GZIP best compression mode )\n\xa0var $vEncoding : Text\n\xa0$vEncoding:="Content-encoding: gzip"\n\xa0WEB SET HTTP HEADER($vEncoding)\n\xa0WEB SEND RAW DATA($blob ;*)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,l.jsx)(n.p,{children:"La variable OK prend la valeur 1 si le BLOB a \xe9t\xe9 correctement compress\xe9, sinon elle prend la valeur 0."}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/commands/blob-properties",children:"BLOB PROPERTIES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/expand-blob",children:"EXPAND BLOB"})]}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"534"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifie les variables"}),(0,l.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var r=s(667294);let l={},o=r.createContext(l);function t(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);