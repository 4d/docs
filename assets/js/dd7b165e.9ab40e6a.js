"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46861"],{530058:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-column-count","title":"VP SET COLUMN COUNT","description":"VP SET COLUMN COUNT ( vpAreaName Integer { , sheet : Integer } )","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-set-column-count.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-column-count","permalink":"/docs/20-R8/ViewPro/commands/vp-set-column-count","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-column-count.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-column-count","title":"VP SET COLUMN COUNT"},"sidebar":"docs","previous":{"title":"VP SET COLUMN ATTRIBUTES","permalink":"/docs/20-R8/ViewPro/commands/vp-set-column-attributes"},"next":{"title":"VP SET CURRENT SHEET","permalink":"/docs/20-R8/ViewPro/commands/vp-set-current-sheet"}}'),r=t("785893"),o=t("250065");let c={id:"vp-set-column-count",title:"VP SET COLUMN COUNT"},i=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET COLUMN COUNT"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text , ",(0,r.jsx)(n.em,{children:"columnCount"})," : Integer { , ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"columnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Number of columns"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET COLUMN COUNT"})," command defines the total number of columns in ",(0,r.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["Pass the total number of columns in the ",(0,r.jsx)(n.em,{children:"columnCount"})," parameter. ",(0,r.jsx)(n.em,{children:"columnCount"})," must be greater than 0."]}),"\n",(0,r.jsxs)(n.p,{children:["In the optional ",(0,r.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the ",(0,r.jsx)(n.em,{children:"columnCount"})," will be applied (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following code defines five columns in the 4D View Pro area:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP SET COLUMN COUNT("ViewProArea";5)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(770907).Z+"",width:"904",height:"378"})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R8/ViewPro/commands/vp-get-column-count",children:"VP Get column count"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R8/ViewPro/commands/vp-get-row-count",children:"VP Get row count"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R8/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},770907:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpSetColumnCount-db26ffc9ba38377f91bcc05abde136fc.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let r={},o=s.createContext(r);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);