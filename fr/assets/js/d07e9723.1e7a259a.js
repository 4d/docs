"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26023"],{890913:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-names","title":"VP Get names","description":"VP Get names ( vpAreaName Number } ) : Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-names.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-names","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-names.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-names","title":"VP Get names"},"sidebar":"docs","previous":{"title":"VP Get frozen panes","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-get-frozen-panes"},"next":{"title":"VP Get print info","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-get-print-info"}}'),s=t("785893"),i=t("250065");let o={id:"vp-get-names",title:"VP Get names"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Collection retourn\xe9e",id:"collection-retourn\xe9e",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get names"})," ( vpAreaName : Text { ; scope : Number } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:'"Scope" cible (par d\xe9faut=feuille courante)'}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Noms existant dans la zone d\xe9finie"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get names"}),' command returns a collection of all defined "names" in the current sheet or in the scope designated by the ',(0,s.jsx)(n.em,{children:"scope"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["You can define where to get the names in ",(0,s.jsx)(n.em,{children:"scope"})," using either the sheet index (counting begins at 0) or the following constants:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"collection-retourn\xe9e",children:"Collection retourn\xe9e"}),"\n",(0,s.jsx)(n.p,{children:"La collection retourn\xe9e contient un objet par nom. Les propri\xe9t\xe9s d'objets suivantes peuvent \xeatre retourn\xe9es :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"result[ ].name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"nom de cellule ou de plage"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"result[ ].formula"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"formula"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"result[ ].comment"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Commentaire associ\xe9 au nom"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Les propri\xe9t\xe9s disponibles d\xe9pendent du type d'\xe9l\xe9ment nomm\xe9 (cellule nomm\xe9e, plage nomm\xe9e ou formule nomm\xe9e)."}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $list : Collection\n\n\n$list:=VP Get names("ViewProArea";2) //noms de la 3e feuille\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-add-range-name",children:"VP ADD RANGE NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-formula-by-name",children:"VP Get formula by name"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);