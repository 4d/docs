"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59145"],{229805:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-names","title":"VP Get names","description":"VP Get names ( vpAreaName Integer } ) : Collection","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-get-names.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-names","permalink":"/docs/ViewPro/commands/vp-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-names.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-names","title":"VP Get names"},"sidebar":"docs","previous":{"title":"VP Get frozen panes","permalink":"/docs/ViewPro/commands/vp-get-frozen-panes"},"next":{"title":"VP Get print info","permalink":"/docs/ViewPro/commands/vp-get-print-info"}}'),s=t("785893"),i=t("250065");let d={id:"vp-get-names",title:"VP Get names"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Returned collection",id:"returned-collection",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get names"})," ( vpAreaName : Text { ; scope : Integer } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Target scope (default= current sheet)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Existing names in the defined scope"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get names"}),' command returns a collection of all defined "names" in the current sheet or in the scope designated by the ',(0,s.jsx)(n.em,{children:"scope"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["You can define where to get the names in ",(0,s.jsx)(n.em,{children:"scope"})," using either the sheet index (counting begins at 0) or the following constants:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"returned-collection",children:"Returned collection"}),"\n",(0,s.jsx)(n.p,{children:"The returned collection contains one object per name. The following object properties can be returned:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"result[ ].name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"cell or range name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"result[ ].formula"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"formula"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"result[ ].comment"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Comment associated to the name"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Available properties depend on the type of the named element (named cell, named range, or named formula)."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $list : Collection\n\n\n$list:=VP Get names("ViewProArea";2) //names in 3rd sheet\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-add-range-name",children:"VP ADD RANGE NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-formula-by-name",children:"VP Get formula by name"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);