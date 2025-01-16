"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41791"],{847030:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"commands-legacy/object-set-style-sheet","title":"OBJECT SET STYLE SHEET","description":"OBJECT SET STYLE SHEET ( { ;} object ; styleSheetName* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-set-style-sheet.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-style-sheet","permalink":"/docs/commands/object-set-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-style-sheet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-style-sheet","title":"OBJECT SET STYLE SHEET","slug":"/commands/object-set-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET SHORTCUT","permalink":"/docs/commands/object-set-shortcut"},"next":{"title":"OBJECT SET SUBFORM","permalink":"/docs/commands/object-set-subform"}}'),i=s("785893"),r=s("250065");let d={id:"object-set-style-sheet",title:"OBJECT SET STYLE SHEET",slug:"/commands/object-set-style-sheet",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Compatibility Note",id:"compatibility-note",level:5},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"OBJECT SET STYLE SHEET"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ; ",(0,i.jsx)(t.em,{children:"styleSheetName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * is specified) or",(0,i.jsx)(t.br,{}),"Field or variable (if * is omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"styleSheetName"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Name of style sheet"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"OBJECT SET STYLE SHEET"})," command modifies, for the current process, the style sheet associated with the object(s) designated by the ",(0,i.jsx)(t.em,{children:"object"})," and ",(0,i.jsx)(t.em,{children:"*"})," parameters. A style sheet modifies the font, font size and (except for automatic style sheets) font style."]}),"\n",(0,i.jsxs)(t.p,{children:["Passing the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.em,{children:"styleSheetName"})," parameter, you pass the name of the style sheet to be applied to the ",(0,i.jsx)(t.em,{children:"object"}),". You can also pass either:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["the name of an existing style sheet (if the style sheet does not exist, an error is returned, that you can intercept using a method installed by the ",(0,i.jsx)(t.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command),"]}),"\n",(0,i.jsxs)(t.li,{children:['an empty string ("") so as to not apply the style sheet to the ',(0,i.jsx)(t.em,{children:"object"}),", or"]}),"\n",(0,i.jsxs)(t.li,{children:['one of the following constants found in the "',(0,i.jsx)(t.em,{children:"Font Styles"}),'" theme in order to apply an automatic style shee:']}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Constant"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Automatic style sheet"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"__automatic__"}),(0,i.jsx)(t.td,{children:"Used by default for all objects"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Automatic style sheet_additional"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"__automatic_additional_text__"}),(0,i.jsx)(t.td,{children:"Supported by static text, fields and variables only. Used for additional text in dialog boxes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Automatic style sheet_main"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"__automatic_main_text__"}),(0,i.jsx)(t.td,{children:"Supported by static text, fields and variables only. Used for main text in dialog boxes."})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"If a style sheet was already associated with the object in Design mode, calling this command replaces it for the current process."}),"\n",(0,i.jsxs)(t.p,{children:["During the session, if you use the ",(0,i.jsx)(t.a,{href:"/docs/commands/st-set-attributes",children:"ST SET ATTRIBUTES"}),", ",(0,i.jsx)(t.a,{href:"/docs/commands/st-set-text",children:"ST SET TEXT"}),", ",(0,i.jsx)(t.a,{href:"/docs/commands/object-set-font",children:"OBJECT SET FONT"})," or ",(0,i.jsx)(t.a,{href:"/docs/commands/object-set-font-size",children:"OBJECT SET FONT SIZE"})," commands on the ",(0,i.jsx)(t.em,{children:"object"})," in order to modify its font or font size, the reference to the style sheet is automatically deleted from the object -- even if you assign the same attributes as those of the style sheet. However, if you modify the style (bold, italic, etc.), for example using the ",(0,i.jsx)(t.a,{href:"/docs/commands/st-set-attributes",children:"ST SET ATTRIBUTES"})," or ",(0,i.jsx)(t.a,{href:"/docs/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"})," commands, these new properties are added to the style sheet for the duration of the session."]}),"\n",(0,i.jsx)(t.h5,{id:"compatibility-note",children:"Compatibility Note"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.strong,{children:"project architecture"}),", only the three automatic style sheets are supported by this command."]}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Font Styles"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/get-style-sheet-info",children:"GET STYLE SHEET INFO"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/list-of-style-sheets",children:"LIST OF STYLE SHEETS"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/object-get-style-sheet",children:"OBJECT Get style sheet"})]}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1257"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return d}});var n=s(667294);let i={},r=n.createContext(i);function d(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);