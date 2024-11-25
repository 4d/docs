"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87256"],{459111:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/qr-find-column","title":"QR Find column","description":"QR Find column ( zone ; expression ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-find-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-find-column","permalink":"/docs/fr/commands/qr-find-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-find-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-find-column","title":"QR Find column","slug":"/commands/qr-find-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR EXECUTE COMMAND","permalink":"/docs/fr/commands/qr-execute-command"},"next":{"title":"QR Get area property","permalink":"/docs/fr/commands/qr-get-area-property"}}'),t=r("785893"),d=r("250065");let o={id:"qr-find-column",title:"QR Find column",slug:"/commands/qr-find-column",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function a(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR Find column"})," ( ",(0,t.jsx)(n.em,{children:"zone"})," ; ",(0,t.jsx)(n.em,{children:"expression"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"zone"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expression"}),(0,t.jsx)(n.td,{children:"Text, Pointer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet de colonne"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de colonne"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"QR Find column"})," retourne le num\xe9ro de la premi\xe8re colonne de la ",(0,t.jsx)(n.em,{children:"zone"})," dont le contenu correspond \xe0 l'",(0,t.jsx)(n.em,{children:"expression"})," pass\xe9e en param\xe8tre."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"expression"})," peut contenir soit une cha\xeene soit un pointeur."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR Find column"})," retourne -1 si la recherche n'aboutit pas."]}),"\n",(0,t.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,t.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Le code suivant permet de r\xe9cup\xe9rer le num\xe9ro de la colonne contenant le champ [G.ER Tests]Quarter puis de supprimer la colonne :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$NumColonne:=QR Find column(MaZone;->[G.ER Tests]Quarter)\n"})}),"\n",(0,t.jsx)(n.p,{children:"ou :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$NumColonne:=QR Find column(MaZone;"[G.ER Tests]Quarter")\n'})}),"\n",(0,t.jsx)(n.p,{children:"suivi de :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If($NumColonne#-1)\n\xa0\xa0\xa0\xa0QR DELETE COLUMN(MaZone;$NumColonne)\n\xa0End if\n"})})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var s=r(667294);let t={},d=s.createContext(t);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);