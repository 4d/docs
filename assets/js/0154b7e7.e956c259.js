"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24952"],{845515:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/print-object","title":"Print object","description":"Print object ( { ;} object {; posX {; posY {; width {; height*}}}} ) : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/print-object.md","sourceDirName":"commands-legacy","slug":"/commands/print-object","permalink":"/docs/20-R7/commands/print-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-object","title":"Print object","slug":"/commands/print-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT LABEL","permalink":"/docs/20-R7/commands/print-label"},"next":{"title":"PRINT OPTION VALUES","permalink":"/docs/20-R7/commands/print-option-values"}}'),r=t("785893"),i=t("250065");let o={id:"print-object",title:"Print object",slug:"/commands/print-object",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Print object"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," {; ",(0,r.jsx)(n.em,{children:"posX"})," {; ",(0,r.jsx)(n.em,{children:"posY"})," {; ",(0,r.jsx)(n.em,{children:"width"})," {; ",(0,r.jsx)(n.em,{children:"height"}),"}}}} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["If specified, object is an object name (string) ",(0,r.jsx)(n.br,{}),"If omitted, object is a variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,r.jsx)(n.br,{}),"Variable (if * is omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"posX"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Horizontal location of object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"posY"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Vertical location of object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"width"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Width of object (pixels)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"height"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Height of object (pixels)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True = object entirely printed; otherwise False"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Print object"})," command lets you print the form object(s) designated by the ",(0,r.jsx)(n.em,{children:"object"})," and ",(0,r.jsx)(n.em,{children:"*"})," parameters, at the location set by the ",(0,r.jsx)(n.em,{children:"posX"})," and ",(0,r.jsx)(n.em,{children:"posY"})," parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["Before calling the ",(0,r.jsx)(n.strong,{children:"Print object"})," command, you must designate the table or project form containing the objects to be printed, using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/form-load",children:"FORM LOAD"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, you indicate that the object parameter is an object name (character string). If you do not pass the ",(0,r.jsx)(n.em,{children:"*"})," parameter, you indicate that object is a variable. In this case, you pass a variable reference (object type only) instead of a string."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"posX"})," and ",(0,r.jsx)(n.em,{children:"posY"})," parameters specify the starting point for printing the object(s). These values must be expressed in pixels. If these parameters are omitted, the object will be printed according to its location in the form."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"width"})," and ",(0,r.jsx)(n.em,{children:"height"})," parameters are used to specify the width and height of the form object. The ",(0,r.jsx)(n.strong,{children:"Print object"})," command does not manage objects of variable size. You must use the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/object-get-best-size",children:"OBJECT GET BEST SIZE"})," command to manage the size of objects. You can also use the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/object-get-best-size",children:"OBJECT GET BEST SIZE"})," command to find out the most appropriate size for objects containing text. Similarly, ",(0,r.jsx)(n.strong,{children:"Print object"})," will not cause automatic page breaks. You must manage them according to your needs."]}),"\n",(0,r.jsx)(n.p,{children:"You can use 4D commands to modify object properties (color, size, etc.) on the fly."}),"\n",(0,r.jsxs)(n.p,{children:["The command returns True if the object has been completely printed and False if this is not the case; in other words, if it was not able to print all the data associated with the object within the set framework. Typically, the command returns False when printing a list box if all the rows of the list box could not be printed. In this case, you can simply call the ",(0,r.jsx)(n.strong,{children:"Print object"})," command repeatedly until it returns True: a specific mechanism automatically causes the contents of the object to scroll after each call. If the user cancels the printing operation, a -128 error is generated, that you can intercept using ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In the current version of 4D, only list box type objects have this mechanism (the command always returns True for any other type of object)."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-get-print-information",children:"LISTBOX GET PRINT INFORMATION"})," command lets you check the status of the printing during the operation."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Print object"})," command can only be used in the context of a print job opened beforehand with the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/open-printing-job",children:"OPEN PRINTING JOB"})," command. If it is not called in this context, the command does nothing. Several Print object commands can be called in the same print job."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Hierarchical lists, subforms and Web areas cannot be printed."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Example for printing ten objects in a form:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0PRINT SETTINGS\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OPEN PRINTING JOB\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM LOAD("PrintForm")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0x:=100\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0y:=50\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PRINTABLE AREA(hpaper;wpaper)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($i;1;10)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET BEST SIZE(*;"Obj"+String($i);bestwidth;bestheight)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$end:=Print object(*;"Obj"+String($i))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0y:=y+bestheight+15\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(y>hpaper)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0PAGE BREAK(>)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0y:=50\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0CLOSE PRINTING JOB\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"Example of printing a complete list box:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN PRINTING JOB\n\xa0FORM LOAD("myForm")\n\xa0$Over:=False\n\xa0gError:=0\n\xa0ON ERR CALL("err")\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"List_Box")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"List_Box";lk printing is over;$Over)\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0\xa0\xa0\xa0If(gError=-128)\xa0//the user has cancelled the operation\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$Over:=True\n\xa0\xa0\xa0\xa0End if\n\xa0Until($Over)\n\xa0CLOSE PRINTING JOB\n\xa0ON ERR CALL("")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/form-load",children:"FORM LOAD"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1095"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);