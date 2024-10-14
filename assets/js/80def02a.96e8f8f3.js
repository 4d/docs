"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42347],{748875:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=s(474848),r=s(28453);const l={id:"vp-get-stylesheets",title:"VP Get stylesheet"},o=void 0,d={id:"ViewPro/commands/vp-get-stylesheets",title:"VP Get stylesheet",description:"VP Get stylesheet ( vpAreaName Text { ; sheet Object",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-get-stylesheet.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-stylesheets",permalink:"/docs/20-R5/ViewPro/commands/vp-get-stylesheets",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheet.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-stylesheets",title:"VP Get stylesheet"},sidebar:"docs",previous:{title:"VP Get stylesheets",permalink:"/docs/20-R5/ViewPro/commands/vp-get-stylesheet"},next:{title:"VP Get column attributes",permalink:"/docs/20-R5/ViewPro/commands/vp-get-table-column-attributes"}},i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"VP Get stylesheet"})," ( ",(0,n.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,n.jsx)(t.em,{children:"styleName"})," : Text { ; ",(0,n.jsx)(t.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vpAreaName"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"->"}),(0,n.jsx)(t.td,{children:"4D View Pro area form object name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"styleName"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"->"}),(0,n.jsx)(t.td,{children:"Name of style"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sheet"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"->"}),(0,n.jsx)(t.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Result"}),(0,n.jsx)(t.td,{children:"Object"}),(0,n.jsx)(t.td,{children:"<-"}),(0,n.jsx)(t.td,{children:"Style sheet object"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"VP Get stylesheet"})," command returns the ",(0,n.jsx)(t.em,{children:"styleName"})," style sheet object containing the property values which have been defined."]}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.em,{children:"styleName"}),", pass the name of the style sheet to get."]}),"\n",(0,n.jsxs)(t.p,{children:["You can define where to get the style sheet in the optional ",(0,n.jsx)(t.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0) or with the following constants:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"The following code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["... will return the ",(0,n.jsx)(t.em,{children:"GreenDashDotStyle"})," style object from the current sheet:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:"{\nbackColor:green,\nborderBottom:{color:green,style:10},\nborderLeft:{color:green,style:10},\nborderRight:{color:green,style:10},\nborderTop:{color:green,style:10}\n}\n"})}),"\n",(0,n.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/20-R5/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/20-R5/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/20-R5/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var n=s(296540);const r={},l=n.createContext(r);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);