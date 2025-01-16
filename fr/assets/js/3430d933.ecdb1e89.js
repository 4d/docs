"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80198"],{817008:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"ViewPro/commands/vp-remove-name","title":"VP REMOVE NAME","description":"VP REMOVE NAME ( vpAreaName Text { ; sheet : Integer } )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-remove-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-name","permalink":"/docs/fr/ViewPro/commands/vp-remove-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-remove-name","title":"VP REMOVE NAME"},"sidebar":"docs","previous":{"title":"VP RECOMPUTE FORMULAS","permalink":"/docs/fr/ViewPro/commands/vp-recompute-formulas"},"next":{"title":"VP REMOVE SHEET","permalink":"/docs/fr/ViewPro/commands/vp-remove-sheet"}}'),s=r("785893"),o=r("250065");let i={id:"vp-remove-name",title:"VP REMOVE NAME"},d=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP REMOVE NAME"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text  ; ",(0,s.jsx)(n.em,{children:"name"}),"  : Text { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom de la plage nomm\xe9e ou de la formule nomm\xe9e \xe0 supprimer"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:'"Scope" cible (par d\xe9faut=feuille courante)'}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP REMOVE NAME"})," command removes the named range or named formula passed in the ",(0,s.jsx)(n.em,{children:"name"})," parameter in the defined ",(0,s.jsx)(n.em,{children:"scope"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the named range or named formula that you want to remove in ",(0,s.jsx)(n.em,{children:"name"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can define where to remove the name in ",(0,s.jsx)(n.em,{children:"scope"})," using either the sheet index (counting begins at 0) or the following constants:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";0;0)\nVP ADD RANGE NAME("Total1";$range)\n \nVP REMOVE NAME("ViewProArea";"Total1")\n$formula:=VP Get formula by name("ViewProArea";"Total1")\n//$formula=null\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-name",children:"VP Name"})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);