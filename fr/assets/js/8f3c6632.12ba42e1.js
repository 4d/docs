"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35422"],{311398:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/qr-move-column","title":"QR MOVE COLUMN","description":"QR MOVE COLUMN ( zone ; numColonne ; nouvPosition )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-move-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-move-column","permalink":"/docs/fr/commands/qr-move-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-move-column.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-move-column","title":"QR MOVE COLUMN","slug":"/commands/qr-move-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR INSERT COLUMN","permalink":"/docs/fr/commands/qr-insert-column"},"next":{"title":"QR NEW AREA","permalink":"/docs/fr/commands/qr-new-area"}}'),r=t("785893"),o=t("250065");let d={id:"qr-move-column",title:"QR MOVE COLUMN",slug:"/commands/qr-move-column",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR MOVE COLUMN"})," ( ",(0,r.jsx)(n.em,{children:"zone"})," ; ",(0,r.jsx)(n.em,{children:"numColonne"})," ; ",(0,r.jsx)(n.em,{children:"nouvPosition"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zone"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numColonne"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de la colonne"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nouvPosition"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nouvelle position de la colonne"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"QR MOVE COLUMN"})," d\xe9place la colonne ",(0,r.jsx)(n.em,{children:"numColonne"})," de sa position courante \xe0 la position ",(0,r.jsx)(n.em,{children:"nouvPosition"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Les deux param\xe8tres ",(0,r.jsx)(n.em,{children:"numColonne"})," et ",(0,r.jsx)(n.em,{children:"nouvPosition"})," doivent \xeatre des num\xe9ros de colonne valides (entre 1 et le nombre total de colonnes de l'\xe9tat) ; dans le cas contraire, l'erreur -9852 est retourn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande peut \xeatre utilis\xe9e avec des \xe9tats en liste uniquement."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous avez con\xe7u l'\xe9tat suivant :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(888990).Z+"",width:"649",height:"160"})}),"\n",(0,r.jsx)(n.p,{children:"Si vous ex\xe9cutez :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QR MOVE COLUMN(area;3;4)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Vous obtenez :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(385035).Z+"",width:"652",height:"163"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1325"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},888990:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2569470.fr-6e7794d18774a89df092de0df46ebe30.png"},385035:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2569472.fr-43bba3121e51c06ac72caca2669d61a3.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},o=s.createContext(r);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);