"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57520"],{853610:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>a,assets:()=>c,toc:()=>h,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/get-style-sheet-info","title":"GET STYLE SHEET INFO","description":"GET STYLE SHEET INFO ( styleSheetName ; font ; size ; styles )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-style-sheet-info.md","sourceDirName":"commands-legacy","slug":"/commands/get-style-sheet-info","permalink":"/docs/commands/get-style-sheet-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-style-sheet-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-style-sheet-info","title":"GET STYLE SHEET INFO","slug":"/commands/get-style-sheet-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Objects (Forms)","permalink":"/docs/category/objects-forms"},"next":{"title":"LIST OF STYLE SHEETS","permalink":"/docs/commands/list-of-style-sheets"}}'),d=t("785893"),i=t("250065");let r={id:"get-style-sheet-info",title:"GET STYLE SHEET INFO",slug:"/commands/get-style-sheet-info",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"Description",id:"description",level:4},{value:"Compatibility Note",id:"compatibility-note",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET STYLE SHEET INFO"})," ( ",(0,d.jsx)(n.em,{children:"styleSheetName"})," ; ",(0,d.jsx)(n.em,{children:"font"})," ; ",(0,d.jsx)(n.em,{children:"size"})," ; ",(0,d.jsx)(n.em,{children:"styles"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"styleSheetName"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Name of style sheet"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"font"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Character font"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"size"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Font size"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"styles"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Style value"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"GET STYLE SHEET INFO"})," command returns the current configuration of the style sheet designated in the ",(0,d.jsx)(n.em,{children:"styleSheetName"})," parameter."]}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.em,{children:"styleSheetName"}),', you pass the name of the style sheet as defined in the Design mode. To designate an automatic style sheet, you can use one of the following constants, found in the "',(0,d.jsx)(n.em,{children:"Font Styles"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Automatic style sheet"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"__automatic__"}),(0,d.jsx)(n.td,{children:"Used by default for all objects"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Automatic style sheet_additional"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"__automatic_additional_text__"}),(0,d.jsx)(n.td,{children:"Supported by static text, fields and variables only. Used for additional text in dialog boxes."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Automatic style sheet_main"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"__automatic_main_text__"}),(0,d.jsx)(n.td,{children:"Supported by static text, fields and variables only. Used for main text in dialog boxes."})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.em,{children:"font"}),", the command returns the name of the font associated with the style sheet for the current platform."]}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.em,{children:"size"}),", the command returns the size in points of the font associated with the style sheet for the current platform."]}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.em,{children:"styles"}),', the command returns a value corresponding to the style(s) associated with the style sheet for the current platform. You can compare the value received with the following constants, found in the "',(0,d.jsx)(n.em,{children:"Font Styles"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold and Italic"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold and Underline"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Italic"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Italic and Underline"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Plain"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Underline"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["If the command is executed correctly, the ",(0,d.jsx)(n.em,{children:"OK"})," system variable is set to 1. Otherwise (for example, if the ",(0,d.jsx)(n.em,{children:"styleSheetName"})," does not exist), it is set to 0."]}),"\n",(0,d.jsx)(n.h5,{id:"compatibility-note",children:"Compatibility Note"}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.strong,{children:"project architecture"}),", only the three automatic style sheets are supported by this command."]}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:'You want to find out the current configuration of the "Automatic" style sheet:'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var $size;$style : Integer\n\xa0var $font : Text\n\xa0GET STYLE SHEET INFO(Automatic style sheet;$font;$size;$style)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/list-of-style-sheets",children:"LIST OF STYLE SHEETS"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let d={},i=s.createContext(d);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);