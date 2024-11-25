"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95529"],{460918:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>i,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/qr-count-columns","title":"QR Count columns","description":"QR Count columns ( zone ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-count-columns.md","sourceDirName":"commands-legacy","slug":"/commands/qr-count-columns","permalink":"/docs/fr/commands/qr-count-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-count-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-count-columns","title":"QR Count columns","slug":"/commands/qr-count-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR BLOB TO REPORT","permalink":"/docs/fr/commands/qr-blob-to-report"},"next":{"title":"QR DELETE COLUMN","permalink":"/docs/fr/commands/qr-delete-column"}}'),r=s("785893"),o=s("250065");let c={id:"qr-count-columns",title:"QR Count columns",slug:"/commands/qr-count-columns",displayed_sidebar:"docs"},l=void 0,d={},i=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR Count columns"})," ( ",(0,r.jsx)(n.em,{children:"zone"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zone"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nombre de colonnes dans la zone"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"QR Count columns"})," retourne le nombre de colonnes pr\xe9sentes dans l'\xe9tat rapide d\xe9sign\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"zone"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,r.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant permet d'ajouter une colonne suppl\xe9mentaire \xe0 droite de la derni\xe8re colonne de la zone :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$NbCol:=QR Count columns(MaZone)\n\xa0QR INSERT COLUMN(MaZone;$NbCol+1;->[Table 1]Noms)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/qr-delete-column",children:"QR DELETE COLUMN"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/qr-insert-column",children:"QR INSERT COLUMN"})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let r={},o=t.createContext(r);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);