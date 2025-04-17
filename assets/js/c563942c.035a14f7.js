"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14304"],{820019:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-values","title":"VP Get values","description":"VP Get values ( rangeObj Collection","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-get-values.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-values","permalink":"/docs/20-R8/ViewPro/commands/vp-get-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-values.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-values","title":"VP Get values"},"sidebar":"docs","previous":{"title":"VP Get value","permalink":"/docs/20-R8/ViewPro/commands/vp-get-value"},"next":{"title":"VP Get workbook options","permalink":"/docs/20-R8/ViewPro/commands/vp-get-workbook-options"}}'),l=t("785893"),r=t("250065");let i={id:"vp-get-values",title:"VP Get values"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP Get values"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Range object"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Result"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsx)(n.td,{children:"Collection of values"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"VP Get values"})," command  retrieves the values from the designated ",(0,l.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"rangeObj"}),", pass a range whose values you want to retrieve. If ",(0,l.jsx)(n.em,{children:"rangeObj"})," includes multiple ranges, only the first range is used."]}),"\n",(0,l.jsxs)(n.p,{children:["The collection returned by ",(0,l.jsx)(n.code,{children:"VP Get values"})," contains a two-dimensional collection:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Each element of the first-level collection represents a row and contains a subcollection of values"}),"\n",(0,l.jsx)(n.li,{children:"Each subcollection contains cell values for the row. Values can be Integer, Real, Boolean, Text, Object, or Null. If a value is a date or time, it is returned in an object with the following properties:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"Date"}),(0,l.jsx)(n.td,{children:"Value in the cell (except- time)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"time"}),(0,l.jsx)(n.td,{children:"Real"}),(0,l.jsx)(n.td,{children:"Time value (in seconds) if the value is of the js date type"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Dates or times are treated as a datetime and completed as follows:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"time value - the date portion is completed as December 30, 1899"}),"\n",(0,l.jsx)(n.li,{children:"date value - the time portion is completed as midnight (00:00:00:000)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"You want to get values from C4 to G6:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(618052).Z+"",width:"629",height:"221"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))\n// $result[0]=[4,5,null,hello,world]\n// $result[1]=[6,7,8,9,null]\n// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/20-R8/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R8/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R8/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R8/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},618052:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpGetValues-260c1d0b895e13be413a70052a3d640e.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);