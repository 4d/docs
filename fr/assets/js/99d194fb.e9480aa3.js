"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53427"],{974006:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>o,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-add-selection","title":"VP ADD SELECTION","description":"VP ADD SELECTION ( rangeObj : Object )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-add-selection.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-selection","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-add-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-selection.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-add-selection","title":"VP ADD SELECTION"},"sidebar":"docs","previous":{"title":"VP ADD RANGE NAME","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-add-range-name"},"next":{"title":"VP ADD SHEET","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-add-sheet"}}'),r=t("785893"),c=t("250065");let i={id:"vp-add-selection",title:"VP ADD SELECTION"},l=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP ADD SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP ADD SELECTION"})," ajoute les cellules sp\xe9cifi\xe9es aux cellules actuellement s\xe9lectionn\xe9es."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"rangeObj"}),", passez un objet plage de plusieurs cellules \xe0 ajouter \xe0 la s\xe9lection courante."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"La cellule active n'est pas modifi\xe9e."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Les cellules s\xe9lectionn\xe9es sont les suivantes :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(447939).Z+"",width:"552",height:"362"})}),"\n",(0,r.jsx)(n.p,{children:"Le code suivant ajoutera des cellules \xe0 votre s\xe9lection :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$currentSelection:=VP Cells("myVPArea";3;4;2;3)\nVP ADD SELECTION($currentSelection)\n'})}),"\n",(0,r.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(336302).Z+"",width:"552",height:"358"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},447939:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpAddSelection1-a7868594e656fbab99c06115645b4ad1.PNG"},336302:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpAddSelection2-27e4c536e5f87f2cf3e32241e3668bf7.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},c=s.createContext(r);function i(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);