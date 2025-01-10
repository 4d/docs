"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87256"],{459111:function(n,e,r){r.r(e),r.d(e,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/qr-find-column","title":"QR Find column","description":"QR Find column ( zone ; expression ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-find-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-find-column","permalink":"/docs/fr/commands/qr-find-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-find-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-find-column","title":"QR Find column","slug":"/commands/qr-find-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR EXECUTE COMMAND","permalink":"/docs/fr/commands/qr-execute-command"},"next":{"title":"QR Get area property","permalink":"/docs/fr/commands/qr-get-area-property"}}'),d=r("785893"),t=r("250065");let i={id:"qr-find-column",title:"QR Find column",slug:"/commands/qr-find-column",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(n){let e={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"QR Find column"})," ( ",(0,d.jsx)(e.em,{children:"zone"})," ; ",(0,d.jsx)(e.em,{children:"expression"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Param\xe8tre"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"Description"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"zone"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"expression"}),(0,d.jsx)(e.td,{children:"Text, Pointer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Objet de colonne"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"R\xe9sultat"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"Num\xe9ro de colonne"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(e.p,{children:["La commande ",(0,d.jsx)(e.strong,{children:"QR Find column"})," retourne le num\xe9ro de la premi\xe8re colonne de la ",(0,d.jsx)(e.em,{children:"zone"})," dont le contenu correspond \xe0 l'",(0,d.jsx)(e.em,{children:"expression"})," pass\xe9e en param\xe8tre."]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"expression"})," peut contenir soit une cha\xeene soit un pointeur."]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"QR Find column"})," retourne -1 si la recherche n'aboutit pas."]}),"\n",(0,d.jsxs)(e.p,{children:["Si un num\xe9ro de ",(0,d.jsx)(e.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,d.jsx)(e.h4,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(e.p,{children:"Le code suivant permet de r\xe9cup\xe9rer le num\xe9ro de la colonne contenant le champ [G.ER Tests]Quarter puis de supprimer la colonne :"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0$NumColonne:=QR Find column(MaZone;->[G.ER Tests]Quarter)\n"})}),"\n",(0,d.jsx)(e.p,{children:"ou :"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0$NumColonne:=QR Find column(MaZone;"[G.ER Tests]Quarter")\n'})}),"\n",(0,d.jsx)(e.p,{children:"suivi de :"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0If($NumColonne#-1)\n\xa0\xa0\xa0\xa0QR DELETE COLUMN(MaZone;$NumColonne)\n\xa0End if\n"})}),"\n",(0,d.jsx)(e.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(e.td,{children:"776"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Thread safe"}),(0,d.jsx)(e.td,{children:"\u2717"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Modifie les variables"}),(0,d.jsx)(e.td,{children:"error"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return i}});var s=r(667294);let d={},t=s.createContext(d);function i(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);