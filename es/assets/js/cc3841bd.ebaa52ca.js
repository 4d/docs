"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92920"],{117597:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"ViewPro/commands/vp-combine-ranges","title":"VP Combine ranges","description":"VP Combine ranges ( rangeObj Object {;...otherRangeObjN Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-combine-ranges.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-combine-ranges","permalink":"/docs/es/ViewPro/commands/vp-combine-ranges","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-combine-ranges.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-combine-ranges","title":"VP Combine ranges"},"sidebar":"docs","previous":{"title":"VP COLUMN AUTOFIT","permalink":"/docs/es/ViewPro/commands/vp-column-autofit"},"next":{"title":"VP Convert from 4D View","permalink":"/docs/es/ViewPro/commands/vp-convert-from-4d-view"}}'),s=r("785893"),t=r("250065");let c={id:"vp-combine-ranges",title:"VP Combine ranges"},i=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Combine ranges"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"otherRangeObj"})," : Object {;...",(0,s.jsx)(n.em,{children:"otherRangeObjN"})," : Object }  ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"otherRangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Objeto que contiene un rango combinado"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP Combine Ranges"})," devuelve un nuevo objeto de rango que incorpora dos o m\xe1s objetos de rango existentes. Todos los rangos deben ser de la misma \xe1rea 4D View Pro."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pase el primer rango."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"otherRangeObj"}),", pase otro objeto(s) rango para combinar con ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["El comando incorpora ",(0,s.jsx)(n.em,{children:"rangeObj"})," y ",(0,s.jsx)(n.em,{children:"otherRangeObj"})," por referencia."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Quiere combinar los rangos de tipo celda, columna y l\xednea en un nuevo rango distinto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $cell:=VP Cell("ViewProArea";2;4) // C5\n $column:=VP Column("ViewProArea";3) // columna D\n $row:=VP Row("ViewProArea";9) // l\xednea 10\n\n $combine:=VP Combine ranges($cell;$column;$row)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-all",children:"VP All"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-column",children:"VP Column"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-name",children:"VP Name"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-row",children:"VP Row"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var o=r(667294);let s={},t=o.createContext(s);function c(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);