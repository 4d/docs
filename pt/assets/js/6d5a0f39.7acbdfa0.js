"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10057"],{6477:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>i,contentTitle:()=>a});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-boolean-value","title":"VP SET BOOLEAN VALUE","description":"VP SET BOOLEAN VALUE ( rangeObj Boolean)","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-boolean-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-boolean-value","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-boolean-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-boolean-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-boolean-value","title":"VP SET BOOLEAN VALUE"},"sidebar":"docs","previous":{"title":"VP SET BINDING PATH","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-binding-path"},"next":{"title":"VP SET BORDER","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-border"}}'),s=o("785893"),r=o("250065");let l={id:"vp-set-boolean-value",title:"VP SET BOOLEAN VALUE"},a=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET BOOLEAN VALUE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object  ; ",(0,s.jsx)(n.em,{children:"boolValue"})," : Boolean)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto intervalo"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"boolValue"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Valor booliano a definir"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET BOOLEAN VALUE"})," command assigns a specified boolean value to a designated cell range."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"rangeObj"}),", passe um intervalo de c\xe9lulas (criado, por exemplo, com ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-cell",children:(0,s.jsx)(n.code,{children:"VP Cell"})})," ou ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-column",children:(0,s.jsx)(n.code,{children:"VP Column"})}),") cujo valor voc\xea deseja especificar. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"boolValue"})," permite que voc\xea passe o valor booleano (",(0,s.jsx)(n.strong,{children:"True"})," ou ",(0,s.jsx)(n.strong,{children:"False"}),") que ser\xe1 atribu\xeddo ao ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//Estabelece o valor da c\xe9lula como False \nVP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return l}});var t=o(667294);let s={},r=t.createContext(s);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);