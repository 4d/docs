"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57394"],{466008:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-date-time-value","title":"VP SET DATE TIME VALUE","description":"VP SET DATE TIME VALUE ( rangeObj Date ; timeValue Text } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-date-time-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-date-time-value","permalink":"/docs/pt/ViewPro/commands/vp-set-date-time-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-date-time-value.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-date-time-value","title":"VP SET DATE TIME VALUE"},"sidebar":"docs","previous":{"title":"VP SET DATA CONTEXT","permalink":"/docs/pt/ViewPro/commands/vp-set-data-context"},"next":{"title":"VP SET DATE VALUE","permalink":"/docs/pt/ViewPro/commands/vp-set-date-value"}}'),s=n("785893"),a=n("250065");let d={id:"vp-set-date-time-value",title:"VP SET DATE TIME VALUE"},i=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP SET DATE TIME VALUE"})," ( ",(0,s.jsx)(t.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(t.em,{children:"dateValue"})," : Date ; ",(0,s.jsx)(t.em,{children:"timeValue"})," : Time {; ",(0,s.jsx)(t.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe2metro"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rangeObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Objeto intervalo"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dateValue"}),(0,s.jsx)(t.td,{children:"Date"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Valor date a definir"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timeValue"}),(0,s.jsx)(t.td,{children:"Hora"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Valor hora a definir"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"formatPattern"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Formato do valor"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP SET DATE TIME VALUE"})," command assigns a specified date and time value to a designated cell range."]}),"\n",(0,s.jsxs)(t.p,{children:["Em ",(0,s.jsx)(t.em,{children:"rangeObj"}),", passe um intervalo de c\xe9lulas (criado, por exemplo, com ",(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-cell",children:(0,s.jsx)(t.code,{children:"VP Cell"})})," ou ",(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-column",children:(0,s.jsx)(t.code,{children:"VP Column"})}),") cujo valor voc\xea deseja especificar. If ",(0,s.jsx)(t.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"dateValue"})," parameter specifies a date value to be assigned to the ",(0,s.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"timeValue"})," parameter specifies a time value (expressed in seconds) to be assigned to the ",(0,s.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"formatPattern"})," defines a pattern for the ",(0,s.jsx)(t.em,{children:"dateValue"})," and ",(0,s.jsx)(t.em,{children:"timeValue"})," parameters. Para informa\xe7\xf5es sobre padr\xf5es e caracteres de formata\xe7\xe3o, por favor, consulte a se\xe7\xe3o ",(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/configuring#date-and-time",children:"Formato de Data e Hora"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'//Set the cell value as the current date and time\nVP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)\n \n//Set the cell value as the 18th of December\nVP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/configuring#cell-format",children:"4D View Pro cell format"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-date-value",children:"VP SET DATE VALUE"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-time-value",children:"VP SET TIME VALUE"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var r=n(667294);let s={},a=r.createContext(s);function d(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);