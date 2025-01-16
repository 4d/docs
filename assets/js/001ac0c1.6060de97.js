"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72832"],{380298:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-formulas","title":"VP Get formulas","description":"VP Get formulas ( rangeObj Collection","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-get-formulas.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-formulas","permalink":"/docs/20-R7/ViewPro/commands/vp-get-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formulas.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-formulas","title":"VP Get formulas"},"sidebar":"docs","previous":{"title":"VP Get formula by name","permalink":"/docs/20-R7/ViewPro/commands/vp-get-formula-by-name"},"next":{"title":"VP Get frozen panes","permalink":"/docs/20-R7/ViewPro/commands/vp-get-frozen-panes"}}'),t=s("785893"),o=s("250065");let l={id:"vp-get-formulas",title:"VP Get formulas"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get formulas"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Range object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Collection of formula values"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Get formulas"})," command retrieves the formulas from a designated ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass a range whose formulas you want to retrieve. If ",(0,t.jsx)(n.em,{children:"rangeObj"})," designates multiple ranges, the formula of the first range is returned. If ",(0,t.jsx)(n.em,{children:"rangeObj"})," does not contain any formulas, the command returns an empty string."]}),"\n",(0,t.jsx)(n.p,{children:"The returned collection is two-dimensional:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The first-level collection contains subcollections of formulas. Each subcollection reprensents a row."}),"\n",(0,t.jsx)(n.li,{children:"Each subcollection defines cell values for the row. Values are text elements containing the cell formulas."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"You want to retrieve the formulas in the Sum and Average columns from this document:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(609690).Z+"",width:"521",height:"147"})}),"\n",(0,t.jsx)(n.p,{children:"You can use this code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))\n//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]\n//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]\n//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-get-formula",children:"VP Get formula"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},609690:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/cmd_vpGetFormulas-75332305b21fbedadcd2ba342151d16a.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},o=r.createContext(t);function l(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);