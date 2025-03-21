"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35235"],{240111:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-show-print-lines","title":"VP SET SHOW PRINT LINES","description":"VP SET SHOW PRINT LINES ( vpAreaName Boolean}{; sheet : Integer} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-show-print-lines.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-show-print-lines","permalink":"/docs/fr/ViewPro/commands/vp-set-show-print-lines","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-show-print-lines.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-show-print-lines","title":"VP SET SHOW PRINT LINES"},"sidebar":"docs","previous":{"title":"VP SET SHEET OPTIONS","permalink":"/docs/fr/ViewPro/commands/vp-set-sheet-options"},"next":{"title":"VP SET TABLE COLUMN ATTRIBUTES","permalink":"/docs/fr/ViewPro/commands/vp-set-table-column-attributes"}}'),i=s("785893"),r=s("250065");let d={id:"vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP SET SHOW PRINT LINES"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text {; visible : Boolean}{; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"visible"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Lignes d'impression affich\xe9es si True (par d\xe9faut), cach\xe9es si False"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"VP SET SHOW PRINT LINES"})," command  sets whether to display print preview lines in a spreadsheet.."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"visible"}),", pass ",(0,i.jsx)(n.code,{children:"True"})," to display the print lines, and ",(0,i.jsx)(n.code,{children:"False"})," to hide them. ",(0,i.jsx)(n.code,{children:"True"})," is passed by default."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.em,{children:"sheet"}),", passez le num\xe9ro de la page cible. Si aucun num\xe9ro n'est sp\xe9cifi\xe9, la commande s'applique \xe0 la feuille en cours."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"La num\xe9rotation d\xe9marre \xe0 0."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"La position des lignes d'impression d'une feuille de calcul varie en fonction des sauts de page de cette feuille."}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Le code suivant affiche les lignes d'impression dans la deuxi\xe8me feuille d'un document :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'VP SET SHOW PRINT LINES("ViewProArea";True;1)\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"set-show-print-lines",src:s(496176).Z+"",width:"1340",height:"844"})}),"\n",(0,i.jsx)(n.p,{children:"Avec un saut de page :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"set-show-print-lines-with-page-break",src:s(304490).Z+"",width:"1340",height:"844"})}),"\n",(0,i.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-show-print-lines",children:"4D Get show print lines"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},304490:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-set-show-print-lines-page-break-97bd2bcc1240ad96dc5e8ea5e3d455c1.png"},496176:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-set-show-print-lines-3554e1084d22cfbcd438e14c685db7d9.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);