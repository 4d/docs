"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3431"],{573530:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>c,toc:()=>a,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/convert-coordinates","title":"CONVERT COORDINATES","description":"CONVERT COORDINATES ( xCoord ; yCoord ; from ; to )","source":"@site/versioned_docs/version-20-R7/commands-legacy/convert-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/convert-coordinates","permalink":"/docs/20-R7/commands/convert-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-coordinates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-coordinates","title":"CONVERT COORDINATES","slug":"/commands/convert-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLOSE WINDOW","permalink":"/docs/20-R7/commands/close-window"},"next":{"title":"Current form window","permalink":"/docs/20-R7/commands/current-form-window"}}'),r=t("785893"),s=t("250065");let i={id:"convert-coordinates",title:"CONVERT COORDINATES",slug:"/commands/convert-coordinates",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CONVERT COORDINATES"})," ( ",(0,r.jsx)(n.em,{children:"xCoord"})," ; ",(0,r.jsx)(n.em,{children:"yCoord"})," ; ",(0,r.jsx)(n.em,{children:"from"})," ; ",(0,r.jsx)(n.em,{children:"to"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"xCoord"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Horizontal coordinate of a point (initial)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Horizontal coordinate of a point (converted)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"yCoord"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Vertical coordinate of a point (initial)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Vertical coordinate of a point (converted)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"from"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Coordinates system to convert from"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"to"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Coordinates system to convert to"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"CONVERT COORDINATES"})," command converts the (x;y) coordinates of a point from one coordinate system to another. The input and output coordinate systems supported are forms (and subforms), windows, and the screen. For example, you can use this command to get the coordinates in the main form of an object belonging to a subform. This makes it easy to create a context menu at any custom position."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"xCoord"})," and ",(0,r.jsx)(n.em,{children:"yCoord"}),", pass as variables the (x;y) coordinates of the point you want to convert. After the command is executed, these variables will contain the converted values."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"from"})," parameter, pass the initial coordinate system the input point is using, and in the ",(0,r.jsx)(n.em,{children:"to"}),' parameter, pass the coordinate system into which it must be converted. Both parameters can take one of the following constant values, added to the "',(0,r.jsx)(n.em,{children:"Windows"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XY Current form"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Origin is top left corner of current form"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XY Current window"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Origin is top left corner of current window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XY Main window"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"On Windows: origin is top left corner of main window; on macOS: same as XY Screen"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XY Screen"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:["Origin is top left corner of main screen (same as for ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/screen-coordinates",children:"SCREEN COORDINATES"})," command)."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"When this command is called from the method of a subform or a subform's object, and if one of the selectors is XY Current form, then the coordinates are relative to the subform itself, not to its parent form."}),"\n",(0,r.jsxs)(n.p,{children:["When converting from/to the position of a form window (for example when converting from the results of ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/get-window-rect",children:"GET WINDOW RECT"}),", or to values passed to ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/open-form-window",children:"Open form window"}),"), XY Main window must be used since it is the coordinate system used by window commands on Windows. It can also be used for this purpose on macOS, where it is equivalent to XY Screen."]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.em,{children:"from"})," is XY Current form and the point is in the body section of a list form, the result depends on the calling context of the command:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the command is called in the On Display Detail event, the resulting point is located in the display of the record being drawn on screen."}),"\n",(0,r.jsx)(n.li,{children:"If the command is called outside of an On Display Detail event but while a record is being edited, the resulting point is located in the display of the record being edited."}),"\n",(0,r.jsx)(n.li,{children:"Otherwise, the resulting point is located in the display of the first record."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:'You want to open a pop-up menu at the bottom left corner of the "MyObject" object.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// OBJECT GET COORDINATES works in the current form coordinate system\n\xa0\xa0// Dynamic pop-up menu uses the current window coordinate system\n\xa0\xa0// We need to convert the values\n\xa0var $left;$top;$right;$bottom : Integer\n\xa0var $menu : Text\n\xa0OBJECT GET COORDINATES(*;"MyObject";$left;$top;$right;$bottom)\n\xa0CONVERT COORDINATES($left;$bottom;XY Current form;XY Current window)\n\xa0$menu:=Create menu\n\xa0APPEND MENU ITEM($menu;"Right here")\n\xa0APPEND MENU ITEM($menu;"Right now")\n\xa0Dynamic pop up menu($menu;"";$left;$bottom)\n\xa0RELEASE MENU($menu)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(748458).Z+"",width:"155",height:"91"})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.p,{children:["You want to open a pop-up window at the position of the mouse cursor. On Windows, you need to convert the coordinates since ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/mouse-position",children:"MOUSE POSITION"})," (with the * parameter) returns values based on the position of the MDI window:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $mouseX;$mouseY;$mouseButtons : Integer\n\xa0var $window : Integer\n\xa0MOUSE POSITION($mouseX;$mouseY;$mouseButtons)\n\xa0CONVERT COORDINATES($mouseX;$mouseY;XY Current window;XY Main window)\n\xa0$window:=Open form window("PopupWindowForm";Pop up form window;$mouseX;$mouseY)\n\xa0DIALOG("PopupWindowForm")\n\xa0CLOSE WINDOW($window)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/object-set-coordinates",children:"OBJECT SET COORDINATES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-window-rect",children:"SET WINDOW RECT"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1365"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},748458:function(e,n,t){t.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var o=t(667294);let r={},s=o.createContext(r);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);