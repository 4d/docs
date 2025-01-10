"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40745"],{416465:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/qr-blob-to-report","title":"QR BLOB TO REPORT","description":"QR BLOB TO REPORT ( zone ; blob )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-blob-to-report.md","sourceDirName":"commands-legacy","slug":"/commands/qr-blob-to-report","permalink":"/docs/fr/commands/qr-blob-to-report","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-blob-to-report.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-blob-to-report","title":"QR BLOB TO REPORT","slug":"/commands/qr-blob-to-report","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Quick Report","permalink":"/docs/fr/category/quick-report"},"next":{"title":"QR Count columns","permalink":"/docs/fr/commands/qr-count-columns"}}'),s=r("785893"),o=r("250065");let d={id:"qr-blob-to-report",title:"QR BLOB TO REPORT",slug:"/commands/qr-blob-to-report",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR BLOB TO REPORT"})," ( ",(0,s.jsx)(n.em,{children:"zone"})," ; ",(0,s.jsx)(n.em,{children:"blob"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zone"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB contenant l'\xe9tat"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QR BLOB TO REPORT"})," place l\u2019\xe9tat contenu dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"blob"})," dans la zone d'\xe9tat rapide d\xe9sign\xe9e par le param\xe8tre ",(0,s.jsx)(n.em,{children:"zone"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,s.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(n.br,{}),"\nSi le param\xe8tre ",(0,s.jsx)(n.em,{children:"blob"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Le code suivant affiche dans la zone MaZone l'\xe9tat rapide \u201Cetat.4qr\u201D, stock\xe9 \xe0 c\xf4t\xe9 du fichier de structure de la base. A noter que le fichier d'\xe9tat peut avoir \xe9t\xe9 cr\xe9\xe9 avec une version de 4D ant\xe9rieure \xe0 la 2003 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $doc : Blob\n\xa0var MaZone : Integer\n\xa0DOCUMENT TO BLOB("etat.4qr";$doc)\n\xa0QR BLOB TO REPORT(MaZone;$doc)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"L'instruction suivante affiche l'\xe9tat stock\xe9 dans le champ ChampBlob dans la zone MaZone :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QR BLOB TO REPORT(MaZone;[Table 1]ChampBlob)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/qr-report-to-blob",children:"QR REPORT TO BLOB"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"771"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);