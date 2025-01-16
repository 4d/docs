"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14848"],{354675:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/qr-get-destination","title":"QR GET DESTINATION","description":"QR GET DESTINATION ( zone ; type {; sp\xe9cificit\xe9s} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-get-destination.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-destination","permalink":"/docs/fr/commands/qr-get-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-destination.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-get-destination","title":"QR GET DESTINATION","slug":"/commands/qr-get-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get command status","permalink":"/docs/fr/commands/qr-get-command-status"},"next":{"title":"QR Get document property","permalink":"/docs/fr/commands/qr-get-document-property"}}'),r=t("785893"),i=t("250065");let d={id:"qr-get-destination",title:"QR GET DESTINATION",slug:"/commands/qr-get-destination",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(n){let e={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"QR GET DESTINATION"})," ( ",(0,r.jsx)(e.em,{children:"zone"})," ; ",(0,r.jsx)(e.em,{children:"type"})," {; ",(0,r.jsx)(e.em,{children:"sp\xe9cificit\xe9s"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Param\xe8tre"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"zone"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"type"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Type d'\xe9tat"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sp\xe9cificit\xe9s"}),(0,r.jsx)(e.td,{children:"Text, Variable"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Sp\xe9cificit\xe9s de la destination"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["La commande ",(0,r.jsx)(e.strong,{children:"QR GET DESTINATION"})," retourne le ",(0,r.jsx)(e.em,{children:"type"})," de destination de l'\xe9tat rapide contenu dans la ",(0,r.jsx)(e.em,{children:"zone"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Vous pouvez comparer la valeur obtenue dans le param\xe8tre ",(0,r.jsx)(e.em,{children:"type"})," avec les constantes du th\xe8me ",(0,r.jsx)(e.em,{children:"QR Destination de sortie"}),". Le tableau suivant d\xe9crit les valeurs qui peuvent \xeatre retourn\xe9es dans les param\xe8tres ",(0,r.jsx)(e.em,{children:"type"})," et ",(0,r.jsx)(e.em,{children:"sp\xe9cificit\xe9s"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Constante"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Valeur"}),(0,r.jsx)(e.th,{children:"Comment"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"_o_qr 4D Chart area"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"*** Constante obsol\xe8te ***"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"_o_qr 4D View area"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:"*** Constante obsol\xe8te ***"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"qr HTML file"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"5"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"sp\xe9cificit\xe9s"})," : Chemin d'acc\xe8s du fichier."]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"qr printer"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"sp\xe9cificit\xe9s"}),' : "*" pour supprimer les bo\xeetes de dialogue d\'impression']})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"qr text file"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"2"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"sp\xe9cificit\xe9s"})," : Chemin d'acc\xe8s du fichier."]})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["Si un num\xe9ro de ",(0,r.jsx)(e.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/fr/commands/qr-set-destination",children:"QR SET DESTINATION"})}),"\n",(0,r.jsx)(e.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(e.td,{children:"756"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread safe"}),(0,r.jsx)(e.td,{children:"\u2717"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Modifie les variables"}),(0,r.jsx)(e.td,{children:"error"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);