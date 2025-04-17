"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96343"],{992978:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>o,metadata:()=>s,assets:()=>h,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/listbox-set-row-height","title":"LISTBOX SET ROW HEIGHT","description":"LISTBOX SET ROW HEIGHT ( { ;} object ; row ; height* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/listbox-set-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-row-height","permalink":"/docs/20-R8/commands/listbox-set-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-height.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-row-height","title":"LISTBOX SET ROW HEIGHT","slug":"/commands/listbox-set-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ROW FONT STYLE","permalink":"/docs/20-R8/commands/listbox-set-row-font-style"},"next":{"title":"LISTBOX SET ROWS HEIGHT","permalink":"/docs/20-R8/commands/listbox-set-rows-height"}}'),i=t("785893"),r=t("250065");let o={id:"listbox-set-row-height",title:"LISTBOX SET ROW HEIGHT",slug:"/commands/listbox-set-row-height",displayed_sidebar:"docs"},l=void 0,h={},d=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"row"})," ; ",(0,i.jsx)(n.em,{children:"height"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"row"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"List box row whose height you want to set"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"height"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Height of list box row"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," command allows you to modify the height of the specified ",(0,i.jsx)(n.em,{children:"row"})," in the list box object designated using the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,i.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["If the specified ",(0,i.jsx)(n.em,{children:"row"})," does not exist in the list box, the command does nothing."]}),"\n",(0,i.jsxs)(n.p,{children:["The unit used for the specified ",(0,i.jsx)(n.em,{children:"height"})," corresponds to the one defined globally for the list box rows, either in the Property list or by a prior call to the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," command modifies the row height array specified in the Property List, if any (for more information, please see the ",(0,i.jsx)(n.em,{children:"Row Height Array"})," section in the ",(0,i.jsx)(n.em,{children:"Design Reference"})," manual); otherwise, its creates a row height array dynamically. Using this command to set individual row heights produces the exact same visual result as associating a row height array using the Property List; however, filling a row height array with values is much faster than calling this command in a loop to set row heights one by one for the list box."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important note:"})," If the global ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," command is called subsequently with a different unit than the one previously defined, the default value set by this command will replace and reinitialize any row heights set using ",(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," (see example 2)."]}),"\n",(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"You want to change the height of a few rows in the following list box:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(463685).Z+"",width:"364",height:"237"})}),"\n",(0,i.jsx)(n.p,{children:"If you execute this code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//current unit is pixels\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";3;40)\xa0//Kuwait\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";7;14)\xa0//Serbia\n'})}),"\n",(0,i.jsx)(n.p,{children:"... you get the following result:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(958709).Z+"",width:"365",height:"255"})}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(n.p,{children:["You have set a default row height and then set several individual row height values using the ",(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROWS HEIGHT(*;"listboxname";25;lk pixels)\xa0// global height set in pixels\n\xa0\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";1;30)\xa0// row 1: 30 pixels\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";5;40)\xa0// row 5: 40 pixels\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";11;50)\xa0// row 11: 50 pixels\n'})}),"\n",(0,i.jsx)(n.p,{children:"Later, if the following code is executed\u2026"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROWS HEIGHT(*;"listboxname";18;lk pixels)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u2026then the global row height is set to 18 pixels; however, since the unit has not changed, rows 1, 5 and 11 will keep their specific height values, i.e., 30, 40 and 50 pixels as defined above by the ",(0,i.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," command."]}),"\n",(0,i.jsx)(n.p,{children:"On the other hand, if the code below is executed subsequently\u2026"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROWS HEIGHT(*;"listboxname";2;lk lines)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u2026then rows 1, 5 and 11 are reset to the global default row height set by ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," (i.e., 2 lines) because the unit has changed from pixels to lines**.** Since there is no automatic conversion applied, changing units always results in row heights being reinitialized to the new default value defined."]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/listbox-get-row-height",children:"LISTBOX Get row height"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1409"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},463685:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict3071133.en-e78628dcc538f55089829111cb2916e3.png"},958709:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict3071135.en-eff2870c9485b09ce7d9e5526af4895b.png"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);