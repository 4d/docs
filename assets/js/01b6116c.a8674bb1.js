"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30834"],{290434:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/object-is-styled-text","title":"OBJECT Is styled text","description":"OBJECT Is styled text ( { ;} object* ) : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-is-styled-text.md","sourceDirName":"commands-legacy","slug":"/commands/object-is-styled-text","permalink":"/docs/20-R7/commands/object-is-styled-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-is-styled-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-is-styled-text","title":"OBJECT Is styled text","slug":"/commands/object-is-styled-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get visible","permalink":"/docs/20-R7/commands/object-get-visible"},"next":{"title":"OBJECT MOVE","permalink":"/docs/20-R7/commands/object-move"}}'),i=n("785893"),r=n("250065");let d={id:"object-is-styled-text",title:"OBJECT Is styled text",slug:"/commands/object-is-styled-text",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let t={br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"OBJECT Is styled text"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * is specified) or",(0,i.jsx)(t.br,{}),"Field or variable (if * is omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"True if object is a multi-style text, False otherwise"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"OBJECT Is styled text"})," command returns ",(0,i.jsx)(t.strong,{children:"True"}),' when the "Multi-style" option is checked for the object(s) designated by the ',(0,i.jsx)(t.em,{children:"object"})," and ",(0,i.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(t.p,{children:['The "Multi-style" option lets you use rich test areas including individual style variations. For more information, refer to ',(0,i.jsx)(t.em,{children:"Multi-style (Rich text area)"})," in the ",(0,i.jsx)(t.em,{children:"Design Reference"})," manual."]}),"\n",(0,i.jsxs)(t.p,{children:['Multi-style objects can be managed by programming using the commands of the "',(0,i.jsx)(t.em,{children:"Styled Text"}),'" theme.']}),"\n",(0,i.jsxs)(t.p,{children:["Passing the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," The ",(0,i.jsx)(t.strong,{children:"OBJECT Is styled text"})," command returns ",(0,i.jsx)(t.strong,{children:"True"})," when it is applied to a 4D Write Pro area."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:'A form contains a field represented by two different objects; one of the objects has the "Multi-style" property checked, and the other one does not. You can write:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0$Style:=OBJECT Is styled text(*;"Styled_text")\n\xa0\xa0// returns True ("Multi-style" option is checked)\n\xa0\n\xa0$Style:=OBJECT Is styled text(*;"Plain_text")\n\xa0\xa0// returns False ("Multi-style" option is not checked)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Styled Text"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1261"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);