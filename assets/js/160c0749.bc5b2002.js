"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62627],{223152:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(474848),o=t(28453);const r={id:"vp-copy-to-object",title:"VP Copy to object"},i=void 0,d={id:"ViewPro/commands/vp-copy-to-object",title:"VP Copy to object",description:"History",source:"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-copy-to-object.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-copy-to-object",permalink:"/docs/20-R6/ViewPro/commands/vp-copy-to-object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-copy-to-object.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-copy-to-object",title:"VP Copy to object"},sidebar:"docs",previous:{title:"VP Convert to picture",permalink:"/docs/20-R6/ViewPro/commands/vp-convert-to-picture"},next:{title:"VP CREATE TABLE",permalink:"/docs/20-R6/ViewPro/commands/vp-create-table"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R4"}),(0,s.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Copy to object"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object {; ",(0,s.jsx)(n.em,{children:"options"})," : Object} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Range object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Additional options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Object returned. Contains the copied data"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Copy to object"})," command copies the contents, style and formulas from ",(0,s.jsx)(n.em,{children:"rangeObj"})," to an object."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass the cell range with the values, formatting, and formulas to copy. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," is a combined range, only the first one is used."]}),"\n",(0,s.jsxs)(n.p,{children:["You can pass an optional ",(0,s.jsx)(n.em,{children:"options"})," parameter with the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"copy"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"True"})," (default) to keep the copied values, formatting and formulas after the command executes. ",(0,s.jsx)(n.em,{children:"False"})," to remove them."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"copyOptions"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsxs)(n.td,{children:["Specifies what is copied or moved. Possible values: ",(0,s.jsx)(n.p,{}),(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Description"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"vk clipboard options all"})," (default)"]}),(0,s.jsx)(n.td,{children:"Copies all data objects, including values, formatting, and formulas."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk clipboard options formatting"})}),(0,s.jsx)(n.td,{children:"Copies only the formatting."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk clipboard options formulas"})}),(0,s.jsx)(n.td,{children:"Copies only the formulas."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk clipboard options formulas and formatting"})}),(0,s.jsx)(n.td,{children:"Copies the formulas and formatting."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk clipboard options values"})}),(0,s.jsx)(n.td,{children:"Copies only the values."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vk clipboard options value and formatting"})}),(0,s.jsx)(n.td,{children:"Copies the values and formatting."})]})]})}),(0,s.jsx)(n.p,{})]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The paste options defined in the ",(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-workbook-options",children:"workbook options"})," are taken into account."]}),"\n",(0,s.jsx)(n.p,{children:"The command returns an object that contains the copied data."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This code sample first stores the contents, values, formatting and formulas from a range to an object, and then pastes them in another range:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $originRange; $targetRange; $dataObject; $options : Object\n\n$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)\n\n$options:=New object\n$options.copy:=True\n$options.copyOptions:=vk clipboard options all\n\n$dataObject:=VP Copy to object($originRange; $options)\n\n$targetRange:=VP Cell("ViewProArea"; 4; 0)\nVP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-paste-from-object",children:"VP PASTE FROM OBJECT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-move-cells",children:"VP MOVE CELLS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-get-workbook-options",children:"VP Get workbook options"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-workbook-options",children:"VP SET WORKBOOK OPTIONS"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(296540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);