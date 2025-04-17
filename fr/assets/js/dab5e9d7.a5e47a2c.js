"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69875"],{997861:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/qr-get-selection","title":"QR GET SELECTION","description":"QR GET SELECTION ( zone ; gauche ; haut {; droite {; bas}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/qr-get-selection.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-selection","permalink":"/docs/fr/commands/qr-get-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-selection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"qr-get-selection","title":"QR GET SELECTION","slug":"/commands/qr-get-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get report table","permalink":"/docs/fr/commands/qr-get-report-table"},"next":{"title":"QR GET SORTS","permalink":"/docs/fr/commands/qr-get-sorts"}}'),s=t("785893"),i=t("250065");let d={id:"qr-get-selection",title:"QR GET SELECTION",slug:"/commands/qr-get-selection",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR GET SELECTION"})," ( ",(0,s.jsx)(n.em,{children:"zone"})," ; ",(0,s.jsx)(n.em,{children:"gauche"})," ; ",(0,s.jsx)(n.em,{children:"haut"})," {; ",(0,s.jsx)(n.em,{children:"droite"})," {; ",(0,s.jsx)(n.em,{children:"bas"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zone"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gauche"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Limite gauche"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"haut"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Limite sup\xe9rieure"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"droite"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Limite droite"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bas"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Limite inf\xe9rieure"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QR GET SELECTION"})," retourne les coordonn\xe9es de la s\xe9lection courante de la ",(0,s.jsx)(n.em,{children:"zone"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"gauche"})," retourne le num\xe9ro de la colonne repr\xe9sentant la limite gauche de la s\xe9lection. Si ",(0,s.jsx)(n.em,{children:"gauche"})," vaut 0, la ligne enti\xe8re est s\xe9lectionn\xe9e.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"haut"})," retourne le num\xe9ro de la ligne repr\xe9sentant la limite sup\xe9rieure de la s\xe9lection. Si ",(0,s.jsx)(n.em,{children:"haut"})," vaut 0, la colonne enti\xe8re est s\xe9lectionn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Si les param\xe8tres ",(0,s.jsx)(n.em,{children:"gauche"})," and ",(0,s.jsx)(n.em,{children:"haut"})," valent 0, la totalit\xe9 de la zone est s\xe9lectionn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"droite"})," retourne le num\xe9ro de la colonne repr\xe9sentant la limite droite de la s\xe9lection.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"bas"})," retourne le num\xe9ro de la ligne repr\xe9sentant la limite inf\xe9rieure de la s\xe9lection."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Si la ",(0,s.jsx)(n.em,{children:"zone"})," ne contient aucune s\xe9lection, les param\xe8tres ",(0,s.jsx)(n.em,{children:"gauche"}),", ",(0,s.jsx)(n.em,{children:"haut"}),", ",(0,s.jsx)(n.em,{children:"droite"})," et ",(0,s.jsx)(n.em,{children:"bas"})," retournent -1."]}),"\n",(0,s.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,s.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/qr-set-selection",children:"QR SET SELECTION"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"793"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);