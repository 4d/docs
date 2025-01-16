"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59025"],{990067:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-formula","title":"VP Get formula","description":"VP Get formula ( rangeObj Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-formula.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-formula","permalink":"/docs/pt/ViewPro/commands/vp-get-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formula.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-formula","title":"VP Get formula"},"sidebar":"docs","previous":{"title":"VP Get default style","permalink":"/docs/pt/ViewPro/commands/vp-get-default-style"},"next":{"title":"VP Get formula by name","permalink":"/docs/pt/ViewPro/commands/vp-get-formula-by-name"}}'),s=n("785893"),o=n("250065");let l={id:"vp-get-formula",title:"VP Get formula"},a=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Get formula"})," ( ",(0,s.jsx)(t.em,{children:"rangeObj"})," : Object) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe2metro"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rangeObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Objeto intervalo"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resultados"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Formula"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP Get formula"})," command retrieves the formula from a designated cell range."]}),"\n",(0,s.jsxs)(t.p,{children:["Em ",(0,s.jsx)(t.em,{children:"rangeObj"}),", passe um intervalo cuja f\xf3rmula voc\xea deseja recuperar. If ",(0,s.jsx)(t.em,{children:"rangeObj"})," designates multiple cells or multiple ranges, the formula of the first cell is returned. If ",(0,s.jsx)(t.em,{children:"rangeObj"})," is a cell that does not contain a formula, the method returns an empty string."]}),"\n",(0,s.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'  //set a formula\nVP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")\n \n$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"\n'})}),"\n",(0,s.jsx)(t.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(667294);let s={},o=r.createContext(s);function l(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);