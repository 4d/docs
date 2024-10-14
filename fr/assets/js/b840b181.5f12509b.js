"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54923],{394052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var r=t(474848),s=t(28453);const d={id:"vp-set-date-time-value",title:"VP SET DATE TIME VALUE"},i=void 0,a={id:"ViewPro/commands/vp-set-date-time-value",title:"VP SET DATE TIME VALUE",description:"VP SET DATE TIME VALUE ( rangeObj Date ; timeValue Text } )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-date-time-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-date-time-value",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-date-time-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-date-time-value.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-date-time-value",title:"VP SET DATE TIME VALUE"},sidebar:"docs",previous:{title:"VP SET DATA CONTEXT",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-data-context"},next:{title:"VP SET DATE VALUE",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-date-value"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET DATE TIME VALUE"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"dateValue"})," : Date ; ",(0,r.jsx)(n.em,{children:"timeValue"})," : Time {; ",(0,r.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dateValue"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Valeur date \xe0 fixer"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timeValue"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Valeur heure \xe0 fixer"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatPattern"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Format de la valeur"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET DATE TIME VALUE"})," command assigns a specified date and time value to a designated cell range."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-cell",children:(0,r.jsx)(n.code,{children:"VP Cell"})})," or ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-column",children:(0,r.jsx)(n.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,r.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"dateValue"})," parameter specifies a date value to be assigned to the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"timeValue"})," parameter specifies a time value (expressed in seconds) to be assigned to the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"formatPattern"})," defines a pattern for the ",(0,r.jsx)(n.em,{children:"dateValue"})," and ",(0,r.jsx)(n.em,{children:"timeValue"})," parameters. For information on patterns and formatting characters, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/configuring#date-and-time-formats",children:"Date and time formats"})," section."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'//Set the cell value as the current date and time\nVP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)\n \n//Set the cell value as the 18th of December\nVP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/configuring#cell-format",children:"4D View Pro cell format"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-date-value",children:"VP SET DATE VALUE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-time-value",children:"VP SET TIME VALUE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(296540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);