"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16407"],{990453:function(e,t,s){s.r(t),s.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"ViewPro/commands/vp-add-stylesheet","title":"VP ADD STYLESHEET","description":"VP ADD STYLESHEET ( vpAreaName Text ; styleObj Integer } )","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-add-stylesheet.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-stylesheet","permalink":"/docs/ViewPro/commands/vp-add-stylesheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-stylesheet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-add-stylesheet","title":"VP ADD STYLESHEET"},"sidebar":"docs","previous":{"title":"VP ADD SPAN","permalink":"/docs/ViewPro/commands/vp-add-span"},"next":{"title":"VP All","permalink":"/docs/ViewPro/commands/vp-all"}}'),r=s("785893"),l=s("250065");let o={id:"vp-add-stylesheet",title:"VP ADD STYLESHEET"},d=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function h(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP ADD STYLESHEET"})," ( ",(0,r.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(t.em,{children:"styleName"})," : Text ; ",(0,r.jsx)(t.em,{children:"styleObj"})," : Object { ; ",(0,r.jsx)(t.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vpAreaName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"styleName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Name of style"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"styleObj"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Object defining attribute settings"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sheet"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP ADD STYLESHEET"})," command creates or modifies the ",(0,r.jsx)(t.em,{children:"styleName"})," style sheet based upon the combination of the properties specified in ",(0,r.jsx)(t.em,{children:"styleObj"})," in the open document. If a style sheet with the same name and index already exists in the document, this command will overwrite it with the new values."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Style sheets created by this command are saved with the document."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"styleName"})," parameter lets you assign a name to the style sheet. If the name is already used within the same scope, the new style sheet replaces the existing one. Note that you can use the same name for different scopes (see below)."]}),"\n",(0,r.jsxs)(t.p,{children:["Within the ",(0,r.jsx)(t.em,{children:"styleObj"}),", designate the settings for the style sheet (e.g., font, text decoration, alignment, borders, etc.). For the full list of style properties, see ",(0,r.jsx)(t.a,{href:"/docs/ViewPro/configuring#style-object-properties",children:"Style object properties"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can designate where to define the style sheet in the optional ",(0,r.jsx)(t.em,{children:"sheet"})," parameter using the sheet index (indexing starts at 0) or with the following constants:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If a ",(0,r.jsx)(t.em,{children:"styleName"})," style sheet is defined at the workbook level and at a sheet level, the sheet level has priority over the workbook level when the style sheet is set."]}),"\n",(0,r.jsxs)(t.p,{children:["To apply the style sheet, use the ",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})," or ",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"})," commands."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'$styles:=New object\n$styles.backColor:="green"\n \n//Line Border Object\n$borders:=New object("color";"green";"style";vk line style medium dash dot)\n \n$styles.borderBottom:=$borders\n$styles.borderLeft:=$borders\n$styles.borderRight:=$borders\n$styles.borderTop:=$borders\n \nVP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)\n \n//To apply the style\nVP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))\n'})}),"\n",(0,r.jsxs)(t.p,{children:["will create and apply the following style object named ",(0,r.jsx)(t.em,{children:"GreenDashDotStyle"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"{\n backColor:green,\n borderBottom:{color:green,style:10},\n borderLeft:{color:green,style:10},\n borderRight:{color:green,style:10},\n borderTop:{color:green,style:10}\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function a(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return o}});var n=s(667294);let r={},l=n.createContext(r);function o(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);