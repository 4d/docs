"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95762],{898451:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(474848),r=t(28453);const i={id:"svg-find-element-ids-by-rect",title:"SVG Find element IDs by rect",slug:"/commands/svg-find-element-ids-by-rect",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/svg-find-element-ids-by-rect",title:"SVG Find element IDs by rect",description:"SVG Find element IDs by rect ( { ;} pictureObject ; x ; y ; width ; height ; arrIDs* ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/svg-find-element-ids-by-rect.md",sourceDirName:"commands-legacy",slug:"/commands/svg-find-element-ids-by-rect",permalink:"/docs/commands/svg-find-element-ids-by-rect",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-find-element-ids-by-rect.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"svg-find-element-ids-by-rect",title:"SVG Find element IDs by rect",slug:"/commands/svg-find-element-ids-by-rect",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SVG Find element ID by coordinates",permalink:"/docs/commands/svg-find-element-id-by-coordinates"},next:{title:"SVG GET ATTRIBUTE",permalink:"/docs/commands/svg-get-attribute"}},o={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SVG Find element IDs by rect"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"pictureObject"})," ; ",(0,s.jsx)(n.em,{children:"x"})," ; ",(0,s.jsx)(n.em,{children:"y"})," ; ",(0,s.jsx)(n.em,{children:"width"})," ; ",(0,s.jsx)(n.em,{children:"height"})," ; ",(0,s.jsx)(n.em,{children:"arrIDs"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["If specified, pictureObject is an object name (string) ",(0,s.jsx)(n.br,{}),"If omitted, pictureObject is a variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pictureObject"}),(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Object name (if * specified) or ",(0,s.jsx)(n.br,{}),"Field or variable (if * omitted)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Horizontal coordinate of top left corner of selection rectangle"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"y"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Vertical coordinate of top left corner of selection rectangle"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"width"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Width of selection rectangle"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"height"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Height of selection rectangle"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrIDs"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"IDs of elements whose bounding rectangle intersects with the selection rectangle"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = at least one element is found"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SVG Find element IDs by rect"})," command fills the Text or Alpha ",(0,s.jsx)(n.em,{children:"arrIDs"}),' array with the IDs ("id" or "xml:id" attribute) of the XML elements whose bounding rectangle intersects with the selection rectangle at the location specified by the ',(0,s.jsx)(n.em,{children:"x"})," and ",(0,s.jsx)(n.em,{children:"y"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["The command returns True if at least one element is found (in other words if the ",(0,s.jsx)(n.em,{children:"arrIDs"})," array is not empty), and False otherwise."]}),"\n",(0,s.jsx)(n.p,{children:"This command can be used in particular to manage interactive graphic interfaces."}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"pictureObject"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"pictureObject"})," parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are working with a picture field or variable, the command uses the original picture, corresponding to the data source. However, if you are working with a form object, the command uses the current picture, that may have been modified via the ",(0,s.jsx)(n.a,{href:"/docs/commands/svg-set-attribute",children:"SVG SET ATTRIBUTE"})," command and that is kept with the properties of the form object."]}),"\n",(0,s.jsxs)(n.p,{children:["The coordinates passed in the ",(0,s.jsx)(n.em,{children:"x"})," and ",(0,s.jsx)(n.em,{children:"y"})," parameters must be expressed in pixels in relation to the top left corner of the picture (0,0). You can use the values returned by the MouseX and MouseY ",(0,s.jsx)(n.em,{children:"System Variables"}),". These variables are updated in the On Clicked and On Double Clicked form events as well as the in the On Mouse Enter and On Mouse Move form events."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),' In the system of picture coordinates, [x;y] always specifies the same point, regardless of the picture display format, apart from the "Replicated" format.']}),"\n",(0,s.jsx)(n.p,{children:"All elements whose bounding rectangle intersects with the selection rectangle are taken into account, even those that are under other elements."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/svg-find-element-id-by-coordinates",children:"SVG Find element ID by coordinates"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(296540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);