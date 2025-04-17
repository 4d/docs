"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23446"],{778058:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"commands-legacy/build-application","title":"BUILD APPLICATION","description":"BUILD APPLICATION {( buildAppSettings )}","source":"@site/versioned_docs/version-20-R9/commands-legacy/build-application.md","sourceDirName":"commands-legacy","slug":"/commands/build-application","permalink":"/docs/commands/build-application","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbuild-application.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"build-application","title":"BUILD APPLICATION","slug":"/commands/build-application","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Application version","permalink":"/docs/commands/application-version"},"next":{"title":"Compact data file","permalink":"/docs/commands/compact-data-file"}}'),s=t("785893"),a=t("250065");let l={id:"build-application",title:"BUILD APPLICATION",slug:"/commands/build-application",displayed_sidebar:"docs"},r=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System Variables or Sets",id:"system-variables-or-sets",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BUILD APPLICATION"})," {( ",(0,s.jsx)(n.em,{children:"buildAppSettings"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"buildAppSettings"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Full access path of the settings file to use"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The BUILD APPLICATION command launches the application generation process. It takes into account parameters set in the current build application settings file or the settings file set in the ",(0,s.jsx)(n.em,{children:"buildAppSettings"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command can only work with 4D Developer (single-user). It cannot be called from 4D Server, 4D in remote mode, or a merged application."]}),"\n",(0,s.jsxs)(n.p,{children:["A build application settings file is an XML file that contains all the parameters used to generate an application. Most parameters can be seen in the ",(0,s.jsx)(n.a,{href:"/docs/Desktop/building",children:"Build Application dialog box"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"By default, 4D creates a build application settings file named \u201CbuildApp.4DSettings\u201D for each database and places it in the Settings folder of the database."}),"\n",(0,s.jsxs)(n.p,{children:["If the database has not yet been compiled or if the compiled code is outdated, the command will first launch the compiler process. In this case, the compiler window does not appear (unless an error occurs), only a progress bar is displayed. You can hide this progress bar using the ",(0,s.jsx)(n.a,{href:"/docs/commands/messages-off",children:"MESSAGES OFF"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["If you do not pass the optional ",(0,s.jsx)(n.em,{children:"buildAppSettings"})," parameter, the command displays a standard open file dialog box, so that you can designate a build application settings file. When the dialog box has been validated, the system variable Document contains the full pathname of the open settings file."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the access path and name of an XML file for a valid application project (UTF-8 encoding), the command will use the parameters defined in the file. For more information on the structure and the keys that can be used in the build application settings file, refer to the ",(0,s.jsx)(n.em,{children:"4D XML Keys BuildApplication"})," manual."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This example builds two applications in a single method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0BUILD APPLICATION("c:\\\\folder\\\\buildApp\\\\myclientApp.xml")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0BUILD APPLICATION(File(Build application settings file).platformPath)\xa0//default settings\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"system-variables-or-sets",children:"System Variables or Sets"}),"\n",(0,s.jsx)(n.p,{children:"The system variable OK is set to 1 if the command has been correctly executed. Otherwise, it is set to 0. The system variable Document contains the full pathname of the open settings file."}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsxs)(n.p,{children:["If the command fails, an error is generated that you can intercept using the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/compile-project",children:"Compile project"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"871"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK, Document, error"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Forbidden on the server"}),(0,s.jsx)(n.td,{})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var i=t(667294);let s={},a=i.createContext(s);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);