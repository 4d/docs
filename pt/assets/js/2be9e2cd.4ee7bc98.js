"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15990"],{611245:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>i,frontMatter:()=>s});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-value","title":"VP Get value","description":"VP Get value ( rangeObj Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-value","permalink":"/docs/pt/ViewPro/commands/vp-get-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-value","title":"VP Get value"},"sidebar":"docs","previous":{"title":"VP Get tables","permalink":"/docs/pt/ViewPro/commands/vp-get-tables"},"next":{"title":"VP Get values","permalink":"/docs/pt/ViewPro/commands/vp-get-values"}}'),l=t("785893"),o=t("250065");let s={id:"vp-get-value",title:"VP Get value"},a=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Objeto devolvido",id:"objeto-devolvido",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP Get value"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe2metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Objeto intervalo"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultados"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsx)(n.td,{children:"Objeto que cont\xe9m um valor de c\xe9lula"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"VP Get value"})," command retrieves a cell value from a designated cell range."]}),"\n",(0,l.jsxs)(n.p,{children:["Em ",(0,l.jsx)(n.em,{children:"rangeObj"}),", passe um intervalo cujo valor voc\xea deseja recuperar."]}),"\n",(0,l.jsx)(n.h4,{id:"objeto-devolvido",children:"Objeto devolvido"}),"\n",(0,l.jsxs)(n.p,{children:["The object returned will contain the ",(0,l.jsx)(n.code,{children:"value"})," property, and, in case of a js date value, a ",(0,l.jsx)(n.code,{children:"time"})," property:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propriedade"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Object"}),(0,l.jsxs)(n.td,{children:["Valor de ",(0,l.jsx)(n.em,{children:"rangeObj"})," (exceto - tempo)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"time"}),(0,l.jsx)(n.td,{children:"Real"}),(0,l.jsx)(n.td,{children:"Valor hora (em segundos) se o valor for do tipo data js"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Se o objetivo retornado incluir uma data ou hora, \xe9 tratado como uma datetime e completado como abaixo:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"valor hora - a por\xe7\xe3o da data se completa como dezembro, 30, 1899 em formato dd/MM/yyyy"}),"\n",(0,l.jsx)(n.li,{children:"valor data - a parte da hora se completa como meia noite no formato HH:mm:ss (00:00:00)"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["If ",(0,l.jsx)(n.em,{children:"rangeObj"})," contains multiple cells or multiple ranges, the value of the first cell is returned. O comando retorna um objeto null se a c\xe9lula estiver vazia."]}),"\n",(0,l.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$cell:=VP Cell("ViewProArea";5;2)\n$value:=VP Get value($cell)\nIf(Value type($value.value)=Is text)\n    VP SET VALUE($cell;New object("value";Uppercase($value.value)))\nEnd if\n'})}),"\n",(0,l.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(667294);let l={},o=r.createContext(l);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);