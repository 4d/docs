"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63772"],{923763:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-value","title":"VP SET VALUE","description":"VP SET VALUE ( rangeObj Object )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-value","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-value","title":"VP SET VALUE"},"sidebar":"docs","previous":{"title":"VP SET TIME VALUE","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-time-value"},"next":{"title":"VP SET VALUES","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-values"}}'),s=r("785893"),l=r("250065");let a={id:"vp-set-value",title:"VP SET VALUE"},o=void 0,c={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET VALUE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"valueObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto intervalo"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valueObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valores de c\xe9lulas e op\xe7\xf5es de formato"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.code,{children:"VP SET VALUE"})," atribui um valor especificado a um intervalo de c\xe9lulas designado."]}),"\n",(0,s.jsxs)(n.p,{children:["The command allows you to use a generic code to set and format the types of values in ",(0,s.jsx)(n.em,{children:"rangeObj"}),", whereas other commands, such as ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-text-value",children:(0,s.jsx)(n.code,{children:"VP SET TEXT VALUE"})})," and ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-num-value",children:(0,s.jsx)(n.code,{children:"VP SET NUM VALUE"})}),", reduce the values to specific types."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,s.jsx)(n.a,{href:"vp-cell",children:(0,s.jsx)(n.code,{children:"VP Cell"})})," or ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-column",children:(0,s.jsx)(n.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,s.jsxs)(n.p,{children:["The parameter ",(0,s.jsx)(n.em,{children:"valueObj"})," is an object that includes properties for the value and the ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/configuring#cell-format",children:"format"})," to assign to ",(0,s.jsx)(n.em,{children:"rangeObj"}),". Pode incluir as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,s.jsxs)(n.td,{children:["Valor a atribuir a ",(0,s.jsx)(n.em,{children:"rangeObj"})," (exceto - hora). Passar null para apagar o conte\xfado da c\xe9lula."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsxs)(n.td,{children:["Valor hora (em segundos) a atribuir a ",(0,s.jsx)(n.em,{children:"rangeObj"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"format"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["Padr\xe3o para propriedade valor/tempo. For information on patterns and formatting characters, please refer to the ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/configuring#cell-format",children:"Cell Format"})," paragraph."]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//Set the cell value as False\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))\n \n//Set the cell value as 2\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))\n \n//Set the cell value as $125,571.35\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))\n \n//Set the cell value as Hello World!\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))\n \n//Set the cell value as current date\nVP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))\n \n//Set the cell value as current hour\nVP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))\n \n//Set the cell value as specific date and time\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))\n \n//Erase cell content\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-get-value",children:"VP Get values"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-boolean-value",children:"VP SET BOOLEAN VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-field",children:"VP SET FIELD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-num-value",children:"VP SET NUM VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-text-value",children:"VP SET TEXT VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-time-value",children:"VP SET TIME VALUE"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var t=r(667294);let s={},l=t.createContext(s);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);