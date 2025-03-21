"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34065"],{127784:function(n,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/qr-get-info-row","title":"QR Get info row","description":"QR Get info row ( zone ; ligne ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-info-row.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-info-row","permalink":"/docs/fr/20-R7/commands/qr-get-info-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-info-row.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-info-row","title":"QR Get info row","slug":"/commands/qr-get-info-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET INFO COLUMN","permalink":"/docs/fr/20-R7/commands/qr-get-info-column"},"next":{"title":"QR Get report kind","permalink":"/docs/fr/20-R7/commands/qr-get-report-kind"}}'),s=r("785893"),i=r("250065");let d={id:"qr-get-info-row",title:"QR Get info row",slug:"/commands/qr-get-info-row",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"QR Get info row"})," ( ",(0,s.jsx)(e.em,{children:"zone"})," ; ",(0,s.jsx)(e.em,{children:"ligne"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Param\xe8tre"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"zone"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ligne"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Ligne"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"R\xe9sultat"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"0 = Visible, 1 = Cach\xe9e"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["La commande ",(0,s.jsx)(e.strong,{children:"QR Get info row"})," indique si la ligne d\xe9sign\xe9e par le param\xe8tre ",(0,s.jsx)(e.em,{children:"ligne"})," est affich\xe9e ou masqu\xe9e dans la ",(0,s.jsx)(e.em,{children:"zone"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["Le param\xe8tre ",(0,s.jsx)(e.em,{children:"ligne"})," d\xe9signe la ligne \xe0 v\xe9rifier. Vous pouvez passer soit :"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"une valeur enti\xe8re positive pour d\xe9signer la ligne de sous-total correspondante,"}),"\n",(0,s.jsxs)(e.li,{children:["une des constantes suivantes du th\xe8me ",(0,s.jsx)(e.em,{children:"QR Lignes pour Propri\xe9t\xe9s"})," :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constante"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Valeur"}),(0,s.jsx)(e.th,{children:"Comment"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr detail"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"-2"}),(0,s.jsx)(e.td,{children:"Zone D\xe9tail de l'\xe9tat"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr grand total"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"-3"}),(0,s.jsx)(e.td,{children:"Zone Total g\xe9n\xe9ral"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr title"}),(0,s.jsx)(e.td,{children:"Entier long"}),(0,s.jsx)(e.td,{children:"-1"}),(0,s.jsx)(e.td,{children:"Intitul\xe9 de l'\xe9tat"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["La valeur retourn\xe9e par ",(0,s.jsx)(e.strong,{children:"QR Get info row"})," indique si le contenu de la ligne est affich\xe9 ou masqu\xe9. Si la fonction retourne 1, le contenu de la ligne est masqu\xe9 ; si elle retourne 0, le contenu de la ligne est affich\xe9."]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["Si un num\xe9ro de ",(0,s.jsx)(e.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(e.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(e.em,{children:"ligne"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(e.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/fr/20-R7/commands/qr-get-info-column",children:"QR GET INFO COLUMN"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/fr/20-R7/commands/qr-set-info-column",children:"QR SET INFO COLUMN"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/fr/20-R7/commands/qr-set-info-row",children:"QR SET INFO ROW"})]}),"\n",(0,s.jsx)(e.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(e.td,{children:"769"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Thread safe"}),(0,s.jsx)(e.td,{children:"\u2717"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Modifie les variables"}),(0,s.jsx)(e.td,{children:"error"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);