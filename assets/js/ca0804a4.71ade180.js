"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63555"],{342106:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-row-attributes","title":"VP Get row attributes","description":"VP Get row attributes ( rangeObj Collection","source":"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-get-row-attributes.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-row-attributes","permalink":"/docs/20-R6/ViewPro/commands/vp-get-row-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-row-attributes.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-row-attributes","title":"VP Get row attributes"},"sidebar":"docs","previous":{"title":"VP Get print info","permalink":"/docs/20-R6/ViewPro/commands/vp-get-print-info"},"next":{"title":"VP Get row count","permalink":"/docs/20-R6/ViewPro/commands/vp-get-row-count"}}'),s=n("785893"),o=n("250065");let i={id:"vp-get-row-attributes",title:"VP Get row attributes"},c=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Get row attributes"})," ( rangeObj : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rangeObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Range object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Result"}),(0,s.jsx)(t.td,{children:"Collection"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Collection of row properties"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP Get row attributes"})," command returns a collection of properties for any row in the ",(0,s.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"rangeObj"}),", pass an object containing a range of the rows whose attributes will be retrieved."]}),"\n",(0,s.jsxs)(t.p,{children:["The returned collection contains any properties for the rows, whether or not they have been set by the ",(0,s.jsx)(t.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})," method."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"The following code returns a collection of the attributes within the given range:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'var $range : Object\nvar $attr : Collection\n \n$range:=VP Column("ViewProArea";1;2)\n$attr:=VP Get row attributes($range)\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(401301).Z+"",width:"699",height:"315"})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/20-R6/ViewPro/commands/vp-get-column-attributes",children:"VP Get column attributes"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},401301:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/cmd_vpGetRowAttributes-efed3a6fee4606a18820341e9a7ffe5a.PNG"},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(667294);let s={},o=r.createContext(s);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);