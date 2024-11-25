"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29826"],{584559:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>l,assets:()=>i,toc:()=>m,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/current-form-name","title":"Current form name","description":"Current form name  : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/current-form-name.md","sourceDirName":"commands-legacy","slug":"/commands/current-form-name","permalink":"/docs/commands/current-form-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-form-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"current-form-name","title":"Current form name","slug":"/commands/current-form-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Forms","permalink":"/docs/category/forms"},"next":{"title":"Form","permalink":"/docs/commands/form"}}'),o=r("785893"),s=r("250065");let a={id:"current-form-name",title:"Current form name",slug:"/commands/current-form-name",displayed_sidebar:"docs"},c=void 0,i={},m=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Current form name"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Function result"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Name of current project form or current table form in the process"})]})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Current form name"})," command returns the name of the current form defined for the process. The current form can be a project form or a table form."]}),"\n",(0,o.jsxs)(n.p,{children:["By default, if you have not called the ",(0,o.jsx)(n.a,{href:"/docs/commands/form-load",children:"FORM LOAD"})," command in the current process, the current form is the one being displayed or printed. If you have called the ",(0,o.jsx)(n.a,{href:"/docs/commands/form-load",children:"FORM LOAD"})," command in the process, the current form is the one set by this command and it remains so until you call ",(0,o.jsx)(n.a,{href:"/docs/commands/form-unload",children:"FORM UNLOAD"})," (or ",(0,o.jsx)(n.a,{href:"/docs/commands/close-printing-job",children:"CLOSE PRINTING JOB"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"The command returns:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"the form name, or"}),"\n",(0,o.jsx)(n.li,{children:"the filename without the extension if the current form is created by a .json file, or"}),"\n",(0,o.jsx)(n.li,{children:'the "name" attribute if the current form is created by an object, or'}),"\n",(0,o.jsx)(n.li,{children:"an empty string if there is no current form defined for the process."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.p,{children:"In an input form, place the following code in a button:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $FormName : Text\n\xa0$win:=Open form window([Members];"Input";Plain form window)\n\xa0DIALOG([Members];"Input")\n\xa0$FormName:=Current form name\n\xa0\xa0// $FormName = "Input"\n\xa0FORM LOAD([Members];"Drag")\n\xa0$FormName:=Current form name\n\xa0\xa0// $FormName = "Drag"\n\xa0\xa0//...\n'})}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.p,{children:"You want to get the current form if it is a project form:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0$PointerTable:=Current form table\n\xa0If(Nil($PointerTable))\xa0// this is a project form\n\xa0\xa0\xa0\xa0$FormName:=Current form name\n\xa0\xa0\xa0\xa0...\xa0// processing\n\xa0End if\n"})}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/commands/form-load",children:"FORM LOAD"})})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var t=r(667294);let o={},s=t.createContext(o);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);