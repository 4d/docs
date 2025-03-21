"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97353"],{744354:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-column-attributes","title":"VP Get column attributes","description":"VP Get column attributes (  rangeObj Collection","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-get-column-attributes.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-column-attributes","permalink":"/docs/20-R7/ViewPro/commands/vp-get-column-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-column-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-column-attributes","title":"VP Get column attributes"},"sidebar":"docs","previous":{"title":"VP Get cell style","permalink":"/docs/20-R7/ViewPro/commands/vp-get-cell-style"},"next":{"title":"VP Get column count","permalink":"/docs/20-R7/ViewPro/commands/vp-get-column-count"}}'),s=n("785893"),o=n("250065");let i={id:"vp-get-column-attributes",title:"VP Get column attributes"},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function d(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Get column attributes"})," (  ",(0,s.jsx)(t.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rangeObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Range object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Result"}),(0,s.jsx)(t.td,{children:"Collection"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Collection of column properties"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP Get column attributes"})," command returns a collection of properties for any column in the ",(0,s.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"rangeObj"}),", pass an object containing a range of the columns whose attributes will be retrieved."]}),"\n",(0,s.jsxs)(t.p,{children:["The returned collection contains any properties for the columns, whether or not they have been set by the ",(0,s.jsx)(t.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"})," command."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"The following code:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'C_OBJECT($range)\nC_COLLECTION($attr)\n \n$range:=VP Column("ViewProArea";1;2)\n$attr:=VP Get column attributes($range)\n'})}),"\n",(0,s.jsx)(t.p,{children:"... will return a collection of the attributes within the given range:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(329277).Z+"",width:"669",height:"277"})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/20-R7/ViewPro/commands/vp-get-row-attributes",children:"VP Get row attributes"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},329277:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/cmd_vpGetColumnAttributes-d45cff2b73744bff1f1bc960ba54c2d8.PNG"},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(667294);let s={},o=r.createContext(s);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);