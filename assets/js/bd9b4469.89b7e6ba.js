"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74976"],{90850:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/execute-formula","title":"EXECUTE FORMULA","description":"EXECUTE FORMULA ( statement )","source":"@site/versioned_docs/version-20-R9/commands-legacy/execute-formula.md","sourceDirName":"commands-legacy","slug":"/commands/execute-formula","permalink":"/docs/commands/execute-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-formula.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"execute-formula","title":"EXECUTE FORMULA","slug":"/commands/execute-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EDIT FORMULA","permalink":"/docs/commands/edit-formula"},"next":{"title":"Formula","permalink":"/docs/commands/formula"}}'),o=t("785893"),r=t("250065");let i={id:"execute-formula",title:"EXECUTE FORMULA",slug:"/commands/execute-formula",displayed_sidebar:"docs"},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Cache for formulas in compiled mode",id:"cache-for-formulas-in-compiled-mode",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"EXECUTE FORMULA"})," ( ",(0,o.jsx)(n.em,{children:"statement"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"statement"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Code to be executed"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"EXECUTE FORMULA"})," executes ",(0,o.jsx)(n.em,{children:"statement"})," as a line of code. This command is designed to be used when you need to evaluate expressions that can be built or modified by the user."]}),"\n",(0,o.jsxs)(n.p,{children:["The statement string must be one line. If ",(0,o.jsx)(n.em,{children:"statement"})," is an empty string, ",(0,o.jsx)(n.strong,{children:"EXECUTE FORMULA"})," does nothing. The rule of thumb is that if the ",(0,o.jsx)(n.em,{children:"statement"})," can be executed as a one-line method, then it will execute properly. Use ",(0,o.jsx)(n.strong,{children:"EXECUTE FORMULA"})," sparingly, as it can slow down execution speed. In a compiled database, the line of code is not compiled. This means that ",(0,o.jsx)(n.em,{children:"statement"})," will be executed, but it will not have been checked by the compiler at compilation time."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," Executing formulas in compiled mode can be optimized using a cache (see ",(0,o.jsx)(n.em,{children:"Cache for formulas in compiled mode"})," below)."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.em,{children:"statement"})," can include the following elements:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"a Call to a function (a project method that returns a value)"}),"\n",(0,o.jsx)(n.li,{children:"a Call to a 4D command"}),"\n",(0,o.jsx)(n.li,{children:"an Assignment"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.em,{children:"statement"})," is a project method, it is recommended to use the ",(0,o.jsx)(n.a,{href:"/docs/commands/execute-method",children:"EXECUTE METHOD"})," that allows you to pass parameters."]}),"\n",(0,o.jsxs)(n.li,{children:["It is not recommend to call any variable declaration in ",(0,o.jsx)(n.em,{children:"statement"})," since it can generate conflicts in the code."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The formula can include process variables and interprocess variables. However, the statement cannot contain control of flow statements (If, While, etc.), because it must be in one line of code."}),"\n",(0,o.jsxs)(n.p,{children:["To ensure that the ",(0,o.jsx)(n.em,{children:"statement"})," will be evaluated correctly regardless of the 4D language or version used, we recommend using the ",(0,o.jsx)(n.em,{children:"token"})," syntax for elements whose name might vary between different versions (commands, tables, fields, constants). For example, to insert the ",(0,o.jsx)(n.a,{href:"/docs/commands/current-time",children:"Current time"})," command, enter '",(0,o.jsx)(n.strong,{children:"Current time:C178"}),"'. For more information about this, refer to ",(0,o.jsx)(n.em,{children:"Using tokens in formulas"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"cache-for-formulas-in-compiled-mode",children:"Cache for formulas in compiled mode"}),"\n",(0,o.jsxs)(n.p,{children:["For optimization purposes, each formula executed by ",(0,o.jsx)(n.strong,{children:"EXECUTE FORMULA"})," in compiled mode can be stored in a dedicated cache in memory. The formula is cached in tokenized form. Once it is placed in the cache, its subsequent executions are highly optimized since the tokenization step is bypassed."]}),"\n",(0,o.jsxs)(n.p,{children:["The cache size is zero by default (no cache); it needs to be created or adjusted using the ",(0,o.jsx)(n.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0SET DATABASE PARAMETER(Number of formulas in cache;0)\xa0//no cache for formulas\n\xa0SET DATABASE PARAMETER(Number of formulas in cache;3)\xa0//up to three formulas can be cached for each process\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"EXECUTE FORMULA"})," command uses the cache only when called from a compiled database or component."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"You want to execute a formula including calls to 4D commands and tables. Since these elements could potentially be renamed, you can ensure correct execution in future versions of your application by using the token syntax as shown here:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE FORMULA("Year of:C25 ([Products:5]Creation_Date:2])+$add")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/command-name",children:"Command name"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/edit-formula",children:"EDIT FORMULA"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"63"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);