"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78067"],{996011:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-stylesheet","title":"VP Get stylesheets","description":"VP Get stylesheets ( vpAreaName Integer } ) : Collection","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-get-stylesheets.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-stylesheet","permalink":"/docs/ViewPro/commands/vp-get-stylesheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheets.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-stylesheet","title":"VP Get stylesheets"},"sidebar":"docs","previous":{"title":"VP Get spans","permalink":"/docs/ViewPro/commands/vp-get-spans"},"next":{"title":"VP Get stylesheet","permalink":"/docs/ViewPro/commands/vp-get-stylesheets"}}'),r=n("785893"),l=n("250065");let o={id:"vp-get-stylesheet",title:"VP Get stylesheets"},i=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP Get stylesheets"})," ( ",(0,r.jsx)(t.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(t.em,{children:"sheet"})," : Integer } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vpAreaName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sheet"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Target scope (default = current sheet)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Result"}),(0,r.jsx)(t.td,{children:"Collection"}),(0,r.jsx)(t.td,{children:"<-"}),(0,r.jsx)(t.td,{children:"Collection of style sheet objects"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP Get stylesheets"})," command returns the collection of defined style sheet objects from the designated ",(0,r.jsx)(t.em,{children:"sheet"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"vpAreaName"}),", pass the name property of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(t.p,{children:["You can define where to get the style sheets in the optional ",(0,r.jsx)(t.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0) or with the following constants:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following code will return a collection of all the style objects in the current sheet:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'$styles:=VP Get stylesheets("ViewProArea")\n'})}),"\n",(0,r.jsx)(t.p,{children:"In this case, the current sheet uses two style objects:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"[\n   {\n     backColor:green,\n     borderLeft:{color:green,style:10}, \n     borderTop:{color:green,style:10}, \n     borderRight:{color:green,style:10}, \n     borderBottom:{color:green,style:10}, \n     name:GreenDashDotStyle\n   },\n   {\n     backColor:red,\n     textIndent:10,\n     name:RedIndent\n   }\n]\n"})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function a(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var s=n(667294);let r={},l=s.createContext(r);function o(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);