"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2502"],{331719:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>c,assets:()=>l,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/open-window","title":"Open window","description":"Open window ( left ; top ; right ; bottom {; type {; title {; controlMenuBox}}} ) : WinRef","source":"@site/versioned_docs/version-20-R7/commands-legacy/open-window.md","sourceDirName":"commands-legacy","slug":"/commands/open-window","permalink":"/docs/commands/open-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-window","title":"Open window","slug":"/commands/open-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Open form window","permalink":"/docs/commands/open-form-window"},"next":{"title":"REDRAW WINDOW","permalink":"/docs/commands/redraw-window"}}'),i=o("785893"),s=o("250065");let d={id:"open-window",title:"Open window",slug:"/commands/open-window",displayed_sidebar:"docs"},r=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Open window"})," ( ",(0,i.jsx)(n.em,{children:"left"})," ; ",(0,i.jsx)(n.em,{children:"top"})," ; ",(0,i.jsx)(n.em,{children:"right"})," ; ",(0,i.jsx)(n.em,{children:"bottom"})," {; ",(0,i.jsx)(n.em,{children:"type"})," {; ",(0,i.jsx)(n.em,{children:"title"})," {; ",(0,i.jsx)(n.em,{children:"controlMenuBox"}),"}}} ) : WinRef"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"left"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Global left coordinate of window contents area"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"top"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Global top coordinate of window contents area"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"right"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Global right coordinate of window contents area, or -1 for using form default size"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bottom"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Global bottom coordinate of window contents area, or -1 for using form default size"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Window type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"title"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:'Title of window or "" for using default form title'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"controlMenuBox"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Method to call when the Control-menu box is double-clicked or the Close box is clicked"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"WinRef"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Window reference number"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Open window"})," opens a new window with the dimensions given by the first four parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"left"})," is the distance in pixels from the left edge of the application window to the left internal edge of the window."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"top"})," is the distance in pixels from the top of the application window to the top internal edge of the window."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"right"})," is the distance in pixels from the left edge of the application window to the right internal edge of the window."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"bottom"})," is the distance in pixels from the top of the application window to the bottom internal edge of the window."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Compatibility note:"})," ",(0,i.jsx)(n.strong,{children:"Open window"})," integrates various options which have evolved over the versions, and is now only kept for compatibility reasons. When you write new code for managing windows, we strongly recommend using the ",(0,i.jsx)(n.a,{href:"/docs/commands/open-form-window",children:"Open form window"})," command, which is better suited to current interfaces."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass -1 in both ",(0,i.jsx)(n.em,{children:"right"})," and ",(0,i.jsx)(n.em,{children:"bottom,"})," you instruct 4D to automatically size the window under the following conditions:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You have designed a form and set its Sizing Options in the Design environment Form properties window"}),"\n",(0,i.jsxs)(n.li,{children:["Before calling ",(0,i.jsx)(n.strong,{children:"Open window"}),", you selected the form using the ",(0,i.jsx)(n.a,{href:"/docs/commands/form-set-input",children:"FORM SET INPUT"})," command, to which you passed the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important:"})," This automatic sizing of the window will occur only if you made a prior call to ",(0,i.jsx)(n.a,{href:"/docs/commands/form-set-input",children:"FORM SET INPUT"})," for the form to be displayed, and if you passed the * optional parameter to ",(0,i.jsx)(n.a,{href:"/docs/commands/form-set-input",children:"FORM SET INPUT"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"type"})," parameter is optional. It represents the type of window you want to display, and corresponds to the different windows shown in the section ",(0,i.jsx)(n.em,{children:"Window Types (compatibility)"})," (constants of the ",(0,i.jsx)(n.em,{children:"Open Window"})," theme). If the window type is negative, the window created is a floating window. If the type is not specified, type 1 is used by default."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"title"})," parameter is the optional title for the window"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['If you pass an empty string ("") in ',(0,i.jsx)(n.em,{children:"title,"})," you instruct 4D to use the Window Title set in the Design environment Form Properties window for the form to be displayed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important:"})," The default form title will be set to the window only if you made a prior call to ",(0,i.jsx)(n.a,{href:"/docs/commands/form-set-input",children:"FORM SET INPUT"})," for the form to be displayed, and if you passed the * optional parameter to ",(0,i.jsx)(n.a,{href:"/docs/commands/form-set-input",children:"FORM SET INPUT"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"controlMenuBox"})," parameter is the optional Control-menu box method for the window. If this parameter is specified, a Control-menu box (Windows) or a Close Box (Macintosh) is added to the window. When the user double-clicks the Control-menu box (Windows) or clicks on the Close Box (Macintosh), the method passed in ",(0,i.jsx)(n.em,{children:"controlMenuBox"})," is called."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," You can also manage the closing of the window from within the form method of the form displayed in the window when an On Close Box event occurs. For more information, see the command ",(0,i.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If more than one window is open for a process, the last window opened is the active (frontmost) window for that process. Only information within the active window can be modified. Any other windows can be viewed. When the user types, the active window will always come to the front, if it is not already there."}),"\n",(0,i.jsxs)(n.p,{children:["Forms are displayed inside an open window. Text from the ",(0,i.jsx)(n.a,{href:"/docs/commands/message",children:"MESSAGE"})," command also appears in the window."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Open window"}),' returns a WinRef type window reference, which can be used by window management commands (see the "',(0,i.jsx)(n.em,{children:"WinRef"}),'" section).']}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"The following project method opens a window centered in the main window (Windows) or in the main screen (Macintosh). Note that it can accept two, three, or four parameters:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// OPEN CENTERED WINDOW project method\n\xa0\xa0// $1 \u2013 Window width\n\xa0\xa0// $2 \u2013 Window height\n\xa0\xa0// $3 \u2013 Window type (optional)\n\xa0\xa0// $4 \u2013 Window title (optional)\n\xa0$SW:=Screen width\\2\n\xa0$SH:=(Screen height\\2)\n\xa0$WW:=$1\\2\n\xa0$WH:=$2\\2\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Count parameters=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH)\n\xa0\xa0\xa0\xa0:(Count parameters=3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3)\n\xa0\xa0\xa0\xa0:(Count parameters=4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3;$4)\n\xa0End case\n"})}),"\n",(0,i.jsx)(n.p,{children:"After the project method is written, you can use it this way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN CENTERED WINDOW(400;250;Movable dialog box;"Update Archives")\n\xa0DIALOG([Utility Table];"UPDATE OPTIONS")\n\xa0CLOSE WINDOW\n\xa0If(OK=1)\n\xa0\xa0// ...\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"The following example opens a floating window that has a Control-menu box (Windows) or Close Box (Macintosh) method. The window is opened in the upper right hand corner of the application window."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$myWindow:=Open window(Screen width-149;33;Screen width-4;178;-Palette window;"";"CloseColorPalette")\n\xa0DIALOG([Dialogs];"Color Palette")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The CloseColorPalette method calls the ",(0,i.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0CANCEL\n"})}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(n.p,{children:"The following example opens a window whose size and title come from the properties of the form displayed in the window:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Customers];"Add Records";*)\n\xa0$myWindow:=Open window(10;80;-1;-1;Plain window;"")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Customers])\n\xa0Until(OK=0)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reminder:"})," In order to have ",(0,i.jsx)(n.strong,{children:"Open window"})," automatically use the properties of the form, you must call ",(0,i.jsx)(n.a,{href:"/docs/commands/form-set-input",children:"FORM SET INPUT"})," with the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, and the properties of the form must have been set accordingly in the Design environment."]}),"\n",(0,i.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,i.jsx)(n.p,{children:"This example illustrates the \u201Cdelay\u201D mechanism for displaying sheet windows under Mac OS X:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$myWindow:=Open window(10;10;400;400;Sheet window)\n\xa0\xa0//For the moment, the window is created but remains hidden\n\xa0DIALOG([Table];"dialForm")\n\xa0\xa0//The On Load event is generated then the sheet window is displayed; it "drops down" from the bottom\n\xa0\xa0//of the title bar\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/close-window",children:"CLOSE WINDOW"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/open-form-window",children:"Open form window"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Open Window"})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return d}});var t=o(667294);let i={},s=t.createContext(i);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);