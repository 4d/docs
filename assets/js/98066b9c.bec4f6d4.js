"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52480"],{552574:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/application-version","title":"Application version","description":"Application version {( buildNum {; *} )} : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/application-version.md","sourceDirName":"commands-legacy","slug":"/commands/application-version","permalink":"/docs/commands/application-version","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fapplication-version.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"application-version","title":"Application version","slug":"/commands/application-version","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Application type","permalink":"/docs/commands/application-type"},"next":{"title":"BUILD APPLICATION","permalink":"/docs/commands/build-application"}}'),i=s("785893"),t=s("250065");let d={id:"application-version",title:"Application version",slug:"/commands/application-version",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Application version"})," {( ",(0,i.jsx)(e.em,{children:"buildNum"})," {; *} )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"buildNum"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"Build number"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"*"}),(0,i.jsx)(e.td,{children:"Operator"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"Long version number if passed, otherwise Short version number"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Function result"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"Version number encoded string"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"The Application version command returns an encoded string value that expresses the version number of the 4D environment you are running."}),"\n",(0,i.jsx)(e.p,{children:"- If you do not pass the optional * parameter, a 4-character string is returned, formatted as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Characters"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Description"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1-2"}),(0,i.jsx)(e.td,{children:"Version number"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:'"R" number'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"Revision number"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["- If you pass the optional ",(0,i.jsx)(e.em,{children:"*"})," parameter, an 8-character string is returned, formatted as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Characters"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Description"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:'"F" denotes a final version'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:'"B" denotes a beta version'}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Other characters denote an 4D internal version"}),(0,i.jsx)(e.td,{})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2-3-4"}),(0,i.jsx)(e.td,{children:"Internal 4D compilation number"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"5-6"}),(0,i.jsx)(e.td,{children:"Version number"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"7"}),(0,i.jsx)(e.td,{children:'"R" number'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"8"}),(0,i.jsx)(e.td,{children:"Revision number"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Compatibility note (4D v14)"})}),"\n",(0,i.jsx)(e.p,{children:"Version numbering has been changed beginning with version 14 of 4D:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["the ",(0,i.jsx)(e.strong,{children:'"R" number'}),' is the number of the "R" version of 4D, for example 3 for version R3 (contains 0 for a bug fix version),']}),"\n",(0,i.jsxs)(e.li,{children:["the ",(0,i.jsx)(e.strong,{children:"revision number"}),' is the number of the bug fix version of 4D (contains 0 for an "R" version).']}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:'In previous versions of 4D, the number of the "R" version was the update number; it designated the revision and the revision number itself was always 0.'}),"\n",(0,i.jsx)(e.p,{children:"Examples for a short version number:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Versions"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Value returned"})}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4D v13.1"}),(0,i.jsx)(e.td,{children:'"1310"'}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.em,{children:"Previous numbering system"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4D v14 R2"}),(0,i.jsx)(e.td,{children:'"1420"'}),(0,i.jsx)(e.td,{children:"Release R2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4D v14 R3"}),(0,i.jsx)(e.td,{children:'"1430"'}),(0,i.jsx)(e.td,{children:"Release R3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4D v14.1"}),(0,i.jsx)(e.td,{children:'"1401"'}),(0,i.jsx)(e.td,{children:"First bug fix version of 4D v14"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4D v14.2"}),(0,i.jsx)(e.td,{children:'"1402"'}),(0,i.jsx)(e.td,{children:"Second bug fix version of 4D v14"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"Examples for a long version number:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Versions"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Value returned"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4D v12.5 beta"}),(0,i.jsx)(e.td,{children:'"B0011250"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4D v14 R2 beta"}),(0,i.jsx)(e.td,{children:'"B0011420"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4D v14 R3 final"}),(0,i.jsx)(e.td,{children:'"F0011430"'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4D v14.1 beta"}),(0,i.jsx)(e.td,{children:'"B0011401"'})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["The Application version command can return additional information in the optional ",(0,i.jsx)(e.em,{children:"buildNum"})," parameter: the build number of the current version of the 4D application. This is an internal compilation number that can be used for versioning or when contacting the 4D Technical Services department."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Note:"})," In the case of applications that are compiled and merged with 4D Volume License, the build number returned is not significant. In this context, version information is managed by the developer."]}),"\n",(0,i.jsx)(e.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(e.p,{children:"This example displays the 4D environment version number:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'\xa0$vs4Dversion:=Application version\n\xa0ALERT("You are using the version "+String(Num(Substring($vs4Dversion;1;2)))+"."+\n\xa0$vs4Dversion[[3]]+"."+$vs4Dversion[[4]])\n'})}),"\n",(0,i.jsx)(e.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(e.p,{children:"This example tests to verify that you are using a final version:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'\xa0If(Substring(Application version(*);1;1)#"F")\n\xa0\xa0\xa0\xa0ALERT("Please make sure you are using a Final Production version of 4D with this database!")\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,i.jsx)(e.h4,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(e.p,{children:"You want to use the application's short version value returned by the command to display the 4D application release name. You can write:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'\xa0var $Lon_build : Integer\n\xa0var $Txt_info;$Txt_major;$Txt_minor;$Txt_release;$Txt_version : Text\n\xa0\n\xa0$Txt_version:=Application version($Lon_build)\n\xa0\n\xa0$Txt_major:=$Txt_version[[1]]+$Txt_version[[2]]\xa0//version number, e.g. 14\n\xa0$Txt_release:=$Txt_version[[3]]\xa0//Rx\n\xa0$Txt_minor:=$Txt_version[[4]]\xa0//.x\n\xa0\n\xa0$Txt_info:="4D v"+$Txt_major\n\xa0If($Txt_release="0")\xa0//4D v14.x\n\xa0\xa0\xa0\xa0$Txt_info:=$Txt_info+Choose($Txt_minor#"0";"."+$Txt_minor;"")\n\xa0\n\xa0Else\xa0//4D v14 Rx\n\xa0\xa0\xa0\xa0$Txt_info:=$Txt_info+" R"+$Txt_release\n\xa0End if\n'})}),"\n",(0,i.jsx)(e.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/commands/application-type",children:"Application type"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/commands/version-type",children:"Version type"})]}),"\n",(0,i.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Command number"}),(0,i.jsx)(e.td,{children:"493"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Thread safe"}),(0,i.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);