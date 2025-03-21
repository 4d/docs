"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40402"],{781148:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-to-path","title":"Object to path","description":"Object to path ( pathObject ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-to-path.md","sourceDirName":"commands-legacy","slug":"/commands/object-to-path","permalink":"/docs/commands/object-to-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-to-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-to-path","title":"Object to path","slug":"/commands/object-to-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MOVE DOCUMENT","permalink":"/docs/commands/move-document"},"next":{"title":"Open document","permalink":"/docs/commands/open-document"}}'),r=n("785893"),o=n("250065");let a={id:"object-to-path",title:"Object to path",slug:"/commands/object-to-path",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Object to path"})," ( ",(0,r.jsx)(t.em,{children:"pathObject"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pathObject"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Object describing a path contents"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Pathname"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Object to path"})," command returns a pathname (string) based upon path information you passed in the ",(0,r.jsx)(t.em,{children:"pathObject"})," parameter. The following paths are supported:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["System path (Windows or macOS) or Posix path. The path type is defined by the last character of the ",(0,r.jsx)(t.em,{children:"parentFolder"})," property (see below)."]}),"\n",(0,r.jsxs)(t.li,{children:["Relative path or absolute path (see ",(0,r.jsx)(t.em,{children:"Absolute or relative pathname"})," for more information)."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"pathObject"}),", pass an object defining the path you want to generate. It must contain the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Property"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Type"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"parentFolder"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:'Directory information for the path. The last character must be a folder separator. This character is used by the command to know the path type. If it is a Posix separator ("/"), the path is created with Posix separators; otherwise, the system separator is used.'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"Final file or folder name of the specified path without extension."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"extension"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:'Extension of the final file or folder name. Starts with "." (can be omitted). Empty string "" if no extension.'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isFolder"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"True if name is a folder name, false otherwise (default is false)"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Usually, ",(0,r.jsx)(t.em,{children:"pathObject"})," will be generated by the ",(0,r.jsx)(t.a,{href:"/docs/commands/path-to-object",children:"Path to object"})," command, however the object can be built with any means. Note that ",(0,r.jsx)(t.strong,{children:"Object to path"})," only handles strings. It neither checks if the path is valid with regards to the path type, nor the actual existence of any file or folder."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"We want to duplicate and rename a file in its own folder:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=New object\n\xa0var $path : Text\n\xa0$path:="C:\\\\MyDocs\\\\file.txt"\n\xa0\n\xa0$o:=Path to object($path)\n\xa0$o.name:=$o.name+"_copy"\n\xa0COPY DOCUMENT($path;Object to path($o))\n'})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/convert-path-posix-to-system",children:"Convert path POSIX to system"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/convert-path-system-to-posix",children:"Convert path system to POSIX"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/file",children:"File"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/folder",children:"Folder"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/path-to-object",children:"Path to object"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/test-path-name",children:"Test path name"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1548"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var s=n(667294);let r={},o=s.createContext(r);function a(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);