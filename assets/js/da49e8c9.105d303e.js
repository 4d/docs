"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1267"],{54780:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/ob-set-null","title":"OB SET NULL","description":"OB SET NULL ( object ; property )","source":"@site/versioned_docs/version-20-R7/commands-legacy/ob-set-null.md","sourceDirName":"commands-legacy","slug":"/commands/ob-set-null","permalink":"/docs/20-R7/commands/ob-set-null","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set-null.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-set-null","title":"OB SET NULL","slug":"/commands/ob-set-null","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB SET ARRAY","permalink":"/docs/20-R7/commands/ob-set-array"},"next":{"title":"OB Values","permalink":"/docs/20-R7/commands/ob-values"}}'),r=t("785893"),l=t("250065");let d={id:"ob-set-null",title:"OB SET NULL",slug:"/commands/ob-set-null",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OB SET NULL"})," ( ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"property"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Object, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Structured object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"property"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Name of property where null value is to be applied"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"OB SET NULL"})," command stores the ",(0,r.jsx)(n.strong,{children:"null"})," value in the language object designated by the ",(0,r.jsx)(n.em,{children:"object"})," parameter.can be an object varialble or a 4D object field."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"property"})," parameter, pass the label of the property where you want to store the ",(0,r.jsx)(n.strong,{children:"null"})," value. If the property already exists in ",(0,r.jsx)(n.em,{children:"object"}),", its value is updated. If it does not exist, it is created.",(0,r.jsx)(n.br,{}),"\nNote that the ",(0,r.jsx)(n.em,{children:"property"})," parameter is case sensitive."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:'We want to put the null value in the "age" property for Lea:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0OB SET($ref;"name";"Lea";"age";4)\n\xa0\xa0// $ref = {"name":"Lea","age":4}\n\xa0...\n\xa0OB SET NULL($ref ;"age")\n\xa0\xa0// $ref = {"name":"Lea","age":null}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/null",children:"Null"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/ob-get-property-names",children:"OB GET PROPERTY NAMES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/ob-set",children:"OB SET"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1233"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);