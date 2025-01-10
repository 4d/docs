"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86554"],{851935:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/ob-values","title":"OB Values","description":"OB Values ( object ) : Collection","source":"@site/versioned_docs/version-20-R7/commands-legacy/ob-values.md","sourceDirName":"commands-legacy","slug":"/commands/ob-values","permalink":"/docs/commands/ob-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-values","title":"OB Values","slug":"/commands/ob-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB SET NULL","permalink":"/docs/commands/ob-set-null"},"next":{"title":"Storage","permalink":"/docs/commands/storage"}}'),r=s("785893"),o=s("250065");let l={id:"ob-values",title:"OB Values",slug:"/commands/ob-values",displayed_sidebar:"docs"},c=void 0,i={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OB Values"})," ( ",(0,r.jsx)(n.em,{children:"object"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object to return property values"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Collection of property values (variant)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"OB Values"})," command returns a collection of variants containing all of the enumerable property values of the ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The order of values within the returned collection follows the definition order of the properties."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want a collection with all property values of an object:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $col : Collection\n\xa0\n\xa0$person:=New object\n\xa0$person.lastName:="Smith"\n\xa0$person.firstName:="Jenny"\n\xa0$person.children:=New object("Mary";12;"Mark";8)\n\xa0\n\xa0$col:=OB Values($person)\n\xa0\n\xa0\xa0//$col[0]="Smith"\n\xa0\xa0//$col[1]="Jenny"\n\xa0\xa0//$col[2]={"Mary":12,"Mark":8}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/ob-entries",children:"OB Entries"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/ob-keys",children:"OB Keys"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1718"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let r={},o=t.createContext(r);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);