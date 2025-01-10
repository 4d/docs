"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57601"],{209318:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/expand-blob","title":"EXPAND BLOB","description":"EXPAND BLOB ( blob )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/expand-blob.md","sourceDirName":"commands-legacy","slug":"/commands/expand-blob","permalink":"/docs/fr/commands/expand-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexpand-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"expand-blob","title":"EXPAND BLOB","slug":"/commands/expand-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ENCRYPT BLOB","permalink":"/docs/fr/commands/encrypt-blob"},"next":{"title":"INSERT IN BLOB","permalink":"/docs/fr/commands/insert-in-blob"}}'),l=s("785893"),t=s("250065");let d={id:"expand-blob",title:"EXPAND BLOB",slug:"/commands/expand-blob",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"EXPAND BLOB"})," ( ",(0,l.jsx)(n.em,{children:"blob"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"blob"}),(0,l.jsx)(n.td,{children:"Blob"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"BLOB \xe0 d\xe9compresser"})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"EXPAND BLOB"})," d\xe9compresse le BLOB ",(0,l.jsx)(n.em,{children:"blob"})," pr\xe9alablement compress\xe9 \xe0 l'aide de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/compress-blob",children:"COMPRESS BLOB"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Apr\xe8s l'appel de la commande, la variable syst\xe8me OK prend la valeur 1 si le BLOB a \xe9t\xe9 correctement d\xe9compress\xe9."}),"\n",(0,l.jsxs)(n.p,{children:["Si la d\xe9compression n'a pas pu \xeatre effectu\xe9e, OK prend la valeur 0.",(0,l.jsx)(n.br,{}),"\nDans ce cas, si l'erreur provient du fait que la m\xe9moire disponible est insuffisante pour effectuer l'op\xe9ration, aucune erreur n'est g\xe9n\xe9r\xe9e et la m\xe9thode poursuit son ex\xe9cution.",(0,l.jsx)(n.br,{}),"\nEn revanche, si l'erreur est caus\xe9e par un probl\xe8me plus important (le BLOB n'avait pas \xe9t\xe9 compress\xe9 ou le BLOB est endommag\xe9), l'erreur -10600 est g\xe9n\xe9r\xe9e. Cette erreur peut \xeatre intercept\xe9e \xe0 l'aide d'une m\xe9thode install\xe9e par la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["De mani\xe8re g\xe9n\xe9rale, il est pr\xe9f\xe9rable d'appeler la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/blob-properties",children:"BLOB PROPERTIES"})," pour savoir si le BLOB a \xe9t\xe9 compress\xe9 avant d'ex\xe9cuter ",(0,l.jsx)(n.strong,{children:"EXPAND BLOB"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsxs)(n.p,{children:["L'exemple suivant teste si le BLOB ",(0,l.jsx)(n.em,{children:"vxMonBlob"})," est compress\xe9 et, si oui, le d\xe9compresse :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0BLOB PROPERTIES(vxMonBlob;$vlCompress\xe9;$vlTailleD\xe9compress\xe9e;$vlTailleCourante)\n\xa0If($vlCompress\xe9#Is not compressed)\n\xa0\xa0\xa0\xa0EXPAND BLOB(vxMonBlob)\n\xa0End if\n"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant vous permet de s\xe9lectionner un document et puis de le d\xe9compresser s'il \xe9tait compress\xe9 :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;vxBlob)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB PROPERTIES(vxBlob;$vlCompress\xe9;$vlTailleD\xe9compress\xe9e;$vlTailleCourante)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlCompress\xe9#Is not compressed)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0EXPAND BLOB(vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,l.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,l.jsx)(n.p,{children:"La variable OK prend la valeur 1 si le BLOB a \xe9t\xe9 correctement d\xe9compress\xe9, sinon elle prend la valeur 0."}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/commands/blob-properties",children:"BLOB PROPERTIES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/compress-blob",children:"COMPRESS BLOB"})]}),"\n",(0,l.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"535"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifie les variables"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let l={},t=r.createContext(l);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);