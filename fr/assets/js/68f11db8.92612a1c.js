"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48054"],{104158:function(e,A,n){n.r(A),n.d(A,{metadata:()=>l,contentTitle:()=>c,default:()=>o,assets:()=>d,toc:()=>i,frontMatter:()=>t});var l=JSON.parse('{"id":"ViewPro/commands/vp-cell","title":"VP Cell","description":"VP Cell ( vpAreaName ; column Integer ; Text { ; sheet Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-cell.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-cell","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-cell","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-cell.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-cell","title":"VP Cell"},"sidebar":"docs","previous":{"title":"C","permalink":"/docs/fr/20-R6/commands/C"},"next":{"title":"VP Cells","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-cells"}}'),r=n("785893"),s=n("250065");let t={id:"vp-cell",title:"VP Cell"},c=void 0,d={},i=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let A={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(A.p,{children:[(0,r.jsx)(A.strong,{children:"VP Cell"})," ( ",(0,r.jsx)(A.em,{children:"vpAreaName"})," ; ",(0,r.jsx)(A.em,{children:"column"})," : Integer ; ",(0,r.jsx)(A.em,{children:"row"})," : Integer ; Text { ; ",(0,r.jsx)(A.em,{children:"sheet"})," : Integer } )  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(A.table,{children:[(0,r.jsx)(A.thead,{children:(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.th,{children:"Param\xe8tres"}),(0,r.jsx)(A.th,{children:"Type"}),(0,r.jsx)(A.th,{}),(0,r.jsx)(A.th,{children:"Description"})]})}),(0,r.jsxs)(A.tbody,{children:[(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"vpAreaName"}),(0,r.jsx)(A.td,{children:"Text"}),(0,r.jsx)(A.td,{children:"->"}),(0,r.jsx)(A.td,{children:"Nom d'objet formulaire zone 4D View Pro"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"column"}),(0,r.jsx)(A.td,{children:"Longint"}),(0,r.jsx)(A.td,{children:"->"}),(0,r.jsx)(A.td,{children:"Indice de la colonne"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"row"}),(0,r.jsx)(A.td,{children:"Longint"}),(0,r.jsx)(A.td,{children:"->"}),(0,r.jsx)(A.td,{children:"Indice de la ligne"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"sheet"}),(0,r.jsx)(A.td,{children:"Integer"}),(0,r.jsx)(A.td,{children:"->"}),(0,r.jsx)(A.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"R\xe9sultat"}),(0,r.jsx)(A.td,{children:"Object"}),(0,r.jsx)(A.td,{children:"<-"}),(0,r.jsx)(A.td,{children:"Objet plage d'une seule cellule"})]})]})]}),"\n",(0,r.jsx)(A.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(A.p,{children:["La commande ",(0,r.jsx)(A.code,{children:"VP Cell"})," retourne une nouvelle plage r\xe9f\xe9ren\xe7ant une cellule sp\xe9cifique."]}),"\n",(0,r.jsxs)(A.blockquote,{children:["\n",(0,r.jsxs)(A.p,{children:["Cette commande s'applique aux plages d'une seule cellule. Pour cr\xe9er un objet plage pour plusieurs cellules, utilisez la commande ",(0,r.jsx)(A.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-cells",children:"VP Cells"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(A.p,{children:["Dans ",(0,r.jsx)(A.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,r.jsxs)(A.p,{children:["Le param\xe8tre ",(0,r.jsx)(A.em,{children:"column"})," d\xe9finit la colonne de la position de la plage de cellules. Passez l'indice de la colonne dans ce param\xe8tre."]}),"\n",(0,r.jsxs)(A.p,{children:["Le param\xe8tre ",(0,r.jsx)(A.em,{children:"row"})," d\xe9finit la ligne de la position de la plage de cellules. Passez l'indice de la ligne dans ce param\xe8tre."]}),"\n",(0,r.jsxs)(A.p,{children:["Dans le param\xe8tre optionnel ",(0,r.jsx)(A.em,{children:"sheet"}),", vous pouvez indiquer l'index de la feuille o\xf9 la plage sera d\xe9finie. Si le param\xe8tre est omis ou si vous passez ",(0,r.jsx)(A.code,{children:"vk current sheet"}),", la feuille courante est utilis\xe9e par d\xe9faut."]}),"\n",(0,r.jsxs)(A.blockquote,{children:["\n",(0,r.jsx)(A.p,{children:"l'indexation d\xe9marre \xe0 0."}),"\n"]}),"\n",(0,r.jsx)(A.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(A.p,{children:"Vous souhaitez d\xe9finir une plage pour la cellule de la feuille courante (sur la feuille courante) :"}),"\n",(0,r.jsx)(A.p,{children:(0,r.jsx)(A.img,{alt:"vp-cell",src:n(394723).Z+"",width:"496",height:"263"})}),"\n",(0,r.jsx)(A.p,{children:"Le code est le suivant :"}),"\n",(0,r.jsx)(A.pre,{children:(0,r.jsx)(A.code,{className:"language-4d",children:'$cell:=VP Cell("ViewProArea";2;4) // C5\n'})}),"\n",(0,r.jsx)(A.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(A.p,{children:[(0,r.jsx)(A.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-all",children:"VP All"}),(0,r.jsx)(A.br,{}),"\n",(0,r.jsx)(A.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,r.jsx)(A.br,{}),"\n",(0,r.jsx)(A.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-column",children:"VP Column"}),(0,r.jsx)(A.br,{}),"\n",(0,r.jsx)(A.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,r.jsx)(A.br,{}),"\n",(0,r.jsx)(A.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-name",children:"VP Name"}),(0,r.jsx)(A.br,{}),"\n",(0,r.jsx)(A.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-row",children:"VP Row"})]})]})}function o(e={}){let{wrapper:A}={...(0,s.a)(),...e.components};return A?(0,r.jsx)(A,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},394723:function(e,A,n){n.d(A,{Z:function(){return l}});let l="data:image/png;base64,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"},250065:function(e,A,n){n.d(A,{Z:function(){return c},a:function(){return t}});var l=n(667294);let r={},s=l.createContext(r);function t(e){let A=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(A):{...A,...e}},[A,e])}function c(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:A},e.children)}}}]);