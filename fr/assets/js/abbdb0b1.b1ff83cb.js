"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74741"],{293411:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/qr-blob-to-report","title":"QR BLOB TO REPORT","description":"QR BLOB TO REPORT ( zone ; blob )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-blob-to-report.md","sourceDirName":"commands-legacy","slug":"/commands/qr-blob-to-report","permalink":"/docs/fr/20-R8/commands/qr-blob-to-report","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-blob-to-report.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-blob-to-report","title":"QR BLOB TO REPORT","slug":"/commands/qr-blob-to-report","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Etats rapides","permalink":"/docs/fr/20-R8/commands/theme/Quick-Report"},"next":{"title":"QR Count columns","permalink":"/docs/fr/20-R8/commands/qr-count-columns"}}'),s=r("785893"),d=r("250065");let o={id:"qr-blob-to-report",title:"QR BLOB TO REPORT",slug:"/commands/qr-blob-to-report",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR BLOB TO REPORT"})," ( ",(0,s.jsx)(n.em,{children:"zone"})," ; ",(0,s.jsx)(n.em,{children:"blob"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zone"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB contenant l'\xe9tat"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QR BLOB TO REPORT"})," place l\u2019\xe9tat contenu dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"blob"})," dans la zone d'\xe9tat rapide d\xe9sign\xe9e par le param\xe8tre ",(0,s.jsx)(n.em,{children:"zone"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,s.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(n.em,{children:"blob"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Le code suivant affiche dans la zone MaZone l'\xe9tat rapide \u201Cetat.4qr\u201D, stock\xe9 \xe0 c\xf4t\xe9 du fichier de structure de la base. A noter que le fichier d'\xe9tat peut avoir \xe9t\xe9 cr\xe9\xe9 avec une version de 4D ant\xe9rieure \xe0 la 2003 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $doc : Blob\n\xa0var MaZone : Integer\n\xa0DOCUMENT TO BLOB("etat.4qr";$doc)\n\xa0QR BLOB TO REPORT(MaZone;$doc)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"L'instruction suivante affiche l'\xe9tat stock\xe9 dans le champ ChampBlob dans la zone MaZone :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QR BLOB TO REPORT(MaZone;[Table 1]ChampBlob)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/qr-report-to-blob",children:"QR REPORT TO BLOB"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"771"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var t=r(667294);let s={},d=t.createContext(s);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);