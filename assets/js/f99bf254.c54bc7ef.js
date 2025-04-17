"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70842"],{30405:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/ob-instance-of","title":"OB Instance of","description":"OB Instance of ( object ; class ) : Boolean","source":"@site/versioned_docs/version-20-R8/commands-legacy/ob-instance-of.md","sourceDirName":"commands-legacy","slug":"/commands/ob-instance-of","permalink":"/docs/20-R8/commands/ob-instance-of","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-instance-of.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-instance-of","title":"OB Instance of","slug":"/commands/ob-instance-of","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Get type","permalink":"/docs/20-R8/commands/ob-get-type"},"next":{"title":"OB Is defined","permalink":"/docs/20-R8/commands/ob-is-defined"}}'),c=s("785893"),o=s("250065");let r={id:"ob-instance-of",title:"OB Instance of",slug:"/commands/ob-instance-of",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"OB Instance of"})," ( ",(0,c.jsx)(n.em,{children:"object"})," ; ",(0,c.jsx)(n.em,{children:"class"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"object"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Object whose class is to be tested"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"class"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Class to test belongship"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Function result"}),(0,c.jsx)(n.td,{children:"Boolean"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"True if object belongs to the specified class or a child class, and false otherwise"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.strong,{children:"OB Instance of"})," command returns true if ",(0,c.jsx)(n.em,{children:"object"})," belongs to ",(0,c.jsx)(n.em,{children:"class"})," or to one of its child classes, and false otherwise."]}),"\n",(0,c.jsxs)(n.p,{children:["If ",(0,c.jsx)(n.em,{children:"class"})," is not a valid Class object, the error -10745 is returned."]}),"\n",(0,c.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.p,{children:"You created the Polygon class:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Class: Polygon\n Class constructor($width : Integer; $height : Integer)\n This.area:=$width*$height\n"})}),"\n",(0,c.jsx)(n.p,{children:"Then, in a method, you can write:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0var $poly : Object\n\xa0var $instance : Boolean\n\xa0\n\xa0$poly:=cs.Polygon.new(4;3)\n\xa0\n\xa0$instance:=OB Instance of($poly;cs.Polygon)\n\xa0\xa0// true\n\xa0\n\xa0$instance:=OB Instance of($poly;4D.Object)\n\xa0\xa0// true\xa0\n\xa0\n\xa0$instance:=OB Instance of($poly;cs.Circle)\n\xa0\xa0// false\n"})}),"\n",(0,c.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/20-R8/commands/ob-class",children:"OB Class"})}),"\n",(0,c.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Command number"}),(0,c.jsx)(n.td,{children:"1731"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Thread safe"}),(0,c.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let c={},o=t.createContext(c);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);