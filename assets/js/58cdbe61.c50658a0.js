"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4569"],{796182:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/object-set-horizontal-alignment","title":"OBJECT SET HORIZONTAL ALIGNMENT","description":"OBJECT SET HORIZONTAL ALIGNMENT ( { ;} object ; alignment* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-set-horizontal-alignment.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-horizontal-alignment","permalink":"/docs/commands/object-set-horizontal-alignment","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-horizontal-alignment.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-horizontal-alignment","title":"OBJECT SET HORIZONTAL ALIGNMENT","slug":"/commands/object-set-horizontal-alignment","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET HELP TIP","permalink":"/docs/commands/object-set-help-tip"},"next":{"title":"OBJECT SET INDICATOR TYPE","permalink":"/docs/commands/object-set-indicator-type"}}'),i=t("785893"),r=t("250065");let l={id:"object-set-horizontal-alignment",title:"OBJECT SET HORIZONTAL ALIGNMENT",slug:"/commands/object-set-horizontal-alignment",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET HORIZONTAL ALIGNMENT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"alignment"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, object is an Object name (String) If omitted, object is a field or a variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object name (if * specified), or Field or variable (if * omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"alignment"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Alignment code"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OBJECT SET HORIZONTAL ALIGNMENT"})," command allows you to set the type of horizontal alignment applied to the object(s) designated by the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(n.p,{children:["If you specify the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate an object name (a string) in the ",(0,i.jsx)(n.em,{children:"object"})," parameter. If you omit the ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate a field or variable in the ",(0,i.jsx)(n.em,{children:"object"})," parameter. In this case, you specify a field or variable reference (field or variable objects only) instead of a string."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass one of the constants of the ",(0,i.jsx)(n.em,{children:"Form Objects (Properties)"})," theme in the ",(0,i.jsx)(n.em,{children:"alignment"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align center"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align default"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align left"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align right"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk justify"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"Available for 4D Write Pro areas only"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The form objects to which alignment can be applied are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Scrollable areas"}),"\n",(0,i.jsx)(n.li,{children:"Combo boxes"}),"\n",(0,i.jsx)(n.li,{children:"Buttons"}),"\n",(0,i.jsx)(n.li,{children:"Radio buttons"}),"\n",(0,i.jsx)(n.li,{children:"Check boxes"}),"\n",(0,i.jsx)(n.li,{children:"Static text"}),"\n",(0,i.jsx)(n.li,{children:"Group areas"}),"\n",(0,i.jsx)(n.li,{children:"Pop up menu/Drop-down lists"}),"\n",(0,i.jsx)(n.li,{children:"Fields"}),"\n",(0,i.jsx)(n.li,{children:"Variables"}),"\n",(0,i.jsx)(n.li,{children:"List boxes"}),"\n",(0,i.jsx)(n.li,{children:"List box columns"}),"\n",(0,i.jsx)(n.li,{children:"List box headers"}),"\n",(0,i.jsx)(n.li,{children:"List box footers"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"4D Write Pro Reference"})," areas"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/object-get-horizontal-alignment",children:"OBJECT Get horizontal alignment"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/object-get-vertical-alignment",children:"OBJECT Get vertical alignment"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-vertical-alignment",children:"OBJECT SET VERTICAL ALIGNMENT"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"706"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);