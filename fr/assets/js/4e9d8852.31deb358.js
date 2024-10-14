"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27927],{491717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=t(474848),o=t(28453);const r={id:"vp-paste-from-object",title:"VP PASTE FROM OBJECT"},i=void 0,d={id:"ViewPro/commands/vp-paste-from-object",title:"VP PASTE FROM OBJECT",description:"Historique",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-paste-from-object.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-paste-from-object",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-paste-from-object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-paste-from-object.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-paste-from-object",title:"VP PASTE FROM OBJECT"},sidebar:"docs",previous:{title:"P",permalink:"/docs/fr/20-R5/commands/P"},next:{title:"VP PRINT",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-print"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function l(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Modifications"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R4"}),(0,s.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP PASTE FROM OBJECT"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"dataObject"})," : Object {; ",(0,s.jsx)(n.em,{children:"options"})," : Longint} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objet plage de cellules"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataObject"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Object containing the data to be pasted"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Specifies what is pasted"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP PASTE FROM OBJECT"})," command pastes the contents, style and formulas stored in ",(0,s.jsx)(n.em,{children:"dataObject"})," to the ",(0,s.jsx)(n.em,{children:"rangeObj"})," object."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass the cell range object where the values, formatting, and/or formula cells will be pasted. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," refers to more than one cell, only the first one is used."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"dataObject"}),", pass the object that contains the cell data, formatting, and formulas to be pasted."]}),"\n",(0,s.jsxs)(n.p,{children:["In the optional ",(0,s.jsx)(n.em,{children:"options"})," parameter, you can specify what to paste in the cell range. Valeurs possibles :"]}),"\n",(0,s.jsxs)(n.p,{children:["|Constant|Description|\n|---|---|---|\n|",(0,s.jsx)(n.code,{children:"vk clipboard options all"}),"|Pastes all data objects, including values, formatting, and formulas.|\n|",(0,s.jsx)(n.code,{children:"vk clipboard options formatting"}),"|Pastes only the formatting.|\n|",(0,s.jsx)(n.code,{children:"vk clipboard options formulas"}),"|Pastes only the formulas.|\n|",(0,s.jsx)(n.code,{children:"vk clipboard options formulas and formatting"}),"|Pastes formulas and formatting.|\n|",(0,s.jsx)(n.code,{children:"vk clipboard options values"}),"|Pastes only values.|\n|",(0,s.jsx)(n.code,{children:"vk clipboard options value and formatting"}),"|Pastes values and formatting.|"]}),"\n",(0,s.jsxs)(n.p,{children:["The paste options defined in the ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-workbook-options",children:"workbook options"})," are taken into account."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"options"})," refers to a paste option not present in the copied object (e.g. formulas), the command does nothing."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(n.p,{children:["See example the example from ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-copy-to-object",children:"VP Copy to object"})]}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-copy-to-object",children:"VP Copy to object"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-move-cells",children:"VP MOVE CELLS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-workbook-options",children:"VP Get workbook options"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-workbook-options",children:"VP SET WORKBOOK OPTIONS"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(296540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);