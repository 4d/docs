"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86437"],{859244:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-reset-selection","title":"VP RESET SELECTION","description":"VP RESET SELECTION ( vpAreaName Integer } )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-reset-selection.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-reset-selection","permalink":"/docs/fr/ViewPro/commands/vp-reset-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-reset-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-reset-selection","title":"VP RESET SELECTION"},"sidebar":"docs","previous":{"title":"VP REMOVE TABLE ROWS","permalink":"/docs/fr/ViewPro/commands/vp-remove-table-rows"},"next":{"title":"VP RESIZE TABLE","permalink":"/docs/fr/ViewPro/commands/vp-resize-table"}}'),r=t("785893"),l=t("250065");let i={id:"vp-reset-selection",title:"VP RESET SELECTION"},o=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP RESET SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP RESET SELECTION"})," d\xe9s\xe9lectionne toutes les cellules, ce qui entra\xeene l'absence de s\xe9lection courante ou de cellule active visible."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Une cellule active par d\xe9faut (cellule A1) reste d\xe9finie pour les commandes 4D View Pro."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique dans laquelle sera d\xe9finie la plage (la num\xe9rotation commence \xe0 z\xe9ro). Si le param\xe8tre est omis, la feuille courante est utilis\xe9e par d\xe9faut. Vous pouvez s\xe9lectionner explicitement la feuille courante \xe0 l'aide de la constante suivante :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez d\xe9selectionner toutes les cellules (la cellule active et toute autre cellule s\xe9lection\xe9e) :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP RESET SELECTION("myVPArea")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);