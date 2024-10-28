"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74375],{802753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=t(474848),r=t(28453);const i={id:"localized-string",title:"Localized string",slug:"/commands/localized-string",displayed_sidebar:"docs"},a=void 0,d={id:"commands-legacy/localized-string",title:"Localized string",description:"Localized string ( resName ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/localized-string.md",sourceDirName:"commands-legacy",slug:"/commands/localized-string",permalink:"/docs/commands/localized-string",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocalized-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"localized-string",title:"Localized string",slug:"/commands/localized-string",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Length",permalink:"/docs/commands/length"},next:{title:"Lowercase",permalink:"/docs/commands/lowercase"}},l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Localized string"})," ( ",(0,s.jsx)(n.em,{children:"resName"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of resname attribute"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Value of string designated by resName in current language"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Localized string"})," command returns the value of the string designated by the ",(0,s.jsx)(n.em,{children:"resName"})," attribute for the current language."]}),"\n",(0,s.jsxs)(n.p,{children:["This command only works within an XLIFF architecture. For more information about this type of architecture, please refer to the description of XLIFF support in the ",(0,s.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The ",(0,s.jsx)(n.a,{href:"/docs/commands/get-database-localization",children:"Get database localization"})," command can be used to find out the language used by the application."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the resource name of the string for which you want to get the translation into the current target language in ",(0,s.jsx)(n.em,{children:"resName"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Note that XLIFF is diacritical."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here is an extract from an .xlf file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<file source-language="en-US" target-language="fr-FR">\n[...]\n\xa0\xa0\xa0<trans-unit resname="Show on disk">\n\xa0\xa0\xa0\xa0\xa0\xa0<source>Show on disk</source>\n\xa0\xa0\xa0\xa0\xa0\xa0<target>Montrer sur le disque</target>\n\xa0\xa0\xa0</trans-unit>\n'})}),"\n",(0,s.jsx)(n.p,{children:"After executing the following statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$FRvalue:=Localized string("Show on disk")\n'})}),"\n",(0,s.jsx)(n.p,{children:"... if the current language is French, $FRvalue contains \u201cMontrer sur le disque\u201d."}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsxs)(n.p,{children:["If the command is executed correctly, the OK variable is set to 1. If ",(0,s.jsx)(n.em,{children:"resName"})," is not found, the command returns an empty string and the OK variable is set to 0."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/get-database-localization",children:"Get database localization"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(296540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);