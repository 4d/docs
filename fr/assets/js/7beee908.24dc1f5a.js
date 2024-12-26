"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95529"],{460918:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>i,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/qr-count-columns","title":"QR Count columns","description":"QR Count columns ( zone ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-count-columns.md","sourceDirName":"commands-legacy","slug":"/commands/qr-count-columns","permalink":"/docs/fr/commands/qr-count-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-count-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-count-columns","title":"QR Count columns","slug":"/commands/qr-count-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR BLOB TO REPORT","permalink":"/docs/fr/commands/qr-blob-to-report"},"next":{"title":"QR DELETE COLUMN","permalink":"/docs/fr/commands/qr-delete-column"}}'),t=s("785893"),o=s("250065");let d={id:"qr-count-columns",title:"QR Count columns",slug:"/commands/qr-count-columns",displayed_sidebar:"docs"},l=void 0,c={},i=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"QR Count columns"})," ( ",(0,t.jsx)(e.em,{children:"zone"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Param\xe8tre"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"zone"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"R\xe9sultat"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"Nombre de colonnes dans la zone"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["La commande ",(0,t.jsx)(e.strong,{children:"QR Count columns"})," retourne le nombre de colonnes pr\xe9sentes dans l'\xe9tat rapide d\xe9sign\xe9 par le param\xe8tre ",(0,t.jsx)(e.em,{children:"zone"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Si un num\xe9ro de ",(0,t.jsx)(e.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(e.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(e.p,{children:"L'exemple suivant permet d'ajouter une colonne suppl\xe9mentaire \xe0 droite de la derni\xe8re colonne de la zone :"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"\xa0$NbCol:=QR Count columns(MaZone)\n\xa0QR INSERT COLUMN(MaZone;$NbCol+1;->[Table 1]Noms)\n"})}),"\n",(0,t.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/fr/commands/qr-delete-column",children:"QR DELETE COLUMN"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/fr/commands/qr-insert-column",children:"QR INSERT COLUMN"})]}),"\n",(0,t.jsx)(e.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(e.td,{children:"764"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Thread safe"}),(0,t.jsx)(e.td,{children:"\u2717"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Modifie les variables"}),(0,t.jsx)(e.td,{children:"error"})]})]})]})]})}function u(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},o=r.createContext(t);function d(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);