"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62586],{739145:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>A,toc:()=>d});var t=i(474848),s=i(28453);const r={id:"form-set-size",title:"FORM SET SIZE",slug:"/commands/form-set-size",displayed_sidebar:"docs"},o=void 0,A={id:"commands-legacy/form-set-size",title:"FORM SET SIZE",description:"FORM SET SIZE ( {object ;} horizontal ; vertical {; *} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/form-set-size.md",sourceDirName:"commands-legacy",slug:"/commands/form-set-size",permalink:"/docs/commands/form-set-size",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"form-set-size",title:"FORM SET SIZE",slug:"/commands/form-set-size",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"FORM SET OUTPUT",permalink:"/docs/commands/form-set-output"},next:{title:"FORM SET VERTICAL RESIZING",permalink:"/docs/commands/form-set-vertical-resizing"}},a={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FORM SET SIZE"})," ( {",(0,t.jsx)(n.em,{children:"object"})," ;} ",(0,t.jsx)(n.em,{children:"horizontal"})," ; ",(0,t.jsx)(n.em,{children:"vertical"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Object name indicating form limits"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"horizontal"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"If * passed: horizontal margin (pixels)If * omitted: width (pixels)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vertical"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"If * passed: vertical margin (pixels)If * omitted: height (pixels)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["\u2022 If passed, use horizontal and vertical as form margins\u2022 If omitted, use horizontal and vertical as width and height of the form",(0,t.jsx)(n.br,{}),"This parameter cannot be passed if the object parameter is passed."]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"FORM SET SIZE"})," command allows you to change the size of the current form by programming. The new size is defined for the current process; it is not saved with the form."]}),"\n",(0,t.jsx)(n.p,{children:"As in the Design environment, you can use this command to set the form size in three ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automatically \u2014 4D determines the size of the form based on the notion that all objects must be visible \u2014 and possibly adding a horizontal and vertical margin,"}),"\n",(0,t.jsx)(n.li,{children:"On the place where a form object is found, where a horizontal and vertical margin may be added,"}),"\n",(0,t.jsxs)(n.li,{children:["By entering \u201cfixed\u201d sizes (width and height).",(0,t.jsx)(n.br,{}),"\nFor more information on resizing forms, refer to the 4D ",(0,t.jsx)(n.em,{children:"Design Reference"})," manual.\n",(0,t.jsx)(n.strong,{children:"Automatic size"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you want the size of the form to be set automatically, you must use the following syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET SIZE(horizontal;vertical;*)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, you must pass the margins (in pixels) that you want to add to the right and bottom of the form in ",(0,t.jsx)(n.em,{children:"horizontal"})," and ",(0,t.jsx)(n.em,{children:"vertical"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Object-based size"})}),"\n",(0,t.jsx)(n.p,{children:"If you want the form size to be based on an object, you must use the following syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET SIZE(object;horizontal;vertical)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, you must pass the margins (in pixels) that you want to add to the right and bottom of the object in ",(0,t.jsx)(n.em,{children:"horizontal"})," and ",(0,t.jsx)(n.em,{children:"vertical"}),". You cannot pass the ",(0,t.jsx)(n.em,{children:"*"})," parameter."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Fixed size"})}),"\n",(0,t.jsx)(n.p,{children:"In you want to have a fixed form size, you must use the following syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET SIZE(horizontal;vertical)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, you must pass the width and height (in pixels) of the form in ",(0,t.jsx)(n.em,{children:"horizontal"})," and ",(0,t.jsx)(n.em,{children:"vertical"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"FORM SET SIZE"})," command changes the size of the form, but also takes into account the resizing properties. For example, if the minimum width of a form is 500 pixels and if the command sets a width of 400 pixels, the new form width will be 500 pixels.",(0,t.jsx)(n.br,{}),"\nAlso note that this command does not change the size of the form window (you can resize a form without changing the size of the window and vice versa). To change the size of the form window, refer to the ",(0,t.jsx)(n.a,{href:"/docs/commands/resize-form-window",children:"RESIZE FORM WINDOW"})," command."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following example shows how an Explorer type window is set up. The following form is created in the Design environment :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(521399).A+"",width:"341",height:"125"})}),"\n",(0,t.jsx)(n.p,{children:"The size of the form is \u201cautomatic\u201d."}),"\n",(0,t.jsx)(n.p,{children:"The window is displayed using the following code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$ref:=Open form window([Table 1];"Form1";Plain form window;Horizontally centered;Vertically centered;*)\n\xa0DIALOG([Table 1];"Form1")\n\xa0CLOSE WINDOW\n'})}),"\n",(0,t.jsx)(n.p,{children:"The right part of the window can be displayed or hidden by clicking on the increase/decrease option:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(366734).A+"",width:"359",height:"160"})}),"\n",(0,t.jsx)(n.p,{children:"The object method associated with this button is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event.code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var b1;<>collapsed : Boolean\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var margin : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0margin:=15\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0b1:=<>collapsed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(<>collapsed)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(False)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("b1";margin;margin)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("tab";margin;margin)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event.code=On click)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0<>collapsed:=b1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(b1)\n\xa0\xa0//collapsed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"b1";$l;$t;$r;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($lf;$tf;$rf;$bf;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($lf;$tf;$lf+$r+margin;$tf+$b+margin;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET FORM HORIZONTAL RESIZING(False)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET FORM SIZE("b1";margin;margin)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0//expanded\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"tab";$l;$t;$r;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($lf;$tf;$rf;$bf;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($lf;$tf;$lf+$r+margin;$tf+$b+margin;Current form window)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET HORIZONTAL RESIZING(True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET SIZE("tab";margin;margin)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/form-set-horizontal-resizing",children:"FORM SET HORIZONTAL RESIZING"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/form-set-vertical-resizing",children:"FORM SET VERTICAL RESIZING"})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},521399:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},366734:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>A});var t=i(296540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function A(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);