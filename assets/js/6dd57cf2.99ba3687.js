"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42002"],{660652:function(e,t,s){s.r(t),s.d(t,{default:()=>l,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/convert-path-posix-to-system","title":"Convert path POSIX to system","description":"Convert path POSIX to system ( posixPath {; *} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/convert-path-posix-to-system.md","sourceDirName":"commands-legacy","slug":"/commands/convert-path-posix-to-system","permalink":"/docs/20-R7/commands/convert-path-posix-to-system","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-path-posix-to-system.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-path-posix-to-system","title":"Convert path POSIX to system","slug":"/commands/convert-path-posix-to-system","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLOSE DOCUMENT","permalink":"/docs/20-R7/commands/close-document"},"next":{"title":"Convert path system to POSIX","permalink":"/docs/20-R7/commands/convert-path-system-to-posix"}}'),r=s("785893"),o=s("250065");let i={id:"convert-path-posix-to-system",title:"Convert path POSIX to system",slug:"/commands/convert-path-posix-to-system",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Convert path POSIX to system"})," ( ",(0,r.jsx)(t.em,{children:"posixPath"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"posixPath"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"POSIX pathname"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Encoding option"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Pathname expressed in system syntax"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Convert path POSIX to system"})," command converts a pathname expressed with the POSIX (Unix) syntax into a pathname expressed with the system syntax."]}),"\n",(0,r.jsxs)(t.p,{children:["Pass the complete pathname of a file or folder in the ",(0,r.jsx)(t.em,{children:"posixPath"}),' parameter, expressed with the POSIX syntax. This path must be absolute (it must begin with the "/" character). You must pass a disk path; it is not possible to pass a network path (beginning, for example, with ftp://ftp.mysite.fr).']}),"\n",(0,r.jsx)(t.p,{children:"The command returns the complete pathname of the file or folder expressed in the current system syntax."}),"\n",(0,r.jsxs)(t.p,{children:["The optional ",(0,r.jsx)(t.em,{children:"*"})," parameters can be used to indicate whether the ",(0,r.jsx)(t.em,{children:"posixPath"})," parameter is encoded. If this is the case, you must pass this parameter, otherwise the conversion will not be valid. The command returns the pathname without encoding."]}),"\n",(0,r.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:"Examples under Mac OS:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path POSIX to system("/Volumes/machd/file 2.txt")\n\xa0\xa0//returns "machd:file 2.txt"\n\xa0$path:=Convert path POSIX to system("/Volumes/machd/file%202.txt";*)\n\xa0\xa0//returns "machd:file 2.txt"\n\xa0$path:=Convert path POSIX to system("/file 2.txt")\n\xa0\xa0//returns "machd:file 2.txt" if machd is the startup disk\n'})}),"\n",(0,r.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"Examples under Windows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path POSIX to system("c:/docs/file 2.txt")\n\xa0\xa0//returns "c:\\\\docs\\\\file 2.txt"\n\xa0$path:=Convert path POSIX to system("c:/docs/file%202.txt";*)\n\xa0\xa0//returns "c:\\\\docs\\\\file 2.txt"\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/convert-path-system-to-posix",children:"Convert path system to POSIX"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/object-to-path",children:"Object to path"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/path-to-object",children:"Path to object"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1107"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return i}});var n=s(667294);let r={},o=n.createContext(r);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);