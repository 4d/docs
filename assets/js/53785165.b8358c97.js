"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98043"],{382034:function(e,r,n){n.r(r),n.d(r,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/throw","title":"throw","description":"throw ( errorCode {; description} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/throw.md","sourceDirName":"commands-legacy","slug":"/commands/throw","permalink":"/docs/commands/throw","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fthrow.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"throw","title":"throw","slug":"/commands/throw","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET ASSERT ENABLED","permalink":"/docs/commands/set-assert-enabled"},"next":{"title":"JSON","permalink":"/docs/category/json"}}'),t=n("785893"),o=n("250065");let d={id:"throw",title:"throw",slug:"/commands/throw",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"<strong>throw(errorCode{; description})</strong>",id:"throwerrorcode-description",level:5},{value:"<strong>throw(errorObj)</strong>",id:"throwerrorobj",level:5},{value:"<strong>throw</strong>",id:"throw",level:5},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"throw"})," ( ",(0,t.jsx)(r.em,{children:"errorCode"})," {; ",(0,t.jsx)(r.em,{children:"description"}),"} )\xa0",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.em,{children:"throw"})," {( ",(0,t.jsx)(r.em,{children:"errorObj"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"errorCode"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"A long integer representing the error code."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"description"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"A text providing a description of the error."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"throw {( errorObj )}"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Parameter"}),(0,t.jsx)(r.td,{children:"Type"}),(0,t.jsx)(r.td,{children:"Description"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"errorObj"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"An object containing properties to build the error"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"throw"})," command creates an error that will be thrown either immediately or when the calling method returns to its caller (deferred mode)."]}),"\n",(0,t.jsxs)(r.p,{children:["When you encounter a situation in your 4D code where an error condition arises, you can use the ",(0,t.jsx)(r.strong,{children:"throw"})," command to explicitly throw an error and provide a specific error message or error number. This can be useful for signaling exceptional conditions or invalid inputs."]}),"\n",(0,t.jsxs)(r.p,{children:["Errors thrown using the ",(0,t.jsx)(r.strong,{children:"throw"})," command are managed by the 4D runtime as any normal error: the standard error dialog is displayed unless an interception method has been installed using the ",(0,t.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,t.jsx)(r.p,{children:"The command supports three syntaxes:"}),"\n",(0,t.jsx)(r.h5,{id:"throwerrorcode-description",children:(0,t.jsx)(r.strong,{children:"throw(errorCode{; description})"})}),"\n",(0,t.jsxs)(r.p,{children:["It specifies the error code and an optional description text, the error is thrown immediately.",(0,t.jsx)(r.br,{}),"\nIf no description is provided, it is filled with:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Error code errorCode: (host) in the host application"}),"\n",(0,t.jsx)(r.li,{children:"Error code errorCode: (C00x) in a component"}),"\n"]}),"\n",(0,t.jsx)(r.h5,{id:"throwerrorobj",children:(0,t.jsx)(r.strong,{children:"throw(errorObj)"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"errorObj"})," object allows for more detailed error information and control over error handling. It can contain the following properties, as well as any custom property that you can refer to using placeholders within the ",(0,t.jsx)(r.strong,{children:"message"})," property."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"property"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"type"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"description"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"componentSignature"}),(0,t.jsx)(r.td,{children:"text"}),(0,t.jsxs)(r.td,{children:["Four latin letters signature to uniquely identify the source of the error. If the ",(0,t.jsx)(r.strong,{children:"componentSignature"}),' is not provided, the command uses "host" for the host database, and "C001", "C002", ... for the components.']})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"errCode"}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsxs)(r.td,{children:["Error code. If the ",(0,t.jsx)(r.strong,{children:"errCode"})," is not provided, the command uses -1."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"message"}),(0,t.jsx)(r.td,{children:"text"}),(0,t.jsxs)(r.td,{children:["Description of the error.",(0,t.jsx)(r.br,{})," The ",(0,t.jsx)(r.strong,{children:"message"})," may contain placeholders that will be replaced by custom properties added to the errorObj object. Each placeholder must be specified using braces {} enclosing the name of the property to be used. If the ",(0,t.jsx)(r.strong,{children:"message"}),' is not provided or is an empty string, the command will look for a description in the current database xliff files with a resname built as follows: ERR_{componentSignature}_{errCode}".']})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"deferred"}),(0,t.jsx)(r.td,{children:"boolean"}),(0,t.jsxs)(r.td,{children:["True if the error should be deferred when the current method returns or at the end of the ",(0,t.jsx)(r.a,{href:"https:developer.4d.com/docs/Concepts/error-handling#trycatchend-try",children:"Try block"}),". Default value is false."]})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["When you use this syntax, the ",(0,t.jsx)(r.em,{children:"errorObj"})," object is returned in ",(0,t.jsx)(r.a,{href:"/docs/commands/last-errors",children:"Last errors"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," It is possible to call the command several times in the same project method to generate several errors. You can use the deferred option to send all errors at once."]}),"\n",(0,t.jsx)(r.h5,{id:"throw",children:(0,t.jsx)(r.strong,{children:"throw"})}),"\n",(0,t.jsxs)(r.p,{children:["It throws all current errors in ",(0,t.jsx)(r.strong,{children:"deferred mode"}),", meaning they will be added to a stack and handled when the calling method returns. This is typically done from within an ",(0,t.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," callback."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"In an application:"})," When an error occurs, it is added to the error stack and the ",(0,t.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," method of the application is called at the end of the current method. The ",(0,t.jsx)(r.a,{href:"/docs/commands/last-errors",children:"Last errors"})," function returns the stack of errors."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"As a consequence, in a component:"})," The stack of errors can be sent to the host application and the ",(0,t.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," method of the host application is called."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0var $code : Integer\n\xa0var $description : text\n\xa0$code:=50042\xa0//Custom code\n\xa0$description:=\u201CThis is a custom error\u201D\n\xa0throw($code ;$description)\xa0// Throws an error with message "This is a custom error" and errCode = 50042\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'throw({errCode: 1; message: "This an error"}) // Throws an error with errCode = 1 and message "This an error"\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'throw({errCode: 1}) // Throws an error with errCode = 1 and message "Error code: 1 (host)"\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'throw({message: "This an error"}) // Throws an error with errCode = -1 and message "This is my error"\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-5",children:"Example 5"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'throw({message: "This is my error"; deferred: True}) // Throw an error with message "This is my error" and errCode = -1 in deferred mode\n'})}),"\n",(0,t.jsx)(r.h4,{id:"example-6",children:"Example 6"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'throw({componentSignature: "xbox"; errCode: 600; name: "myFileName"; path: "myFilePath"; deferred: True})// Throws an error with message "File myFileName not found (myFilePath)" in deferred mode\n'})}),"\n",(0,t.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/assert",children:"ASSERT"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/last-errors",children:"Last errors"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,t.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"1805"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var s=n(667294);let t={},o=s.createContext(t);function d(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);