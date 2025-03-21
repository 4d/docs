"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76135"],{82512:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>h,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/open-form-window","title":"Open form window","description":"Open form window ( {aTable ;} formName {; type {; hPos {; vPos {; *}}}} ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/open-form-window.md","sourceDirName":"commands-legacy","slug":"/commands/open-form-window","permalink":"/docs/commands/open-form-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-form-window.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"open-form-window","title":"Open form window","slug":"/commands/open-form-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Next window","permalink":"/docs/commands/next-window"},"next":{"title":"Open window","permalink":"/docs/commands/open-window"}}'),d=t("785893"),r=t("250065");let i={id:"open-form-window",title:"Open form window",slug:"/commands/open-form-window",displayed_sidebar:"docs"},o=void 0,l={},h=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Open form window"})," ( {",(0,d.jsx)(n.em,{children:"aTable"})," ;} ",(0,d.jsx)(n.em,{children:"formName"})," {; ",(0,d.jsx)(n.em,{children:"type"})," {; ",(0,d.jsx)(n.em,{children:"hPos"})," {; ",(0,d.jsx)(n.em,{children:"vPos"})," {; *}}}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Table of the form or Default table, if omitted"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"formName"}),(0,d.jsx)(n.td,{children:"Text, Object"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Name (string) of table or project form, or a POSIX path (string) to a .json file describing the form, oran object describing the form"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"type"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Window type"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"hPos"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Horizontal position of the window"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"vPos"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Vertical position of the window"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Save current position and size of the window"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Function result"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Window reference number"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The Open form window command opens a new window using the size and resizing properties of the form ",(0,d.jsx)(n.em,{children:"formName"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," To know the main properties of a form, use the ",(0,d.jsx)(n.a,{href:"/docs/commands/form-get-properties",children:"FORM GET PROPERTIES"})," command."]}),"\n",(0,d.jsxs)(n.p,{children:["In the ",(0,d.jsx)(n.em,{children:"formName"})," parameter, you can pass:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"the name of a form (project form or table form) to use;"}),"\n",(0,d.jsxs)(n.li,{children:["the path (in POSIX syntax) to a valid .json file containing a description of the form to use. See ",(0,d.jsx)(n.em,{children:"Form file path"}),";"]}),"\n",(0,d.jsx)(n.li,{children:"an object containing a description of the form to use."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.em,{children:"formName"})," is not displayed in the window. If you want to display the form, you have to call a command which loads a form (",(0,d.jsx)(n.a,{href:"/docs/commands/add-record",children:"ADD RECORD"})," for example)."]}),"\n",(0,d.jsxs)(n.p,{children:["The optional ",(0,d.jsx)(n.em,{children:"type"})," parameter allows you to specify a type for the window. You must pass one of the following predefined constants (placed in the ",(0,d.jsx)(n.em,{children:"Open Form Window"})," theme):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Controller form window"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"133056"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Form has full screen mode Mac"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"65536"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Form has no menu bar"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"2048"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modal form dialog box"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Movable form dialog box"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Movable form dialog box no title"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"524293"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Palette form window"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"1984"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Plain form window"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Plain form window no title"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"524296"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Pop up form window"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"32"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Sheet form window"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"33"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Toolbar form window"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"35"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Window types are detailed in the ",(0,d.jsx)(n.em,{children:"Window Types"})," section."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," The Form has full screen mode Mac and Form has no menu bar constants must be added to one of the other type constants."]}),"\n",(0,d.jsxs)(n.p,{children:["By default, if the ",(0,d.jsx)(n.em,{children:"type"})," parameter is not passed, a window of the Plain form window type is opened."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Close box"}),(0,d.jsx)(n.br,{}),"\nWindows of the Movable form dialog box, Plain form window, and Palette form window types have a close box. No method is associated to the window's close box. Clicking on this close box cancels and closes the window, except if the On Close Box form event has been activated for the form. In this case, the code associated with this event will be executed."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Size control"}),(0,d.jsx)(n.br,{}),'\nIf "Window Size" properties of the ',(0,d.jsx)(n.em,{children:"formName"}),' are not set to "fixed", the opened window can be resized by the user. A zoom box can be available,depending on the window type. If the ',(0,d.jsx)(n.strong,{children:"Fixed Width"})," and/or ",(0,d.jsx)(n.strong,{children:"Fixed Height"})," property is checked in the form properties, the window will not be resizable."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," Some attributes (grow box, close box...) of the window created depend on the interface specifications of the operating system for the chosen ",(0,d.jsx)(n.em,{children:"type"}),". It is therefore possible to obtain different results depending on the platform used."]}),"\n",(0,d.jsxs)(n.p,{children:["The optional parameter ",(0,d.jsx)(n.em,{children:"hPos"})," allows you to define the horizontal position of the window. You can pass a defined position in pixels or one of the following predefined constants placed in the ",(0,d.jsx)(n.em,{children:"Open Form Window"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Horizontally centered"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"65536"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On the left"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"131072"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On the right"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"196608"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["The optional parameter ",(0,d.jsx)(n.em,{children:"vPos"})," allows you to define the vertical position of the window. You can pass a defined position in pixels or one of the following predefined constants placed in the ",(0,d.jsx)(n.em,{children:"Open Form Window"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"At the bottom"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"393216"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"At the top"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"327680"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Vertically centered"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"262144"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"These parameters are expressed relative to the top left corner of the contents area of the application window (Windows MDI mode) or to the main screen (macOS and Windows SDI mode). They take into account the presence of the tool bar and menu bar."}),"\n",(0,d.jsxs)(n.p,{children:["If you pass the optional parameter ",(0,d.jsx)(n.em,{children:"*"}),", the current position and size of the window are memorized when closed. When the window is reopened again, its previous position and size are respected. In this case, the ",(0,d.jsx)(n.em,{children:"vPos"})," and ",(0,d.jsx)(n.em,{children:"hPos"})," parameters are only used the first time the window is opened."]}),"\n",(0,d.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,d.jsx)(n.p,{children:'The following statement opens a standard window with a close box and automatically adjusts it to be the same size as the "Input" form. The form window size is not set to "fixed", then the window also has a grow and a zoom box:'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0$winRef :=Open form window([Table1];"Enter")\n'})}),"\n",(0,d.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,d.jsx)(n.p,{children:'The following statement opens a floating palette in the upper left portion of the screen based on a project form named "Tools". This palette uses the last position it was in when the user closed it each time it is reopened:'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0$winRef :=Open form window("Tools";Palette form window;On the left;At the top;*)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,d.jsx)(n.p,{children:"This code must be called on macOS while a document window is displayed, for example from a form button, to display a sheet window:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0$myWin:=Open form window("sheet form";Sheet form window)\n\xa0\xa0// For the moment, the window is created but remains hidden\n\xa0DIALOG([aTable];"dialForm")\n\xa0\xa0//The On Load event is generated then the sheet window is displayed; it "drops down"\n\xa0\xa0//from the bottom of the title bar\n'})}),"\n",(0,d.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,d.jsx)(n.p,{children:"The following example uses the path to a .json form to display the records in an employee list:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)\n\xa0ALL RECORDS([Personnel])\n\xa0DIALOG("/RESOURCES/OutputPersonnel.json";*)\n'})}),"\n",(0,d.jsx)(n.p,{children:"which displays:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(962065).Z+"",width:"301",height:"363"})}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/form-get-properties",children:"FORM GET PROPERTIES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/open-window",children:"Open window"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Window Types"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Window Types (compatibility)"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"675"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},962065:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict3687439.en-25c836074f1a1e9fbeb7da790404af71.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);