"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62049"],{409465:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/create-deployment-license","title":"Create deployment license","description":"Create deployment license ( mergedApp ; buildLicense {; oemLicense} ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-deployment-license.md","sourceDirName":"commands-legacy","slug":"/commands/create-deployment-license","permalink":"/docs/pt/commands/create-deployment-license","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-deployment-license.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-deployment-license","title":"Create deployment license","slug":"/commands/create-deployment-license","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHANGE LICENSES","permalink":"/docs/pt/commands/change-licenses"},"next":{"title":"Is license available","permalink":"/docs/pt/commands/is-license-available"}}'),i=s("785893"),d=s("250065");let r={id:"create-deployment-license",title:"Create deployment license",slug:"/commands/create-deployment-license",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create deployment license"})," ( ",(0,i.jsx)(n.em,{children:"mergedApp"})," ; ",(0,i.jsx)(n.em,{children:"buildLicense"})," {; ",(0,i.jsx)(n.em,{children:"oemLicense"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mergedApp"}),(0,i.jsx)(n.td,{children:"4D.Folder"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Folder containing the merged application"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"buildLicense"}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"License required to generate the embedded license"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"oemLicense"}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"4D OEM XML Key license if server license"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Status"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Create deployment license"})," command creates an embedded license file in the Licenses folder of the ",(0,i.jsx)(n.em,{children:"mergedApp"})," built application. If the Licenses folder does not exist the ",(0,i.jsx)(n.em,{children:"mergedApp"}),", it is created by the command."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"mergedApp"}),", pass a ",(0,i.jsx)(n.a,{href:"https://developer.4d.com/docs/API/FolderClass",children:"4D.Folder"})," object containing a reference to the folder containing the built application in which you want to embed a license."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"license"}),", pass a ",(0,i.jsx)(n.a,{href:"https://developer.4d.com/docs/API/FileClass",children:"4D.File"})," object containing a reference to the license file used to generate the embedded license."]}),"\n",(0,i.jsxs)(n.p,{children:["If the build requires a specific OEM license (",(0,i.jsx)(n.em,{children:"4D OEM XML Keys"}),") and if no such license is already installed in the Licenses folder of the building machine, you need to pass it using the ",(0,i.jsx)(n.em,{children:"oemLicense"})," parameter. This parameter is useful if you dedicate a machine to build your applications."]}),"\n",(0,i.jsxs)(n.p,{children:["The command returns a ",(0,i.jsx)(n.em,{children:"status"})," object containing the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Property"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Type"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True if the license file has been generated"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"file"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://developer.4d.com/docs/API/FileClass",children:"4D.File"})}),(0,i.jsx)(n.td,{children:"The generated license file"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statusText"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Description of the error if any"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"errors"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"Collection of error objects"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"[].message"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Error message"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"[].errCode"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Error number"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The generated license must be used only with the application referenced by ",(0,i.jsx)(n.em,{children:"mergedApp"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"It is necessary to regenerate the license each time the application is rebuilt."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $status : Object\n\xa0var $application : 4D.File\n\xa0var $license : 4D.File\n\xa0$license:=Folder(fk licenses folder).file("4UUD200-xxx.license4D")\n\xa0$application:=Folder(fk desktop folder).folder("myApp.app")\n\xa0$status:=Create deployment license($application;$license)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"1811"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let i={},d=t.createContext(i);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);