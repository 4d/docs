"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94959"],{862582:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-column-count","title":"VP SET COLUMN COUNT","description":"VP SET COLUMN COUNT ( vpAreaName Integer { , sheet : Integer } )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-column-count.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-column-count","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-set-column-count","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-column-count.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-column-count","title":"VP SET COLUMN COUNT"},"sidebar":"docs","previous":{"title":"VP SET COLUMN ATTRIBUTES","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-set-column-attributes"},"next":{"title":"VP SET CURRENT SHEET","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-set-current-sheet"}}'),s=t("785893"),i=t("250065");let o={id:"vp-set-column-count",title:"VP SET COLUMN COUNT"},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET COLUMN COUNT"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text , ",(0,s.jsx)(n.em,{children:"columnCount"})," : Integer { , ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de colonnes"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET COLUMN COUNT"})," command defines the total number of columns in ",(0,s.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the total number of columns in the ",(0,s.jsx)(n.em,{children:"columnCount"})," parameter. ",(0,s.jsx)(n.em,{children:"columnCount"})," doit \xeatre sup\xe9rieur \xe0 0."]}),"\n",(0,s.jsxs)(n.p,{children:["In the optional ",(0,s.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the ",(0,s.jsx)(n.em,{children:"columnCount"})," will be applied (counting begins at 0). Si le param\xe8tre est omis, la feuille courante est utilis\xe9e par d\xe9faut. Vous pouvez s\xe9lectionner explicitement la feuille courante \xe0 l'aide de la constante suivante :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Le code suivant d\xe9finit cinq colonnes dans la zone 4D View Pro :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP SET COLUMN COUNT("ViewProArea";5)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(421094).Z+"",width:"904",height:"378"})}),"\n",(0,s.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-get-column-count",children:"VP Get column count"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-get-row-count",children:"VP Get row count"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},421094:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/cmd_vpSetColumnCount-db26ffc9ba38377f91bcc05abde136fc.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);