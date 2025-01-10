"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75950"],{632510:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/qr-set-selection","title":"QR SET SELECTION","description":"QR SET SELECTION ( zone ; gauche ; haut {; droite {; bas}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-selection.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-selection","permalink":"/docs/fr/commands/qr-set-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-selection","title":"QR SET SELECTION","slug":"/commands/qr-set-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET REPORT TABLE","permalink":"/docs/fr/commands/qr-set-report-table"},"next":{"title":"QR SET SORTS","permalink":"/docs/fr/commands/qr-set-sorts"}}'),r=t("785893"),i=t("250065");let l={id:"qr-set-selection",title:"QR SET SELECTION",slug:"/commands/qr-set-selection",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR SET SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"zone"})," ; ",(0,r.jsx)(n.em,{children:"gauche"})," ; ",(0,r.jsx)(n.em,{children:"haut"})," {; ",(0,r.jsx)(n.em,{children:"droite"})," {; ",(0,r.jsx)(n.em,{children:"bas"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zone"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gauche"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Limite gauche"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"haut"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Limite sup\xe9rieure"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"droite"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Limite droite"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bas"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Limite inf\xe9rieure"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"QR SET SELECTION"})," permet de s\xe9lectionner une cellule, une ligne, une colonne ou encore la totalit\xe9 de la ",(0,r.jsx)(n.em,{children:"zone"}),", comme vous le feriez \xe0 l'aide de la souris. Cette commande permet \xe9galement de d\xe9s\xe9lectionner la s\xe9lection courante."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"gauche"})," contient le num\xe9ro de la colonne repr\xe9sentant la limite gauche de la s\xe9lection. Si ",(0,r.jsx)(n.em,{children:"gauche"})," vaut 0, la ligne enti\xe8re est s\xe9lectionn\xe9e.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"haut"})," contient le num\xe9ro de la ligne repr\xe9sentant la limite sup\xe9rieure de la s\xe9lection. Si ",(0,r.jsx)(n.em,{children:"haut"})," vaut 0, la colonne enti\xe8re est s\xe9lectionn\xe9e.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"droite"})," contient le num\xe9ro de la colonne repr\xe9sentant la limite droite de la s\xe9lection.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"bas"})," contient le num\xe9ro de la ligne repr\xe9sentant la limite inf\xe9rieure de la s\xe9lection."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si les param\xe8tres ",(0,r.jsx)(n.em,{children:"gauche"})," et ",(0,r.jsx)(n.em,{children:"haut"})," valent 0, la totalit\xe9 de la zone est s\xe9lectionn\xe9e."]}),"\n",(0,r.jsxs)(n.li,{children:["Pour tout d\xe9s\xe9lectionner, passez -1 dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"gauche"}),", ",(0,r.jsx)(n.em,{children:"haut"}),", ",(0,r.jsx)(n.em,{children:"droite"})," et ",(0,r.jsx)(n.em,{children:"bas"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,r.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/qr-get-selection",children:"QR GET SELECTION"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"794"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);