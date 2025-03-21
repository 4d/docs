"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4503"],{504258:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/ob-entries","title":"OB Entries","description":"OB Entries ( object ) : Collection","source":"@site/versioned_docs/version-20-R8/commands-legacy/ob-entries.md","sourceDirName":"commands-legacy","slug":"/commands/ob-entries","permalink":"/docs/commands/ob-entries","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-entries.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-entries","title":"OB Entries","slug":"/commands/ob-entries","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Copy","permalink":"/docs/commands/ob-copy"},"next":{"title":"OB Get","permalink":"/docs/commands/ob-get"}}'),t=s("785893"),i=s("250065");let o={id:"ob-entries",title:"OB Entries",slug:"/commands/ob-entries",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB Entries"})," ( ",(0,t.jsx)(n.em,{children:"object"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Object to return contents"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Collection of objects with key / value properties"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"OB Entries"})," command returns a collection of objects containing the contents of the ",(0,t.jsx)(n.em,{children:"object"})," as key / value property pairs."]}),"\n",(0,t.jsx)(n.p,{children:"Each returned object contains the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Property"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"key"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"enumerable property name of the object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"variant"}),(0,t.jsx)(n.td,{children:"enumerable property value of the object"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Only first-level property names are returned (property names of sub-objects are not returned). The order of properties within the returned collection follows the definition order of the properties."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Using an object as an hash map (key / value system) provides a quick and direct access to data, just like when using an index (",(0,t.jsx)(n.em,{children:"e.g."}),', if we need Mary\'s age, we can write: $persons["Mary"])']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $individual;$persons : Object\n\xa0var $names;$ages : Collection\n\xa0\n\xa0$persons:=New object\n\xa0$persons["John"]:=42\n\xa0$persons["Andy"]:=24\n\xa0$persons["Mary"]:=30\n\xa0$persons["Paul"]:=50\n\xa0\n\xa0ALERT("The average age is "+String(OB Values($persons).average()))\n\xa0ALERT("There are "+String(OB Keys($persons).length)+" persons")\n\xa0\n\xa0$ages:=OB Entries($persons).query("value>:1";25)\n\xa0ALERT("There are "+String($ages.length)+" persons who are over 25")\n\xa0\n\xa0ALERT("Their names are: "+$ages.extract("key").join("-"))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/ob-keys",children:"OB Keys"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/ob-values",children:"OB Values"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1720"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);