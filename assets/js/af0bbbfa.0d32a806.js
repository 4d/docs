"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67226"],{215507:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>d,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/ob-keys","title":"OB Keys","description":"OB Keys ( object ) : Collection","source":"@site/versioned_docs/version-20-R7/commands-legacy/ob-keys.md","sourceDirName":"commands-legacy","slug":"/commands/ob-keys","permalink":"/docs/commands/ob-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-keys.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-keys","title":"OB Keys","slug":"/commands/ob-keys","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Is shared","permalink":"/docs/commands/ob-is-shared"},"next":{"title":"OB REMOVE","permalink":"/docs/commands/ob-remove"}}'),o=s("785893"),r=s("250065");let c={id:"ob-keys",title:"OB Keys",slug:"/commands/ob-keys",displayed_sidebar:"docs"},l=void 0,i={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OB Keys"})," ( ",(0,o.jsx)(n.em,{children:"object"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Object to return property names"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Function result"}),(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Collection of property names (strings)"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"OB Keys"})," command returns a collection of strings containing all of the enumerable property names of the ",(0,o.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Only first-level property names are returned (property names of sub-objects are not returned). The order of names within the returned collection follows the definition order of the properties."}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"You want a collection with all first-level property names of an object:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $col : Collection\n\xa0\n\xa0$person:=New object\n\xa0$person.lastName:="Smith"\n\xa0$person.firstName:="Jenny"\n\xa0$person.children:=New object("Mary";12;"Mark";8)\n\xa0\n\xa0$col:=OB Keys($person)\n\xa0\n\xa0\xa0//$col[0]="lastName"\n\xa0\xa0//$col[1]="firstName"\n\xa0\xa0//$col[2]="children"\n'})}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/ob-entries",children:"OB Entries"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/ob-values",children:"OB Values"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let o={},r=t.createContext(o);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);