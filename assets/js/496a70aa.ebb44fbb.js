"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14563"],{415868:function(e,t,s){s.r(t),s.d(t,{default:()=>l,frontMatter:()=>o,metadata:()=>n,assets:()=>i,toc:()=>h,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/convert-path-system-to-posix","title":"Convert path system to POSIX","description":"Convert path system to POSIX ( systemPath {; *} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/convert-path-system-to-posix.md","sourceDirName":"commands-legacy","slug":"/commands/convert-path-system-to-posix","permalink":"/docs/20-R7/commands/convert-path-system-to-posix","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-path-system-to-posix.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-path-system-to-posix","title":"Convert path system to POSIX","slug":"/commands/convert-path-system-to-posix","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Convert path POSIX to system","permalink":"/docs/20-R7/commands/convert-path-posix-to-system"},"next":{"title":"COPY DOCUMENT","permalink":"/docs/20-R7/commands/copy-document"}}'),a=s("785893"),r=s("250065");let o={id:"convert-path-system-to-posix",title:"Convert path system to POSIX",slug:"/commands/convert-path-system-to-posix",displayed_sidebar:"docs"},d=void 0,i={},h=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Convert path system to POSIX"})," ( ",(0,a.jsx)(t.em,{children:"systemPath"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"systemPath"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Relative or absolute pathname expressed in system syntax"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"*"}),(0,a.jsx)(t.td,{children:"Operator"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Encoding option"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Function result"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"\u2190"}),(0,a.jsx)(t.td,{children:"Absolute pathname expressed in POSIX syntax"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"The Convert path system to POSIX command converts a pathname expressed with the system syntax as a pathname expressed with the POSIX (Unix) syntax."}),"\n",(0,a.jsxs)(t.p,{children:["Pass the pathname for a file or folder in the ",(0,a.jsx)(t.em,{children:"systemPath"})," parameter, expressed with the system syntax (Mac OS or Windows). This path may be absolute or relative to the database folder (folder containing the database structure file). It is not mandatory that the elements of the path actually exist on the disk at the time the command is executed (the command does not test the validity of the pathname)."]}),"\n",(0,a.jsxs)(t.p,{children:["The command returns the complete pathname of the file or folder expressed in the POSIX syntax. The command always returns an absolute pathname, regardless of the type of path passed in ",(0,a.jsx)(t.em,{children:"systemPath"}),". If you passed a relative pathname in ",(0,a.jsx)(t.em,{children:"systemPath"}),", 4D completes the value returned by adding the pathname of the database folder."]}),"\n",(0,a.jsxs)(t.p,{children:["The optional ",(0,a.jsx)(t.em,{children:"*"}),' parameter can be used to specify the encoding of the POSIX path. By default, Convert path system to POSIX does not encode the special characters of the POSIX path. If you pass the * parameter, the special characters are translated (for example, "My folder" becomes "My%20folder").']}),"\n",(0,a.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(t.p,{children:"Examples under macOS"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path system to POSIX("machd:file 2.txt")\n\xa0\xa0//machd is the startup disk\n\xa0\xa0//returns "/file 2.txt"\n\xa0$path:=Convert path system to POSIX("disk2:file 2.txt")\n\xa0\xa0//disk2 is an additional disk (not the startup)\n\xa0\xa0//returns "/Volumes/disk2/file 2.txt"\n\xa0$path:=Convert path system to POSIX("machd:file 2.txt";*)\n\xa0\xa0//returns "/file%202.txt"\n\xa0$path:=Convert path system to POSIX(":resources:images")\xa0//relative path\n\xa0\xa0//returns "/User/mark/Documents/videodatabase/resources/images"\n\xa0$path:=Convert path system to POSIX("resources:images")\xa0//absolute path\n\xa0\xa0//returns "/resources/images"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(t.p,{children:"Example under Windows"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path system to POSIX("c:\\docs\\file 2.txt")\n\xa0\xa0//returns "c:/docs/file 2.txt"\n\xa0$path:=Convert path system to POSIX("\\\\srv\\tempo\\file.txt")\n\xa0\xa0//returns "//srv/tempo/file.txt"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/20-R7/commands/convert-path-posix-to-system",children:"Convert path POSIX to system"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/20-R7/commands/object-to-path",children:"Object to path"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/20-R7/commands/path-to-object",children:"Path to object"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/20-R7/commands/test-path-name",children:"Test path name"})]}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Command number"}),(0,a.jsx)(t.td,{children:"1106"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Thread safe"}),(0,a.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return o}});var n=s(667294);let a={},r=n.createContext(a);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);