"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62316],{173856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(474848),d=t(28453);const s={id:"vp-set-date-value",title:"VP SET DATE VALUE"},a=void 0,i={id:"ViewPro/commands/vp-set-date-value",title:"VP SET DATE VALUE",description:"VP SET DATE VALUE ( rangeObj Date { ; formatPattern : Text } )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-date-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-date-value",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-set-date-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-date-value.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-date-value",title:"VP SET DATE VALUE"},sidebar:"docs",previous:{title:"VP SET DATE TIME VALUE",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-set-date-time-value"},next:{title:"VP SET DEFAULT STYLE",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-set-default-style"}},o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET DATE VALUE"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"dateValue"})," : Date { ; ",(0,r.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto intervalo"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dateValue"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Valor date a definir"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatPattern"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Formato do valor"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET DATE VALUE"})," command assigns a specified date value to a designated cell range."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) whose value you want to specify. If ",(0,r.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"dateValue"})," parameter specifies a date value to be assigned to the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"formatPattern"})," defines a pattern for the ",(0,r.jsx)(n.em,{children:"dateValue"})," parameter. Passe qualquer formato personalizado ou voc\xea pode usar uma das seguintes constantes:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metros"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{children:"Padr\xe3o predefinido dos EUA"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk pattern long date"})}),(0,r.jsx)(n.td,{children:"Formato ISO 8601 para a data completa"}),(0,r.jsx)(n.td,{children:'"dddd, dd MMMM yyyy"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk pattern month day"})}),(0,r.jsx)(n.td,{children:"Formato ISO 8601 para o m\xeas e o dia"}),(0,r.jsx)(n.td,{children:'"MMMM dd"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk pattern short date"})}),(0,r.jsx)(n.td,{children:"Formato ISO 8601 abreviado para a data"}),(0,r.jsx)(n.td,{children:'"MM/dd/yyyy"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk pattern year month"})}),(0,r.jsx)(n.td,{children:"Formato ISO 8601 para o m\xeas e o ano"}),(0,r.jsx)(n.td,{children:'"yyyy MMMM"'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["For information on patterns and formatting characters, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R5/ViewPro/configuring#date-and-time-formats",children:"Date and time formats"})," section."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'//Set the cell value to the current date\nVP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))\n \n//Set the cell value to a specific date with a designated format\nVP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")\nVP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R5/ViewPro/configuring#cell-format",children:"4D View Pro cell format"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(296540);const d={},s=r.createContext(d);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);