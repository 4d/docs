"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7451],{530388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(474848),r=n(28453);const o={id:"vp-remove-stylesheet",title:"VP REMOVE STYLESHEET"},i=void 0,d={id:"ViewPro/commands/vp-remove-stylesheet",title:"VP REMOVE STYLESHEET",description:"VP REMOVE STYLESHEET ( vpAreaName Text { ; sheet : Integer } )",source:"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-remove-stylesheet.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-remove-stylesheet",permalink:"/docs/ViewPro/commands/vp-remove-stylesheet",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-stylesheet.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-remove-stylesheet",title:"VP REMOVE STYLESHEET"},sidebar:"docs",previous:{title:"VP REMOVE SPAN",permalink:"/docs/ViewPro/commands/vp-remove-span"},next:{title:"VP REMOVE TABLE",permalink:"/docs/ViewPro/commands/vp-remove-table"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP REMOVE STYLESHEET"})," ( ",(0,s.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(t.em,{children:"styleName"})," : Text { ; ",(0,s.jsx)(t.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vpAreaName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"4D View Pro area form object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"styleName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Name of style to remove"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sheet"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP REMOVE STYLESHEET"})," command removes the style sheet passed in the ",(0,s.jsx)(t.em,{children:"styleName"})," from the ",(0,s.jsx)(t.em,{children:"vpAreaName"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,s.jsxs)(t.p,{children:["Pass the style sheet to remove in the ",(0,s.jsx)(t.em,{children:"styleName"})," parameter."]}),"\n",(0,s.jsxs)(t.p,{children:["You can define where to remove the style in the optional ",(0,s.jsx)(t.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0) or with the following constants:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["To remove the ",(0,s.jsx)(t.em,{children:"GreenDashDotStyle"})," style object from the current sheet:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")\n'})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(296540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);