"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86705"],{254440:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/set-window-rect","title":"SET WINDOW RECT","description":"SET WINDOW RECT ( left ; top ; right ; bottom {; window}{; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-window-rect.md","sourceDirName":"commands-legacy","slug":"/commands/set-window-rect","permalink":"/docs/commands/set-window-rect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-window-rect.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-window-rect","title":"SET WINDOW RECT","slug":"/commands/set-window-rect","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET WINDOW DOCUMENT ICON","permalink":"/docs/commands/set-window-document-icon"},"next":{"title":"SET WINDOW TITLE","permalink":"/docs/commands/set-window-title"}}'),d=t("785893"),o=t("250065");let i={id:"set-window-rect",title:"SET WINDOW RECT",slug:"/commands/set-window-rect",displayed_sidebar:"docs"},r=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET WINDOW RECT"})," ( ",(0,d.jsx)(n.em,{children:"left"})," ; ",(0,d.jsx)(n.em,{children:"top"})," ; ",(0,d.jsx)(n.em,{children:"right"})," ; ",(0,d.jsx)(n.em,{children:"bottom"})," {; ",(0,d.jsx)(n.em,{children:"window"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"left"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Global left coordinate of window's contents area"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"top"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Global top coordinate of window's contents area"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"right"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Global right coordinate of window's contents area"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bottom"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Global bottom coordinate of window's contents area"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"window"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Window reference number, or Frontmost window of current process, if omitted"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["If omitted (default) = change window to foreground",(0,d.jsx)(n.br,{}),"If passed = do not change the level of the window"]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The SET WINDOW RECT command changes the global coordinates of the window whose reference number is passed in ",(0,d.jsx)(n.em,{children:"window"}),". If the window does not exist, the command does nothing."]}),"\n",(0,d.jsxs)(n.p,{children:["If you omit the ",(0,d.jsx)(n.em,{children:"window"})," parameter, SET WINDOW RECT applies to the frontmost window for the current process."]}),"\n",(0,d.jsx)(n.p,{children:"This command can resize and move the window, depending on the new coordinates passed."}),"\n",(0,d.jsx)(n.p,{children:"The coordinates must be expressed relative to the top left corner of the contents area of the application window (Windows MDI mode) or to the main screen (macOS and Windows SDI mode). The coordinates indicate the rectangle corresponding to the contents area of the window (excluding title bars and borders)."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Warning:"})," Be aware that by using this command, you may move a window beyond the limits of the main window (on Windows) or of the screens (on Macintosh). To prevent this, use commands such as ",(0,d.jsx)(n.a,{href:"/docs/commands/screen-width",children:"Screen width"})," and ",(0,d.jsx)(n.a,{href:"/docs/commands/screen-height",children:"Screen height"})," to double-check the new coordinates of the window."]}),"\n",(0,d.jsxs)(n.p,{children:["By default, executing this command automatically moves the window designated by the ",(0,d.jsx)(n.em,{children:"window"})," parameter to the foreground (if this parameter is used). You can disable this by passing the ",(0,d.jsx)(n.em,{children:"*"}),' as the last parameter. In this case, the command no longer changes the original level ("z" coordinate) of the window.']}),"\n",(0,d.jsxs)(n.p,{children:["This command does not affect form objects. If the window contains a form, the form objects are not moved or resized by the command (regardless of their properties). Only the window is modified. In order to modify a form window while taking the resizing properties and the objects it contains into account, you must use the ",(0,d.jsx)(n.a,{href:"/docs/commands/resize-form-window",children:"RESIZE FORM WINDOW"})," command."]}),"\n",(0,d.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,d.jsxs)(n.p,{children:["See example for the ",(0,d.jsx)(n.a,{href:"/docs/commands/window-list",children:"WINDOW LIST"})," command."]}),"\n",(0,d.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,d.jsx)(n.p,{children:"Given the following window:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(160852).Z+"",width:"432",height:"290"})}),"\n",(0,d.jsx)(n.p,{children:"After execution of the following line:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET WINDOW RECT(100;100;300;300)\n"})}),"\n",(0,d.jsx)(n.p,{children:"The window appears as follows:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(447954).Z+"",width:"209",height:"238"})}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/drag-window",children:"DRAG WINDOW"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/resize-form-window",children:"RESIZE FORM WINDOW"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"444"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},160852:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict39568.en-e796114585f425d19187b1b09626a5ec.png"},447954:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict39569.en-6bdd497cb41123d486b9c0634ff5c2c9.png"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let d={},o=s.createContext(d);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);