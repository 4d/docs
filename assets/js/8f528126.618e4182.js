"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53908"],{34591:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>l,assets:()=>d,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/set-drag-icon","title":"SET DRAG ICON","description":"SET DRAG ICON ( icon {; horOffset {; vertOffset}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-drag-icon.md","sourceDirName":"commands-legacy","slug":"/commands/set-drag-icon","permalink":"/docs/commands/set-drag-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-drag-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-drag-icon","title":"SET DRAG ICON","slug":"/commands/set-drag-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Drop position","permalink":"/docs/commands/drop-position"},"next":{"title":"Entry Control","permalink":"/docs/category/entry-control"}}'),i=t("785893"),o=t("250065");let r={id:"set-drag-icon",title:"SET DRAG ICON",slug:"/commands/set-drag-icon",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET DRAG ICON"})," ( ",(0,i.jsx)(n.em,{children:"icon"})," {; ",(0,i.jsx)(n.em,{children:"horOffset"})," {; ",(0,i.jsx)(n.em,{children:"vertOffset"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"icon"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Icon to use during drag"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"horOffset"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Horizontal offset from left edge of picture with respect to cursor position (>0 = to the left, <0 = to the right)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vertOffset"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Vertical offset from top edge of picture with respect to cursor position (>0 = upwards, <0 = downwards)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"SET DRAG ICON"})," command associates the icon picture with the cursor during drag and drop operations that are managed by programming."]}),"\n",(0,i.jsxs)(n.p,{children:["This command can only be called in the context of the On Begin Drag Over form event (see the ",(0,i.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"})," command)."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"icon"})," parameter, pass the picture to use. Its maximum size is 256x256 pixels. If one of its dimensions exceeds 256 pixels, it is automatically resized."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"horOffset"})," and ",(0,i.jsx)(n.em,{children:"vertOffset"}),", you can pass offset values in pixels:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["for ",(0,i.jsx)(n.em,{children:"horOffset"}),", you pass the horizontal offset from the left edge of the icon with respect to the cursor position. Pass a positive value to apply this offset towards the left or a negative value to apply it towards the right."]}),"\n",(0,i.jsxs)(n.li,{children:["for ",(0,i.jsx)(n.em,{children:"vertOffset"}),", you pass the vertical offset from the top edge of the icon with respect to the cursor position. Pass a positive value to apply this offset upwards or a negative value to apply it downwards."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you omit this parameter, the cursor is placed at the center of the icon."}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"In a form, a user can generate a label by dragging and dropping a row. In the object method of the list box, you can write:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On Begin Drag Over)\n\xa0\xa0\xa0\xa0READ PICTURE FILE(Get 4D folder(Current resources folder)+"splash.png";vpict)\n\xa0\xa0\xa0\xa0CREATE THUMBNAIL(vpict;vpict;48;48)\n\xa0\xa0\xa0\xa0SET DRAG ICON(vpict)\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"When you drag a row, the picture appears as shown here:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(83603).Z+"",width:"1005",height:"510"})}),"\n",(0,i.jsx)(n.p,{children:"Note that you can modify the position of the cursor with respect to the picture:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0SET DRAG ICON(vpict;0;0)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(247683).Z+"",width:"54",height:"55"})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"})})]})}function l(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},83603:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict1204050.en-b9bfe7a987c2ed1df812f2dc2ff4a92a.png"},247683:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let i={},o=s.createContext(i);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);