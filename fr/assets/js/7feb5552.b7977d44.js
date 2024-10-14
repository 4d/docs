"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18694],{747118:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(474848),t=s(28453);const i={id:"vp-move-cells",title:"VP MOVE CELLS"},o=void 0,d={id:"ViewPro/commands/vp-move-cells",title:"VP MOVE CELLS",description:"Historique",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-move-cells.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-move-cells",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-move-cells",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-move-cells.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-move-cells",title:"VP MOVE CELLS"},sidebar:"docs",previous:{title:"M",permalink:"/docs/fr/20-R5/commands/M"},next:{title:"N",permalink:"/docs/fr/20-R5/commands/N"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP MOVE CELLS"})," ( ",(0,r.jsx)(n.em,{children:"originRange"})," : Object ; ",(0,r.jsx)(n.em,{children:"targetRange"})," : Object ; ",(0,r.jsx)(n.em,{children:"options"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"originRange"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Cell range to copy from"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"targetRange"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Target range for the values, formatting and formulas"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Options suppl\xe9mentaires"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP MOVE CELLS"})," command moves or copies the values, style and formulas from ",(0,r.jsx)(n.em,{children:"originRange"})," to ",(0,r.jsx)(n.em,{children:"targetRange"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"originRange"})," and ",(0,r.jsx)(n.em,{children:"targetRange"})," can refer to different View Pro areas."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"originRange"}),", pass a range object containing the values, style, and formula cells to copy or move. If ",(0,r.jsx)(n.em,{children:"originRange"})," is a combined range, only the first one is used."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"targetRange"}),", pass the range of cells where the cell values, style, and formulas will be copied or moved."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"options"})," parameter has several properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"copy"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["Determines if the values, formatting and formulas of the cells in ",(0,r.jsx)(n.em,{children:"originRange"})," are removed after the command executes:",(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"False"})," (default) to remove them"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"True"})," to keep them"]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pasteOptions"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsxs)(n.td,{children:["Specifies what is pasted. Possible values: ",(0,r.jsx)(n.p,{}),(0,r.jsx)(n.table,{children:(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Description"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"vk clipboard options all"})," (default)"]}),(0,r.jsx)(n.td,{children:"Pastes all data objects, including values, formatting, and formulas."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options formatting"})}),(0,r.jsx)(n.td,{children:"Pastes only the formatting."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options formulas"})}),(0,r.jsx)(n.td,{children:"Pastes only the formulas."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options formulas and formatting"})}),(0,r.jsx)(n.td,{children:"Pastes the formulas and formatting."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options values"})}),(0,r.jsx)(n.td,{children:"Pastes only the values."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk clipboard options value and formatting"})}),(0,r.jsx)(n.td,{children:"Pastes the values and formatting."})]})]})}),(0,r.jsx)(n.p,{})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The paste options defined in the ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-workbook-options",children:"workbook options"})," are taken into account."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Pour copier le contenu, les valeurs, le formatage et les formules d'une plage d'origine :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $originRange; $targetRange; $options : Object\n\n$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)\n\n$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)\n\n$options:=New object\n$options.copy:=True\n$options.pasteOptions:=vk clipboard options all\n\nVP MOVE CELLS($originRange; $targetRange; $options)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-copy-to-object",children:"VP Copy to object"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-paste-from-object",children:"VP PASTE FROM OBJECT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-workbook-options",children:"VP SET WORKBOOK OPTIONS"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(296540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);