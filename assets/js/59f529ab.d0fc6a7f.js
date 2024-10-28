"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81576],{701047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=t(474848),o=t(28453);const l={id:"volume-list",title:"VOLUME LIST",slug:"/commands/volume-list",displayed_sidebar:"docs"},r=void 0,i={id:"commands-legacy/volume-list",title:"VOLUME LIST",description:"VOLUME LIST ( volumes )",source:"@site/versioned_docs/version-20-R7/commands-legacy/volume-list.md",sourceDirName:"commands-legacy",slug:"/commands/volume-list",permalink:"/docs/commands/volume-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvolume-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"volume-list",title:"VOLUME LIST",slug:"/commands/volume-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"VOLUME ATTRIBUTES",permalink:"/docs/commands/volume-attributes"},next:{title:"Count screens",permalink:"/docs/commands/count-screens"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VOLUME LIST"})," ( ",(0,s.jsx)(n.em,{children:"volumes"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"volumes"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Names of the volumes currently mounted"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The VOLUME LIST command populates the text array ",(0,s.jsx)(n.em,{children:"volumes"})," with the names of the volumes currently defined (Windows) or mounted (Macintosh) on your machine."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'On Macintosh, it returns the list of the volumes visible at the Finder level. Only the names of the volumes are returned (for example "MacHD", "BootCamp", etc.).'}),"\n",(0,s.jsx)(n.li,{children:'On Windows, it returns the list of the volumes currently defined whether or not each volume is physically present (i.e. the volume E:\\ will be returned whether or not a CD or DVD is actually present in the drive). The names of the volumes are followed by the folder separator character ("C:\\").'}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Using a scrollable area named ",(0,s.jsx)(n.em,{children:"atVolumes"})," you want to display the list of the volumes defined or mounted on your machine, you write:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(atVolumes;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0VOLUME LIST(atVolumes)\n\xa0\n\xa0\xa0//...\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/document-list",children:"DOCUMENT LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/folder-list",children:"FOLDER LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/volume-attributes",children:"VOLUME ATTRIBUTES"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(296540);const o={},l=s.createContext(o);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);