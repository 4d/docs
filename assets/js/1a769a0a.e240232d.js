"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52415"],{664907:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"commands-legacy/application-file","title":"Application file","description":"Application file  : Text","source":"@site/versioned_docs/version-20-R9/commands-legacy/application-file.md","sourceDirName":"commands-legacy","slug":"/commands/application-file","permalink":"/docs/commands/application-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fapplication-file.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"application-file","title":"Application file","slug":"/commands/application-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"4D Environment","permalink":"/docs/commands/theme/4D-Environment"},"next":{"title":"Application info","permalink":"/docs/commands/application-info"}}'),a=t("785893"),l=t("250065");let r={id:"application-file",title:"Application file",slug:"/commands/application-file",displayed_sidebar:"docs"},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Application file"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Function result"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Long name of the 4D executable file or application"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The Application file command returns the long name of the 4D executable file or application you are running.\nIf, for example, you are running 4D located at \\PROGRAMS\\4D on the volume E, the command returns E:\\PROGRAMS\\4D\\4D.EXE."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"On Macintosh"}),(0,a.jsx)(n.br,{}),"\nIf, for example, you are running 4D in the Programs folder on the disk Macintosh HD, the command returns Macintosh HD:Programs:4D.app."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"At startup on Windows, you need to check if a DLL Library is correctly located at the same level as the 4D executable file. In the of your application you can write:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0If(Is Windows&(Application type#4D Server))\n\xa0\xa0\xa0\xa0var $appPath : Object\n\xa0\xa0\xa0\xa0$appPath:=Path to object(Application file)\n\xa0\xa0\xa0\xa0If(Test path name(($appPath.parentFolder)+"XRAYCAPT.DLL")#Is a document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("XRAYCAPT.DLL is missing. The X-ray capture capability will not be available.")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/commands/data-file",children:"Data file"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/structure-file",children:"Structure file"})]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"491"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(667294);let a={},l=i.createContext(a);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);