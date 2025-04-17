"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81257"],{784444:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/select-rgb-color","title":"Select RGB color","description":"Select RGB color {( defaultColor {; message} )} : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/select-rgb-color.md","sourceDirName":"commands-legacy","slug":"/commands/select-rgb-color","permalink":"/docs/20-R8/commands/select-rgb-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-rgb-color.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"select-rgb-color","title":"Select RGB color","slug":"/commands/select-rgb-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Screen width","permalink":"/docs/20-R8/commands/screen-width"},"next":{"title":"SET RECENT FONTS","permalink":"/docs/20-R8/commands/set-recent-fonts"}}'),r=s("785893"),o=s("250065");let l={id:"select-rgb-color",title:"Select RGB color",slug:"/commands/select-rgb-color",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Select RGB color"})," {( ",(0,r.jsx)(n.em,{children:"defaultColor"})," {; ",(0,r.jsx)(n.em,{children:"message"}),"} )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"defaultColor"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Preselected RGB color"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Title of selection window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"RGB color"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The Select RGB color command displays the system color selection window and returns the RGB value of the color selected by the user."}),"\n",(0,r.jsx)(n.p,{children:"The system color selection window appears as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Macintosh"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Windows"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:s(630960).Z+"",width:"293",height:"371"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:s(745393).Z+"",width:"190",height:"260"})})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"defaultColor"})," parameter preselects a color in the window. This parameter can be used, for example, to restore by default the last color set by the user. Pass an RGB-format color value in this parameter (for more information, refer to the description of the ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})," command). You can use one of the constants in the ",(0,r.jsx)(n.em,{children:"SET RGB COLORS"})," theme. If the ",(0,r.jsx)(n.em,{children:"defaultColor"})," parameter is omitted or if you pass 0, the color black is selected when the dialog box is opened."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"message"})," parameter customizes the title of the system window. By default, if this parameter is omitted, the title \u201CColors\u201D is displayed."]}),"\n",(0,r.jsx)(n.p,{children:"The effect of validating this dialog box differs depending on the platform:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Under Windows, when the user clicks on ",(0,r.jsx)(n.strong,{children:"OK"}),", the command returns the value of the color selected in RGB format and the system variable ",(0,r.jsx)(n.em,{children:"OK"})," is set to 1. If the user cancels the dialog box, the command returns -1 and the system variable ",(0,r.jsx)(n.em,{children:"OK"})," is set to 0."]}),"\n",(0,r.jsxs)(n.li,{children:["Under Mac OS, you can only close this dialog box by clicking on the close box or by pressing on the ",(0,r.jsx)(n.strong,{children:"Esc"})," key. In both cases, the system variable ",(0,r.jsx)(n.em,{children:"OK"})," is set to 1, regardless of the user actions in the window. The command returns the value of the color selected in RGB format. If the user did not select a color, the value returned is the one passed in ",(0,r.jsx)(n.em,{children:"defaultColor"})," (if any) or 0 if ",(0,r.jsx)(n.em,{children:"defaultColor"})," is not passed."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This command must not be executed on the server machine nor within a Web process."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"956"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Forbidden on the server"}),(0,r.jsx)(n.td,{})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},745393:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict43385.en-3804f608d7b7b3a9f5b1eda9fc2c504e.png"},630960:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict942577.fr-0e95cf44b0d40997b9789e9d5df4f561.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(667294);let r={},o=t.createContext(r);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);