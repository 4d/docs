"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74131"],{434651:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/list-of-style-sheets","title":"LIST OF STYLE SHEETS","description":"LIST OF STYLE SHEETS ( arrStyleSheets )","source":"@site/versioned_docs/version-20-R8/commands-legacy/list-of-style-sheets.md","sourceDirName":"commands-legacy","slug":"/commands/list-of-style-sheets","permalink":"/docs/commands/list-of-style-sheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-of-style-sheets.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"list-of-style-sheets","title":"LIST OF STYLE SHEETS","slug":"/commands/list-of-style-sheets","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET STYLE SHEET INFO","permalink":"/docs/commands/get-style-sheet-info"},"next":{"title":"OBJECT DUPLICATE","permalink":"/docs/commands/object-duplicate"}}'),i=s("785893"),r=s("250065");let l={id:"list-of-style-sheets",title:"LIST OF STYLE SHEETS",slug:"/commands/list-of-style-sheets",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Compatibility Note",id:"compatibility-note",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"LIST OF STYLE SHEETS"})," ( ",(0,i.jsx)(t.em,{children:"arrStyleSheets"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"arrStyleSheets"}),(0,i.jsx)(t.td,{children:"Text array"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Names of style sheets defined in the application"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"LIST OF STYLE SHEETS"})," command returns the list of application style sheets in the ",(0,i.jsx)(t.em,{children:"arrStyleSheets"})," array."]}),"\n",(0,i.jsxs)(t.p,{children:["If it was not already defined previously, the ",(0,i.jsx)(t.em,{children:"arrStyleSheets"})," text array is created by the command. It is automatically sized according to the number of style sheets defined."]}),"\n",(0,i.jsx)(t.p,{children:'After executing the command, each element of the array contains the name of a style sheet. These names are sorted alphabetically, as in the style sheet editor. The first array element always contains "__automatic__", which represents the "Automatic" style sheet.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"}),' For compatibility reasons, the automatic style sheets "__automatic_main_text__" and "__automatic_additional_text__" are not returned by this command. However, they are still available in the forms.']}),"\n",(0,i.jsx)(t.h3,{id:"compatibility-note",children:"Compatibility Note"}),"\n",(0,i.jsxs)(t.p,{children:["This command can only be used in ",(0,i.jsx)(t.strong,{children:"binary databases"}),". In ",(0,i.jsx)(t.strong,{children:"project architecture"}),", the array is not filled."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"In your application, the following style sheets are defined:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(126710).Z+"",width:"776",height:"198"})}),"\n",(0,i.jsx)(t.p,{children:"If you execute the following code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0LIST OF STYLE SHEETS($arrStyles)\n\xa0\xa0// $arrStyles{1} contains "__automatic__"\n\xa0\xa0// $arrStyles{2} contains "Buttons"\n\xa0\xa0// $arrStyles{3} contains "default"\n\xa0\xa0// $arrStyles{4} contains "Input_fields"\n\xa0\xa0// $arrStyles{5} contains "Labels"\n\xa0\xa0// $arrStyles{6} contains "Variables"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/get-style-sheet-info",children:"GET STYLE SHEET INFO"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1255"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},126710:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/pict1206954.en-0823619a30c45252286dd61278ca63ff.png"},250065:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return l}});var n=s(667294);let i={},r=n.createContext(i);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);