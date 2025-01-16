"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53334"],{356219:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/object-get-style-sheet","title":"OBJECT Get style sheet","description":"OBJECT Get style sheet ( { ;} object* ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-get-style-sheet.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-style-sheet","permalink":"/docs/commands/object-get-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-style-sheet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-style-sheet","title":"OBJECT Get style sheet","slug":"/commands/object-get-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SHORTCUT","permalink":"/docs/commands/object-get-shortcut"},"next":{"title":"OBJECT GET SUBFORM","permalink":"/docs/commands/object-get-subform"}}'),i=n("785893"),r=n("250065");let d={id:"object-get-style-sheet",title:"OBJECT Get style sheet",slug:"/commands/object-get-style-sheet",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Compatibility Note",id:"compatibility-note",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"OBJECT Get style sheet"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,i.jsx)(t.br,{}),"Field or variable (if * is omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Name of style sheet"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"OBJECT Get style sheet"})," command returns the name of the style sheet associated with the object(s) designated by the ",(0,i.jsx)(t.em,{children:"object"})," and ",(0,i.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(t.p,{children:["Style sheets may have been assigned in Design mode using the Property List, or for the current process using the ",(0,i.jsx)(t.a,{href:"/docs/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["Passing the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,i.jsx)(t.p,{children:"The command can return either:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"a style sheet name,"}),"\n",(0,i.jsx)(t.li,{children:'an empty string ("") if no style sheet is assigned, or'}),"\n",(0,i.jsxs)(t.li,{children:['if an automatic style sheet is assigned, one of the following constants found in the "',(0,i.jsx)(t.em,{children:"Font Styles"}),'" theme:']}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Constant"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Automatic style sheet"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"__automatic__"}),(0,i.jsx)(t.td,{children:"Used by default for all objects"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Automatic style sheet_additional"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"__automatic_additional_text__"}),(0,i.jsx)(t.td,{children:"Supported by static text, fields and variables only. Used for additional text in dialog boxes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Automatic style sheet_main"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"__automatic_main_text__"}),(0,i.jsx)(t.td,{children:"Supported by static text, fields and variables only. Used for main text in dialog boxes."})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"If the command designates several objects, the style sheet returned is only meaningful if the style sheet is assigned to all of the objects."}),"\n",(0,i.jsx)(t.h4,{id:"compatibility-note",children:"Compatibility Note"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.strong,{children:"project architecture"}),", only the three automatic style sheets are supported by this command."]}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Font Styles"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1258"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);