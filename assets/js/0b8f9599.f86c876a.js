"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71724"],{874919:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/volume-list","title":"VOLUME LIST","description":"VOLUME LIST ( volumes )","source":"@site/versioned_docs/version-20-R8/commands-legacy/volume-list.md","sourceDirName":"commands-legacy","slug":"/commands/volume-list","permalink":"/docs/commands/volume-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvolume-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"volume-list","title":"VOLUME LIST","slug":"/commands/volume-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"VOLUME ATTRIBUTES","permalink":"/docs/commands/volume-attributes"},"next":{"title":"System Environment","permalink":"/docs/commands/theme/System-Environment"}}'),r=t("785893"),l=t("250065");let o={id:"volume-list",title:"VOLUME LIST",slug:"/commands/volume-list",displayed_sidebar:"docs"},i=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VOLUME LIST"})," ( ",(0,r.jsx)(n.em,{children:"volumes"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"volumes"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Names of the volumes currently mounted"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The VOLUME LIST command populates the text array ",(0,r.jsx)(n.em,{children:"volumes"})," with the names of the volumes currently defined (Windows) or mounted (Macintosh) on your machine."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'On Macintosh, it returns the list of the volumes visible at the Finder level. Only the names of the volumes are returned (for example "MacHD", "BootCamp", etc.).'}),"\n",(0,r.jsx)(n.li,{children:'On Windows, it returns the list of the volumes currently defined whether or not each volume is physically present (i.e. the volume E:\\ will be returned whether or not a CD or DVD is actually present in the drive). The names of the volumes are followed by the folder separator character ("C:\\").'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Using a scrollable area named ",(0,r.jsx)(n.em,{children:"atVolumes"})," you want to display the list of the volumes defined or mounted on your machine, you write:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(atVolumes;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0VOLUME LIST(atVolumes)\n\xa0\n\xa0\xa0//...\n\xa0End case\n"})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/document-list",children:"DOCUMENT LIST"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/folder-list",children:"FOLDER LIST"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/volume-attributes",children:"VOLUME ATTRIBUTES"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"471"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let r={},l=s.createContext(r);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);