"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45498"],{296083:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/qr-get-totals-spacing","title":"QR GET TOTALS SPACING","description":"QR GET TOTALS SPACING ( zone ; sousTotal ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-get-totals-spacing.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-totals-spacing","permalink":"/docs/fr/commands/qr-get-totals-spacing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-totals-spacing.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-get-totals-spacing","title":"QR GET TOTALS SPACING","slug":"/commands/qr-get-totals-spacing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET TOTALS DATA","permalink":"/docs/fr/commands/qr-get-totals-data"},"next":{"title":"QR INSERT COLUMN","permalink":"/docs/fr/commands/qr-insert-column"}}'),r=s("785893"),l=s("250065");let i={id:"qr-get-totals-spacing",title:"QR GET TOTALS SPACING",slug:"/commands/qr-get-totals-spacing",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR GET TOTALS SPACING"})," ( ",(0,r.jsx)(n.em,{children:"zone"})," ; ",(0,r.jsx)(n.em,{children:"sousTotal"})," ; ",(0,r.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zone"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sousTotal"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de sous-total"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeur"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"0=pas d'espace, 32000=ins\xe8re une saut de page, >0=espace ajout\xe9 sous le niveau de rupture, <0=augmentation proportionnelle"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"QR GET TOTALS SPACING"})," permet de r\xe9cup\xe9rer la valeur de l'espacement ajout\xe9 au-dessous d'une ligne de sous-total. Elle ne peut \xeatre utilis\xe9e qu'avec des \xe9tats en liste."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"zone"})," contient la r\xe9f\xe9rence de la zone d'\xe9tat rapide.",(0,r.jsx)(n.br,{}),"\nLe param\xe8tre ",(0,r.jsx)(n.em,{children:"sousTotal"})," d\xe9signe le niveau de sous-total (ou de rupture) dont vous souhaitez conna\xeetre l'espacement. Ce param\xe8tre contient une valeur comprise entre 1 et le nombre de lignes de sous-total/rupture."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"valeur"})," retourne la valeur de l'espacement :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"valeur"})," vaut 0, aucun espacement n'est ajout\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"valeur"})," vaut 32000, un saut de page est ajout\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"valeur"})," est une valeur positive, elle exprime l'espacement en pixels."]}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"valeur"})," est une valeur n\xe9gative, elle exprime l'espacement en pourcentage de la ligne de sous-total. Par exemple, la valeur -100 indique un espace au-dessous de la ligne de sous-total correspondant \xe0 100% de la hauteur courante de la ligne."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,r.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,r.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,r.jsx)(n.em,{children:"sousTotal"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/qr-set-totals-spacing",children:"QR SET TOTALS SPACING"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"762"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);